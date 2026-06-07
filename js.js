function playGame(userChoice) {

    const choices = ["stone", "paper", "scissors"];

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("user-choice").innerText =
        "Your Choice: " + userChoice;

    document.getElementById("computer-choice").innerText =
        "Computer Choice: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw!";
    }
    else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
    }
    else {
        result = "Computer Wins!";
    }

    document.getElementById("winner").innerText = result;
}