// Retrieve stored responses
const responses = JSON.parse(localStorage.getItem("quizResponses")) || [];

// Function to check if the user has already attempted the quiz
function hasAlreadyAttempted(roll) {
    return responses.some((response) => response.roll === roll);
}

// Sample Questions
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

// Switch between forms (Step 1: User details, Step 2: Quiz)
function switchToQuiz() {
    document.getElementById("userDetailsForm").style.display = "none";
    document.getElementById("quizForm").style.display = "block";
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

// Step 1: Submit User Details
document.getElementById("userDetailsForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Collect form data
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const dept = document.getElementById("dept").value;
    const phone = document.getElementById("phone").value;

    // var Regex='/^[^a-zA-Z]*$/';

    if(name.match(/^[^a-zA-Z]*$/))
    {
    alert("Enter a Valid Name");
    return;
    }

    if(dept.match(/^[^a-zA-Z]*$/))
    {
    alert("Enter a Valid Department");
    return;
    }

    if(!roll.match(/^\d{9}$/)) {
    alert("Enter a Valid Roll Number");
    return;
    }

    if(!phone.match(/^\d{10}$/)) {
    alert("Enter a Valid Phone Number");
    return;
    }

    // Check if the user has already attempted the quiz
    if (hasAlreadyAttempted(roll)) {
        alert("You have already attempted the quiz.");
        return;
    }

    try {
        // Send user details to the server
        const response = await fetch("http://localhost:3000/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                roll,
                dept,
                phone,
                score: 0, // Default score
                answers: {
                    easy: "",
                    medium: "",
                    hard: "",
                },
            }),
        });

        if (response.ok) {
            // Save user details in sessionStorage
            sessionStorage.setItem(
                "userDetails",
                JSON.stringify({ name, roll, dept, phone })
            );

            // Switch to the quiz form if submission is successful
            switchToQuiz();
        } else {
            const errorData = await response.json();
            alert(errorData.message || "Failed to submit details.");
        }
    } catch (error) {
        console.error("Error submitting user details:", error);
        alert("An error occurred while submitting your details. Please try again.");
    }
});

// Step 2: Submit Quiz Answers
document.getElementById("quizForm").addEventListener("submit", async(e) => {
    e.preventDefault();

    const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    if (!userDetails) {
        alert("User details are missing. Please refresh and try again.");
        return;
    }

    const easyAnswer = document.querySelector("input[name='easyOptions']:checked")?.value || "";
    const mediumAnswer = document.querySelector("input[name='mediumOptions']:checked")?.value || "";
    const hardAnswer = document.querySelector("input[name='hardOptions']:checked")?.value || "";

    const score =
        (easyAnswer === currentQuestions.easy.answer ? 1 : 0) +
        (mediumAnswer === currentQuestions.medium.answer ? 1 : 0) +
        (hardAnswer === currentQuestions.hard.answer ? 1 : 0);  
        console.log(userDetails);
        try {
            // Send user details to the server
            const response = await fetch("http://localhost:3000/submitQuiz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userDetails,
                    score,
                    answers: { easy: easyAnswer, medium: mediumAnswer, hard: hardAnswer }
                }),
            });
    
        } catch (error) {
            console.error("Error submitting user details:", error);
            alert("An error occurred while submitting your details. Please try again.");
        }

    // responses.push({
    //     ...userDetails,
    //     score,
    //     answers: { easy: easyAnswer, medium: mediumAnswer, hard: hardAnswer }
    // });

    // Save responses to localStorage
    localStorage.setItem("quizResponses", JSON.stringify(responses));

   
    // Display Thank You message
    document.querySelector(".container").innerHTML = `
    <h1>Thank you for attempting the quiz!</h1>
    <p>Your Score: ${score}</p>
    <script>
        setTimeout(() => {
            window.location.href = "https://rajalakshmi.org/yrcrec/team.html";
        }, 3000);
    </script>
`;

});

 