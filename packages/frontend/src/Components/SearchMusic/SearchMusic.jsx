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

            <El.Input type="text" required name='artist' />
            <El.Input type="text" required name='music' />
            <Button
                type="submit"
                color="white"
                backgroundColor="blue"
                height={5}
                border={0}
            >Buscar</Button>


        </El.SearchMusicContainer>
    )
}
