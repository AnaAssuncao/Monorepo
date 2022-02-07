"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileName = exports.ProfileLevel = exports.ProfileImg = exports.ProfileContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProfileContainer = _styledComponents["default"].div.withConfig({
  displayName: "Profilestyle__ProfileContainer"
})(["display:flex;align-items:center;"]);

exports.ProfileContainer = ProfileContainer;

var ProfileImg = _styledComponents["default"].img.withConfig({
  displayName: "Profilestyle__ProfileImg"
})(["border:2px solid ", ";border-radius:70px;display:flex;align-items:center;height:100px;margin-right:1.5rem;width:100px;"], function (props) {
  return props.theme.color.gray;
});

exports.ProfileImg = ProfileImg;

var ProfileName = _styledComponents["default"].input.withConfig({
  displayName: "Profilestyle__ProfileName"
})(["background-color:", ";border-bottom:2px solid ", ";color:", ";font-size:1.5rem;font-weight:600;"], function (props) {
  return props.theme.color.background;
}, function (props) {
  return props.theme.color.gray;
}, function (props) {
  return props.theme.color.title;
});

exports.ProfileName = ProfileName;

var ProfileLevel = _styledComponents["default"].div.withConfig({
  displayName: "Profilestyle__ProfileLevel"
})(["font-size:1rem;margin-top:0.5rem;color:", ";"], function (props) {
  return props.theme.color.title;
});

exports.ProfileLevel = ProfileLevel;