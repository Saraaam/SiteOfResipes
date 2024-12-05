// app.js

import recipes from './data.js'; // Import the recipes data
// import { renderRecipes }  from './recipes.js';*

// Function to create and display recipe cards
const recipesCard = document.createElement("div");



const createRecipeCard = (recipe) => {
    
    return `
        <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all -full sm:w-60w h-70">
            <img src="${recipe.imgSrc}" alt="${recipe.title}" class="w-full  h-48 object-cover rounded-md mb-4">
            <h3 class="text-xl font-semibold text-gray-900">${recipe.title}</h3>
            <p class="text-gray-600">${recipe.description}</p>
        </div>
    `;
};

// Function to render the recipes
const recipesRecipes = () => {
    const container = document.getElementById('recipes-container');
    container.innerHTML = recipes.map(createRecipeCard).join('');
};

// Call renderRecipes to display the data
recipesRecipes();


