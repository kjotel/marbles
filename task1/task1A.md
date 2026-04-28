## Task 1a – Code Review and Improvement

### Purpose of the Function

The function `calcTotal(prices)` is intended to calculate the total sum of all values in an array and return the result rounded to two decimal places.

---

### Identified Bugs and Their Effects

1. **Incorrect loop starting index**
   The loop starts at index `1` instead of `0`. Since arrays in JavaScript are zero-indexed, this causes the first element to be skipped, leading to an incorrect total.

2. **Invalid loop condition (`i <= prices.length`)**
   The loop allows `i` to reach `prices.length`, which is outside the valid index range. This results in `undefined` being added to the total, causing the result to become `NaN`.

3. **Incorrect variable name (`price` instead of `prices`)**
   The code references `price[i]`, but the correct variable is `prices`. This causes a `ReferenceError`, preventing the function from running.

4. **Lack of input validation**
   The function assumes that the input is always an array of numbers. If invalid input is provided, the function may fail or produce incorrect results.

5. **Return type issue**
   The method `toFixed(2)` returns a string, not a number. This may cause issues if the result is used in further calculations.

---

### Improvements Made

* Corrected loop indexing and condition
* Fixed variable naming
* Added input validation
* Ensured correct return type
* Improved readability and maintainability

---

### Conclusion

The improved implementation fixes all logical and runtime errors while making the function more robust and reliable. Additionally, a modern version using `reduce()` demonstrates a more concise and readable approach.
