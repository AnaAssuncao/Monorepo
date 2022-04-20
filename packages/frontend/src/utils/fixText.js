import React from "react";

export const lineBreak =(text)=>{
  const newText = text.split('\n').map((item, key) => {
    return <span key={key}>{item}<br /></span>
  })
  return newText
}
