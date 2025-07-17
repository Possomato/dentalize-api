import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('procedures', (table) => {
    table.increments('id').primary(),
      table.text('name').notNullable(),
      table.text('description').notNullable(),
      table.integer('value')
  })
}

export async function down(knex: Knex): Promise<void> {}
