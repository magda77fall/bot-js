"use strict";

const createNumberBot = () => {
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  const asking = () => {
    const input = prompt("Угадай число от 1 до 100");

    if (input === null) {
      alert("Игра окончена");
      return;
    }

    const userNumber = Number(input);

    if (input.trim() === "" || Number.isNaN(userNumber)) {
      alert("Введи число!");
      asking();
      return;
    }

    if (userNumber > secretNumber) {
      alert("Загаданное число меньше");
      asking();
      return;
    }

    if (userNumber < secretNumber) {
      alert("Загаданное число больше");
      asking();
      return;
    }

    alert("Поздравляю, Вы угадали!!!");
  };

  return asking;
};

if (confirm("Начать игру?")) {
  createNumberBot()();
} else {
  alert("Игра окончена");
}
