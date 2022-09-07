interface StudentInt{
    fullname:string,
    passport:number,
    dispDetails():void,
}

class Student {
    constructor(public readonly fullname:string, public readonly passport:number) {}
    dispDetails():void{
        console.log(`Name: ${this.fullname} | Passport: ${this.passport}`);
    }
}

//inferer 
let stu1:StudentInt = new Student("Anshika Jain",12345678);
stu1.dispDetails();

interface TeacherInt{
    fullname:string,
    subjects:string[],

}
class Teacher implements TeacherInt{
    fullname: string;
    subjects: string[];
    constructor(public fname:string, public subj:string[]){
        this.fullname= fname;
        this.subjects=subj;
    }
}
let teach1 = new  Teacher("Pankaj",["Flutter","Reactjs","Nodejs"]);
console.log(`Teacher Name: ${teach1.fullname} | Subject teach: ${teach1.subjects}`)