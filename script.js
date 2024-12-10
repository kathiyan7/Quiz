// Sample Questions (replace with your actual 180 questions)
const questions = {
    easy: [
        { question: "What is 2+2?", options: ["3", "4", "5", "6"], answer: "4" },
        { question: "What color is the sky?", options: ["Blue", "Red", "Green", "Yellow"], answer: "Blue" }
    ],
    medium: [
        { question: "What is the capital of France?", options: ["Paris", "Berlin", "Madrid", "Rome"], answer: "Paris" },
        { question: "What is 10x10?", options: ["50", "100", "200", "500"], answer: "100" }
    ],
    hard: [
        { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], answer: "12" },
        { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"], answer: "Shakespeare" }
    ]
};

const responses = JSON.parse(localStorage.getItem("quizResponses")) || []; // Retrieve stored responses

// Check if the user has already attempted the quiz
function hasAlreadyAttempted(roll) {
    return responses.some((response) => response.roll === roll);
}

// Randomize Questions
function getRandomQuestions() {
    const easyIndex = Math.floor(Math.random() * questions.easy.length);
    const mediumIndex = Math.floor(Math.random() * questions.medium.length);
    const hardIndex = Math.floor(Math.random() * questions.hard.length);

    return {
        easy: questions.easy[easyIndex],
        medium: questions.medium[mediumIndex],
        hard: questions.hard[hardIndex]
    };
}

// Load Random Questions
function loadQuestions() {
    const { easy, medium, hard } = getRandomQuestions();

    document.getElementById("easyQuestion").textContent = easy.question;
    document.getElementById("mediumQuestion").textContent = medium.question;
    document.getElementById("hardQuestion").textContent = hard.question;

    createOptions("easyOptions", easy.options);
    createOptions("mediumOptions", medium.options);
    createOptions("hardOptions", hard.options);

    return { easy, medium, hard };
}

// Create Options for a Question
function createOptions(elementId, options) {
    const container = document.getElementById(elementId);
    container.innerHTML = ""; // Clear existing options
    options.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.innerHTML = `
            <label>
                <input type="radio" name="${elementId}" value="${option}" required> ${option}
            </label>`;
        container.appendChild(optionElement);
    });
}

let currentQuestions = loadQuestions();

// Submit Quiz Form
document.getElementById("quizForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const dept = document.getElementById("dept").value;
    const phone = document.getElementById("phone").value;

    // Check if the user already attempted
    if (hasAlreadyAttempted(roll)) {
        alert("You have already attempted the quiz. Thank you!");
        return;
    }

    const easyAnswer = document.querySelector("input[name='easyOptions']:checked").value;
    const mediumAnswer = document.querySelector("input[name='mediumOptions']:checked").value;
    const hardAnswer = document.querySelector("input[name='hardOptions']:checked").value;

    const score =
        (easyAnswer === currentQuestions.easy.answer ? 1 : 0) +
        (mediumAnswer === currentQuestions.medium.answer ? 1 : 0) +
        (hardAnswer === currentQuestions.hard.answer ? 1 : 0);

    responses.push({
        name,
        roll,
        dept,
        phone,
        score,
        answers: { easy: easyAnswer, medium: mediumAnswer, hard: hardAnswer }
    });

    localStorage.setItem("quizResponses", JSON.stringify(responses)); // Save responses to localStorage

    document.querySelector(".container").innerHTML = `
        <h1>Thank you for attempting the quiz!</h1>
        <p>Merry Christmas!</p>
        <p><a href="https://rajalakshmi.org/yrcrec/team.html">Go Back!</a></p>
    `;
});

// Check if the participant already attempted on page load
document.getElementById("roll").addEventListener("blur", () => {
    const roll = document.getElementById("roll").value.trim();
    if (roll && hasAlreadyAttempted(roll)) {
        document.querySelector(".container").innerHTML = `
            <h1>You have already attempted the quiz!</h1>
            <p>Thank you and Merry Christmas!</p>
            <p><a href="https://rajalakshmi.org/yrcrec/team.html">Go Back!</a></p>
        `;
    }
});
