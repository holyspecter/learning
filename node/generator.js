const axios = require('axios');

const getPokemonById = async (id) => {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id);
    
    const prepared = {
        name: data.forms[0].name,
        base_experience: data.base_experience,
        types: data.types.map(o => o.type.name)
    }
    console.log(prepared);
};

const randomInt = (min, max) => {  
    return Math.floor(
        Math.random() * (max - min) + min
    );
}

async function* randomPokemonGenerator() {
    yield await getPokemonById(randomInt(1, 100));
    yield await getPokemonById(randomInt(1, 100));
    yield await getPokemonById(randomInt(1, 100));
}

// console.log(randomPokemonGenerator());

(async () => {
    for await (let pokemon of randomPokemonGenerator()) {
        console.log(pokemon);
    }
})();