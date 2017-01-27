function startCountdown(id, endtime) {
  let clock = document.getElementById(id);
  let clockDays = clock.querySelector('.days');
  let clockHours = clock.querySelector('.hours');
  let clockMinutes = clock.querySelector('.minutes');
  let clockSeconds = clock.querySelector('.seconds');
  function updateClock() {
    var t = getTimeRemaining(endtime);
    clockDays.innerHTML = t.days;
    clockHours.innerHTML = ('0' + t.hours).slice(-2);
    clockMinutes.innerHTML = ('0' + t.minutes).slice(-2);
    clockSeconds.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
  updateClock();
  let timeInterval = setInterval(updateClock, 1000);
}
function getTimeRemaining(endtime) {
  let total = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((total / 1000) % 60);
  let minutes = Math.floor((total / 1000 / 60) % 60);
  let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  let days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}
let countDown = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000);
startCountdown('clock', countDown);