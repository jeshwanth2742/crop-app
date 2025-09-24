// ===== navigation.js =====

// Navigate to a specific page
function navigateTo(page) {
    window.location.href = page;
}

// Redirect to feedback page
function goToFeedback() {
    window.location.href = "feedback.html";
}

// Attach click events to dashboard buttons
document.addEventListener("DOMContentLoaded", () => {
    const dashboardButtons = document.querySelectorAll("[data-page]");
    dashboardButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetPage = button.getAttribute("data-page");
            if(targetPage) {
                navigateTo(targetPage);
            }
        });
    });

    // Optional: attach feedback button if exists
    const feedbackBtn = document.querySelector("#feedbackBtn");
    if(feedbackBtn) {
        feedbackBtn.addEventListener("click", goToFeedback);
    }
});
