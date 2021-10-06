const express = require('express')
const router = express.Router()

require('./routes/eventsRoutes')(router)
// require("./signupRoutes")(router);


module.exports = router