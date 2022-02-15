import React from "react";
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import Avatar from "./Avatar"

const src = "https://static.vecteezy.com/ti/vetor-gratis/t1/594333-a-cabeca-e-o-rosto-da-forma-alienigena-sao-simples-vetor.jpg";

describe("Avatar component",()=>{
  it("Render component",()=>{
    render(<Avatar src={src}/>)
    const img = screen.getByRole("img")

    expect(img).toBeInTheDocument()
  })
})
