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
  backgroundColor : "white",
  border :0,
  color : "title",
  height : 3,
  onClick:console.log("clicou")
}