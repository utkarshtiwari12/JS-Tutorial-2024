let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScr");

const compScorePara = document.querySelector("#compScr");

const resetBtn = document.querySelector(".resetBtn");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);

    return options[randomIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#6a994e";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#bc4749";
    }
};

const playGame = (userChoice) =>
{
    const compChoice = genCompChoice();

    if (userChoice === compChoice)
    {
        msg.innerText = "It was a Draw. Play Again.";
        msg.style.backgroundColor = "#4a4e69";
    }
    else {
        let userWin = true;
        if (userChoice === "rock")
        {
            userWin = compChoice === "scissor" ? true : false;
        }
        else if (userChoice === "paper")
        {
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    })
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;

    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;

    msg.innerText = "Pick Your Move.";
    msg.style.backgroundColor = "#023e8a";
});