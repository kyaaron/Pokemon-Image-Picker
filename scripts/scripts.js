import pokedexData from "../assets/data.json" with { type: "json"};

// Pokemon buttons
const bulbasaurButton = document.querySelector("#bulbasaur");
const charmanderButton = document.querySelector("#charmander");
const squirtleButton = document.querySelector("#squirtle");
const pikachuButton = document.querySelector("#pikachu");

const searchButton = document.querySelector(".search-btn");

const getPokemonData = () => {
    let searchBarValue = document.querySelector(".search-bar").value;
    const dataContainer = document.querySelector(".pokedex-info");

    searchBarValue = searchBarValue.toLowerCase();
    const pokemon = pokedexData[searchBarValue];

    if (pokemon === undefined) { 
        dataContainer.innerHTML = "<p>No Pokemon found</p>";
        return 0;
    }

    getPokemonImage(searchBarValue);

    dataContainer.innerHTML = `
        <h2>${pokemon.name}</h2>
        <p class="pokedex-paragraph"><strong>Pokedex Number</strong><br>${pokemon.number.toString()}</p>
        <p class="pokedex-paragraph"><strong>Type</strong><br>${pokemon.type}</p>
        <p class="pokedex-paragraph"><strong>Description</strong><br>${pokemon.description}</p>`
}

const getPokemonImage = pokemon => {
    const imageContainer = document.querySelector(".pkmn-image-container");
    const imagePath = `assets/images/${pokemon}.jpg`;
    imageContainer.innerHTML = `<img src=${imagePath} alt="Original ${pokemon} watercolor image" />`;
}



searchButton.addEventListener("click", getPokemonData);

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