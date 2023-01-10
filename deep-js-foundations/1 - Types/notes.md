# Types
---

### Primitive Types
- Primitive Types - undefined, null, boolean, string, symbol, number, and bigint.
- Non-primitive Type - object, undeclared, function, and array.
- In JS, everything is an object, this is not true.
  - Not - undefined, string, number, boolean, symbol, null and bigint.
  - Are - object, function and array.
    - function and array is just a callable object, a subtype of object
- In JS, identifiers (constants and variables) don't have types values do. 
- undefined vs. undeclared vs. uninitialized (TDZ)
  - undeclared - never been created.
  - undefined - at the moment there is no value.
  - uninitialized - never been initialized.

## Special Values
- NaN - Invalid Number
  - Type of an invalid number is a number
  - NaN's are not equal to itself, it has no identify property
  - isNaN function converts values to number to check if NaN, unless using isNaN method from the Number object
- -0 Exist in JS
  - Consider using "is" method from the "Object" object when checking types for the most accurate answer 

## Fundamental Objects (Built-In Objects or Native Functions)
- use **new**
  - Object, Array, Function, Date, RegExp, Error
- Don't use **new**
  - String, Number, Boolean
  
### Definitions (Types)
- undefined - Any variable that has not been assigned a value has the value undefined.
- null - represents a reference that points, generally intentionally, to a nonexistent or invalid object or address
- boolean - a logical data type that can have only the values true or false.
- string - In any computer programming language, a string is a sequence of characters used to represent text.
- symbol - The Symbol type is the set of all non-String values that may be used as the key of an Object property. Each possible Symbol value is unique and immutable.
- number - is a numeric data type in the <a href="https://262.ecma-international.org/9.0/#sec-ecmascript-language-types-number-type">double-precision 64-bit floating point format </a>
- bigint - BigInt is a numeric data type that can represent integers in the arbitrary precision format
- Polyfill - a piece of code that provides service that you, the developer, expect it to provide natively.