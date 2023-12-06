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
  return ip;
}

// Call the function to find and display the client's IP address
findIPAddress();
