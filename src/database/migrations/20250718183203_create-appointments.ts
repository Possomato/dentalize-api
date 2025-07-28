import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('appointments', (table) => {
    table.increments('id').primary()
    table.integer('id_dentist').references('id').inTable('dentists')
    table.integer('id_patient').references('id').inTable('patients')
    table.integer('id_procedure').references('id').inTable('procedures')
    table.text('name').notNullable()
    table.text('date').notNullable()
    table.text('status').notNullable()
    table.text('payment_method')
    table.text('payment_date')
    table.text('observations')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('appointments')
}
