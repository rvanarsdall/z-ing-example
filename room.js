let printToConsole = require("./printToConsole.js");

class Room {
  constructor({
    name,
    description,
    inventory,
    people,
    requiredKey,
    possibleRooms,
  }) {
    this.name = name;
    this.description = description;
    this.inventory = inventory;
    this.people = people;
    this.requiredKey = requiredKey;
    this.isRoomLocked = requiredKey ? true : false;
    this.possibleRooms = possibleRooms;
  }

  addInventory(inventoryItem) {
    this.inventory.push(inventoryItem);
    return this.inventory;
  }

  removeInventory(itemToBeRemoved) {
    if (this.inventory.length == 0) {
      return printToConsole(`The ${this.name} has no inventory to remove`);
    }
    let message = this.inventory.filter(
      (currentInventory) => currentInventory.item == itemToBeRemoved
    )[0].message;
    this.inventory = this.inventory.filter(
      (currentInventory) => currentInventory.item !== itemToBeRemoved
    );
    printToConsole(message);
  }

  viewRoomInventory() {
    return printToConsole(
      `This room has the following items: ` +
        this.inventory.map((inventory) => inventory.item).join(", ") +
        `\n You can pick up the inventory and remove it from the room by using the following command: pickup key  for example.`
    );
  }
  roomPrompt() {
    return (
      this.description +
      "The possible rooms that you can move to is the following: " +
      this.possibleRooms.join(", ") +
      ".\n" +
      this.displayPeople()
    );
  }

  displayPeople() {
    return this.people.length > 0
      ? `There are a total of ${
          this.people.length
        } people in this room their names are the following: ${this.people.join(
          ", "
        )}.`
      : "";
  }
}

module.exports = Room;
