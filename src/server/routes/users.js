var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var Users = require('../models/users');
var saltRounds = 10;
var router = express.Router();
var middleware = require('../middleware/index');
var moment = require('moment');
var dotenv = require('dotenv');

dotenv.config({path: __dirname + '/../../../.env'});

//user login
router.post('/login', async (req, res, next) => {
  var user =  {email, password} = req.body;
  console.log(user);
  var users = await Users.getByEmail(user.email);
  if (users.error) {
    res.status(200).json(users);
  } else {
    // compare password hash
    var match = await bcrypt.compare(user.password, users[0].password)
    if (match) {
      // jwt token creation and set expire time.
      var token = jwt.sign({ data: users[0] }, 'secret', { expiresIn: 60 * 60 * 24 });
      res.status(200).json({
        user: users[0], token: token
      })
    } else {
      res.status(200).json({ error : "The password is incorrect." });
    }
  }
});

//register user
router.post('/register', async (req, res, next) => {
  var user =  {email, password, name, kidName, age, gender, morekids, interest} = req.body;
  console.log(user);
  user.password = await bcrypt.hash(user.password, saltRounds);
  user.permission = 2;
  var users = await Users.registerUser(user);
  if (users.error) {
    res.status(200).json(users);
  } else {
    // jwt token creation and set expire time.
    var token = jwt.sign({ data: users[0] }, 'secret', { expiresIn: 60 * 60 * 24 });
    res.status(200).json({
      user: user, token: token
    })
  }
});

//update user
router.post('/update/:id', middleware.token, async (req, res, next) => {
  var id = req.params.id
  var data = req.body;
  delete data.id;
  delete data.password;
  delete data.created;
  data.updated = moment().format().split('T')[0];
  // user update
  try {
    var result = await Users.updateById(id, data);
    res.status(200).json(result);
  } catch(err) {
    res.status(200).json({error: "While updating the information an unexpected error occured."});
  }
});

module.exports = router;
