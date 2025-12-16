// Pokemon buttons
const bulbasaurButton = document.querySelector("#bulbasaur");
const charmanderButton = document.querySelector("#charmander");
const squirtleButton = document.querySelector("#squirtle");
const pikachuButton = document.querySelector("#pikachu");

// Image container where image will appear

const getPokemonImage = pokemon => {
    const imageContainer = document.querySelector(".pkmn-image-container");
    const imagePath = `assets/${pokemon}.jpg`;
    imageContainer.innerHTML = `<img src=${imagePath} alt="Original ${pokemon} watercolor image" />`;
}

bulbasaurButton.addEventListener("click", () => {
    getPokemonImage("bulbasaur");
});

charmanderButton.addEventListener("click", () => {
    getPokemonImage("charmander");
});

squirtleButton.addEventListener("click", () => {
    getPokemonImage("squirtle");
});

pikachuButton.addEventListener("click", () => {
    getPokemonImage("pikachu");
});