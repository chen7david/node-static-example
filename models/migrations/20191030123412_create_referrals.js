
exports.up = function(knex) {
    return knex.schema.createTable('referrals', table => {
        table.increments()
        table.integer('referrer_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index()
        table.integer('referent_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index()
        table.timestamps(true,true)
    })
}

exports.down = function(knex) {
  return knex.schema.dropTable('referrals')
}
