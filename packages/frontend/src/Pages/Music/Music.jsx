import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import SearchMusic from "components/SearchMusic/SearchMusic";

import * as El from './Music.style'

const MUSIC = gql`
  query Query ($artist:String, $title:String) {
    music (artist:$artist,title:$title){
      lyrics
    }
  }
`;

export default function Music() {
  const [objLyrics, setObjLyrics] = useState({ artist: 'ColdpLay', nameMusic: 'clocks' })

  const { loading, error, data } = useQuery(MUSIC, {
    variables: {
      artist: objLyrics.artist,
      title: objLyrics.nameMusic
    }
  });

  if (loading) {
    return (
      <El.MusicContainer>
        <p>Loading...</p>
      </El.MusicContainer>
    )
  }

  if (error) {
    return (
      <El.MusicContainer>
        <p>Erro :( </p>
      </El.MusicContainer>
    );
  }

  const lyrics = data.lyrics
  const errorLyrics = data.error

  const handleSendMusic = (valueArtist, valueNameMusic) => {
    setObjLyrics({ artist: valueArtist, nameMusic: valueNameMusic })
  }

  return (
    <El.MusicContainer>
      <El.Music>
        <SearchMusic handleSendMusic={handleSendMusic} />
        <El.LyricsContainer>
          {lyrics && (<div>{lyrics}</div>)}
          {errorLyrics && (<div>Busque novamente</div>)}
        </El.LyricsContainer>
      </El.Music>
    </El.MusicContainer >
  )
}
