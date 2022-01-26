const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
 minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0] ;
minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer. getSeconds())[0] ;
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer. getSeconds()) [1];
 
 

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  splitsElement.innerHTML="";
}

function setStopBtn() {
  btnLeftElement.innerHTML = "STOP";
  btnRightElement.innerHTML = "SPLIT"

  btnRightElement.classList.toggle("reset");
  btnRightElement.classList.toggle("split");

  btnLeftElement.classList.toggle("start");
  btnLeftElement.classList.toggle("stop");
  
  
}

function setSplitBtn() {
  // ... your code goes here
const split = chronometer.split();
const newSplit = document.createElement('li');
newSplit.innerHTML = split ;
newSplit.classList.add('single-split');
const parent = document.querySelector('#splits')
parent.appendChild(newSplit);

  btnRightElement.innerHTML = "SPLIT";

  btnRightElement.classList.toggle("reset");
  btnRightElement.classList.toggle("split");
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = "START";
  btnRightElement.innerHTML = "RESET";

  btnLeftElement.classList.toggle("stop");
  btnLeftElement.classList.toggle("start");
  
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = "RESET";

  btnRightElement.classList.toggle("split");
  btnRightElement.classList.toggle("reset");
  
  chronometer.reset();
  printTime();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
 
  if (btnLeftElement.innerHTML === "START") {
   setStopBtn();
   
   chronometer.start( printTime);
  } else if (btnLeftElement.innerHTML === "STOP") {
  
    setStartBtn();
    
    chronometer.stop();
  };
  
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === "RESET") {
    setResetBtn();
    clearSplits();
    
  } else if (btnRightElement.innerHTML === "SPLIT") {
    setSplitBtn();
    

  };
});
