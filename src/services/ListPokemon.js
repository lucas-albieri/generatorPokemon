const API_BASE = 'https://pokeapi.co/api/v2/pokemon';

const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    console.log(json)
    return json
}

export default {
    getPokemonList: async () =>  {
       return  [
           {
               slug: 'list',
               title: 'Pokemons',
               itens: await basicFetch(`${API_KEY}1`)
           },
           
       ];
   },
  
   
}