
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
          { id: 1, date_id: 1, text: "This is task 1.1", position: 1 },
          { id: 2, date_id: 1, text: "This is task 1.2", position: 2 },
          { id: 3, date_id: 1, text: "This is task 1.3", position: 3 },
          { id: 4, date_id: 2, text: "This is task 2.1", position: 1 },
          { id: 5, date_id: 3, text: "This is task 3.1", position: 1 },
          { id: 6, date_id: 3, text: "This is task 3.2", position: 2 },
          { id: 7, date_id: 3, text: "This is task 3.3", position: 3 },
          { id: 8, date_id: 2, text: "This is task 2.2", position: 2 }
      ]);
    });
};
