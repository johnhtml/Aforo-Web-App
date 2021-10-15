const express = require("express");
const EventsController = require("../controllers/eventsController");
const SignupController = require("../controllers/signupController");
const LoginController = require("../controllers/loginController");
const router = express.Router();

//GET: todos los eventos
  router.get("/events", EventsController.getAllEvents);
  //POST: Crear un nuevo evento en la colección eventos.
  


//-signup routes--------------------------------------------------------------------

router.post("/user", SignupController.insertNewUser);
router.post("/authenticate", LoginController.validateUser);


module.exports = router


// require("./routes/eventsRoutes")(router);
// require("./routes/signupRoutes")(router);

// module.exports = router;


// module.exports = function (router) {

//   //GET: todos los eventos
//   router.get("/events", EventsController.getAllEvents);
//   //POST: Crear un nuevo evento en la colección eventos.
//   router.post("/event", function (req, res) {
//     const event = new Event(req.body);
//     event.save(function (err, note) {
//       if (err) {
//         return res.status(400).json(err);
//       }
//       res.status(200).json(note);
//     });
//   });



// };