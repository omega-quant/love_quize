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

            document.getElementById("result").innerText = "⏰ Time's up! Try again.";
            document.getElementById("result").style.color = "orange";

            // reload same question
            startTimer();
        }
    }, 1000);
}

// submit answer
function submitAnswer() {
    clearInterval(timer);

    let userAnswer = document.getElementById("answerInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (userAnswer === questions[currentQuestion].answer) {
        result.innerText = "Correct ❤️";
        result.style.color = "lightgreen";

        currentQuestion++;

        if (currentQuestion >= questions.length) {
            document.querySelector(".card").innerHTML =
                "<h1>🎉 You completed the journey!</h1><p>💖 Beautiful memories!</p>";
            return;
        }

        document.getElementById("answerInput").value = "";

        loadQuestion();

    } else {
        result.innerText = "Wrong 😢 Try again!";
        result.style.color = "yellow";
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

// music
function playMusic() {
    const music = document.getElementById("bgMusic");

    music.play().then(() => {
        console.log("Music started");
    }).catch(err => {
        console.log("Error:", err);
    });
}

// start game
loadQuestion();
