
// Original Code

let highScore = 0;
let players = [];

function updateScores(name, points) {
    players.push(name);

    if (points > highScore)
        highScore = points;

    return name + " now has " + points += 10;
}

console.log(updateScores("Tony", 40));
console.log(updateScores("Tony", 50));
console.log(updateScores("Rony", 150));
console.log(players);
console.log(highScore);



// Improved Version

let playersList = [];
let highScoreObj = { value: 0 };

export function updateScoresImproved(name, points) {
    if (typeof name !== "string" || typeof points !== "number") {
        throw new Error("Invalid input");
    }

    if (!playersList.includes(name)) {
        playersList.push(name);
    }

    const updatedPoints = points + 10;

    if (updatedPoints > highScoreObj.value) {
        highScoreObj.value = updatedPoints;
    }

    return `${name} now has ${updatedPoints}`;
}


// Example usage
console.log(updateScoresImproved("Tony", 40));
console.log(updateScoresImproved("Tony", 50));
console.log(updateScoresImproved("Rony", 150));
console.log(playersList);
console.log(highScoreObj.value);