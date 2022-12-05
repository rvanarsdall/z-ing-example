let Room = require("../room");

let hallway = new Room({
  name: "hallway",
  inventory: [],
  description:
    "You are currently in the hallway it leads to nothing as we haven't built out the rest of the house yet",
  people: [],
  requiredKey: false,
  possibleRooms: ["foyer"],
});

module.exports = hallway;
