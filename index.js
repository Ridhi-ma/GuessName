"use script";
const number = Math.trunc(Math.random() * 20) + 1;
let score = 3;
console.log(number);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Please add a number🙃";
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High😒";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `You Lost Secret no. was ${number}`;
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF0000";
    }
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "Correct Number👍";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".highscore").textContent = score;
  } else if (number > guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low😑";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `You Lost! Secret no. was ${number}`;
      document.querySelector("body").style.backgroundColor = "#FF0000";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", () => {
  location.reload();
});
