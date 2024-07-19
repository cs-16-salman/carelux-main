const PropertiesReader = require("properties-reader");
const properties = PropertiesReader("./application.properties");

module.exports = properties;
