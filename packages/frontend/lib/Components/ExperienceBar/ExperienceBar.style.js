"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperienceBarText = exports.ExperienceBarSlider = exports.ExperienceBarCurrent = exports.ExperienceBarContainer = exports.ExperienceBar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ExperienceBarContainer = _styledComponents["default"].div.withConfig({
  displayName: "ExperienceBarstyle__ExperienceBarContainer"
})(["display:flex;align-items:center;margin-bottom:1rem;width:70%;"]);

exports.ExperienceBarContainer = ExperienceBarContainer;

var ExperienceBarText = _styledComponents["default"].span.withConfig({
  displayName: "ExperienceBarstyle__ExperienceBarText"
})(["font-size:1rem;"]);

exports.ExperienceBarText = ExperienceBarText;

var ExperienceBarSlider = _styledComponents["default"].div.withConfig({
  displayName: "ExperienceBarstyle__ExperienceBarSlider"
})(["flex:1;height:4px;border-radius:4px;background:", ";margin:0 1.5rem;position:relative;width:100%;"], function (props) {
  return props.theme.color.gray;
});

exports.ExperienceBarSlider = ExperienceBarSlider;

var ExperienceBarCurrent = _styledComponents["default"].span.withConfig({
  displayName: "ExperienceBarstyle__ExperienceBarCurrent"
})(["font-size:1rem;left:", ";position:absolute;top:12px;transform:translateX(-50%);"], function (props) {
  return props.left;
});

exports.ExperienceBarCurrent = ExperienceBarCurrent;

var ExperienceBar = _styledComponents["default"].div.withConfig({
  displayName: "ExperienceBarstyle__ExperienceBar"
})(["height:4px;border-radius:4px;background:", ";width:", "%;"], function (props) {
  return props.theme.color.green;
}, function (props) {
  return props.width;
});

exports.ExperienceBar = ExperienceBar;