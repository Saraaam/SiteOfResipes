// recipes.js
export function createRecipesCard(recipe) {
    const recipesCard = document.createElement("div");
// Function to create a recipe card
const createRecipeCard = (recipe) => {
    return `
        <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all w-full h-72">
            <img src="${recipe.imgSrc}" alt="${recipe.title}" class="w-full h-48 object-cover rounded-md mb-4">
            <h3 class="text-xl font-semibold text-gray-900">${recipe.title}</h3>
            <p class="text-gray-600">${recipe.description}</p>
        </div>
    `;
};
return recipestCard;
}