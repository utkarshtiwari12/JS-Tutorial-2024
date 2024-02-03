// selecting all the required nodes/tags.

const boxes = document.querySelectorAll(".box");

const container = document.querySelector(".container");

const winMsg = document.querySelector(".winMsg");

const newBtn = document.querySelector("#newBtn");

const resetBtn = document.querySelector(".resetBtn");

const msg = document.querySelector(".msg");

let turnX = true; // variable which toggles b/w turns of values.

let checkDraw = 0; // variable for checking draw conditon, increases everytime a box is clicked.

let winInLast = ""; // variable which stores winner's value, used to check if there's any winner in 9th/draw click.

// all possible win patterns.

const winPatterns = [ 
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// checking winning and draw conditions and peforming correponding tasks.

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnX)
        {
            box.style.color = "#941ff4";
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.style.color = "#3a0ca3";
            box.innerText = "O";
            turnX = true;
        }

        box.disabled = true;

        checkDraw++;

        checkWinner();

        if (checkDraw === 9 && winInLast === "") {
            msg.innerText = "Its a DRAW :(";

            container.classList.add("hidden");
            winMsg.classList.remove("hidden");

            resetBtn.classList.add("hidden");
        }
    })
});

//function which checks the winning condition.

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if (pos1Val === pos2Val && pos2Val === pos3Val)
            {
                msg.innerText = `The Winner is ${pos1Val}`;

                winInLast = pos1Val;

                container.classList.add("hidden");
                winMsg.classList.remove("hidden");

                resetBtn.classList.add("hidden");
            }
        }
    }
}

// on-click operation of New Button.

newBtn.addEventListener("click", () => {
    turnX = true;

    container.classList.remove("hidden");
    winMsg.classList.add("hidden");

    resetBtn.classList.remove("hidden");
    checkDraw = 0;
    

    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
});

// on-click operation of Reset Button.

resetBtn.addEventListener("click", () => {
    turnX = true;

    checkDraw = 0;

    container.classList.remove("hidden");
    winMsg.classList.add("hidden");

    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
});