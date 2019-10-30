
exports.up = function(knex) {
    return knex.schema.createTable('phones', table => {
        table.increments()
        table.string('phoneId').unique().notNullable()
        table.string('number').unique().notNullable()
        table.string('verificationCode').unique().notNullable()
        table.boolean('verified').defaultTo(false).notNullable()
        table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index()
        table.timestamps(true,true)
    })
}

exports.down = function(knex) {
  return knex.schema.dropTable('phones')
}
