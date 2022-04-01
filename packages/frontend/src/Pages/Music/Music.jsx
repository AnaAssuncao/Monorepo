import React, { useState } from "react";
import { useQuery, gql, NetworkStatus } from "@apollo/client";
import SearchMusic from "components/SearchMusic/SearchMusic";
import { lineBreak } from "utils/fixText"

import * as El from './Music.style'

const MUSIC = gql`
  query Query ($artist:String, $title:String) {
    lyrics(artist:$artist,title:$title){
      lyrics
    }
  }
`;

export default function Music() {
  const [objLyrics, setObjLyrics] = useState({ artist: 'Coldplay', title: 'Clocks' })

  const { loading, error, data, refetch, networkStatus } = useQuery(MUSIC, {
    notifyOnNetworkStatusChange: true,
    variables: {
      artist: objLyrics.artist,
      title: objLyrics.title
    }
  });

  if (loading || networkStatus === NetworkStatus.refetch) {
    return (
      <El.MusicContainer>
        <p>Carregando...</p>
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

  const lyrics = data.lyrics.lyrics

  const handleSendMusic = (valueArtist, valueNameMusic) => {
    refetch({ artist: valueArtist, title: valueNameMusic })
    setObjLyrics({ artist: valueArtist, title: valueNameMusic })
  }

  return (
    <El.MusicContainer>
      <SearchMusic handleSendMusic={handleSendMusic} />
      <El.LyricsContainer>
        <El.Artist>{objLyrics.artist}</El.Artist>
        <El.Title>{objLyrics.title}</El.Title>

        {lyrics && (<div>{lineBreak(lyrics)}</div>)}

        {lyrics === null && (<p>Infelizmente não encontramos a letra. Busque uma nova música.</p>)}
      </El.LyricsContainer>
    </El.MusicContainer >
  )
}
