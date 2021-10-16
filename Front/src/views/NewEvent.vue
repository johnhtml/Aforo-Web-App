<template>
<v-card  class="mx-auto mt-5">
  <v-img v-if="image"
      :src="url"
      height="400px"
  ></v-img>
  <v-card-title class="text-h4 font-weight-bold" v-model="name">{{name ? name : "Formulario para crear nuevo evento."}}
  </v-card-title>

  <v-card-subtitle v-model="description">{{description ? description : ""}}
  </v-card-subtitle>
  <v-form 
    v-model="valid"
    ref="form"
     class="pa-5">
   
    <!-- nombre del evento -->
    <v-text-field v-model="name"
      type="text"
      required
      :counter="50"
      label="Nombre del evento"
      placeholder="Ingrese el nombre del evento"
      :rules="[
        v => !! v || '*Requerido: Ingrese el nombre del evento.',
        v => (v && v.length >= 1 && v.length <= 50) || 'El nombre del evento debe tener entre 1 y 50 caracteres.',
      ]"
    ></v-text-field>
    
    <!-- descripción del evento -->
    <v-text-field v-model="description"
      type="text"
      :counter="500"
      label="Descripción"
      placeholder="Ingrese una breve descripción del evento"
      :rules="[
        v => (v && v.length <= 500) || 'La descripción del evento debe tener máximo 500 caracteres.',
      ]"
    ></v-text-field>

    <v-file-input v-model="image"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Seleccione una imagen para el evento o ingrese la url de la imagen."
      prepend-icon="mdi-camera"
      label="Imagen del evento"
      @change="onFileChange"
      :rules="[
        value => (value && value.size < 2000000) || 'La imagen debe pesar menos de 2 MB!',
      ]"
  ></v-file-input>

    <!-- precio  -->
    <v-text-field v-model="price"
      type="Decimal128"
      label="Precio de la entrada"
      placeholder="Ingrese el precio del evento"
    ></v-text-field>

  
    <!-- Fechas del evento  -->
    <template>
    <v-card class="mx-auto">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
          Fechas del evento
        </v-list-item-title>
        <v-list-item-subtitle>Selecciona las fechas del evento</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-row class="px-5">
      <v-col
        cols="12"
        sm="6"
      >
        <v-date-picker
        class="d-flex"
          v-model="dates"
          multiple
        ></v-date-picker>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="dates"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-combobox
              v-model="dates"
              multiple
              chips
              small-chips
              label="Fechas seleccionadas"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-combobox>
          </template>
          <v-date-picker
            v-model="dates"
            multiple
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(dates)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    </v-card>
  </template>

  <v-card class="mt-5">
  <v-combobox
    class="px-3 pt-5"
    v-model="chips"
    :items="items"
    chips
    clearable
    label="Your favorite hobbies"
    multiple
    prepend-icon="mdi-filter-variant"
    solo
  >
    <template v-slot:selection="{ attrs, item, selected }">
      <v-chip
        v-bind="attrs"
        :input-value="selected"
        close
        @click:close="remove(item)" 
        color="green"
        outlined
      >
        {{ item }}&nbsp;
      </v-chip>
    </template>
  </v-combobox>
  </v-card>
    <v-divider class="my-4"></v-divider>
    <div class="mt-5 d-flex">
      <v-btn class="mr-4"  color="success" @click="resetForm">Limpiar</v-btn>
      <v-btn :disabled="!valid" color="info" @click="createNewEvent()">Guardar</v-btn>
    </div>
  </v-form>
</v-card>
</template>

<script>
  import { createEvent, createEventWithImage } from '../Services/EventsService'
  import {mapActions} from 'vuex' 
  export default {
    data: () => ({
      valid : false,
      name:'',
      description:'',
      dates: [],
      menu: false,
      chips: [],
      items: [],
      image:null,
      price:null,
      url: null
    }),
    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },
      onFileChange() {
        this.url = this.image == null || this.image == undefined ? this.image : URL.createObjectURL(this.image);
      },
      resetForm () {
        this.$refs.form.reset()
        this.$refs.form.resetValidation()
      },
      ...mapActions('snackBar', ['showSnackBar']),
      createNewEvent(){

        let request = null;
        if (this.image != null && this.image != undefined) {
          const event = new FormData()
          event.append('name', this.name)
          event.append('description', this.description)
          event.append('price', this.price)
          for (let i = 0; i < this.dates.length; i++) {
          let date = this.dates[i];
          event.append("eventDates[" + i + "]", date);
          }
          // event.append('eventDates', this.dates)
            event.append('image', this.image)
          // event.append('categories', this.chips)
          
          for (let i = 0; i < this.chips.length; i++) {
          let chip = this.chips[i];
            event.append("categories[" + i + "]", chip);
          }
          request = createEventWithImage(event)
        }
        else {
          const event = {
            name: this.name,
            description: this.description,
            price: this.price,
            eventDates: this.dates,
            image: this.image,
            categories: this.chips

          }

          request = createEvent(event)
        }

        request
          .then((res) =>
            this.showSnackBar(
              `Se creo el evento ${res.data.name}`
            )
          )
          .catch(() => this.showSnackBar("Error al guardar el evento"))
      }
    }
  }
</script>