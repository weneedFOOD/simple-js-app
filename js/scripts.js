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
    if(pokemonList[i].height >= 5) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - Wow, that is big!" + "<br>")
    }
    else if (pokemonList[i].height >= 2 && pokemonList[i].height < 5){
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - That is a medium pokemon!" + "<br>")
    }
    else {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - That is a small pokemon!" + "<br>")
    }
}*/

/*let pokemonRepository = [
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
