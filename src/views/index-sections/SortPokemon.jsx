import "./SortPokemon.css"

import React from "react";
import { Container } from "reactstrap";
// plugin that creates slider

import backFooter from "../../assets/img/antoine-barres2.png"


function SortPokemon({ title, itens }) {

  return (
    <>
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <h1 className="h1-top">Descubra qual é o seu Pokemon.</h1>
        <button className="saiba-pok">CLIQUE AQUI E SAIBA SEU POKEMON</button>
        <div className="list-pokemons">
          <img className="listfooter" src={backFooter} alt="img" />
        </div>
      </Container>
    </>
  );
}

export default SortPokemon;
