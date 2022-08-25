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
  var s = document.getElementById("select");

  for (var i = 0; i < serverData.Countries.length; i++) {
    var o = document.createElement("option");
    o.text = serverData.Countries[i].Country;
    o.value = i;
    s.appendChild(o);
  }
  var x = document.querySelector("form").appendChild(s);

  s.onclick = function () {
    if (s.options[s.selectedIndex].value==="Country Name") {
      document.getElementById("y2").innerHTML = "";
      document.getElementById("y3").innerHTML = "";
      document.getElementById("y4").innerHTML = "";
      document.getElementById("y5").innerHTML = "";
      document.getElementById("y6").innerHTML = "";
    } else {
      var checkvalue = s.options[s.selectedIndex].value;
      document.getElementById("y2").innerHTML =
        serverData.Countries[checkvalue].Date;
      document.getElementById("y3").innerHTML =
        serverData.Countries[checkvalue].NewDeaths;
      document.getElementById("y4").innerHTML =
        serverData.Countries[checkvalue].TotalConfirmed;
      document.getElementById("y5").innerHTML =
        serverData.Countries[checkvalue].TotalDeaths;
      document.getElementById("y6").innerHTML =
        serverData.Countries[checkvalue].NewConfirmed;
    }
  };

  //   for (var i = 0; i < s.length; i++) {
  //     var checkvalue = s.options[s.selectedIndex].value;
  //     console.log(checkvalue);
}
