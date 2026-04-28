
// Original Code

let points = 5;

function addPoints(points) {
  points = points + 10;
  return points;
}

console.log(addPoints(2)); // 12
console.log(points); // 5


// Improved Version

let globalPoints = 5;

export function addPointsImproved(value) {
  return value + 10;
}

console.log(addPointsImproved(2)); // 12
console.log(globalPoints); // 5
