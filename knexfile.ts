module.exports = {

  development: {
    client: "postgresql",
    connection: {
      host : '127.0.0.1',
      port : 4001,
      user: 'docker',
      password: 'docker',
      database: 'breakupbot_db'
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    }
  },

};
