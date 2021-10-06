const eventModel = require("../models/event");

module.exports = class eventsController {

  static async getAllEvents(req, res) {
    try {
      const events = await eventModel.find()
      res.status(200).json(events)
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }

}