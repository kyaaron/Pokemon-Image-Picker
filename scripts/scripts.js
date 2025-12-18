import pokedexData from "../assets/data.json" with { type: "json"};

// Pokemon buttons
const bulbasaurButton = document.querySelector("#bulbasaur");
const charmanderButton = document.querySelector("#charmander");
const squirtleButton = document.querySelector("#squirtle");
const pikachuButton = document.querySelector("#pikachu");


const getPokemonImage = pokemon => {
    const imageContainer = document.querySelector(".pkmn-image-container");
    const imagePath = `assets/images/${pokemon}.jpg`;
    imageContainer.innerHTML = `<img src=${imagePath} alt="Original ${pokemon} watercolor image" />`;
}

const getPokedexData = pokemon => {
    const dataContainer = document.querySelector(".pokedex-info");

    const getPokemon = pokedexData[pokemon];

    dataContainer.innerHTML = `
        <h2>${getPokemon.name}</h2>
        <p class="pokedex-paragraph"><strong>Pokedex Number</strong><br>${getPokemon.number.toString()}</p>
        <p class="pokedex-paragraph"><strong>Type</strong><br>${getPokemon.type}</p>
        <p class="pokedex-paragraph"><strong>Description</strong><br>${getPokemon.description}</p>`
}

bulbasaurButton.addEventListener("click", () => {
    getPokemonImage("bulbasaur");
    getPokedexData("bulbasaur");
});

charmanderButton.addEventListener("click", () => {
    getPokemonImage("charmander");
    getPokedexData("charmander");
});

squirtleButton.addEventListener("click", () => {
    getPokemonImage("squirtle");
    getPokedexData("squirtle");
});

pikachuButton.addEventListener("click", () => {
    getPokemonImage("pikachu");
    getPokedexData("pikachu");
});