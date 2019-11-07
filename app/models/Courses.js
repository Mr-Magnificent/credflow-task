const { Model } = require('objection');

class Course extends Model {
    static get tableName() {
        return 'course';
    }

    static get relationMappings() {
        const Student = require('./Students');
        return {
            students: {
                relation: Model.ManyToManyRelation,
                modelClass: Student,
                join: {
                    from: 'course.id',
                    through: {
                        from: 'student_course.course_id',
                        to: 'student_course.student_id'
                    },
                    to: 'student.id'
                }
            }
        };
    }
}

module.exports = Course;