// TODO: write the validation functions

function isValidName(name) {
  if (typeof name != "string" || Boolean(name.trim().length < 3)) {
    return false;
  }

  return true;
};

function hoursAttended(attended, length) {
  function isTypeValid(argument) {
    return typeof argument == 'string' || typeof argument == 'number'; 
  }

  function isNumberValid(argument) {
    if(typeof argument == 'string' && argument.trim() == '') {
      return false;
    }

    const argumentToNumber = Number(argument);
    return argumentToNumber >= 0 && Number.isInteger(argumentToNumber);
  }

  const isAttendedValid = isTypeValid(attended) && isNumberValid(attended);
  const isLengthValid = isTypeValid(length) && isNumberValid(length);

  return isAttendedValid && isLengthValid && Number(attended) <= Number(length);
};
 

// tests:
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
