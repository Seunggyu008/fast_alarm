const editButton = document.querySelector(".title_button_more");
const alarm_check = document.querySelectorAll(".alarm_check");
const deleteButton = document.querySelector(".delete");

deleteButton.addEventListener("click", () => {
  const alarm_check_active = document.querySelector(".alarm_check.active");
  if (alarm_check_active && alarm_check_active.classList.contains("active")) {
    // Do something when delete button is clicked and alarm_check is active
  }
});

editButton.addEventListener("click", (i) => {
  for (let i = 0; i < alarm_check.length; i++) {
    alarm_check[i].classList.toggle("active");
    alarm_check[i].addEventListener("click", () => {
      console.log(i, "클릭됨");
    });
  }
});
