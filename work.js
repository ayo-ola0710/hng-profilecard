const updateTime = document.querySelector('[data-testid="test-user-time"]');

function updateCurrentTime() {
  const currentTime = Date.now();
  updateTime.textContent = currentTime;
}

updateCurrentTime();

setInterval(updateCurrentTime, 1000);
