document.body.style.background="linear-gradient(90deg, rgba(84,100,124,1) 0%, rgba(90,121,136,1) 0%, rgba(112,187,143,1) 100%, rgba(128,210,147,0.9433656957928802) 100%)";
document.getElementById("code").style.color="aliceblue";
document.getElementById("code").style.fontFamily="revert";
document.getElementById("code").style.textAlign="center";
// document.getElementById("code").style.marginTop="230px";
document.getElementById("code").style.fontSize="30px";


document.getElementById("res").style.fontFamily="monospace";
document.getElementById("res").style.color="#20272d";
document.getElementById("res").style.textAlign="center";
document.getElementById("res").style.marginTop="230px";
document.getElementById("res").style.fontSize="30px";
document.getElementById("res").style.textShadow="1px 3px 2px black";



document.getElementById("res").innerHTML=`<h3>Result of the Guess Game</h3>`
var randomNumber=Math.floor(Math.random()*10)+1;
console.log(randomNumber);
for(var i=1;i<=3;i++){
    var guessNumber = prompt("Guess The Number: ");
    if(guessNumber==randomNumber){
        document.getElementById("code").innerHTML=`<h3>you win the match</h3>`;
        break;
    }
    else if(guessNumber!=randomNumber){
        var x= 3-i;
        if(x>0){
            alert(`Try Again and you have only ${x} chances left to win the match`);
        }
        else{
            document.getElementById("code").innerHTML=`<h3>Sorry, you lost the match</h3>`;

        }

    }
    
}