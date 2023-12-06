const os = require("os");

const hwid = getHardwareIdentifier();

function getHardwareIdentifier() {
  const networkInterfaces = os.networkInterfaces();
  const firstInterface = networkInterfaces[Object.keys(networkInterfaces)[0]];

  if (firstInterface && firstInterface.length > 0) {
    return firstInterface[0].mac.toUpperCase().replace(/:/g, "");
  }

  return null;
}

//hwid -> etc
let currentHwid = hwid.toString();
let currentHwidNumers = currentHwid.slice(0, 4);

// Function to get current time in seconds
function getCurrentTimeInSeconds() {
  // Get current time in milliseconds
  var currentTimeMilliseconds = new Date().getTime();

  // Convert to seconds
  var currentTimeSeconds = Math.floor(currentTimeMilliseconds / 1000);

  return currentTimeSeconds;
}
var currentTimeInSeconds = getCurrentTimeInSeconds();
//seconds -> current 24h
var editedTime = currentTimeInSeconds / 86400;
//current 24h -> next 24h
var keyFor24Hours = editedTime + 86400;
const stringTime = Math.round(editedTime).toString();

//obsc
function obfuscateString(input) {
  let obfuscated = "";
  const offset = 3;

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);

    // Shift each character by the defined offset
    const shiftedChar = String.fromCharCode(char.charCodeAt(0) + offset);
    obfuscated += shiftedChar;
  }

  return obfuscated;
}

//revert obsc
function revertString(obfuscated) {
  let original = "";
  const offset = 3;

  for (let i = 0; i < obfuscated.length; i++) {
    const char = obfuscated.charAt(i);

    // Shift each character back by the defined offset
    const shiftedChar = String.fromCharCode(char.charCodeAt(0) - offset);
    original += shiftedChar;
  }

  return original;
}

//Constants with obfusc etc
const inputString = currentHwidNumers;
const obfuscatedString = obfuscateString(inputString);
//const revertedString = revertString(obfuscatedString);
const obfuscatedTimeString = obfuscateString(stringTime);
var result = obfuscatedString + "|" + obfuscatedTimeString;

//console.log("Input String:", inputString);
//console.log("Obfuscated String:", obfuscatedString);
//console.log("Reverted String:", revertedString);
//console.log("Obfuscated Time:", obfuscatedTimeString);
//console.log("Normal time:", stringTime);
console.log("Hardware Identifier:", hwid);
console.log("Results:", result);
//console.log("Next 24:", keyFor24Hours);
//console.log("Current 24:", editedTime);
