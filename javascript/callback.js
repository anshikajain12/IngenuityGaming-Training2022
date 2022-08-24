// In JS function are first class citizens
    //1. Function can be assigned to a vairable
    // 2. Function can be used as an arguments
    // 3. Function can also used as return statement

//callback:
    // 1. Function can be used as an arguments

var students = [
  { name: "sachin", subject: "java" },
  { name: "Manish", subject: "Python" },
  { name: "Rupali", subject: "C++" },
];
function addstudent(student,callback) {
  setTimeout(() => {
    students.push(student);
    console.log("Student has been admitted");
    callback();
  },3000);
}

function displaystudent(){
    setTimeout(() => {
        var str="";
        students.forEach((student)=>{
            str+=student.name+" ";
        });
        console.log(str);
        console.log("Students have been fetched");
    }, 1000);
}

var newstudent={name:"Rahul",subject:"React"};
addstudent(newstudent,displaystudent);
// displaystudent();