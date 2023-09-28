// countdown.js

function startCountdown() {
  let timer = localStorage.getItem("countdownTimer") || 3600; // Get remaining time from localStorage or set to 1 hour (3600 seconds)
  const countdown = setInterval(function () {
    if (timer < 0) {
      clearInterval(countdown); // Stop the countdown when it reaches 0
      localStorage.removeItem("countdownTimer"); // Remove timer data from localStorage
      receiveCountForTimer = 0;
    } else {
      console.log(formatTime(timer) + " remaining");
      timer--;
      localStorage.setItem("countdownTimer", timer); // Store remaining time in localStorage
    }
  }, 1000); // Update every 1 second (1000 milliseconds)
}

// Helper function to format time as "hh:mm:ss"
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return (
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (remainingSeconds < 10 ? "0" : "") +
    remainingSeconds
  );
}

startCountdown();
