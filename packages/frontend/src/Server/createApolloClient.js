import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';

import fetch from 'cross-fetch';
import Layout from 'routes/Layout';

import { ThemeProvider } from 'styled-components';
/** monorepo-ui */
import { Theme } from '@monorepo/monorepo-ui/lib/style/Theme';
import GlobalStyle from '@monorepo/monorepo-ui/lib/style/Global';

const createApolloClient = (req, res, next) => {
  res.ApolloClient = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: process.env.BASE_URL,
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie'),
      },
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
  });

  const context = {};

  res.App = (
    <ApolloProvider client={res.ApolloClient}>
      <StaticRouter location={req.url} context={context}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Layout />
        </ThemeProvider>
      </StaticRouter>
    </ApolloProvider>
  );

  next();
};

export default createApolloClient;
