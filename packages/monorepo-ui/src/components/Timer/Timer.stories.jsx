import React from "react"

import Timer from "./Timer"

export default {
  title: "Timer",
  component: Timer,
}

const Template = (args) => <div style={{width:"50%"}}> <Timer {...args} />  </div>

export const Primary = Template.bind({})
Primary.args = {
  minuteLeft:2,
  minuteRight:5,
  secondLeft:0,
  secondRight:0,
}