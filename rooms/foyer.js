let Room = require("../room");

let foyer = new Room({
  name: "foyer",
  inventory: [
    {
      item: "note",
      message: "You picked up the note and it says the following...",
    },
    {
      item: "key",
      message:
        "You picked the key and can be used in the secret passage to the kitchen",
    },
  ],
  description:
    "You are currently in the foyer and you see a note a key. The possible rooms you will find are the following... ",
  people: ["John", "Peggy"],
  requiredKey: false,
  possibleRooms: ["hallway", "kitchen"],
});

module.exports = foyer;
