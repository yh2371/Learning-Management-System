const ObjectId = require('mongodb').ObjectId;
const { run } = require("micro");

const authentication = (req, res, next) => {
  if (req.session.userId) {
    return req.db.collection('users').findOne(ObjectId(req.session.userId))
      .then((user) => {
        if (user) req.user = user;
        return next();
      });
  }
  return next();
}

exports.authentication = authentication;
