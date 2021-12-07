import "./SortPokemon.css"

import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { getPokemonList } from "services/ListPokemon";


// plugin that creates slider

// import backFooter from "../../assets/img/antoine-barres2.png"


function SortPokemon() {

  const [loading, setLoading] = useState(true)
  const [listagem, setListagem] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        const pokemon = await getPokemonList()
        console.log(pokemon)
        setListagem(pokemon)
      } catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const sprites = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png",
  ]
  const idPokemon = [
   "446",
   "447",
   "448",
   "449",
   "450",
   "451",
   "452",
   "453",
   "454",
   "455",
   "456",
   "457",
   "458",
   "459",
   "460",
  ]

  return (
    <>
      {!loading &&
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <h1 className="h1-top">Descubra qual é o seu Pokemon.</h1>
          <button className="saiba-pok">CLIQUE AQUI E SAIBA SEU POKEMON</button>
          <div className="list-pokemons">
            {listagem[0].itens.results.map((e, index) => (
              <div className="pokemon" style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "30px 0px", marginTop: "40px" }}>
                {/* <img src={e.url.sprites.other["official-artwork"].front_default} alt={e.name} /> */}
                <img src={sprites[index]} alt={e.name} />
                {/* <h2>Nº{e.itens.results.id}</h2> */}
                  <h2>Nº{idPokemon[index]}</h2>
                <h1>{e.name}</h1>
              </div>
            ))}
          </div>

        </Container>
      }
    </>
  );
}

export default SortPokemon;
