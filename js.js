var redEl = document.getElementsByClassName("redlight")[0];
var greenEl = document.getElementsByClassName("greenlight")[0];
var yellowEl = document.getElementsByClassName("yellowlight")[0];
var timerEl = document.getElementsByClassName("timer")[0];

// var lightSwitch = function(){
// redEl.style.backgroundColor="red";
// greenEl.style.backgroundColor = "rgb(44, 73, 50)";
// yellowEl.style.backgroundColor = "rgb(75, 71, 54)";
// startCountDown(5,turnGreen);

//   setTimeout(function turnGreen(){
//     redEl.style.backgroundColor = "rgb(59, 45, 45)";
//     greenEl.style.backgroundColor = "green";
//   }, 5000);
//   startCountDown(5,turnyellow);

//   setTimeout(function turnyellow(){
//     greenEl.style.backgroundColor = "rgb(44, 73, 50)";
//     yellowEl.style.backgroundColor = "yellow";
//   }, 8000);
//   startCountDown(3,turnred);

//   setTimeout(function turnred(){
    
//     yellowEl.style.backgroundColor = "rgb(75, 71, 54)";
//     lightSwitch(); // Loop it again
//   }, 11000);
// };

function startCountDown(duration,callback){
    var seconds = duration;
    timerEl.textContent = seconds;
    let interval = setInterval(()=>{seconds--; 
        timerEl.textContent =seconds;
        if(seconds<=0){clearInterval(interval);
            callback();
        }},1000)
    };

    
function turnRed() {
    redEl.style.backgroundColor = "red";
    greenEl.style.backgroundColor = "rgb(44, 73, 50)";
    yellowEl.style.backgroundColor = "rgb(75, 71, 54)";
    startCountDown(5, turnGreen);
  }
  
  function turnGreen() {
    redEl.style.backgroundColor = "rgb(59, 45, 45)";
    greenEl.style.backgroundColor = "green";
    yellowEl.style.backgroundColor = "rgb(75, 71, 54)";
    startCountDown(5, turnYellow);
  }
  
  function turnYellow() {
    redEl.style.backgroundColor = "rgb(59, 45, 45)";
    greenEl.style.backgroundColor = "rgb(44, 73, 50)";
    yellowEl.style.backgroundColor = "yellow";
    startCountDown(3, turnRed);
  }
  
  turnRed(); // Start the loop
    
lightSwitch();

