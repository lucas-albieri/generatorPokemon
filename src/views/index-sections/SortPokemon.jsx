import "./SortPokemon.css"

import React from "react";
import { Container } from "reactstrap";
import { getPokemonList } from "services/ListPokemon";


// plugin that creates slider

// import backFooter from "../../assets/img/antoine-barres2.png"


function SortPokemon() {

  let Listagem = getPokemonList()

  return (
    <>
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <h1 className="h1-top">Descubra qual é o seu Pokemon.</h1>
        <button className="saiba-pok">CLIQUE AQUI E SAIBA SEU POKEMON</button>

        {getPokemonList.map((e, key) => (
          <div className="list-pokemons">
            <h1>{e.name}</h1>
          </div>
        ))}


      </Container>
    </>
  );
}

export default SortPokemon;
