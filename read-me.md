# Use the following commands

In the terminal we are breaking up your words into a action and target

The list of commands are the following

```js
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
```

#### Things to currently test

Move from the Foyer to the Hallway

- move kitchen (The key is required) - Door is locked and you can not pass (more code needed for this to work)
- move hallway

Move from the Hallway to the Foyer

- move foyer

Move to Kitchen door is locked

- move kitchen

View inventory of a room

- view inventory

Pickup inventory - will remove it from the room and you can read the message.
In the Foyer

- pickup note
- pickup key
