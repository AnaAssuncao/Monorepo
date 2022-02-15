import React from "react";
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import Timer from "./Timer"

const args ={
  minuteLeft:1,
  minuteRight:1,
  secondLeft:1,
  secondRight:1,
}

describe("Timer component",()=>{
  it("Render component",()=>{
    render(<Timer {...args}/>)

    const times = screen.getAllByText(`${args.minuteLeft}`)
    expect(times.length).toBe(4)
    expect(times[0]).toBeInTheDocument()
  })
})
