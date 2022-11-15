let pokemonRepository = (function () {
  
    let pokemonList = [
    {
      name: "Balbasure",
      height: 0.7,
      types: ["grass", "poison"]
    },
    {
      name: "Charizard",
      height: "1.7",
      types: ["fire", "flying"]
    },
    {
      name: "Mew",
      height: 0.4,
      types: ["psychic"]
    }
  ];

  function getAll() {
    return pokemonList;
  }

  
  function add(pokemon) {
    if (typeof pokemon === "object" && "name" && "height" && "types"in pokemon){
    pokemonList.push(pokemon);  
    } else {
      console.log("pokemon is not correct")
    }
  }


   function addListItem(pokemon) {
     let pokemonList = document.querySelector(".pokemon-list");
     let listpokemon = document.createElement("li");
     let button = document.createElement("button");
     button.innerText = pokemon.name;
     button.classList.add("button-class");
     listpokemon.appendChild(button);
     pokemonList.appendChild(listpokemon);


     button.addEventListener('click', function(event) {
                showDetails(pokemon)
        })
     }

     function showDetails(pokemon) {
       console.log(pokemon);
     }


      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
      }
  
  })()

pokemonRepository.add({ name: 'Balbasure', height: 0.7, type: ['Grass', 'Poison'] });
pokemonRepository.add({ name: 'Charizard', height: 1.7, type: ['Fire', 'Flying'] });
pokemonRepository.add({ name: 'Mew', height: 0.4, type: ['psychic'] });

//forEach() function to iterate over the Pokémon in the pokemonList array (external function)
pokemonRepository.getAll().forEach(printDetails);
function printDetails (pokemon) {
	let highlight = '';
	if (pokemon.height > 1.0) {
		highlight = " - Wow, that\’s big!";
	}
	pokemonRepository.addListItem(pokemon);
}
  
  console.log(pokemonRepository.getAll())