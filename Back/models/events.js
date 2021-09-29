const mongoose = require('mongoose')

const eventsSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId },
  eventName: { type: String },
  eventDescription: { type: String },
  price: { type: mongoose.Schema.Types.Decimal128 },
  eventDates: [
    { eventDate: { type: Date } }
  ],
  image:{type:String}
})

module.exports = mongoose.model('Events', eventsSchema)