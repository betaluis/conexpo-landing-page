const countdownElement = document.getElementById("days");

// Set the countdown end time (March 13th, 2023)
const countdownEndTime = Date.parse("2023-03-13T12:00:00Z");

// Update the countdown every second
const countdownInterval = setInterval(() => {
  let timeRemaining = countdownEndTime - Date.now();

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  timeRemaining -= days * (1000 * 60 * 60 * 24);

  // Update element content
  countdownElement.textContent = `${days}`;

  // Check if the countdown has reached zero
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "It's Time!";
  }
}, 1000);
