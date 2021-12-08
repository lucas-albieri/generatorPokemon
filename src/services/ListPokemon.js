const API_BASE = 'https://pokeapi.co/api/v2';


const basicFetch = async (endpoint) => {
    try {
        const req = await fetch(`${API_BASE}${endpoint}`)
        const json = await req.json()
    
        return json
        // console.log(API_BASE, endpoint)
      
    } catch (error) {
        console.log(error)
    }
}

const id = Math.floor(Math.random() * 500);


  export const getPokemonList = async () => {
        return [
            {
                slug: 'pokemons',
                title: 'Pokemons',
                itens: await basicFetch(`/pokemon/?limit=12&offset=446"`)
            },
        ];
    }

    export const getSortPokemon = async () => {
        return [
            {
                slug: 'pokemonsorteado',
                title: 'PokemonSorteio',
                pokemon: await basicFetch(`/pokemon/${id}`)
            },
        ];
    }






