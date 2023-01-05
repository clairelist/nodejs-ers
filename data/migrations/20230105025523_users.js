/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('users', users =>{
        users.increments('user_id');
        users.string('email', 32).notNullable().unique();
        users.string('password', 64).notNullable();
        users.string('first_name', 32).notNullable();
        users.string('last_name', 32).notNullable();
        users.string('phone_number', 16);
        users.string('role', 16).notNullable().defaultTo('EMPLOYEE');

    })
    .createTable('tickets', tickets => {
        tickets.increments('ticket_id');
        tickets.string('description', 128).notNullable();
        tickets.string('status', 16).defaultTo('PENDING');
        tickets.integer('created_by').references('user_id').inTable('users')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('tickets');
};
