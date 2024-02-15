
    let pikachu = {
        type: "electric",
        region: "kanto",
        weight: 6,
        evolution: {
            1: "pichu",
            2: "pikachu",
            3: "raichu"
        },
        caught: false,
        attacks: {
            fast: ["thunder shock", "quick attack", "present"],
            charged: ["discharge", "thunder", "thunderbolt", "wild charge", "surf"],
        },
    }



    let charmander = {
        type: "fire",
        region: "kanto",
        weight: 8.5,
        evolution: {
            1: "charmander",
            2: "charmeleon",
            3: "charizard"
        },
        caught: true,
        attacks: {
            fast: ["ember", "scratch"],
            charged: ["flamethrower", "flame charge", "flame burst"],
        },
    }



    let squirtle = {
        type: "water",
        region: "kanto",
        weight: 9,
        evolution: {
            1: "squirtle",
            2: "wartortle",
            3: "blastoise"
        },
        caught: true,
        attacks: {
            fast: ["tackle", "bubble"],
            charged: ["aqua jet", "aqua tail", "water pulse"],
        },
    }



    let bulbasaur = {
        type: ["grass", "poison"],
        region: "kanto",
        weight: 6.9,
        evolution: {
            1: "bulbasaur",
            2: "ivysaur",
            3: "venusaur"
        },
        caught: false,
        attacks: {
            fast: ["vine whip", "tackle"],
            charged:["seed bomb", "sludge bomb", "power whip"],
        },
    }



  console.log(pokemon.squirtle.evolution[3]);