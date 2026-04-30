let currentPlayer = 1;
let currentQuestion = 0;

let timeLeft = 15;
let timer;

// questions
const questions = [
    { question: "Hum sbse pahle kaha mile the?", answer: "school" },
    { question: "Apke bf(it's me) ka date of brith?", answer: "21/09/2006" },
    { question: "Humari baat sbse pahle kaha hui thi?", answer: "instagram" },
  {question: "Apke mujhe 1st whatsapp message kya kiya tha", answer: "birthday wish"}
];

// load question
function loadQuestion() {
    document.getElementById("question").innerText =
        questions[currentQuestion].question;

    document.getElementById("playerTurn").innerText =
        "Player " + currentPlayer + "'s Turn";

    document.getElementById("result").innerText = "";

    startTimer();
}

// timer function
function startTimer() {
    clearInterval(timer);
    timeLeft = 15;

    document.getElementById("timer").innerText = "⏳ " + timeLeft + "s";

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = "⏳ " + timeLeft + "s";

        if (timeLeft <= 0) {
            clearInterval(timer);

            document.getElementById("result").innerText = "⏰ Time's up!";
            document.getElementById("result").style.color = "yellow";

            // switch player
            currentPlayer = currentPlayer === 1 ? 2 : 1;

            loadQuestion();
        }
    }, 1000);
}

// submit answer
function submitAnswer() {
    clearInterval(timer);

    let userAnswer = document.getElementById("answerInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (userAnswer === questions[currentQuestion].answer) {
        result.innerText = "Wow Manisha that's Correct ❤️";
        result.style.color = "lightgreen";

        currentQuestion++;

        if (currentQuestion >= questions.length) {
            document.querySelector(".card").innerHTML =
                "<h1>🎉 You both completed the game!</h1><p>💖 Perfect Couple!</p>";
            return;
        }

        currentPlayer = currentPlayer === 1 ? 2 : 1;

        document.getElementById("answerInput").value = "";

        loadQuestion();

    } else {
        result.innerText = "Wrong 😢";
        result.style.color = "orange";
    }
}

// hearts animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 500);

// music play
function playMusic() {
    document.getElementById("bgMusic").play();
}

// start game
loadQuestion();
