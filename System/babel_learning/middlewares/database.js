mongo = require('mongodb');
const { run, send } = require("micro");
//process.env.MONGODB_URI
const client = new mongo.MongoClient("http://localhost:27017", { useNewUrlParser: true });

const babelDatabase = handler => (req, res) => {
  if (!client.isConnected()) {
    return client.connect().then(() => {
      req.db = client.db('nextjsmongodbapp');
      return handler(req, res);
    });
  }
  req.db = client.db('nextjsmongodbapp');
  return handler(req, res);
};
exports.default = run(babelDatabase);
