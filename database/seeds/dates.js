
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dates').del()
    .then(function () {
      // Inserts seed entries
      return knex('dates').insert([
        { id: 1, dates: "2021-09-13", week: "Sunday", userId: 1 },
        { id: 2, dates: "2021-09-14", week: "Monday", userId: 1 },
        { id: 3, dates: "2021-09-15", week: "Tuesday", userId: 1 }
      ]);
    });
};
