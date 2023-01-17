/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
//testMe(); // Partnah - Howdy


/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => console.log('welcome'), 3000)
}
// Uncomment the following line to check your work!
//delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
  setTimeout(() => console.log('good bye'), 3000);
  console.log('hello');
}
// Uncomment the following line to check your work!
//helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
  console.log('hi')
  setInterval(() => console.log('hi again'), 1000)
}
// Uncomment the following line to check your work!
//brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
  let limit = 0;
  
  setInterval(() => {
    limit = limit + 1;
    
    if (limit > 5) {
      return;
    }
    
    console.log('hi for now');
  }, 1000);
}
// Uncomment the following line to check your work!
//limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  let count = 0;
  
  setInterval(() => {
  	count = count + 1;
    
    if(count >= duration) {
      return;
    }
    
    setTimeout(func, interval);
  }, 1000)
}

// Uncomment the following lines to check your work!
function theEnd() {
 console.log('This is the end!');
}

function sayHi() {
  console.log('Hi!');
}

// everyXsecsForYsecs(theEnd, 2, 5);
// everyXsecsForYsecs(sayHi, 1000, 5000); 
// should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

function delayCounter(target, wait) {
	let counter = 0;
  
  return () => setInterval(() => {
    counter = counter + 1;
    
    if(counter > target) {
      return;
    }
    
    console.log(counter);
  }, wait);
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised (val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val)
    }, 2000) 
  })
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised('wait for it...');
//createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

const SecondClock = (callback) => {
  let counter = 0;
  let interval = null;
  
  const start = () => {
    interval = setInterval(() => {
      counter = counter + 1;
      callback(counter);
    }, 1000)
  };

	const reset = () => {
    counter = 0;
    clearInterval(interval);
  };
  
  return {
  	start,
    reset
	};
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");

// clock.start();

setTimeout(() => {
  //clock.reset();
  //console.log("Stopped Clock after 6 seconds.");
}, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  let canRun = true;
  
  const execute = () => {
    if(!canRun) {
      setTimeout(() => canRun = true, interval);
      return;
    }
    
    const val = callback();
    canRun = false;
    return val;
  };
  
  return execute;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);

console.log(giveHiSometimes()); // -> 'hi'

setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'

function throttle(fn, time) {
  let isWaiting = false;

  // put all the arguments into an array

  //returns a new throttled version of our function
  return function (...args) {
    if (isWaiting) {
      return;
    }

    fn(...args);
    isWaiting = true;
    setTimeout(function() {
      isWaiting = false;
    }, time);
  }
}