"use strict";
var StudentNs;
(function (StudentNs) {
    class Student {
        constructor(fullname, passport) {
            this.fullname = fullname;
            this.passport = passport;
        }
        dispDetails() {
            console.log(`Name: ${this.fullname} | Passport: ${this.passport}`);
        }
    }
    StudentNs.Student = Student;
})(StudentNs || (StudentNs = {}));
