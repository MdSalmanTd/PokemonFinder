const container = document.querySelector(".poke-card")
const heading = document.querySelector(".heading")

fetchData();

async function fetchData() {
  try {

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      container.innerText = "Pokemon Not Found!";
      throw new Error("Could not fetch resource");
    } else {
      const data = await response.json()
      heading.innerText = "PokemonFinder";
      container.innerHTML =`
          <div class="w-64 h-auto flex flex-col justify-center rounded-md border-4 p-4 border-gray-500">
            <h2 class="text-center font-bold text-2xl">${data.name.toUpperCase()}</h2>
            <img class="py-4" src=${data.sprites.other.dream_world.front_default} alt="" id="pokemonSprite">
            <div class="flex justify-between">
              <p class="text-lg text-left justify-start font-semibold">Ability: ${data.abilities[0].ability.name}</p>
              <p class="text-lg text-right justify-end font-semibold">Type: ${data.types[0].type.name}</p>
            </div>
          </div>`;
    };
  }
  catch (error) {
    console.error(error);
  }
};