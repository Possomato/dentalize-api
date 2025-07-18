import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('dentists', (table) => {
    table.increments('id').primary(),
      table.integer('cro').notNullable(),
      table.text('name').notNullable(),
      table.text('email').notNullable(),
      table.text('password').notNullable(),
      table.text('phone')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('dentists')
}
