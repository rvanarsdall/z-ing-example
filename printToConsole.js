let white = "\033[0;39m";
let yellow = "\033[0;33m";

function printToConsole(string) {
  console.log(yellow + string + white);
}

module.exports = printToConsole;
