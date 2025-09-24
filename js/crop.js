// ===== crop.js =====

// Dummy crop recommendations
const cropRecommendations = [
    {
        name: "Wheat",
        description: "Best suited for loamy soil. Requires moderate water and sunlight."
    },
    {
        name: "Rice",
        description: "Prefer clayey soil. Plant during monsoon season for better yield."
    },
    {
        name: "Maize",
        description: "Suitable for well-drained soil. Fertilizer: Nitrogen-rich recommended."
    },
    {
        name: "Vegetables (Tomato, Capsicum)",
        description: "Require sandy-loam soil. Ensure regular watering and pest checks."
    }
];

// Function to display recommendations on the page
function displayCropRecommendations() {
    const container = document.querySelector(".container");
    if(!container) return;

    // Clear existing content
    container.innerHTML = "";

    // Loop through dummy recommendations and create cards
    cropRecommendations.forEach(crop => {
        const card = document.createElement("div");
        card.className = "recommendation-card";

        const title = document.createElement("h3");
        title.textContent = crop.name;

        const desc = document.createElement("p");
        desc.textContent = crop.description;

        card.appendChild(title);
        card.appendChild(desc);

        container.appendChild(card);
    });

    // Add Finish / Feedback button at the end
    const button = document.createElement("button");
    button.textContent = "Finish / Give Feedback";
    button.onclick = goToFeedback;
    container.appendChild(button);
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", displayCropRecommendations);
