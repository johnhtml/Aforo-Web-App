const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  eventDates: Array,
  image: String,
  categories: Array,
});

module.exports = mongoose.model('Event', eventSchema, 'Events')