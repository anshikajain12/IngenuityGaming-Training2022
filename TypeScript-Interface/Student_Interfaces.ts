namespace StudentNs{
    export interface StudentInt{
        fullname:string,
        passport:number,
        dispDetails():void,
    }
    
    export class Student {
        constructor(public readonly fullname:string, public readonly passport:number) {}
        dispDetails():void{
            console.log(`Name: ${this.fullname} | Passport: ${this.passport}`);
        }
    }

}