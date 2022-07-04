function computerPlay(oneOfThree) {
    const options = [
        "rock",
        "paper",
        "scissors"
    ];

    let choice = options[Math.floor(Math.random() * options.length)];

    return choice
}

console.log(computerPlay());