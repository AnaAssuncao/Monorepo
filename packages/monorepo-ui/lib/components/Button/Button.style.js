"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = _styledComponents["default"].button.withConfig({
  displayName: "Buttonstyle__Button"
})(["align-items:center;background-color:", ";border:", "px;border-radius:5px;color:", ";cursor:", ";pointer-events:", ";disabled:", ";display:flex;font-weight:600;font-size:1rem;justify-content:center;height:", "rem;width:100%;&:hover{filter:brightness(0.9)}"], function (props) {
  return props.theme.color[props.backgroundColor];
}, function (props) {
  return props.border;
}, function (props) {
  return props.theme.color[props.color];
}, function (props) {
  return props.isDisabled ? "not-allowed" : "pointer";
}, function (props) {
  return props.isDisabled && "none";
}, function (props) {
  return props.isDisabled;
}, function (props) {
  return props.height;
});

exports.Button = Button;