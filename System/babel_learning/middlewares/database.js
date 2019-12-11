const MongoClient = require('mongodb').MongoClient;
const { run } = require("micro");

const client = new MongoClient("mongodb://127.0.0.1:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const setUpDb = async (db) => {
  await db.collection('tokens').createIndex('expireAt', { expireAfterSeconds: 0 });
}

const database = async (req, res, next) => {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("babelDatabase");
  await setUpDb(req.db);
  return next();
}

exports.database = database;
exports.setUpDb = setUpDb;
