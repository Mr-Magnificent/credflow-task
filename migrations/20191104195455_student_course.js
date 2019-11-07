const tableName = 'student_course';
exports.up = function(knex) {
    return knex.schema.createTable(tableName, (t) => {
        t.integer('student_id').unsigned();
        t.integer('course_id').unsigned();

        t.foreign('student_id').references('student.id')
            .onDelete('CASCADE');
        t.foreign('course_id').references('course.id')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable(tableName);
};
