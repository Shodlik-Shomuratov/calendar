const {v4: uuidv4} = require("uuid");

exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.uuid("id").defaultTo(uuidv4());
    table.string("username", 100);
    table.string("password", 100);
    table.string("type").defaultTo("free");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema,dropTableIfExists("users");
};
