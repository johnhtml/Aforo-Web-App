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

  static async createEvent(req, res) {
    try {
      const event = req.body
      if (req.file != undefined) {
        const imageName = req.file.filename;
        event.image = "/" + imageName
      }
        const newEvent = await eventModel.create(event)
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(400).json({message: error.message})
      }
    }
  }
