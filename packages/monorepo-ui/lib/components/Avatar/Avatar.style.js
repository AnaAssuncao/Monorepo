"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Avatar = _styledComponents["default"].img.withConfig({
  displayName: "Avatarstyle__Avatar"
})(["border:2px solid ", ";border-radius:70px;display:flex;align-items:center;height:", "px;margin-right:1.5rem;width:", "px;"], function (props) {
  return props.theme.color.gray;
}, function (props) {
  return props.width;
}, function (props) {
  return props.width;
});

exports.Avatar = Avatar;