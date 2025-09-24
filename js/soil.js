// ===== soil.js =====

// Dummy soil health recommendations
const soilRecommendations = [
    {
        type: "Loamy Soil",
        advice: "Good for wheat and maize. Fertilizer: Nitrogen 20kg/acre, Phosphorus 10kg/acre."
    },
    {
        type: "Clayey Soil",
        advice: "Suitable for rice. Fertilizer: Nitrogen 25kg/acre, Potash 15kg/acre. Ensure proper drainage."
    },
    {
        type: "Sandy Soil",
        advice: "Suitable for vegetables. Fertilizer: Compost 2kg/m², Nitrogen 10kg/acre. Maintain moisture."
    },
    {
        type: "Acidic Soil",
        advice: "Apply lime to adjust pH. Fertilizer recommendations vary depending on crop type."
    }
];

// Function to display recommendations on the page
function displaySoilRecommendations() {
    const container = document.querySelector(".container");
    if(!container) return;

    // Clear existing content
    container.innerHTML = "";

    soilRecommendations.forEach(soil => {
        const card = document.createElement("div");
        card.className = "recommendation-card";

        const title = document.createElement("h3");
        title.textContent = soil.type;

        const desc = document.createElement("p");
        desc.textContent = soil.advice;

        card.appendChild(title);
        card.appendChild(desc);

        container.appendChild(card);
    });

    // Add Finish / Feedback button
    const button = document.createElement("button");
    button.textContent = "Finish / Give Feedback";
    button.onclick = goToFeedback;
    container.appendChild(button);
}

// Redirect to feedback page
function goToFeedback() {
    window.location.href = "feedback.html";
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", displaySoilRecommendations);

