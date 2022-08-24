// Es6
// 1. It is a way of communicating with APIs
// 2. It is an object that returns a value that hope to recieve in future but not right now
// 3.
// 4.

function sayhi() {
  return new Promise((resolve, reject) => {
    console.log("Let me check my calendar.........");
    setTimeout(()=>{
        const err = false;

    if (!err) { // API Call
      resolve("Ok!! we will meet");
    } else {
      reject("Sorry, I am busy");
    }
    },3000)
  });
}

sayhi()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
// console.log(sayhi());
