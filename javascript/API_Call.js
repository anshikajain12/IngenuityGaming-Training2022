// 1. XHR
const API_URL = "https://jsonplaceholder.typicode.com/users";

function getApiData(url) {
  console.log("We are good to go to call API using XHR");
  return new Promise((resolve, reject) => {
    //Create an instance of XHR
    var request = new XMLHttpRequest();

    request.open("GET", url);
    request.send();

    request.onload = () => {
      console.log(request);
      // console.log(request.response);
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject("Not able to fetch data");
      }
    };
  });
}
getApiData(API_URL)
  .then((val) => console.log(val))
  .catch((err) => console.log("Error "+ err));
// getApiData(API_URL);
// console.log(getApiData(API_URL));





// fetch()
// Third Party package (Axios)
