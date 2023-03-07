// Get the countdown element
const countdownElement = document.getElementById("days");

// Set the countdown end time (in milliseconds since January 1, 1970)
const countdownEndTime = Date.parse("2023-03-13T12:00:00Z");

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Calculate the time remaining until the countdown end time
  let timeRemaining = countdownEndTime - Date.now();

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  timeRemaining -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  timeRemaining -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(timeRemaining / (1000 * 60));
  timeRemaining -= minutes * (1000 * 60);

  const seconds = Math.floor(timeRemaining / 1000);

  // Update the countdown element with the new time
  countdownElement.textContent = `${days}`;

  // Check if the countdown has reached zero
  if (timeRemaining < 0) {
    // Clear the countdown interval
    clearInterval(countdownInterval);

    // Update the countdown element with a message
    countdownElement.innerHTML = "It's Time!";
  }
}, 1000);
