exports.up = function(knex) {
    return knex.schema.createTable("tasks", table => {
        table.increments();
        table.string("date_id");
        table.text("text");
        table.integer("position");
        table.string("status").defaultTo("false");
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tasks");
};
