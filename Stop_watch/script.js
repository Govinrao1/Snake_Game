let hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0,
  interval;

const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

// Start Button
document.getElementById("start").addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

// Pause Button
document.getElementById("pause").addEventListener("click", () => {
  clearInterval(interval);
});

// Reset Button
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
});

// Reverse Button
document.getElementById("back").addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(reverseTimer, 10); // Reverse every 10ms
});

function startTimer() {
  milliseconds += 10;

  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  updateDisplay();
}

function reverseTimer() {
  milliseconds -= 10; // Decrement milliseconds first

  if (milliseconds < 0) {
    milliseconds = 990; // Wrap milliseconds back to 990
    seconds--;
  }
  if (seconds < 0) {
    seconds = 59; // Wrap seconds back to 59
    minutes--;
  }
  if (minutes < 0) {
    minutes = 59; // Wrap minutes back to 59
    hours--;
  }

  // Allow negative values if hours reach 0
  if (hours < 0 && minutes === 0 && seconds === 0 && milliseconds === 0) {
    milliseconds = -10;
    seconds = -1;
    minutes = -1;
  }

  updateDisplay();
}

function updateDisplay() {
  hoursDisplay.textContent = formatNumber(hours);
  minutesDisplay.textContent = formatNumber(minutes);
  secondsDisplay.textContent = formatNumber(seconds);
  millisecondsDisplay.textContent = formatNumber(milliseconds, 3);
}

function formatNumber(number, length = 2) {
  const sign = number < 0 ? "-" : "";
  const absoluteValue = Math.abs(number).toString().padStart(length, "0");
  return sign + absoluteValue;
}
