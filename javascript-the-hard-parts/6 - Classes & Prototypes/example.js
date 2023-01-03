// Factory Function
function userCreator1(name, score) {
  const newUser = Object.create(null) // or {}

  newUser.name = name;
  newUser.score = score;

  newUser.increment = function() {
    newUser.score++;
  };

  return newUser;
}

const user1 = userCreator1('Will', 3);
const user2 = userCreator1('Tim', 5);

user1.increment();

// Prototype chain
const userFunctionStore = {
  // Has access to "this" keyword since it is being access on whatever function has called it
  increment: function() { this.score++; },
  login: function() { console.log('Logged in'); }
};

function userCreator2(name, score) {
  const newUser = Object.create(userFunctionStore)
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const user3 = userCreator2('Will', 3);
const user4 = userCreator2('Tim', 5);

user3.increment();

// new Keyword
function userCreator3(name, score) {
  this.name = name;
  this.score = score;

  // Function declaration + an object (it is always like this)
  // Steps
  // Creates and assigns this (object)
  // Set up __proto__
  // returns this
}

userCreator3.prototype; // {}
userCreator3.prototype.increment = function() { this.score++; };
userCreator3.prototype.login = function() { console.log(this.name + ' logged in!'); };

// New automates the hard work when calling the function
const user5 = new userCreator3('Will', 3);

// class Keyword
class UserCreator4 {
  constructor (name, score) {
    this.name = name;
    this.score = score;
  };

  increment() {
    this.score++;
  };

  login() { 
    console.log(this.name + ' logged in!'); 
  };
}

const user6 = new UserCreator4('Eva', 9);
user6.increment();
