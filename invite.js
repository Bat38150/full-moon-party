document.addEventListener("DOMContentLoaded", function () {
  const target = new Date("2026-07-11T19:00:00+02:00").getTime();
  const parts = {
    d: document.getElementById("cdDays"),
    h: document.getElementById("cdHours"),
    m: document.getElementById("cdMinutes"),
    s: document.getElementById("cdSeconds"),
    txt: document.getElementById("countdownText")
  };
  function pad(n){ return String(n).padStart(2,"0"); }
  function tick(){
    const diff = target - Date.now();
    if (diff <= 0) {
      parts.d.textContent = "00"; parts.h.textContent = "00"; parts.m.textContent = "00"; parts.s.textContent = "00";
      parts.txt.textContent = "La Full Moon Party est lancée 🚀";
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    parts.d.textContent = days;
    parts.h.textContent = pad(hours);
    parts.m.textContent = pad(minutes);
    parts.s.textContent = pad(seconds);
    parts.txt.textContent = "Objectif lune : returns to the moon and beyond";
  }
  tick();
  setInterval(tick, 1000);
});
