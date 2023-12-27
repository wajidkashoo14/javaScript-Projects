const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      {
        text: "Hyper Text Markup Language",
        correct: "true",
      },
      {
        text: "High-level Text Manipulation Language",
        correct: "false",
      },
      {
        text: " Hyper Transferable Markup Language",
        correct: "false",
      },
      {
        text: "Home Tool Markup Language",
        correct: "false",
      },
    ],
  },
  {
    question:
      "Which programming language is often used for client-side web development?",
    answers: [
      {
        text: "Java",
        correct: "false",
      },
      {
        text: "Python",
        correct: "false",
      },
      {
        text: "JavaScript",
        correct: "true",
      },
      {
        text: "C++",
        correct: "false",
      },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      {
        text: "Computer Style Sheets",
        correct: "false",
      },
      {
        text: "Cascading Style Sheets",
        correct: "true",
      },
      {
        text: "Creative Style Selector",
        correct: "false",
      },
      {
        text: "Colorful Style Sheets",
        correct: "false",
      },
    ],
  },
  {
    question: "What is the capital city of France?",
    answers: [
      {
        text: "Berlin",
        correct: "false",
      },
      {
        text: "Rome",
        correct: "false",
      },
      {
        text: "Paris",
        correct: "true",
      },
      {
        text: "Madrid",
        correct: "false",
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
