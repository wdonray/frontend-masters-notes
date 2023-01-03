# Classes & Prototypes (OOP)
---

## Notes
- Object-oriented
  - Easy to reason about
  - Easy to add features to
  - Efficient and performant
- **Solution 1**: Factory functions issue
  - Storing a ton of the same data
  - Every instance must have the same code
- **Solution 2**: Object create method or Prototype chain
  - Accepts a prototype (object) as an argument.
  - Hides in __proto__ property, which links (chains) to the prototype.
  - When JS does not find a given method it searches the proto property.
  - Whatever object is accessing the property gets passed to the "this" keyword.
  - Creating functions inside of prototype methods do not give access to "this" unless creating an arrow function.
  - Not standard but no real issues just a bit long winded.
- **Solution 3**: new Keyword (good)
  - Automates creating and returning an object, also, creates proto property for us.
  - Functions are both objects and functions meaning you can store values for properties off of them, this is the reason we have access to prototype property.
  - All functions have a default property 'prototype' on their object.
- **Solution 4**: class Keyword (standard)
  - ES6
  - Syntactic Sugar, does not change the "new Keyword" use case.
  - Allows ability to setup prototype properties in the same location as creating the object data.
  - class = function + object
  - Methods created are added to prototype

## Definitions (Classes & Prototypes)
- Prototype - Built in properties on every object.
- Prototype chain 
  - The prototype itself is an object so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
  - The "chain" is referring to what takes place when attempting to access a method that is not found.
- Object Dot Notation - Property accessors, grants access to an objects property
- Factory Functions - Generalized function to create an object and return it.
- Object-oriented programming (OOP) - is a programming paradigm based on the concept of "objects", which can contain data and code.
- "this" Keyword - In most cases, the value of this is determined by how a function is called
  - When calling a method it is the object to the left of the method call
  - When declaring a function this links to the object part of a function (prototype property is also there)