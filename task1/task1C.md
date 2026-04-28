## Task 1c – Code Review and Improvement

### Purpose of the Code

The function `registerAttendance(students)` is intended to:

- Ensure each student has a status
- Count how many students are present
- Return a list of messages indicating attendance

---

### Identified Issues and Their Effects

1. **Reassignment of a constant variable**
   The variable `presentCount` is declared using `const`, but later incremented.
   - **Effect:** This causes a runtime error because `const` variables cannot be reassigned.

2. **Shared object reference (`defaultStatus`)**
   The same `defaultStatus` object is assigned to multiple students.
   - **Effect:** All students without a status share the same object reference, which can lead to unintended side effects if modified.

3. **Assignment instead of comparison**

   ```js
   if ((student.status.present = true))
   ```

   - **Issue:** Uses assignment (`=`) instead of comparison (`===`)
   - **Effect:** Always sets `present` to `true` and the condition always passes

4. **Mutation of input data**
   The function directly modifies the original `students` array.
   - **Effect:** This can lead to unintended side effects and makes the function less predictable

5. **Incorrect return message**
   The function always returns:

   ```js
   "name is present";
   ```

   regardless of actual attendance.
   - **Effect:** Output is misleading and incorrect

---

### Improvements Made

- Changed `const` to `let` for mutable variables
- Avoided shared object references
- Corrected comparison logic
- Prevented unnecessary mutation of input data
- Improved accuracy of returned messages

---

### Conclusion

The improved version fixes logical and runtime errors while ensuring correct handling of data. By avoiding shared references and unintended mutations, the function becomes more reliable and easier to maintain.
