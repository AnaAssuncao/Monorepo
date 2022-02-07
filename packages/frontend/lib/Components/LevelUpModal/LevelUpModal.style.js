"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = exports.LevelUpTitle = exports.LevelUpTSubtitle = exports.LevelUp = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Overlay = _styledComponents["default"].div.withConfig({
  displayName: "LevelUpModalstyle__Overlay"
})(["background:rgba(242,243,245,0.8);position:fixed;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;"]);

exports.Overlay = Overlay;

var LevelUp = _styledComponents["default"].div.withConfig({
  displayName: "LevelUpModalstyle__LevelUp"
})(["background:", ";width:100%;max-width:400px;padding:2rem 3rem;border-radius:5px;box-shadow:0 0 60px rgba(0,0,0,0.05);text-align:center;position:relative;"], function (props) {
  return props.theme.color.white;
});

exports.LevelUp = LevelUp;

var LevelUpTitle = _styledComponents["default"].h2.withConfig({
  displayName: "LevelUpModalstyle__LevelUpTitle"
})(["font-size:8.75rem;font-weight:600;color:", ";"], function (props) {
  return props.theme.color.blue;
});

exports.LevelUpTitle = LevelUpTitle;

var LevelUpTSubtitle = _styledComponents["default"].span.withConfig({
  displayName: "LevelUpModalstyle__LevelUpTSubtitle"
})(["font-size:2.25rem;color:", ";margin-top:0.25rem;"], function (props) {
  return props.theme.color.title;
});

exports.LevelUpTSubtitle = LevelUpTSubtitle;