import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary();
    table.string('bio', 400).notNullable();
    table.string('screen_name').notNullable();
    table.bigInteger('twitter_id').unsigned().unique().notNullable();
    table.timestamps(true, true);
  })
  await knex.schema.createTable('track_requests', (table) => {
    table.uuid('id').primary();
    table.uuid('requester_id').notNullable();
    table.uuid('tracking_id').notNullable();
    table.foreign('requester_id').references('users.id');
    table.foreign('tracking_id').references('users.id');
    table.timestamps(true, true);
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('track_requests');
}