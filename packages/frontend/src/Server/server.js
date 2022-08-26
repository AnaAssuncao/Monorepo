import express from 'express';
import React from 'react';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import createApolloClient from './createApolloClient';
import Html from './Html';

import { ServerStyleSheet } from 'styled-components';

const app = express();

// access everything from the folder directly
app.use(express.static('./build/client'));

/** create apollo client */
app.use(createApolloClient);

app.get('*', (req, res) => {
  const APP = res.App;

  getDataFromTree(APP)
    .then(() => {
      const sheet = new ServerStyleSheet();
      // Extract the entirety of the Apollo Client cache's current state
      const content = renderToString(sheet.collectStyles(APP));
      const initialState = res.ApolloClient.extract(); // =client.extract();
      const styleTags = sheet.getStyleTags();

      // Add both the page content and the cache state to a top-level component
      const html = (
        <Html content={content} styles={styleTags} state={initialState} />
      );

      // Render the component to static markup and return it
      res.status(200);
      res.send(`<!DOCTYPE html>\n${renderToStaticMarkup(html)}`);
      res.end();
    })
    .catch((error) => {
      console.warn('< GET DATA FROM TREE : ERROR > ', error);
      res.end();
    });
});

app.listen(process.env.PORT || process.env.PORT_FRONTEND, function () {
  console.log(`Servidor está ouvindo na porta ${process.env.PORT_FRONTEND}`);
});

// get request from html
// app.get("/", function (req, res) {
//   const html = `
//     <!DOCTYPE html>
//         <html>
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport">
//                 <title>React no Servidor</title>
//             </head>
//             <body>
//                 ${ReactDOM.renderToString(<Home />)}
//              **SCRIPT for access everything from the folder directly
//                 <script src="client.bundle.js"></script>
//             </body>
//         </html>
// `;
//   res.send(html);
// });
