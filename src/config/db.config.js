module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "password1!",
  DB: "inventory",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};