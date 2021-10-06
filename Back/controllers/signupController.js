const userModel = require("../models/user");

module.exports = class signupController {

  static async insertNewUser(req, res) {
    try {
      const user = req.body
      const newUser = await userModel.create(user)
      res.status(201).json(newUser)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

};
