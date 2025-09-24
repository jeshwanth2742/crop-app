// ===== feedback.js =====

// Function to submit feedback
function submitFeedback() {
    const feedbackInput = document.getElementById('feedback');
    const message = document.getElementById('message');

    if(!feedbackInput || feedbackInput.value.trim() === "") {
        message.style.color = "red";
        message.textContent = "Please enter your feedback before submitting.";
        return;
    }

    // Dummy submission logic
    message.style.color = "green";
    message.textContent = "Thank you for your feedback! Redirecting to dashboard...";

    // Redirect to dashboard after 1 second
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1000);
}

// Attach event listener on page load
document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector("button");
    if(submitBtn) {
        submitBtn.addEventListener("click", submitFeedback);
    }
});
