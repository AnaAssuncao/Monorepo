import React from "react"

import Bar from "./Bar"

export default {
  title: "Bar",
  component: Bar,
}

const Template = (args) => <div style={{width:"70%"}}> <Bar {...args} />  </div>

export const Primary = Template.bind({})
Primary.args = {
  width:20,
  left:20,
  value:60
}