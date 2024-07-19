const mysql = require("mysql2");

const { decrypt } = require("./encryption");
const properties = require("../config/properties");

const connection = mysql.createConnection({
  host: properties.get("hostname"),
  user: properties.get("username"),
  password: decrypt(properties.get("password")),
  database: properties.get("database"),
});

module.exports = connection.promise();
