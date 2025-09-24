// ===== weather.js =====

// Function to show dummy weather advice
function showWeatherAdvice() {
    const location = document.getElementById('location')?.value;
    const date = document.getElementById('date')?.value;
    const adviceDiv = document.getElementById('advice');

    if(!location || !date) {
        adviceDiv.style.display = "block";
        adviceDiv.style.color = "red";
        adviceDiv.textContent = "Please select both location and date.";
        return;
    }

    // Dummy weather advice logic
    let advice = `Weather advice for ${location} on ${date}: `;
    if(location === "Delhi") advice += "Sunny day expected. Ideal for sowing wheat.";
    else if(location === "Mumbai") advice += "Moderate rainfall expected. Prepare rice fields.";
    else if(location === "Bangalore") advice += "Cool weather expected. Good for maize planting.";

    adviceDiv.style.display = "block";
    adviceDiv.style.color = "green";
    adviceDiv.textContent = advice;
}

// Redirect to feedback page
function goToFeedback() {
    window.location.href = "feedback.html";
}

// Attach events on page load
document.addEventListener("DOMContentLoaded", () => {
    const adviceBtn = document.querySelector("#adviceBtn");
    if(adviceBtn) adviceBtn.addEventListener("click", showWeatherAdvice);

    const feedbackBtn = document.querySelector("#feedbackBtn");
    if(feedbackBtn) feedbackBtn.addEventListener("click", goToFeedback);
});
