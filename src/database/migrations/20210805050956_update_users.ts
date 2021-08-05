import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("users", table => {
    table.dropColumn("twitter_id");
  });
  await knex.schema.alterTable("users", table => {
    table.string("twitter_id", 100).unique().notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("users", table => {
    table.dropColumn("twitter_id");
  });
  await knex.schema.alterTable("users", table => {
    table.bigInteger('twitter_id').unsigned().unique().notNullable();
  });
}