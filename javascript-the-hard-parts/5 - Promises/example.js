// ES6 + Promises

// Declaring and storing in global memory a function labeled display
const display = (data) => console.log(data);

// Declaring a const called futureData which will be the promise result from fetch
const futureData = fetch('some-api-fetch'); // Promise Object
// Fetch sends a command to the browser to create a network request
// promises are like the binder between the browser and JS engine

// onFulfilled is a hidden property but JS gives us .then to push to it
futureData.then(display);

console.log('Me First!');

// -------

function printHello() { console.log('Hello') }
function blockFor300ms() { 
  // Blocks js thread for 300ms
}

setTimeout(printHello, 0);

futureData.then(display);
blockFor300ms();

console.log('Me First Again!');
