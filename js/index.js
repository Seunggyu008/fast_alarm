const editButton = document.querySelector(".title_button_more");
const alarm_check = document.querySelectorAll(".alarm_check");

editButton.addEventListener("click", () => {
  for (let i = 0; i < alarm_check.length; i++) {
    alarm_check[i].classList.toggle("active");
  }
});
