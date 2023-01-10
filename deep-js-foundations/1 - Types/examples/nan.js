// Special Values: NaN

let myAge = Number("0o46"); // 38
let myNextAge = Number("39"); // 39
let myCatsAge = Number("n/a"); // NaN

myAge - "my son's age"; // NaN

myCatsAge === myCatsAge; // false

isNaN(myAge); // false
isNaN(myCatsAge); // true
isNaN("my son's age"); // true

Number.isNaN(myCatsAge); // true
Number.isNaN("my son's age"); // false