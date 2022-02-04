import React from "react"

import Bar from "./Bar"

export default {
  title: "Bar",
  component: Bar,
  argTypes: { onClick: { action: "clicked" } }
}

const Template = (args) => <Bar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  widht:60,
  left:20,
  value:60
}