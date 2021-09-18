const loginModel = require("../../../db/models/userSchema");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const bcrypt = require("bcrypt");

const Login = (req, res) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  loginModel
    .findOne({ email: email })
    .then((result) => {
      if (!result) {
        res.json("email not found ");
      }
      const valid = bcrypt.compareSync(password, result.password);
      if (!valid) {
        res.json("password error");
      } else {
        const payload = {
      
          userId: result._id,
          email: result.email,
        };

        const SECRET = process.env.SECRET;
        const options = {
          expiresIn: "60m",
        };
        const token = jwt.sign(payload, SECRET, options);
       
        res.status(200);
        res.json({ success: true, massage: " you logged in", token: token });
      }
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { Login };
