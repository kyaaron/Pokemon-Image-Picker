// Pokemon buttons
const bulbasaurButton = document.querySelector("#bulbasaur");
const charmanderButton = document.querySelector("#charmander");
const squirtleButton = document.querySelector("#squirtle");
const pikachuButton = document.querySelector("#pikachu");

// Image container where image will appear

const getPokemonImage = pokemon => {
    console.log("Function begin");
    const imageContainer = document.querySelector(".pkmn-image-container");
    const imagePath = `assets/${pokemon}.jpeg`;
    imageContainer.innerHTML = `<img src="${imagePath}" alt="Original ${pokemon} watercolor image" />`;
    console.log("function finished");
}

bulbasaurButton.addEventListener("click", () => {
    getPokemonImage("bulbasaur");
});

charmanderButton.addEventListener("click", () => {
    getPokemonImage("charmander");
});