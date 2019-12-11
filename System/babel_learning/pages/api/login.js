const { middleware } = require('../../middlewares/middleware');
const { run, send } = require("micro");
const fetch = require('isomorphic-unfetch')
const handler = (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    return req.db.collection('users').findOne({ username })
      .then((user) => {
        if (user) {
          return (user.password.match(password))
            .then((result) => {
              if (result) return Promise.resolve(user);
              return Promise.reject(Error('Your username or password is incorrect'));
            });
        }
        return Promise.reject(Error('Your username or password is incorrect'));
      })
      .then((user) => {
        req.session.userId = user._id;
        return res.send({
          status: 'ok',
          message: `Welcome back, ${user.firstname}!`,
        });
      })
      .catch(error => res.send({
        status: 'error',
        message: error.toString(),
      }));
  }
  return res.status(405).end();
};

module.exports = (handler) => middleware
//const login = async (req, res) => {
  //const { username } = await json(req)
  //const url = `https://api.github.com/users/${username}`

  //try {
  //  const response = await fetch(url)
  //  if (response.ok) {
  //    const { id } = await response.json()
  //    send(res, 200, { token: id })
//    } else {
//      send(res, response.status, response.statusText)
  //  }
//  } catch (error) {
//    throw createError(error.statusCode, error.statusText)
//  }
//}
