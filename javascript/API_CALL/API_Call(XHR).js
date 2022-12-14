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
  .then((val) => {
    console.log(JSON.parse(val));
    displaydata(JSON.parse(val))
   })
  .catch((err) => console.log("Error "+ err));
// getApiData(API_URL);
// console.log(getApiData(API_URL));

function displaydata(serverData){
    // console.log(serverData);
    for(var user of serverData){
        let newTr=document.createElement('tr');

        let newTd1= document.createElement('td');
        let newTd2= document.createElement('td');
        let newTd3= document.createElement('td');
        let newTd4= document.createElement('td');
        let newTd5= document.createElement('td');

        newTd1.innerText=`${user.id}`;
        newTd2.innerText=`${user.name}`;
        newTd3.innerText=`${user.email}`;
        newTd4.innerText=`${user.phone}`;
        newTd5.innerText=`${user.company.name}`;

        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);
        newTr.appendChild(newTd4);
        newTr.appendChild(newTd5);


        document.getElementById("mytable").appendChild(newTr);
    }
}



// fetch()
// Third Party package (Axios)
