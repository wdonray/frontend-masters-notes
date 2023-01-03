# Asynchronous
---
##### What we are going to cover
- Promises
- Asynchronicity
- The Event Loop
- Microtask queue, Callback queue and Web Browser features (APIs)

## Notes
- Core JS Engine
  - Thread of execution
  - Memory / variable environment
  - Call Stack
- Web Browser (*commands to use feature in web browser*)
  - Dev Tools - Console (*console*)
  - Network Request (*xhr - fetch*)
  - Rendering - HTML DOM (*document*)
  - Local Storage (*localStorage*)
  - Web Browser APIs / Node background APIs
  - Promises (*promise*)
  - Event loop, Callback / Task queue and micro task queue
  - Timer (*setTimeout*)

## Definitions (Asynchronous)
- Asynchronous: each line of code has to finish before going to the next line.
- Single threaded: JS is single threaded meaning one command runs at a time.
- Web Browser: Combination of JS and browser features.
- Callback Queue: All code must be done running for queue to add to call stack.
- Event Loop: Constantly checks the call stack to confirm if there is more global code to run, if there is not it then checks the queues.
- Task Queue: Queue of callbacks
