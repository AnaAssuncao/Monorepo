import React from "react"

import Avatar from "./Avatar"

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: { onClick: { action: "clicked" } }
}

const Template = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    src: "https://static.vecteezy.com/ti/vetor-gratis/t1/594333-a-cabeca-e-o-rosto-da-forma-alienigena-sao-simples-vetor.jpg", 
    width:100
}