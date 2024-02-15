function catchEmAll() {
    if (pokemon.pikachu.caught == false) {
        console.log("Throw Pokeball!");
        pokemon.pikachu.caught = true;
        return;
      }
      else {
        console.log("This Pokemon is already in your Pokedex.");
        return;
      }
  }
  catchEmAll();
  console.log(pokemon.pikachu.caught);
  //catchEmAll();
  //console.log(pokemon.bulbasaur.caught);