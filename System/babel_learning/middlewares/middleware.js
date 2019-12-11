const nextConnect = require('next-connect');
const database = require('./database');
const session = require('./session');
const authentication = require('./authentication');
const { run } = require("micro");

const middleware = nextConnect();

middleware.use(database.database());
middleware.use(session.withSession());
middleware.use(authentication.authentication());

exports.middleware = middleware;
