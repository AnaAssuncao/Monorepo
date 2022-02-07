"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _client = require("@apollo/client");

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _Layout = _interopRequireDefault(require("../Routes/Layout"));

var _server = require("react-router-dom/server");

var _styledComponents = require("styled-components");

var _Theme = require("../Style/Theme");

var _Global = _interopRequireDefault(require("../Style/Global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createApolloClient = function createApolloClient(req, res, next) {
  res.apolloClient = new _client.ApolloClient({
    ssrMode: true,
    link: (0, _client.createHttpLink)({
      uri: "http://localhost:4000/",
      credentials: "same-origin",
      headers: {
        cookie: req.header("Cookie")
      },
      fetch: _crossFetch["default"]
    }),
    cache: new _client.InMemoryCache()
  });
  var context = {};
  res.App = /*#__PURE__*/_react["default"].createElement(_client.ApolloProvider, {
    client: res.apolloClient
  }, /*#__PURE__*/_react["default"].createElement(_server.StaticRouter, {
    location: req.url,
    context: context
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: _Theme.Theme
  }, /*#__PURE__*/_react["default"].createElement(_Global["default"], null), /*#__PURE__*/_react["default"].createElement(_Layout["default"], null))));
  next();
};

var _default = createApolloClient;
exports["default"] = _default;