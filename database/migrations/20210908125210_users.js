exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", table => {
        table.increments();
        table.string("username", 45);
        table.string("password", 45);
        table.string("type").defaultTo("free");
        table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
};
