let pokemonList=[
  {
    name: "Balbasure", height: 0.7, type: ["grass","poison"]
  },
  {
    name: "Charizard", height: 1.7, type:["fire","flying"]
  },
  {
    name: "Mew", height: 0.4, type: ["psychic"]
  }
];

for (let i = 0;
    i < pokemonList.length; i++) {
    if(pokemonList[i].height >= 1.7) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - Wow, that is big!" + "<br>")
    }
    else if (pokemonList[i].height >= 1 && pokemonList[i].height < 1.5){
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - That is a medium pokemon!" + "<br>")
    }
    else {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - That is a small pokemon!" + "<br>")
    }
  };


let pokemonRepository = [
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
    if (typeof pokemon === 'object' && 'name' in pokemon){
    pokemonList.push(pokemon);  
    }
  }

   function addListItem(pokemon) {
     let pokemonList = document.querySelector('.pokemon-list');

     let listItem = document.createElement('li');

     let button = document.createElement('button');
     button.innerText = pokemon.name
     button.classList.add('button-class');

     listItem.appendChild(button);
     pokemonList.appendChild(listItem);

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


   