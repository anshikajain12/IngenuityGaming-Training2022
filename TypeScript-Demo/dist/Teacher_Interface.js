"use strict";
var TeacherNs;
(function (TeacherNs) {
    class Teacher {
        constructor(fname, subj) {
            this.fname = fname;
            this.subj = subj;
            this.fullname = fname;
            this.subjects = subj;
        }
    }
    TeacherNs.Teacher = Teacher;
})(TeacherNs || (TeacherNs = {}));
