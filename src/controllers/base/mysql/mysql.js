const Sequelize = require('sequelize');
const {mysql} = require('../../../../config/config');

let host = mysql.host;
let port = mysql.port;
let user = mysql.user;
let password = mysql.password;
let database = mysql.database;
const sequelize = new Sequelize(database, user, password, {
  host: host,
  port: port,
  dialect: "mysql",
});

 
let connect = () =>{
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connect()

module.exports = {
    sequelize
};