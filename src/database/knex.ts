import knex from 'knex'

export const db = knex({
  client: 'postgresql',
  connection: {
    host : '127.0.0.1',
    port : 4001,
    user : 'docker',
    password : 'docker',
    database : 'breakupbot_db'
  }
});
