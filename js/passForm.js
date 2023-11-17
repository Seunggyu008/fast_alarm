const SaveButton = document.querySelector(".save-button");
const TimeForm = document.querySelector(".time-form");

TimeForm.addEventListener("submit", () => {
  let timeframe = document.getElementById("timeframe").value;
  let hour = document.getElementById("hour").value;
  let min = document.getElementById("min").value;
  let sec = document.getElementById("sec").value;

  sessionStorage.setItem("timeframe", timeframe);
  sessionStorage.setItem("hour", hour);
  sessionStorage.setItem("min", min);
  sessionStorage.setItem("sec", sec);
});
