# Promises
---
## Notes
- Introduced in ES6
- Grants ability to track in JS memory, giving a consistency of what is occurring in the background.
  - Initiate background web browser command
  - Return a placeholder object (promise) in JS
- Promise Object
  - Created when creating a network request in the browser
  - Contains value and an onFulfilled array of functions
  - Once that value is assigned it is passed into each onFulfilled function in the array
  - onFulfilled is hidden but JS grants us access with the then method
  - onRejection can be called via the catch method or passed as the second argument in the then method
- Promise-deferred functions are held in a microtask queue and callback functions are in the callback queue
  - These are added to call stack when it is empty and all global code has ran. This is checked by the event loop.

## Definitions (Promises)
-  Two-pronged facade function: A function that has it's prongs in JS and the web browser. 
-  Microtask Queue: Queue of higher priority functions. 