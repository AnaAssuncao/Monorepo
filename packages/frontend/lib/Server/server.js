"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireWildcard(require("react-dom/server"));

var _ssr = require("@apollo/client/react/ssr");

var _styledComponents = require("styled-components");

var _Html = _interopRequireDefault(require("./Html"));

var _createApolloClient = _interopRequireDefault(require("./createApolloClient"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // access everything from the folder directly

app.use(_express["default"]["static"]("./build/client"));
/** create apollo client */

app.use(_createApolloClient["default"]);
app.use(function (req, res) {
  // Replace the TODO with this
  (0, _ssr.getDataFromTree)(res.App, _server.renderToString).then(function () {
    var sheet = new _styledComponents.ServerStyleSheet(); // Extract the entirety of the Apollo Client cache's current state

    var content = (0, _server.renderToString)(sheet.collectStyles(res.App));
    var initialState = res.apolloClient.extract(); // =client.extract();

    var styleTags = sheet.getStyleTags(); // Add both the page content and the cache state to a top-level component

    var html = /*#__PURE__*/_react["default"].createElement(_Html["default"], {
      content: content,
      styles: styleTags,
      state: initialState
    }); // Render the component to static markup and return it


    res.status(200);
    res.send("<!DOCTYPE html>\n".concat(_server["default"].renderToStaticMarkup(html)));
    res.end();
  })["catch"](function (error) {
    console.warn("< GET DATA FROM TREE : ERROR > ", error);
    res.end();
  });
});
app.listen(3030, function () {
  console.log("Servidor está ouvindo na porta 3030");
}); // get request from html
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