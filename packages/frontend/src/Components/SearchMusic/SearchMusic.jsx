import React, { useRef } from "react"
import Button from '@monorepo/monorepo-ui/lib/components/Button'

import * as El from './SearchMusic.style'

export default function SearchMusic({ handleSendMusic }) {

    const form = useRef(null)

    const sendMusic = async (event) => {
        event.preventDefault();
        const artist = event.target[0].value
        const nameMusic = event.target[1].value
        handleSendMusic(artist, nameMusic)
    }

    return (
        <El.SearchMusicContainer ref={form} onSubmit={sendMusic}>

            <El.Input type="text" required name='artist' placeholder="Artista" />
            <El.Input type="text" required name='music' placeholder="Música" />
            <El.Button>
                <Button
                    type="submit"
                    color="white"
                    backgroundColor="blue"
                    height={3}
                    border={0}
                    onClick={() => console.log("Buscar")}
                >Buscar</Button>
            </El.Button>

        </El.SearchMusicContainer>
    )
}
