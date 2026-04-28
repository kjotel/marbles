
// Original Code

const user = { name: "Sara", score: 10 };
const backup = user;

backup.score = 25;

console.log(user.score); // 25
console.log(backup.score); // 25


// Fixed Version (Copy)

const user2 = { name: "Sara", score: 10 };
const backup2 = { ...user2 };

backup2.score = 25;

console.log(user2.score); // 10
console.log(backup2.score); // 25
