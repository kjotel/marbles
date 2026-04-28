## Task 2 – Object References and Mutability

### 1. What is printed by the two console.log() calls?

Both console statements print:

```js
25
25
```

---

### 2. Why do both variables show the same score?

Both `user` and `backup` refer to the **same object in memory**. When `backup.score` is changed, it directly affects the same object that `user` refers to.

---

### 3. Does backup contain a copy of the object, or something else?

`backup` does not contain a copy. It stores a **reference to the same object** as `user`.

---

### 4. Why is this important when writing functions?

This is important because:

* Modifying objects inside functions can unintentionally affect data outside the function
* It can lead to **bugs that are hard to track**
* Functions may produce **side effects**, making code less predictable

Understanding this helps developers:

* Avoid unintended mutations
* Write safer and more maintainable code

---

### 5. Rewrite the code so changing backup.score does not change user.score

To prevent this, we need to create a **copy** of the object instead of a reference.

```js
const user = { name: "Sara", score: 10 };
const backup = { ...user };

backup.score = 25;

console.log(user.score);   // 10
console.log(backup.score); // 25
```

---

### Conclusion

This task demonstrates the difference between **object references and copies** in JavaScript. Using techniques such as the spread operator allows us to avoid unintended side effects and maintain better control over data.
