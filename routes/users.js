var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')


/* GET users listing. */
router.get('/', (req, resp) => {
  User.find({ }, (error, users) => {
      if (error)
          resp.status('404').send(error);
      else
          resp.send(users);
  });
});

/* POST user */
router.post('/', (req, resp) => {
  let user = new User({
      _id: new mongoose.Types.ObjectId(),
      externalId : req.body.externalId,
      name: req.body.name,
      calledUser: req.body.calledUser,
      date: Date.now,
      comment: req.body.comment,
  });
  user.validate(err => {
      if (err)
          console.log("err :" + err)
      else
          user.save()
  });
  resp.send(user);
});

module.exports = router;
