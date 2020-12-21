import Knex from 'knex'

export async function up(knex: Knex){
   return knex.schema.createTable('objects', (table) => {
        table.increments('id').primary()
        table.string('object').notNullable()
        table.string('img').notNullable()
    })
}

export async function down(knex: Knex){
   return knex.schema.dropTable('objects')
}
