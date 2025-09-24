// ===== market.js =====

// Function to show dummy market advice
function showMarketAdvice() {
    const location = document.getElementById('location')?.value;
    const crop = document.getElementById('crop')?.value;
    const adviceDiv = document.getElementById('advice');

    if(!location || !crop) {
        adviceDiv.style.display = "block";
        adviceDiv.style.color = "red";
        adviceDiv.textContent = "Please select both location and crop.";
        return;
    }

    // Dummy advice logic
    let advice = `For ${crop} in ${location}, `;
    if(crop === "Wheat") advice += "sell within 2-3 weeks for best price.";
    else if(crop === "Rice") advice += "wait until the monsoon season is over.";
    else if(crop === "Maize") advice += "sell now to get high market rates.";
    else if(crop === "Tomato") advice += "market price is currently good; sell soon.";

    adviceDiv.style.display = "block";
    adviceDiv.style.color = "green";
    adviceDiv.textContent = advice;
}

// Function to redirect to feedback page
function goToFeedback() {
    window.location.href = "feedback.html";
}

// Attach events on page load
document.addEventListener("DOMContentLoaded", () => {
    const adviceBtn = document.querySelector("button");
    if(adviceBtn) {
        adviceBtn.addEventListener("click", showMarketAdvice);
    }
});
