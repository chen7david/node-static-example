
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments()
        table.string('userId').unique().notNullable()
        table.string('firstName').notNullable()
        table.string('lastName').notNullable()
        table.string('dateOfBirth').notNullable()
        table.string('sex').defaultTo('M')
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
  return knex.schema.dropTable('users')
}
