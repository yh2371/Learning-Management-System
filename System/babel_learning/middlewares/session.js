session = require('next-session');
connectMongo = require('connect-mongo');
const { run } = require('micro')

const MongoStore = connectMongo(session);

const babelSession = handler => session.withSession(handler, {
  store: new MongoStore({ url: process.env.MONGODB_URI }),
});

exports.default = run(babelSession);
