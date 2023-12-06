let ipAddress; // Define ipAddress in a broader scope

// Function to find and display the client's public IP address
function findIPAddress() {
  // Make an AJAX request to a third-party service to get the client's public IP address
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.ip; // Set ipAddress in the broader scope
      const currentIP = showIPAddress(ipAddress);

      // Call other functions that use the IP address here
      const result = generateKey(ipAddress);

      console.log("Found IP:", currentIP);
      console.log("Results:", result);
    })
    .catch((error) => console.error("Error:", error));
}

// Function to show the IP address
function showIPAddress(ip) {
  // You can create your hardware identifier using the client's IP address or any other information
  // For demonstration purposes, we'll just use the IP address as the hardware identifier
  alert("IP: " + ipAddress);
  return ip;
}

// Function to generate key based on IP address and time
function generateKey(ip) {
  const currentTimeInSeconds = getCurrentTimeInSeconds();
  const obfuscatedTime = currentTimeInSeconds / 86400;
  const obfuscatedString = obfuscateString(ip);
  const obfuscatedTimeString = obfuscateString(
    Math.round(obfuscatedTime).toString()
  );
  const result = obfuscatedString + "|" + obfuscatedTimeString;

  return result;
}

// Function to get current time in seconds
function getCurrentTimeInSeconds() {
  // Get current time in milliseconds
  var currentTimeMilliseconds = new Date().getTime();

  // Convert to seconds
  var currentTimeSeconds = Math.floor(currentTimeMilliseconds / 1000);

  return currentTimeSeconds;
}

// Function to obfuscate a string
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

// Call the function to find and display the client's IP address
findIPAddress();
