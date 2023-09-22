const {httpclient} = require ("./Plugins/httpclient")

const searchPokemonById = async(id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonFound = await httpclient.get(url)
    return pokemonFound.name
}

module.exports = {
    BuscarPokemon: searchPokemonById
}