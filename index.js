let min=1;
let max=100;

let random= Math.floor(Math.random()*max)+min;
let guess;
let running=true;
let attempts=0;

while(running){
guess=window.prompt(`Enter a number between ${min} and ${max}.`);
guess=Number(guess);
if(isNaN(guess)){
    window.alert("Please enter a valid number");
}
else if(guess<min || guess>max){
    window.alert("Please enter a valid number");
}
else{
    attempts++;
    if(guess>random){
        window.alert("TOO HIGH! Try again");
    }
   else if(guess<random){
        window.alert("TOO LOW! Try again");
    }
    else{
        window.alert(`CORRECT! You took ${attempts} attempts`);
        running=false;
    }
}
}