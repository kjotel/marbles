## Task 4 – Refactoring a Traffic Light System

### Purpose of the Code

The code simulates a traffic light system that cycles through:

* Red → Green → Yellow → Red

Each state lasts for a certain number of cycles and prints a corresponding message.

---

### Issues in the Original Code

The original implementation has several problems:

* **Poor variable names** (`a`, `b`, `x`) reduce readability
* **If-statements** make the logic hard to follow
* **Magic values** (e.g. `2`, `3`, `0`) are used without explanation
* **Code duplication** (same structure repeated for each state)
* **Global mutable state** makes testing and reuse difficult
* **Difficult to extend or modify**

---

### Improvements Made

* Replaced unclear variable names with meaningful ones
* Introduced constants to remove magic values
* Simplified logic using a structured state system
* Reduced duplication by improving behavior
* Improved readability and maintainability
* Made the system easier to test and extend

---

### Conclusion

The refactored version improves clarity, reduces duplication, and removes hard-coded values. By structuring the logic around states and constants, the code becomes easier to understand, test, and extend. This approach also makes future changes—such as adding new states or modifying durations—much simpler.
