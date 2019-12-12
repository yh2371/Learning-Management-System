const { run, send } = require("micro");
const login = require("./login");
const account= require("./studentAccount");

const dev = async (req, res) => {
  switch (req.url) {
    case "/api/studentAccount.js":
      await account(req, res);
      break;
    case "/api/login.js":
      console.log("pass");
      await login(req, res);
      break;

    default:
      send(res, 404, "404. Not found.");
      break;
  }
};

exports.default = (req, res) => run(req, res, dev);
