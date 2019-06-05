const clockHours = document.querySelector(".clock__hours");
const clockMinutes = document.querySelector(".clock__minutes");
const clockSeconds = document.querySelector(".clock__seconds");
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = document.querySelector(".day");

// function to update the clock
function time() {
const timeZone = document.getElementById("timeZone").value;
let date = new Date().toLocaleString("en-US", {timeZone: timeZone});
date = new Date(date);

const weekday = weekdays[date.getDay()];
const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
clockHours.innerText = hours + ":";
clockMinutes.innerText = minutes + ":";  
clockSeconds.innerText = seconds;
day.innerHTML = weekday;   
}
setInterval(time, 1000);
