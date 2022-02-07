"use strict";

var _react = _interopRequireDefault(require("react"));

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _reactDom = require("react-dom");

var _client = require("@apollo/client");

var _reactRouterDom = require("react-router-dom");

var _Layout = _interopRequireDefault(require("../Routes/Layout"));

var _styledComponents = require("styled-components");

var _Theme = require("../Style/Theme");

var _Global = _interopRequireDefault(require("../Style/Global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var client = new _client.ApolloClient({
  link: (0, _client.createHttpLink)({
    uri: "http://localhost:4000/",
    credentials: "same-origin",
    fetch: _crossFetch["default"]
  }),
  ssrForceFetchDelay: 100,
  cache: new _client.InMemoryCache().restore(window.__APOLLO_STATE__)
});
var rootElement = document.getElementById('root');

if (rootElement.hasChildNodes) {
  (0, _reactDom.hydrate)( /*#__PURE__*/_react["default"].createElement(_client.ApolloProvider, {
    client: client
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: _Theme.Theme
  }, /*#__PURE__*/_react["default"].createElement(_Global["default"], null), /*#__PURE__*/_react["default"].createElement(_Layout["default"], null)))), rootElement);
} else {
  (0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement("div", null, "RENDER"), rootElement);
}