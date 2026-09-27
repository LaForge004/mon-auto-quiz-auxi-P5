const quizData = [
    {
        question: "Que signifie INFAS ?",
        a: "Institut Nationale de Fédérale des Agents de santé",
        b: "Institut Normale de Formation des Agents de santé",
        c: "Institut Nationale de Formation des Agents de santé",
        correct: "c"
    },
    {
        question: "Quel langage utilise-t-on pour styliser un site web ?",
        a: "JavaScript",
        b: "CSS",
        c: "Python",
        correct: "b"
    },
    {
        question: "En quelle année GitHub a-t-il été lancé ?",
        a: "2005",
        b: "2008",
        c: "2012",
        correct: "b"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion) {
            if (letter !== 'question' && letter !== 'correct') {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion[letter]}
                    </label>`
                );
            }
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
        }
    });

    resultsContainer.innerHTML = `Votre score : ${numCorrect} sur ${quizData.length}`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);

