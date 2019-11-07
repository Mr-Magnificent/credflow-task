const tableName = 'student';
exports.up = function(knex) {
    return knex.schema.createTable(tableName, (t) => {
        t.increments('id');
        t.string('name', 255).notNullable();
        t.integer('age');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable(tableName);
};
