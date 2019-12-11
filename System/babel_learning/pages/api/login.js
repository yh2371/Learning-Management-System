const nextConnect = require('next-connect');
const middleware = require('../../middlewares/middleware');
const { json, send, createError, run } = require('micro')

const handler = nextConnect();

handler.use(middleware.middleware());

handler.post((req, res) => {
  const { username, password } = req.body;
  console.log("1");
  return req.db
    .collection('users')
    .findOne({ username })
    .then((user) => {
      if (user) {
        console.log("2");
        return (password.match(user.password)).then((result) => {
          if (result) return Promise.resolve(user);
          return Promise.reject(Error('The password you entered is incorrect'));
        });
      }
      return Promise.reject(Error('The email does not exist'));
    })
    .then((user) => {
      req.session.userId = user._id;
      return res.send({
        status: 'ok',
        message: `Welcome back, ${user.username}!`,
      });
    })
    .catch(error => res.send({
      status: 'error',
      message: error.toString(),
    }));
});

module.exports = (req, res) => run(req, res, handler);
