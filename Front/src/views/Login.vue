<template>
    <div class="login">
        <h3>This is the login page</h3>
        <loginComponent></loginComponent>
    </div>
</template>

<script>
import LoginComponent from '../components/LoginComponent.vue';

export default ({
    components: {
        LoginComponent
    }
})
</script>
