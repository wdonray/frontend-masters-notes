// CHALLENGE 1
function createFunction() {
  const helloWorld = 'hello world';
  
	const run = () => {
    console.log(helloWorld);
  }
  
  return run;
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
	const run = () => {
    console.log(input);
  }
  
  return run;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter(); // 1
willCounter(); // 2
willCounter(); // 3

jasCounter(); // 1
willCounter(); // 4


function addByX(x) {
  let value = x;
  
	const addBy = (v) => {
    console.log(x + v)
  };
  
  return addBy;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
	let ran = false;
  let value = 0;
  
  const addBy = (x) => {
    if(ran) { 
      return value;
    };
    
    value = x + 2;
    ran = true;
    return value;
  }
  
  return addBy;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
	let currentCount = 0;
  
	const execute = () => {
    currentCount = currentCount + 1;
    
    if(currentCount >= count) {
      func();
    }
  }
  
  return execute;
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
	return setTimeout(func, wait);
}

delay(() => console.log('Delay'), '2000');


// CHALLENGE 7
function rollCall(names) {
	let index = 0;
  
  const execute = () => {
    
    if(index >= names.length) {
      console.log('Everyone accounted for');
      return;
    }
    
    console.log(names[index]);
    index = index + 1;
  }
  
  return execute;
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
	const output = {};
  
  const execute = (val) => {
    if (val === magicWord) {
      return output;
    }
    
    const res = func(val);
    
    output[func(val)] = res;
    
    return res;
  };
  
  return execute;
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
	let index = 0;
  
  const nextDay = () => {
    index = index + 1;
    
    if(index >= array.length) {
      index = 0;
    }
  }
  
  const getDay = () => {
    const currentDay = array[index];
    nextDay();
    return currentDay;
  };
  
  return getDay;
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
	return (secondArg) => func(arg, secondArg);
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
  
	const execute = (val) => {
    return({ date: new Date().toString(), output: func(val) })
  };
  
  return execute;
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
  let message = '';
  const wordsToReplace = [];
  
	const excecute = (arg1, arg2) => {
    if (!arg2) {
      message = arg1;
      
      wordsToReplace.forEach(val => {
        message = message.replace(val.old, val.new);
      });
      
      return message;
    }
    
    wordsToReplace.push({ old: arg1, new: arg2 });
  };
  
  return excecute;
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
	let holder = secret;
  
  const getSecret = () => holder;
  const setSecret = (v) => holder = v;
  
  return {
    getSecret,
    setSecret
  }
}

// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2)
console.log(obj.getSecret()) // => returns 2


// CHALLENGE 14
function callTimes() {
	let counter = 0;
  
  const updateCounter = () => {
    counter = counter + 1;
    console.log(counter);
    return counter
  };
  
  return updateCounter;
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2


// CHALLENGE 15
function roulette(num) {
  let counter = 0;
  let won = false;
  
  const play = () => {
    counter = counter + 1;
    
    if(counter > 3) {
      return 'pick a number to play again';
    }
    
    if(num === counter) {
      return 'win';
    }
    
    return 'spin';
  };
  
  return play;
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {
	const storeArguments = [];
  const getAverage = () => !storeArguments.length ? 0 : storeArguments.reduce((a, b) => a + b) / storeArguments.length
  
  const average = (val) => {
    if (!val) {
      return getAverage();
    }
    
    storeArguments.push(val);
    return getAverage();
  };
  
  return average;
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  return (func) => arrOfTests.every((array) => func(array[0]) === array[1]);
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);

const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();

console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
  const actions = [];
  
  // save a history of the most recent 'limit' number of strings
  
	const runAction = (str) => {
    if(str === 'undo' && !actions.length) {
      return 'nothing to undo';
    }
    
    if(str === 'undo') {
      return actions.pop() + ' undone';
    }
    
    
    if(actions.length === limit) {
      actions[0] = actions[1];
      actions.pop();
      
      actions.push(str);
    } else {
      actions.push(str);
    }

    return str + ' done';
  }
  
  return runAction;
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {
  
	const dealer = (num1, num2) => {
    const data = {
      currentAction: 0,
      roundCount: 0,
      value: 0,
      done: false,
    };
    
    const bust = () => {
      data.done = true;
      return 'bust';
    }
    
    const incrementCounter = () => { 
      data.roundCount = data.roundCount + 1;
    };
    
    const nextAction = () => {
      data.currentAction = data.currentAction + 1;
    };
    
    const firstAction = () => {
      data.value = num1 + num2;
      
      nextAction();
      
      return data.value;
    };
    
    const secondAction = () => {
      data.value = array[0] + num1 + num2;
      
      nextAction();
      
      incrementCounter();
      
      return data.value;
    };
    
    const baseAction = () => {
      data.value = array[data.roundCount] + data.value
      
      incrementCounter();
      
      return data.value;
    }
    
    const actions = {
      0: firstAction,
      1: secondAction,
      2: baseAction,
    }
    
    const runAction = () => {
      const response = actions[data.currentAction]();

      if (data.value > 21) return bust();
      return response;
    };
    
    const player = () => {
      if (data.done) return 'you are done';
      return runAction();
    };
    
    return player;
  };
  
  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
