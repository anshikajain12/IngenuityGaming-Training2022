const API_URL = "https://api.covid19api.com/summary";

function getApiData(url) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = () => {
      //   console.log(request);

      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject("Not able to fetch Data");
      }
    };
  });
}

getApiData(API_URL)
  .then((val) => {
    // console.log(JSON.parse(val));
    displayData(JSON.parse(val));
  })
  .catch((err) => console.log("Error" + err));

function displayData(serverData) {
  // var i=prompt("enter a number between 0 to 199");

  // console.log(serverData.Countries[1].Country);
  const s = document.createElement("select");
  s.name = "countries";

  for (var i = 0; i < serverData.Countries.length; i++) {
    const o = document.createElement("option");
    o.text = serverData.Countries[i].Country;
    o.value = i;
    s.appendChild(o);
  }
  var x = document.querySelector("form").appendChild(s);


  var u = 0;
  for (var i = 0; i < s.length; i++) {
    var checkvalue = s.options[s.selectedIndex].value;
    console.log(checkvalue);

    document.getElementById("y2").innerHTML = serverData.Countries[checkvalue].Date;
    document.getElementById("y3").innerHTML = serverData.Countries[checkvalue].NewDeaths;
    document.getElementById("y4").innerHTML =
      serverData.Countries[u].TotalConfirmed;
    document.getElementById("y5").innerHTML =
      serverData.Countries[u].TotalDeaths;
    document.getElementById("y6").innerHTML =
      serverData.Countries[u].NewConfirmed;
  }

  
}
