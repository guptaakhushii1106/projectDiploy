let againBtn = document.querySelector(".again");
let guessNumber = document.querySelector(".number");
let guessValue = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let msg = document.querySelector(".message");
let gameScore = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

//Click event for check
checkBtn.addEventListener("click", () => {
  //1.want input value
  let val = Number(guessValue.value);

  //2.check if input is empty
  if (!val) {
    //2.1show message enter a value
    msg.textContent = "Enter a value !";
  }

  //3. If random value is same as guess
  else if (val === randomNumber) {
    //3.1 Change background color to green
    document.body.style.backgroundColor = "green";
    //3.2 Instead of ? put random value
    guessNumber.textContent = randomNumber;

    //3.3 In msg show correct number
    msg.textContent = "Correct Number !";
    //3.4 Check score is greater than highscore or not
    console.log(highScore);
    
    if (score > highScore.textContent) {
      //3.4.1 Update highscore value
      highScore.textContent = score;
    }
  }

  //4. If input value is less than random
  else if (val < randomNumber) {
    //4.1 show msg too low;
    msg.textContent = "too low";
    //4.2 Decreament score by 1
    score--;
    //4.3 update the dom value
    gameScore.textContent = score;
  }

  //5. If input value is greater than random
  else if (val > randomNumber) {
    //5.1 show msg too high
    msg.textContent = "too high";
    //5.2 decrement score by 1
    score--;
    //5.3 update the dom value of score
    gameScore.textContent = score;
  }
});
//Functionally for again button
againBtn.addEventListener("click", () => {
  // 1. change backgroundcolor to #222
  document.body.backgroundColor = "black";
  //2. Change msg to start guessing...
  msg.textContent = "Start guessing...";
  //3. at the place of ? we have to put ?
  guessNumber.textContent = "?";
  //4. update score to 20
  score = 20;
  //5. Update in dom also
  gameScore.textContent = score;
  //6. generate a random number again
  let randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
});
