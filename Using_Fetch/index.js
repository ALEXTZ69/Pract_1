const {BuscarPokemon} = require ("./pokemon")

console.log(BuscarPokemon(1).then((pokemon)=>{console.log(pokemon)}))