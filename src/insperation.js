// ES6 - Tableau d'objets représentant des recettes saines avec des liens et des images
const items = [
    {
        title: "Salade de quinoa",
        description: "Une salade fraîche avec du quinoa, des légumes et une vinaigrette légère.",
        link: "",
        image: "https://i.pinimg.com/736x/7c/16/c2/7c16c2087e80adaa55b16ef53b225958.jpg"
    },
    {
        title: "Poulet grillé aux épices",
        description: "Un poulet tendre et savoureux, assaisonné d'épices, parfait pour un dîner léger.",
        link: "",
        image: "https://i.pinimg.com/736x/fb/e9/b4/fbe9b44b2cf46d9fa5fe77351c938e15.jpg"
    },
    {
        title: "Smoothie aux fruits rouges",
        description: "Un smoothie sain, riche en antioxydants, parfait pour le matin.",
        link: "",
        image: "https://i.pinimg.com/736x/26/ae/99/26ae9900c2788c13cef7c68b6c5cdb6d.jpg"
    },
    {
        title: "Soupe de légumes",
        description: "Une soupe maison aux légumes de saison, pleine de saveurs et de nutriments.",
        link: "",
        image: "https://i.pinimg.com/736x/ca/23/ca/ca23cac54958642c637ec18bccfdca87.jpg"
    },
 
    {
        title: "riz with chiken",
        description: "riz à base de chiken, garnis de chiken.",
        link: "",
        image: "https://i.pinimg.com/736x/1d/06/b5/1d06b5205a028fdd99d476ad3105986e.jpg"
    },
    {
        title: "Tacos de poisson",
        description: "Des tacos légers à base de poisson grillé, garnis de légumes frais.",
        link: "",
        image: "https://i.pinimg.com/736x/2d/71/b9/2d71b960a8f248761f299ad48689ed20.jpg"
    }
];

// Fonction pour créer un item de la grille sous forme de HTML avec un lien, une description, et une image
const createGridItem = (item) => `
    <a href="${item.link}" target="_blank" class="block bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover rounded-t-lg mb-4">
        <h3 class="text-xl font-semibold text-gray-900">${item.title}</h3>
        <p class="text-gray-600">${item.description}</p>
    </a>
`;

// Sélectionner le conteneur de la grille
const gridContainer = document.getElementById("Insperation");

// Remplir la grille avec les éléments générés
items.forEach(item => {
    const gridItem = createGridItem(item);
    gridContainer.innerHTML += gridItem;  // Ajouter chaque élément à la grille
});
