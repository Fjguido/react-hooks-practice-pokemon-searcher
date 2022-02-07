import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const[pokemon, setPokemon]=useState([])
  const[search, setSearch]=useState('')

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((resp) => resp.json())
    .then((data) => setPokemon(data))
  }, [])

  const filterPokemon=pokemon.filter((data) => {
    return data.name.toLowerCase().includes(search.toLowerCase())
  })

  function addPokemon(newPokemon){
    setPokemon([...pokemon, newPokemon])

  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search setSearch={setSearch} search={search} />
      <br />
      <PokemonCollection pokemon={filterPokemon}/>
    </Container>
  );
}

export default PokemonPage;
