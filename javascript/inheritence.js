class Training {
    //constructor
  constructor(trainingName, trainingTime, trainingStatus) {
    this.trainingName = trainingName;
    this.trainingTime = trainingTime;
    this.trainingStatus = trainingStatus;
  }
//member function
  displayDetails() {
   console.log(`Training Name: ${this.trainingName}\nTraining Duration: ${this.trainingTime}\nTraining Status: ${this.trainingStatus}\n`);
  }
}

class InCampus extends Training{
    constructor(a,b,c,d){
        super(a,b,c);
        this.rollno= d;
    }
    displayDetails(){
        super.displayDetails();
        console.log(`Rollno is ${this.rollno}`)
        console.log("child class function");
    }
}

let student1= new InCampus("Flutter",200,"Online",1011);
student1.displayDetails();
