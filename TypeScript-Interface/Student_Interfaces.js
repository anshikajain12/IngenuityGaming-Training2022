var StudentNs;
(function (StudentNs) {
    var Student = /** @class */ (function () {
        function Student(fullname, passport) {
            this.fullname = fullname;
            this.passport = passport;
        }
        Student.prototype.dispDetails = function () {
            console.log("Name: ".concat(this.fullname, " | Passport: ").concat(this.passport));
        };
        return Student;
    }());
    StudentNs.Student = Student;
})(StudentNs || (StudentNs = {}));
