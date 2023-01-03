# Javascript Principles
  - Goes through the code line-by-line and runs/'executes' each line - known as the **thread of execution**
  - Saves 'data' like strings and arrays so we can use that data later - in its **memory**
---
  
### Notes
- **Functions**
  - A function being called is like a mini-app, so a function must follow the two JS principles stated above.
  - Code we save ('define') & can use (call/invoke/execute/run) later with the function's identifier and parentheses.
  - Functions have local memory.
  - Functions can have parameters (identifier) and those parameters have arguments.
  - Returning in a function locates local memory to then ship out of execution context.
- **Call Stack**
  - JS keeps track of what function is currently running, the location of thread of execution.
  - Whenever you run a function it gets added to call stack. 
  - Finishing running the function it gets removed from stack.
  - Whatever is at the top is what is running.
  - Global context exist at the bottom of the call stack.

### Definitions (JS Principles)
- Memory: Data saved by JS
- Function Call: Call to a function that executes (Value not yet determined).
- Identifier: Identifies a value.
- Parameter: Identifier in function parentheses.
- Argument: Value stored in parameter.
- Execution context: Created to run the code of a function.
- Declared: Creating and assigning an identifier to a value.