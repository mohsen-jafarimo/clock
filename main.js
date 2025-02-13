const clock = document.querySelector(".clock");
function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";
  if (h > 12) {
    h = h - 12;
  }
  if (h === 0) {
    h = 12;
  }
  if (h > 12) {
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  clock.innerHTML = `${h}:${m}:${s} ${session}`;
}

setInterval(showTime, 1000);
