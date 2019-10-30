
exports.up = function(knex) {
    return knex.schema.createTable('accounts', table => {
        table.increments()
        table.string('userId').unique().notNullable()
        table.string('firstName')
        table.string('lastName')
        table.string('dateOfBirth')
        table.boolean('sex').defaultTo(true)
        table.string('countryOfBirth')
        table.string('placeOfBirth')
        table.string('username').unique().notNullable()
        table.string('password').notNullable()
        table.boolean('disabled').defaultTo(false).notNullable()
        table.boolean('verified').defaultTo(false).notNullable()
        table.timestamps(true,true)
    })
}

exports.down = function(knex) {
  return knex.schema.dropTable('accounts')
}
