"use strict";
let stu2 = new StudentNs.Student("Anshika Jain", 12345678);
stu2.dispDetails();
let teach2 = new TeacherNs.Teacher("Pankaj", ["Flutter", "Reactjs", "Nodejs"]);
console.log(`Teacher Name: ${teach2.fullname} | Subject teach: ${teach2.subjects}`);
