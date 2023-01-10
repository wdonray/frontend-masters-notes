// Types - typeof

let v;
typeof v; // "undefined"

v = "1"; 
typeof v; // "string"

v = 2;
typeof v; // "number"

v = true;
typeof v; // "boolean"

v = {};
typeof v; // "object"

v = Symbol();
typeof v; // "symbol"

typeof doesNotExist; // "undefined"

v = null;
typeof v; // "object" OOPS!

v = function() {};
typeof v; // "function" hmmm?

v = [1, 2, 3];
typeof v; // "object" hmmm?

v = 42n;
v = BigInt(42);
typeof v; // "bigint"