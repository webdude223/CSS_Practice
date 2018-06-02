//Mouse Tracker is a simple app that tracks the mouse location and generates output
const WINDOW_WIDTH = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const WINDOW_HEIGHT = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const HALF_WIDTH = WINDOW_WIDTH/2;
const HALF_HEIGHT = WINDOW_HEIGHT/2;

var circle = document.getElementsByClassName("test2")[0];
var output1 = document.getElementsByClassName("screen-info")[0];

var x = 0;
var rate = 500;

function myPulse(xin = 1){
  //testing only
  //x++;
  let intervalRate = 1000;

  if(x < 15){
    console.log("myPulse called: ", x);
    if(xin == 1){
      //set value 1 - small glow
      console.log("1 called: ", xin);
      circle.style.boxShadow = "0px 0px 20px rgba(0,173,255, .7), 0px 0px 50px rgba(207, 243, 204, .4)"
      setTimeout(function(){myPulse(2);}, intervalRate);
    } else
    if(xin == 2){
      //set value 2 - large glow
      console.log("2 called: ", xin);
      circle.style.boxShadow = "0px 0px 40px rgba(0,173,255, .9), 0px 0px 100px rgba(207, 243, 204, .8)"
      setTimeout(function(){myPulse(1);}, intervalRate);
    }
  } else {
    console.log("myPulse all done.", x);
  }
}

let message = "Screen X: " +
WINDOW_WIDTH + "<br/>Screen Y: " +
WINDOW_HEIGHT + "<br/>Half X: " +
HALF_WIDTH + "<br/>Half Y: " +
HALF_HEIGHT +
"<br/><br/>Half/10: " + HALF_HEIGHT/10;

output1.innerHTML = message;
