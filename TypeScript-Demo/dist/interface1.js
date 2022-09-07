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
