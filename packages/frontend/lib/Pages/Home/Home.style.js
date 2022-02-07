"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeSection = exports.HomeContainer = exports.HomeBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HomeContainer = _styledComponents["default"].div.withConfig({
  displayName: "Homestyle__HomeContainer"
})(["align-items:center;background-color:", ";display:flex;flex-direction:column;justify-content:center;height:85%;padding-top:2rem;"], function (props) {
  return props.theme.color.background;
});

exports.HomeContainer = HomeContainer;

var HomeSection = _styledComponents["default"].div.withConfig({
  displayName: "Homestyle__HomeSection"
})(["align-content:center;display:grid;flex:1;grid-template-columns:1fr 1fr;gap:6.25rem;width:70%;"]);

exports.HomeSection = HomeSection;

var HomeBox = _styledComponents["default"].div.withConfig({
  displayName: "Homestyle__HomeBox"
})([""]);

exports.HomeBox = HomeBox;