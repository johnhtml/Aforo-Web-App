const mongoose = require('mongoose')
const Events = require('../../models/events')

module.exports = function (router) {
  
  //GET: todos los eventos
  router.get('/events', function (req, res) {
    Events.find()
      .sort({ eventDate: -1 })
      .exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error al consultar los eventos en la base de datos',
          error: err
        }))
  })

  //POST: Crear un nuevo evento en la colección eventos.
  router.post('/events', function (req, res) {
    const event = new Event(req.body)
    event.save(function (err, note) {
      if (err) {
        return res.status(400).json(err)
      }
      res.status(200).json(note)
    })
  })

}