const Sequelize = require("sequelize");
const dbName = "customer";
const dbUser = "root";
const dbPassword = ""

const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
    port: 3305,
    host: "localhost",
    dialect: "mysql"
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require("./model/customer.model")(sequelize, Sequelize);
module.exports = db