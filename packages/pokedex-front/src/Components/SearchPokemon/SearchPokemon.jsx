import React, { useRef } from "react"
import Button from '@monorepo/monorepo-ui/lib/components/Button'

import * as El from './SearchPokemon.style'

export default function SearchPokemon({ searchPokemon }) {

  const form = useRef(null)

  const sendPokemon = async (event) => {
    event.preventDefault();
    const namePokemon = event.target[0].value
    searchPokemon(namePokemon)
  }

  return (
    <El.SearchPokemonContainer ref={form} onSubmit={sendPokemon}>

      <El.Input type="text" required name='pokemon' placeholder="Pokemon" />

      <El.Button>
        <Button
          type="submit"
          color="white"
          backgroundColor="red"
          height={3}
          border={0}
          onClick={() => console.log("Buscar")}
        >Buscar</Button>
      </El.Button>

    </El.SearchPokemonContainer>
  )
}