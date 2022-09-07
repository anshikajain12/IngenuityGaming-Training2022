"use strict";
class Student {
    constructor(fullname, passport) {
        this.fullname = fullname;
        this.passport = passport;
    }
    dispDetails() {
        console.log(`Name: ${this.fullname} | Passport: ${this.passport}`);
    }
}
let stu1 = new Student("Anshika Jain", 12345678);
stu1.dispDetails();
class Teacher {
    constructor(fname, subj) {
        this.fname = fname;
        this.subj = subj;
        this.fullname = fname;
        this.subjects = subj;
    }
}
let teach1 = new Teacher("Pankaj", ["Flutter", "Reactjs", "Nodejs"]);
console.log(`Teacher Name: ${teach1.fullname} | Subject teach: ${teach1.subjects}`);
