
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate() // empties the table and resets the id back to 1
    .then(function () {
      const cars = [
        {
          VinNumber: 50,
          Make: 'Jeep',
          Model: 'Grand Cherokee',
          Mileage: 180000,
          TransType: null,
          Status: null
        },
        {
          VinNumber: 49,
          Make: 'Jeep',
          Model: 'Cherokee',
          Mileage: 1800,
          TransType: null,
          Status: null
        },
        {
          VinNumber: 12,
          Make: 'Dodge',
          Model: 'Dart',
          Mileage: 100,
          TransType: null,
          Status: null
        }
      ]
      // Inserts seed entries

      // return knex('table_name').insert([
      //   {id: 1, colName: 'rowValue1'},
      //   {id: 2, colName: 'rowValue2'},
      //   {id: 3, colName: 'rowValue3'}
      // ]);
      return knex('cars').insert(cars)
    });
};
