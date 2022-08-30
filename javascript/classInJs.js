//ES6 Class
class Training {
    //constructor
  constructor(trainingName, trainingTime, trainingStatus) {
    this.trainingName = trainingName;
    this.trainingTime = trainingTime;
    this.trainingStatus = trainingStatus;
  }
//member function
  displayDetails() {
    return `Training Name: ${this.trainingName}\nTraining Duration: ${this.trainingTime}\nTraining Status: ${this.trainingStatus}\n`;
  }
}

//object creation
let training= new Training("Development Basics",120,"Offline");
let Dell= new Training("React js",40,"Online");

//method calling
console.log(training.displayDetails());
console.log(Dell.displayDetails());
