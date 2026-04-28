## Task 1b – Code Review and Improvement

### Purpose of the Code

The function `updateScores(name, points)` is intended to:

- Add a player to a list
- Update the highest score if necessary
- Return a message showing the player’s updated score

---

### Identified Issues and Their Effects

1. **Duplicate players are added**
   The function pushes the player's name to the `players` array every time it is called.
   - **Effect:** The same player can appear multiple times, leading to redundant data.

2. **Global state usage**
   The variables `highScore` and `players` are defined globally.
   - **Effect:** This makes the function harder to reuse and test, and increases the risk of unintended side effects.

3. **Mutation of input parameter (`points += 10`)**
   The expression modifies the `points` variable inside the return statement.
   - **Effect:** This is unclear and can lead to unexpected behavior or confusion.

4. **Unclear return logic**
   The return statement combines string concatenation with an assignment operation.
   - **Effect:** Reduces readability and maintainability.

5. **No validation of input**
   The function does not check whether:
   - `name` is a string
   - `points` is a number
   - **Effect:** Invalid input may break the function or produce incorrect results.

---

### Improvements Made

- Prevent duplicate players
- Avoid modifying input parameters directly
- Improve readability of the return statement
- Add input validation
- Improve code structure and clarity

---

### Conclusion

The improved version removes logical errors, improves readability, and ensures safer handling of data. By avoiding unnecessary mutations and adding validation, the function becomes more reliable and maintainable.
