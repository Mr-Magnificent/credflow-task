const tableName = 'course';
exports.up = function(knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments('id').primary();
        table.string('course_name').notNullable();
        table.string('teacher_name').notNullable();
        table.integer('credits').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable(tableName);
};
