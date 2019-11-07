const faker = require('faker/locale/en_IND');

const studentTable = 'student';
const relationTable = 'student_course';

const fullName = () => {
    const name = faker.name;
    return name.firstName() + ' ' + name.lastName();
};


const studentDetails = (id) => {
    const name = faker.name;
    return ({
        id: id,
        name: name.firstName() + ' ' + name.lastName(),
        age: faker.random.number({
            min: 20,
            max: 24
        })
    });
};

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('course').del()
        .then(function () {
            // Inserts seed entries
            return knex('course').insert([
                {
                    id: 1,
                    course_name: 'english',
                    teacher_name: fullName(),
                    credits: faker.random.number(10)
                },
                {
                    id: 2,
                    course_name: 'Mathematics',
                    teacher_name: fullName(),
                    credits: faker.random.number(10)
                }, {
                    id: 3,
                    course_name: 'DBMS',
                    teacher_name: fullName(),
                    credits: faker.random.number(10)
                }, {
                    id: 4,
                    course_name: 'Operating Systems',
                    teacher_name: fullName(),
                    credits: faker.random.number(10)
                }, {
                    id: 5,
                    course_name: 'Computer fundamentals',
                    teacher_name: fullName(),
                    credits: faker.random.number(10)
                }, {
                    id: 6,
                    course_name: 'Networking',
                    teacher_name: fullName(),
                    credits: faker.random.number(10)
                }, {
                    id: 7,
                    course_name: 'Human values and ethics',
                    teacher_name: fullName(),
                    credits: faker.random.number(10)
                },
            ]);
        })
        .then(() => {
            return knex(studentTable).del();
        })
        .then(function () {
            // Inserts seed entries
            const students = [];
            const totalStudents = 250;
            for (let i = 1; i <= totalStudents; i++) {
                students.push(studentDetails(i));
            }
            return knex(studentTable).insert(students);
        })
        .then(() => {
            return knex(relationTable).del();
        })
        .then(() => {
            const studentSubject = [];
            for (let i = 1; i <= 250; i++) {
                for (let j = 1; j <= 7; j++) {
                    if (Math.random() > 0.70) {
                        studentSubject.push({ student_id: i, course_id: j });
                    }
                }
            }

            return knex(relationTable).insert(studentSubject);
        });
};
