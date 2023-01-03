// Declare a function with the identifier tenSquared that accepts no parameters
// and in the thread of execution we return the value of 100 by evaluating 10 * 10
function tenSquared() {
  return 10 * 10;
}

// Generalize to make more reusable
function squareNum(num) {
  return num * num;
}

// Save in global memory a function definition with the identifier copyArrayAndMultipleBy2 
// which accepts one parameter called array
function copyArrayAndMultipleBy2(array) {
  // Declare a const with the identifier output and set that value to an empty array
  const output = [];

  // Looping through the parameter called 'array's argument and that value is an array
  // Protected space of memory
  for(let i = 0; i < array.length; i++) {
    // Copy each value and multiple it by 2
    output.push(array[i] * 2);
  }

  // Search in local memory for the value that is set to the identifier called output
  // and  we will ship this out of local execution context
  return output;
}

// Declare a const with the identifier called myArray and set value to array of numbers
const myArray = [1,2,3];
// Declare a const with label of result and set to the evaluated 
// value that is returned from the invoked function call
const result = copyArrayAndMultipleBy2(myArray);


//// Higher Order Function
function copyArrayAndManipulate(array, instructions) {
  const output = [];

  for(let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }

  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

const result2 = copyArrayAndManipulate(myArray, multiplyBy2);