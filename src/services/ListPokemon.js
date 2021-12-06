const API_BASE = 'https://pokeapi.co/api/v2';

const basicFetch = async (endpoint) => {
    try {
        const req = await fetch(`${API_BASE}${endpoint}`)
        const json = await req.json()
        console.log(json)
        return json
        // console.log(API_BASE, endpoint)
      
    } catch (error) {
        console.log(error)
    }
   
}

  export const getPokemonList = async () => {
        return [
            {
                slug: 'pokemons',
                title: 'Pokemons',
                itens: await basicFetch(`/pokemon/riolu`)
            },
        ];
    }





