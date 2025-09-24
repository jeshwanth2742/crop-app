// soil.js

function recommendFertilizer() {
    const soilType = document.getElementById('soilType').value;
    const N = document.getElementById('nitrogen').value;
    const P = document.getElementById('phosphorus').value;
    const K = document.getElementById('potassium').value;
    const pH = document.getElementById('soilPH').value;

    let recommendation = "";

    if (!soilType || !N || !P || !K || !pH) {
        recommendation = "Please select all options.";
    } else {
        // Soil type based suggestions
        switch(soilType) {
            case "sandy":
                recommendation += "Use organic compost and slow-release NPK fertilizers. ";
                break;
            case "loamy":
                recommendation += "Balanced NPK + organic matter recommended. ";
                break;
            case "clayey":
                recommendation += "Gypsum and NPK fertilizers help improve drainage. ";
                break;
            case "silty":
                recommendation += "Add NPK + organic compost to improve fertility. ";
                break;
            case "peaty":
                recommendation += "Good organic matter content, adjust NPK as needed. ";
                break;
            case "chalky":
                recommendation += "Use sulfur + NPK fertilizers to reduce alkalinity. ";
                break;
        }

        // Nutrient deficiency suggestions
        if(N === "low") recommendation += "Increase nitrogen levels. ";
        if(P === "low") recommendation += "Increase phosphorus levels. ";
        if(K === "low") recommendation += "Increase potassium levels. ";

        // pH adjustment
        if(pH === "acidic") recommendation += "Consider liming to neutralize acidity. ";
        if(pH === "alkaline") recommendation += "Consider adding sulfur to reduce alkalinity. ";
    }

    document.getElementById('result').innerText = recommendation;
}



