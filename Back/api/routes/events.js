const mongoose = require('mongoose')
const Events = require('../../models/events')

module.exports = function (router) {
  
  //GET: todos los eventos
  router.get('/', function (req, res) {
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

}