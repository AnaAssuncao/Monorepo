import React from "react";
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import Bar from "./Bar"

const args ={
  width:20,
  left:20,
  value:60
}

describe("Bar component",()=>{
  it("Render component",()=>{
    render(<Bar {...args}/>)
    const text = screen.getByText(`${args.value}px`)

    expect(text).toBeInTheDocument()
  })
})
