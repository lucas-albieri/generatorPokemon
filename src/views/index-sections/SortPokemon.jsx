import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { getSortPokemon } from "services/ListPokemon";

import "./SortPokemon.css"

const SortPokemon = () => {

    const [loading, setLoading] = useState(true)
    const [sorteio, setSorteio] = useState([])

    useEffect(() => {
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
        load()
    }, [])

    return (
        <>
            {!loading &&
                <Container>
                    <h1 className="h1-top">Seu Pokemon é:</h1>
                    {sorteio.map((e) => (
                        <div className="pokemon-sorteado" style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px 0px" }}>
                            <div>
                            <h1 className="name-pokemon">{e.pokemon.name}</h1>
                            <h2>Nº{e.pokemon.id}</h2>
                            </div>
                            <img className="sprite-pokemon" src={e.pokemon.sprites.other["official-artwork"].front_default} alt={e.name} />
                          
                        </div>
                    ))}
                </Container>
            }
        </>
    );
}

export default SortPokemon;