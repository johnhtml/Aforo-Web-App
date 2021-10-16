const userModel = require("../models/user");

module.exports = class signupController {

  static async insertNewUser(req, res) {
    let user, usersRegistered, newUser = undefined;
    try {
      user = req.body;
      usersRegistered = await userModel.find({ "userName": user.userName });
      if (usersRegistered.length == 0) {
        newUser = await userModel.create(user);
        res.status(201).json(newUser);
      }
      else {
        res.status(200).json({ message: "El usuario ya existe" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
    usersRegistered, user, newUser = undefined;
  }
};
