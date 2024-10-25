const multi = document.querySelector(".multi");
const input = document.querySelector(".input");
const check = document.querySelector(".check");

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let firstNumber = getRandomNumber(1, 9);
let secondNumber = getRandomNumber(1, 9);
multi.textContent = `${firstNumber}*${secondNumber}`;
check.addEventListener("click", () => {
    
  if (firstNumber * secondNumber === Number(input.value)) {
    alert("Вірно!!!");
    firstNumber = getRandomNumber(1, 9);
    secondNumber = getRandomNumber(1, 9);
    multi.textContent = `${firstNumber}*${secondNumber}`;
      } else {
    alert("Не вірно!!!Спробуйте ще раз)))Все вийде");
  }
  input.value='';
  input.focus();
});
