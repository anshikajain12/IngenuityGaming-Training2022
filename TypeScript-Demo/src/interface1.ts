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

let stu1:StudentInt = new Student("Anshika Jain",12345678);
stu1.dispDetails();