import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { getSortPokemon } from "services/ListPokemon";

import loading1 from "../../assets/img/loading.gif"
import loading2 from "../../assets/img/loading2.gif"
import loading3 from "../../assets/img/loading3.gif"

import "./SortPokemon.css"

const SortPokemon = () => {

    const [loading, setLoading] = useState(true)
    const [sorteio, setSorteio] = useState([])

    const load = async () => {
        try {
            setLoading(true)
            const pokemon = await getSortPokemon()
            setSorteio(pokemon)
            console.log(pokemon)
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }


    useEffect(() => {
      
            setTimeout(() => {
                window.scrollTo(0, 150000)
            load()
            }, 2000);
    }, [])


    function colorTypes(name) {
        switch (name) {
            case "grass":
                return "#2ca763"
            case "poison":
                return "#ad57fd"
            case "bug":
                return "#84af7b"
            case "dragon":
                return "linear-gradient(to bottom, #53A4CF 50%, #F16E57 50%)"
            case "fairy":
                return "#f0a2d8"
            case "fire":
                return "#ff7300"
            case "flying":
                return "linear-gradient(to bottom, #39bce0 50%, #ada8a7 50%)"
            case "ghost":
                return "#722fb1"
            case "ground":
                return "linear-gradient(to bottom, #dba75a 50%, #b89910 50%)"
            case "normal":
                return "#999999"
            case "psychic":
                return "#c74dc7"
            case "steel":
                return "#b1a7b1"
            case "dark":
                return "#635d63"
            case "electric":
                return "#e6d117"
            case "fighting":
                return "#d38825"
            case "ice":
                return "#0fd6dd"
            case "water":
                return "#0e7af5"
            case "rock":
                return "#927b2e"

            default:
                break;
        }
    }

    return (
        <>
            {loading ?
                <div style={{ width: "100%", display: "flex" }}>
                    <img className="loading" src={loading2} alt="loading" />
                </div>
                :
                <Container>
                    <button className="back-page" onClick={() => {
                        setLoading(true)
                         setTimeout(() => {
                            window.scrollTo(0, 150000)
                        load()
                        }, 2000);
                    }}>Gerar Outro Pokemon</button>
                    <h1 className="h1-top">Seu Pokemon é:</h1>
                    {sorteio.map((e) => (
                        <div className="pokemon-sorteado" style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px 0px" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h1 className="name-pokemon">{e.pokemon.name}</h1>
                                <h2 className="number-pokemon">Nº{e.pokemon.id}</h2>
                            </div>

                            <img className="sprite-pokemon" src={e.pokemon.sprites.other["official-artwork"].front_default} alt={e.name} />
                            <div style={{ display: "flex", alignItems: "center" }}>
                                {e.pokemon.types.map((f) => (
                                    <h3 className="type-pokemon" style={{ background: colorTypes(f.type.name), color: "white" }}>{f.type.name}</h3>
                                ))}
                                {/* {e.pokemon.abilities.map((a) => (
                                    <div className="abilities-pokemon">
                                        {a.ability.name}
                                    </div>
                                ))} */}
                            </div>
                        </div>
                    ))}


                </Container>
            }
        </>
    );
}

export default SortPokemon;