import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm(addPokemon) {

  const[formPokemon, setFormPokemon] = useState({
    name: '', 
    hp: '',
    front: '',
    back: '',

  })

  function handleChange(e) {
    setFormPokemon({...formPokemon, [e.target.name]: e.target.value,
    });

  }

  function handleSubmit(e){
    e.preventDefault()
    const newPokemon ={
      name: formPokemon.name,
      hp: formPokemon.hp,
      sprites:{
        front: formPokemon.frontUrl,
        back: formPokemon.backUrl,
      }
      
      
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {'Content-Type' : 'application/json'}, body: JSON.stringify(newPokemon)
    })
    .then(resp => resp.json())
    .then(addPokemon)
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formPokemon.name} onChange={handleChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formPokemon.hp} onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formPokemon.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formPokemon.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
