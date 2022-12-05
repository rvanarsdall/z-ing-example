let Room = require("../room");
let kitchen = new Room({
  name: "kitchen",
  inventory: [],
  description: "You are currently in the kitchen and you find a cup of tea",
  people: [],
  requiredKey: true,
  possibleRooms: ["foyer"],
});

module.exports = kitchen;
