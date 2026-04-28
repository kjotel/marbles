## Task 3 – Scope and Variable Shadowing

### 1. What is printed by the first console.log()?

```js
12
```

The function is called with the argument `2`, so inside the function:

```js
points = 2 + 10 = 12
```

---

### 2. What is printed by the second console.log()?

```js
5
```

The global variable `points` remains unchanged.

---

### 3. Why does the global variable points not change?

The function parameter `points` is a **separate local variable**. It only exists inside the function and does not affect the global variable with the same name.

---

### 4. What does it mean that the parameter points “shadows” the outer variable?

Shadowing means that a local variable (in this case, the function parameter `points`) has the same name as a variable in an outer scope.

* Inside the function, the local variable is used
* The outer (global) variable is hidden and cannot be accessed directly

---

### 5. Improved Version

A better implementation avoids confusion by using clear variable names and avoiding shadowing:

```js
let points = 5;

function addPoints(value) {
    return value + 10;
}

console.log(addPoints(2)); // 12
console.log(points);       // 5
```

---

### Conclusion

This task demonstrates how variable scope works in JavaScript and how shadowing can lead to confusion. Using clear and distinct variable names improves readability and prevents logical errors.
