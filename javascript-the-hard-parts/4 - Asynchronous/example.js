function printHello() { console.log('Hello') };

// Since js is single threaded the real action that is occurring here
// is JS accessing a command in the browser that will then after
// the time completes execute the function call

// So the single action is just sending a command to the browser
// The browser then runs that function
setTimeout(printHello, 1000);

console.log('Me First');

// Me First
// Hello

function printHello() { console.log('Hello') }

function blockFor1Sec() {
  // Blocks the JS thread for 1 second
}

// Gets added to the callback queue
setTimeout(printHello, 0);

blockFor1Sec();

console.log('Me first!');

// Me First
// Hello