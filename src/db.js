const Sequelize = require("sequelize");

var sequelize = new Sequelize(
    "rstdemo",
    "root",
    "root", {
        host: "127.0.0.1",
        dialect: "mysql",
        port: "3306",
    }
);


var chatModel = sequelize.define("chat", {
    author: Sequelize.STRING,
    message: Sequelize.STRING,
    time: Sequelize.DATE
});

module.exports = {
    sequelize,
    chatModel
};