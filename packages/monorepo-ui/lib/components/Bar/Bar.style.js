"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BarValue = exports.BarContainer = exports.Bar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BarContainer = _styledComponents["default"].div.withConfig({
  displayName: "Barstyle__BarContainer"
})(["flex:1;height:4px;border-radius:4px;background:", ";margin:0 1.5rem;position:relative;width:100%;"], function (props) {
  return props.theme.color.gray;
});

exports.BarContainer = BarContainer;

var Bar = _styledComponents["default"].div.withConfig({
  displayName: "Barstyle__Bar"
})(["height:4px;border-radius:4px;background:", ";width:", "%;"], function (props) {
  return props.theme.color.green;
}, function (props) {
  return props.width;
});

exports.Bar = Bar;

var BarValue = _styledComponents["default"].span.withConfig({
  displayName: "Barstyle__BarValue"
})(["font-size:1rem;left:", "%;position:absolute;top:12px;transform:translateX(-50%);"], function (props) {
  return props.left;
});

exports.BarValue = BarValue;