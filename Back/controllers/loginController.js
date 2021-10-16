const userModel = require("../models/user");

var bcrypt = require("../node_modules/bcryptjs/index");

module.exports = class signupController {
  static async validateUser(req, res) {
    try {
      const credentials = req.body;
      const user = await userModel.findOne({ userName: credentials.userName })
      const userCorrect = bcrypt.compareSync(
        credentials.password,
        user.password
      );
      console.log(userCorrect);
      console.log(user);
      if (!userCorrect || user == null || user == undefined) {
        res.status(403)
      } else {
        user.password = undefined;
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(400);
    }
    
  }
};
