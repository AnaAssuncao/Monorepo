import React, { useState } from "react";
import { useQuery, gql, NetworkStatus } from "@apollo/client";
import SearchMusic from "components/SearchMusic/SearchMusic";
import { lineBreak } from "utils/fixText"

import * as El from './Music.style'

const MUSIC = gql`
  query Lyrics($title: String, $artist: String) {
    lyrics(title: $title, artist: $artist) {
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
        <SearchMusic handleSendMusic={handleSendMusic} />
        <El.LyricsContainer>
          <El.Label>Carregando a letra da música...</El.Label>
        </El.LyricsContainer>
      </El.MusicContainer>
    )
  }

  if (error) {
    return (
      <El.MusicContainer>
        <SearchMusic handleSendMusic={handleSendMusic} />
        <El.LyricsContainer>
          <El.Label>Erro na busca... :/</El.Label>
        </El.LyricsContainer>
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
        {lyrics && (
          <div>
            <El.Title>{objLyrics.title}</El.Title>
            <El.Artist>{objLyrics.artist}</El.Artist>
            {lineBreak(lyrics)}
          </div>)}

        {lyrics === null && (<El.Label>Infelizmente não encontramos a letra. Busque uma nova música.</El.Label>)}
      </El.LyricsContainer>
    </El.MusicContainer >
  )
}
