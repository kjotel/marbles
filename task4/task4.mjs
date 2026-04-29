// Original Code

let a = "red";
let b = 0;

function x() {
  if (a == "red") {
    console.log("STOP");
    b = b + 1;

    if (b > 2) {
      a = "green";
      b = 0;
    }
  } else {
    if (a == "green") {
      console.log("GO");
      b = b + 1;

      if (b > 3) {
        a = "yellow";
        b = 0;
      }
    } else {
      if (a == "yellow") {
        console.log("SLOW");
        b = b + 1;

        if (b > 0) {
          a = "red";
          b = 0;
        }
      } else {
        console.log("BROKEN");
        a = "red";
        b = 0;
      }
    }
  }
}

// Refactored Code

const STATES = {
  RED: "red",
  GREEN: "green",
  YELLOW: "yellow",
};

const DURATIONS = {
  red: 3,
  green: 4,
  yellow: 1,
};

const MESSAGES = {
  red: "STOP",
  green: "GO",
  yellow: "SLOW",
};

let currentState = STATES.RED;
let timer = 0;

function updateTrafficLight() {
  console.log(MESSAGES[currentState]);

  timer++;

  if (timer >= DURATIONS[currentState]) {
    currentState = getNextState(currentState);
    timer = 0;
  }
}

function getNextState(state) {
  switch (state) {
    case STATES.RED:
      return STATES.GREEN;
    case STATES.GREEN:
      return STATES.YELLOW;
    case STATES.YELLOW:
      return STATES.RED;
    default:
      return STATES.RED;
  }
}

// Simulation
for (let i = 0; i < 8; i++) {
  updateTrafficLight();
}
