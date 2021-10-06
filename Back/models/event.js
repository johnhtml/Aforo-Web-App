const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  // _id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String },
  description: { type: String },
  price: { type: mongoose.Schema.Types.Decimal128 },
  eventDates: [
    { eventDate: { type: Date } }
  ],
  image:{type:String}
})

module.exports = mongoose.model('Event', eventSchema, 'Events')