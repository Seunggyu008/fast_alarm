const SaveButton = document.querySelector(".save-button");
const TimeForm = document.querySelector(".time-form");
let timeframe = document.getElementById("timeframe");
let hour = document.getElementById("hour");
let min = document.getElementById("min");

TimeForm.addEventListener("submit", () => {
  const data = {
    timeframe: timeframe.value,
    hour: hour.value,
    min: min.value,
    id: Date.now(),
  };

  localStorage.setItem("saveData", JSON.stringify(data));
  console.log(data);
});
