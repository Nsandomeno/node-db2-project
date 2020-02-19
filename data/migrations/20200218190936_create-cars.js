
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      // create primary key called id
      tbl.increments()
      // create all other columns and specify there constraints if any
      tbl.integer("VinNumber")
        .notNullable()
        .index();
      tbl.string('Make')
        .notNullable();
      tbl.string('Model')
        .notNullable();
      tbl.integer('Mileage')
        .notNullable();
      tbl.string('TransType');
      tbl.string('Status');
  })    
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
