const { Model } = require('objection');

class Student extends Model {
    static get tableName() {
        return 'student';
    }

    static get relationMappings() {
        const Course = require('./Courses');
        return {
            courses: {
                relation: Model.ManyToManyRelation,
                modelClass: Course,
                join: {
                    from: 'student.id',
                    through: {
                        from: 'student_course.student_id',
                        to: 'student_course.course_id'
                    },
                    to: 'course.id'
                }
            }
        };
    }
}

module.exports = Student;