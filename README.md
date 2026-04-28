# Programming Portfolio - All The Marbles

## Overview

This portfolio contains a series of programming tasks focused on identifying bugs, explaining their effects, and improving code quality. The work demonstrates problem-solving skills, attention to detail, and the ability to write clean, maintainable JavaScript.

---

## Structure

The project is organized into separate folders for each task:

- **task1/**
  - `task1A.md` → Code review and bug fixes
  - `task1A.mjs` → Original and improved implementation
  - `task1B.md` → Analysis of logic and design issues
  - `task1B.mjs` → Improved implementation and examples
  - `task1C.md` → Analysis of data handling and logical errors
  - `task1C.mjs` → Improved implementation and output handling

- **task2/**
  - `task2.md` → Explanation of object references and behavior
  - `task2.mjs` → Demonstration of reference vs copy

- **task3/**
  - `task3.md` → Explanation of scope and variable shadowing
  - `task3.mjs` → Improved implementation and examples

Each task separates **explanations** (`.md`) from **code implementations** (`.mjs`) to ensure clarity and readability.

---

## Task 1 – Summary

Task 1 focuses on reviewing existing JavaScript code, identifying issues, and improving both functionality and structure.

### Task 1a:

- Identified syntax and logical errors in array handling
- Fixed loop conditions and indexing issues
- Added input validation
- Implemented a modern solution using `reduce()`

### Task 1b:

- Identified issues with global state and data duplication
- Fixed invalid expressions and improved logic clarity
- Prevented duplicate entries in data structures
- Improved readability and maintainability

### Task 1c:

- Identified problems with constant reassignment and shared object references
- Fixed logical errors caused by incorrect operators
- Avoided unintended mutation of input data
- Improved accuracy of returned results and structure

---

## Task 2 – Summary

Task 2 focuses on understanding how objects are handled in JavaScript, particularly the difference between references and copies.

### Key work:

- Identified that variables can reference the same object in memory
- Explained why modifying one variable affects another
- Demonstrated the concept of shared references
- Implemented a solution using the spread operator to create a copy

This task highlights the importance of avoiding unintended side effects when working with objects.

---

## Task 3 – Summary

Task 3 focuses on understanding variable scope and shadowing in JavaScript.

### Key work:

- Identified how function parameters can shadow global variables
- Explained why local changes do not affect outer scope variables
- Demonstrated how scope affects program behavior
- Improved code by using clearer variable naming and avoiding shadowing

This task highlights the importance of understanding scope to prevent confusion and logical errors in programs.

---

## Key Concepts Demonstrated

- Debugging and error analysis  
- Understanding of JavaScript fundamentals  
- Object references vs copies  
- Variable scope and shadowing  
- Clean code principles  
- Input validation  
- Avoiding side effects and unintended mutations  

---

## How to Run the Code

To test the implementations:

```bash
node task1/task1A.mjs
node task1/task1B.mjs
node task1/task1C.mjs
node task2/task2.mjs
node task3/task3.mjs
```

---

## Reflection

This portfolio demonstrates the ability to:

- Analyze and correct faulty code
- Explain technical issues clearly
- Improve code structure and reliability
- Apply best practices in JavaScript development

---

## Author

Kjetil Andre' Rilvaag Hansen
