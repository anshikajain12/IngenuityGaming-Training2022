const API_URL = "https://api.covid19api.com/summary";
function getApi(url){
    // var data = await fetch(url);
    // var result= await data.json();
    // console.log(result);
    // displaydata(result);
    fetch(url)
    .then((val) => {
        return val.json();
    })
    .then((res)=>{
        
            // displaydata(res);
            console.log(res)
            
       
    })
    
    .catch((err) => console.log(err));
}

getApi(API_URL);


function displaydata(serverData){

    for(var datas of serverData){
        
        
        let newH51= document.createElement('h5');
        let newH52= document.createElement('h5');
        let newH53= document.createElement('h5');
        let newH54= document.createElement('h5');
        let newH55= document.createElement('h5');
        let newH56= document.createElement('h5');
        
        newH51.innerText=`${datas.countries[0].country}`;
        newH52.innerText=`${datas.countries[0].country}`;
        newH53.innerText=`${datas.countries[0].country}`;
        newH54.innerText=`${datas.countries[0].country}`;
        newH55.innerText=`${datas.countries[0].country}`;
        newH56.innerText=`${datas.countries[0].country}`;

        document.getElementById("a1").appendChild(newH51);
        document.getElementById("a2").appendChild(newH52);
        document.getElementById("a3").appendChild(newH53);
        document.getElementById("a4").appendChild(newH54);
        document.getElementById("a5").appendChild(newH55);
        document.getElementById("a6").appendChild(newH56);
        
    }
}