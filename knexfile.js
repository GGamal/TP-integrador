const knex = require("knex")({
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      database: "tareas",
      user: "postgres",
      password: "gamal12345",
    },
  });

  module.exports = knex;