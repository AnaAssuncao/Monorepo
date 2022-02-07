"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Html = function Html(_ref) {
  var content = _ref.content,
      styles = _ref.styles,
      state = _ref.state;
  return /*#__PURE__*/_react["default"].createElement("html", null, /*#__PURE__*/_react["default"].createElement("head", null, /*#__PURE__*/_react["default"].createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
  }), /*#__PURE__*/_react["default"].createElement("title", null, "Monorepo"), /*#__PURE__*/_react["default"].createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700",
    rel: "stylesheet"
  }), /*#__PURE__*/_react["default"].createElement("head", {
    dangerouslySetInnerHTML: {
      __html: styles
    }
  }), /*#__PURE__*/_react["default"].createElement("script", {
    src: "client.bundle.js",
    defer: true
  }), /*#__PURE__*/_react["default"].createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__APOLLO_STATE__=".concat(JSON.stringify(state).replace(/</g, "\\u003c"))
    }
  })), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  })));
};

var _default = Html;
exports["default"] = _default;