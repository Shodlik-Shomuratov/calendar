exports.up = function(knex) {
    return knex.schema.createTable("dates", table => {
        table.increments();
        table.date("dates");
        table.string("week");
        table.integer("userId");
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("dates");
};
