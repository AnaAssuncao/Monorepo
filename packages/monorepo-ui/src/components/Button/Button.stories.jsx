import React from "react"

import Button from "./Button"

export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } }
}

const Template = (args) => <Button {...args}> Teste       </Button>

export const Primary = Template.bind({})
Primary.args = {
  onClick:console.log("clicou"),
  color : "title",
  backgroundColor : "white",
  height : 3,
  border :0
}