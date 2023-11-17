let AlarmContainer = document.querySelector(".container");
let AlarmList = document.querySelector(".alarm");
let AlarmTime = document.querySelector(".alarm_time_detail_time");

let saveData;

//가져온 객체 형태의 데이터를 innerHTML을 사용해서 시간을 바꾸어준다.
const createNewAlarm = (saveData) => {
  const newAlarm = document.createElement("div");
  newAlarm.innerHTML = `      
  <div class="alarm">
  <input type="checkbox" class="alarm_check" />
  <div class="alarm_time">
    <div>빨래</div>
    <div class="alarm_time_detail">
      <p>${saveData.timeframe}</p>
      <div class="alarm_time_detail_time">${saveData.hour}:${saveData.min}</div>
    </div>
  </div>
  <div class="alarm_date">
    <p>11월18(토)</p>
    <input class="alarm_date_checkbox" type="checkbox" />
  </div>
</div>`;
  newAlarm.classList.add("alarm");

  AlarmContainer.appendChild(newAlarm);
};

const alarmList = () => {
  const storedData = localStorage.getItem("saveData");
  if (storedData) {
    saveData = JSON.parse(storedData);
    createNewAlarm(saveData);
  }
};

alarmList();
console.log(saveData);
