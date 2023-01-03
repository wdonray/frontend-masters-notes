// Start Memory
// num : 3
// multiplyBy2 : function call
// output : 
// newOutput : 

// identifier = num
// value = 3
const num = 3;

// identifier = multiplyBy2
// value = function call
function multiplyBy2 (inputNumber) {
  const result = inputNumber * 2;
  return result;
}

// identifier = output
// Local Memory
// inputNumber : 3
// result : 6
const output = multiplyBy2(num);

// identifier = newOutput
const newOutput = multiplyBy2(10);

// End Memory (After Thread of execution ends)
// num : 3
// multiplyBy2 : function call
// output : 