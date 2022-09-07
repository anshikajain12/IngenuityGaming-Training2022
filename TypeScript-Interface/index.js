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
// namespace StudentNs{
//     export interface StudentInt{
//         fullname:string,
//         passport:number,
//         dispDetails():void,
//     }
//     export class Student {
//         constructor(public readonly fullname:string, public readonly passport:number) {}
//         dispDetails():void{
//             console.log(`Name: ${this.fullname} | Passport: ${this.passport}`);
//         }
//     }
// }
//inferer 
// namespace TeacherNs{
//     export interface TeacherInt{
//         fullname:string,
//         subjects:string[],
//     }
//     export class Teacher implements TeacherInt{
//         fullname: string;
//         subjects: string[];
//         constructor(public fname:string, public subj:string[]){
//             this.fullname= fname;
//             this.subjects=subj;
//         }
//     }
// }
///<reference path="Student_Interfaces.ts"/>
///<reference path="Teacher_Interface.ts"/>
let stu2 = new StudentNs.Student("Anshika Jain", 12345678);
stu2.dispDetails();
let teach2 = new TeacherNs.Teacher("Pankaj", ["Flutter", "Reactjs", "Nodejs"]);
console.log(`Teacher Name: ${teach2.fullname} | Subject teach: ${teach2.subjects}`);
