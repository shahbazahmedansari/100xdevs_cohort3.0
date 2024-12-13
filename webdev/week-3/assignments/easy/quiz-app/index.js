const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: 1,
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: ["Venus", "Mars", "Mercury", "Earth"],
    answer: 2,
  },
];

const quizContainer = document.getElementById("quiz");

function loadQuiz() {
  quizContainer.innerHTML = ""; // Clear previous content
  quizData.forEach((q, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerText = `${index + 1}. ${q.question}`;

    q.options.forEach((option, i) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.innerHTML = `
            <label>
              <input type="radio" name="question${index}" value="${i}">
              ${option}
            </label>
          `;
      questionElement.appendChild(optionElement);
    });

    quizContainer.appendChild(questionElement);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedOption && parseInt(selectedOption.value) === q.answer) {
      score++;
    }
  });

  quizContainer.innerHTML = `
        <h2>Your score is ${score}/${quizData.length}</h2>
        <button onclick="loadQuiz()">Retake Quiz</button>
      `;
}

loadQuiz();
