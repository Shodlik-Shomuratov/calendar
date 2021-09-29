
exports.up = function(knex) {
  return knex.schema.createTable("dates", t => {
    t.uuid("id");
    t.string("user_id");
    t.date("date");
  });
};

exports.down = function(knex) {
  
};
