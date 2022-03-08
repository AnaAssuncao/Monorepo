import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Layout from 'routes/Layout';

import { ThemeProvider } from 'styled-components';
/** monorepo-ui */
import { Theme } from '@monorepo/monorepo-ui/lib/style/Theme';
import GlobalStyle from '@monorepo/monorepo-ui/lib/style/Global';

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  ssrForceFetchDelay: 100,
  link: createHttpLink({
    uri: process.env.BASE_URL,
    credentials: 'same-origin',
    fetch: fetch,
  }),
  ssrForceFetchDelay: 100,
});

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes) {
  hydrate(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Layout />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>,
    rootElement
  );
} else {
  render(<div>RENDER</div>, rootElement);
}
