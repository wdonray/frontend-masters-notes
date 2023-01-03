# Closure
---
## Notes
- Closure is the most esoteric JS concept
- Enables powerful pro-level functions like 'once' and 'memoize'
- Many JS design patterns including the module pattern use closure
- Build iterators, handle partial applications and maintain state in an asynchronous world.
  
- **Functions with memories**
  - When our functions get called, we create a live store of data (local memory/variable environment/state) for that function's execution context.
  - When the function finishes executing, it's local memory is deleted
  - But what if our functions could hold on to live data between executions?
  - This would let our function definitions have an associated cache/persistent memory
  - But it all starts with us **returning a function from another function**.
- **Big Discovery**
  - Where you define your functions determines what data it has access to.
  - If you define a function inside of another and return that function definition, it takes along *all* of the memory that was defined along side with it.

## Definitions (Closure)
- Once: Allows a function to only be called once
- Memoize: Core performance operator (Not repeat task and operations)
- Variable: let
  
- **Scope** (Block, Function, Global)
  - At any given line of code what data do I have available to me.
  - Lexical/static scoping rule: The physical position of code on the page determines where data can be referenced.
- **Closure**
  - Scope Property/Rule: Is a hidden property [ [scope] ]  that is attached to function definitions that intercepts the call stack when searching in memory if value is not found in local memory.
  - Different names: Backpack, Closed Over Variable Environment (C.O.V.E), Persistent Lexical Static Referenced Data (P.L.S.R.D) or **CLOSURE**.
  
- Variable Environment: Local Memory
- Memory Leak: Data that would be stored in memory that is not referenced.

## Concepts that use closure
- **Helper functions**: Like 'once' and 'memoize'.
- **Iterators and generators**: Iterating through an array or creating a one time/unique object.
- **Module pattern**: Preserve state for the life of an application without polluting the global namespace.
- **Asynchronous JS**: Callbacks and Promises rely on the closure to persist state in a asynchronous environment.