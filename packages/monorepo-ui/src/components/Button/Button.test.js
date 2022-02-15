import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import Button from "./Button"

describe("Button component",()=>{
  const onClick = jest.fn()

  it("Render component", ()=>{
    render (<Button
              backgroundColor={"white"}
              border={0}
              isDisabled={false}
              color={"title"}
              height={3}>
                  Test
            </Button>)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()

    const childrenText = screen.getByText("Test")
    expect(childrenText).toBeInTheDocument()
  })

  it("should execute click function", ()=>{
      render (<Button
                backgroundColor={"white"}
                border={0}
                isDisabled={false}
                color={"title"}
                onClick={onClick}
                height={3}>
                    Test
              </Button>)
      const button = screen.getByRole("button")
      fireEvent.click(button)

      expect(onClick.mock.calls.length).toBe(1)
  })

  it("should execute click function", ()=>{
    render (<Button
              backgroundColor={"white"}
              border={0}
              isDisabled={true}
              color={"title"}
              onClick={onClick}
              height={3}>
                  Test
            </Button>)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()

    fireEvent.click(button)

    expect(onClick.mock.calls.length).toBe(0)
  })
  

})
