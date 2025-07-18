import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('patients', (table) => {
    table.increments('id').primary(),
      table.text('name').notNullable(),
      table.text('phone'),
      table.text('email'),
      table.text('observations')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('patients')
}
