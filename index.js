let Room = require("./room.js");
let Foyer = require("./rooms/foyer");
let Kitchen = require("./rooms/kitchen");
let Hallway = require("./rooms/hallway");

let printToConsole = require("./printToConsole.js");
const readline = require("readline");

const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// console.log(foyer.inventory);

let state = {
  foyer: Foyer,
  kitchen: Kitchen,
  hallway: Hallway,
};

let currentLocation = "foyer";
async function start() {
  let answer;
  printToConsole(state[currentLocation].roomPrompt());
  while (answer !== "quit") {
    answer = await ask(">_");
    evaluateAnswer(answer);
  }
  process.exit();
}

start();
let commands = {
  movement: ["move", "enter", "walk", "go"],
  pickup: ["pick", "grab", "take", "pickup"],
  drop: ["drop", "discard"],
  examine: ["read", "look", "examine", "inspect", "study"],
  talkTo: ["ask", "speak", "question", "talk"],
  help: ["help"],
  inventory: ["inventory"],
  unlock: ["unlock", "open"],
  solve: ["solve"],
  room: ["room"],
  view: ["view", "look", "see", "read"],
};
function evaluateAnswer(answer) {
  let [action, target] = answer.split(" ");

  //  Viewing and Inventory
  if (commands.view.includes(action) && target == "inventory") {
    state[currentLocation].viewRoomInventory();
  }
  // Picking up Items
  if (commands.pickup.includes(action)) {
    if (
      state[currentLocation].inventory
        .map((inventory) => inventory.item)
        .includes(target)
    ) {
      state[currentLocation].removeInventory(target);
    } else {
      printToConsole("There is not an item named " + target + " in the room");
    }
  }

  //  Move locations

  if (commands.movement.includes(action)) {
    let currentPossibleRooms = state[currentLocation].possibleRooms;

    if (currentPossibleRooms.includes(target)) {
      // Check to see if door is locked
      if (state[target].isRoomLocked === false) {
        // Update the new Room State
        currentLocation = target;
        // Print to the console the new room description
        printToConsole(state[currentLocation].roomPrompt());
        // Update the Door Status to False
        state[currentLocation].isRoomLocked = false;
      } else {
        // If the door is locked then you need to check for a key on the person
        printToConsole("Door is locked");
      }
    } else {
      // NOT A ROOM
      printToConsole(
        "That's not a valid room. Your possible choices are the following: " +
          state[currentLocation].possibleRooms.join(", ")
      );
    }
  }
}
