
namespace TeacherNs{
    export interface TeacherInt{
        fullname:string,
        subjects:string[],
    
    }
    
    export class Teacher implements TeacherInt{
        fullname: string;
        subjects: string[];
        constructor(public fname:string, public subj:string[]){
            this.fullname= fname;
            this.subjects=subj;
        }
    }

}