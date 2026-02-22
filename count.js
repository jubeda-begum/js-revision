function createCountdown(seconds, onTick, onComplete) {
  let remaining = seconds;
  let timerId = null;
  let isPaused = false;

  function tick() {
    if (isPaused) return;

    if (remaining > 0) {
      onTick(remaining);
      remaining--;
      timerId = setTimeout(tick, 1000);
    } else {
      onComplete();
    }
  }

  tick(); // start countdown

  return {
    pause() {
      isPaused = true;
      clearTimeout(timerId);
    },
    resume() {
      if (!isPaused) return;
      isPaused = false;
      tick();
    }
  };
}

const timer = createCountdown(
  5,
  (time) => console.log("Remaining:", time),
  () => console.log("Countdown Complete!")
);

// Pause after 2 seconds
setTimeout(() => {
  timer.pause();
  console.log("Paused");

  // Resume after 2 more seconds
  setTimeout(() => {
    console.log("Resumed");
    timer.resume();
  }, 2000);

}, 2000);