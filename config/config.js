require('dotenv').config();

module.exports = {
"development": {
    "username": "root",
    "password": "SUAStr1u1pGIoK3vTD5K",
    "database": "railway",
    "host": "containers-us-west-168.railway.app",
    "port": "6592",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}