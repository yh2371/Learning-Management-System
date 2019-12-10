babelDatabase = require('./database');
babelSession = require('./session');
babelAuthentication = require('./authentication')

module.exports = (handler) => babelDatabase(babelSession(babelAuthentication(handler)));

//export default middleware;
