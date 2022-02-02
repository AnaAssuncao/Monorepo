import React from "react";
import fetch from 'cross-fetch';
import { hydrate, render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from "@apollo/client";
import { BrowserRouter } from 'react-router-dom'

import Layout from "./Routes/Layout";

import { ThemeProvider } from 'styled-components'
import { Theme } from './Style/Theme'
import  GlobalStyle  from './Style/Global'

const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:4000/",
    credentials: "same-origin",
    fetch: fetch,
  }),
  ssrForceFetchDelay: 100,
  cache: new InMemoryCache(),
  ssrForceFetchDelay: 100
});

const rootElement = document.getElementById('root')

render(     
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Layout />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>,
    rootElement)
