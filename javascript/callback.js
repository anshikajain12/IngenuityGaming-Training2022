// Es6 Promise
// 1.ita a way of communicating with AudioProcessingEvent
// 2.its an Object that returns a value that hope to recieve in future but not right now
// 3.promise is well suited for handling Asynchronous operations
// 4.promise has three states .Pending ,fullfilled,rejected


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