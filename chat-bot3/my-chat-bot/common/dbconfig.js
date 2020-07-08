
const sql = require("mssql");
const database = 'vbot-poc';
const username = 'workingdb';
const password = 'Celebal@1234';
const server = 'workingdb.database.windows.net';
const config = {
    user: 'workingdb',
    password: 'Celebal@1234',
    server: 'workingdb.database.windows.net',
    database: 'vbot-poc',
    encrypt: true,
    requestTimeout: 105000
};
sql.connect(config, async function (err) {
    if (err) {
        console.log("Database Conection failed, error occured=> ", err);
    } else {
        console.log("Database connected done");
    }
});
var request = new sql.Request();
module.exports = { request };