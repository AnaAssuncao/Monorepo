import * as React from 'react'

import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/style/Theme'
import  GlobalStyle  from '../src/style/Global'

import { 
  addDecorator, 
} from '@storybook/react'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(Story => (
  <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
))