const session = require('next-session');
const connectMongo = require('connect-mongo');
const { run } = require("micro");

const MongoStore = connectMongo(session);

function withSession(req, res, next) {
  return session({ store: new MongoStore({ client: req.dbClient }) })(req, res, next);
}

exports.withSession = withSession;
