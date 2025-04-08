var redEl = document.getElementsByClassName("redlight")[0];
var greenEl = document.getElementsByClassName("greenlight")[0];
var yellowEl = document.getElementsByClassName("yellowlight")[0];

var lightSwitch = function(){
redEl.style.backgroundColor="red";
greenEl.style.backgroundColor = "rgb(44, 73, 50)";
yellowEl.style.backgroundColor = "rgb(75, 71, 54)";

  setTimeout(() => {
    redEl.style.backgroundColor = "rgb(59, 45, 45)";
    greenEl.style.backgroundColor = "green";
  }, 5000);

  setTimeout(() => {
    greenEl.style.backgroundColor = "rgb(44, 73, 50)";
    yellowEl.style.backgroundColor = "yellow";
  }, 5000);

  setTimeout(() => {
    
    yellowEl.style.backgroundColor = "rgb(75, 71, 54)";
    lightSwitch(); // Loop it again
  }, 10000);
};

lightSwitch();

