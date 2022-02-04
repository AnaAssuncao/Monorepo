import React from 'react'

import * as El from './Avatar.style'

export default function Avatar({
  src,
  width
}){

  return (
    <El.Avatar src={src} width={width} alt='imagem'/>
  )
}
