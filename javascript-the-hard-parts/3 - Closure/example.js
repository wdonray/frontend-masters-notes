// Functions can be returned from other functions in JS

// Create a storage point in memory to store functions
function createFunction() {

  function multiplyBy2(num) {
    return num * 2;
  }

  return multiplyBy2;
}

// generatedFunc is the new label for the value returned from createFunction
// Which is a function to be later called
const generatedFunc = createFunction();

// Result is the returned value from the function call to generatedFunc with an argument of 3
const result = generatedFunc(3); // 6

// -----------

// Global Memory

// createFunction : function declaration 
// generatedFunction : call createFunction -> function declaration 
// result : call generatedFunction -> 6

// Create Function Local Memory

// multiplyBy2 : function declaration 
// return multiplyBy2

// -----------

// Declare a function labeled as outer
function outer() {
  let counter = 0;
  function incrementCounter () { counter ++ };
  return incrementCounter;
}

// Call the function outer which will evaluate to a new function definition
// When this happens that function definition takes all the memory that was created at the time of its birth
const myNewFunction = outer();
myNewFunction(); // 1
myNewFunction(); // 2


const Student = () => {
  const data = {
    age: 0,
  };

  const setAge = (value) => {
    data.age = value;
  };

  const getAge = () => data.age;

  return {
    setAge,
    getAge,
  }
};

const createStudent = Student();
createStudent.setAge(24)

console.log(createStudent.getAge());
