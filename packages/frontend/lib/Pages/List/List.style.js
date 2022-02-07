"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTitle = exports.ListItem = exports.ListDescription = exports.ListContainer = exports.List = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListContainer = _styledComponents["default"].div.withConfig({
  displayName: "Liststyle__ListContainer"
})(["align-items:center;background-color:", ";display:flex;flex-direction:column;justify-content:center;height:85%;padding-top:2rem;"], function (props) {
  return props.theme.color.background;
});

exports.ListContainer = ListContainer;

var List = _styledComponents["default"].ul.withConfig({
  displayName: "Liststyle__List"
})(["align-items:center;background-color:", ";display:flex;flex-direction:column;height:90%;padding:50px 0;width:80%;overflow:auto;"], function (props) {
  return props.theme.color.white;
});

exports.List = List;

var ListItem = _styledComponents["default"].li.withConfig({
  displayName: "Liststyle__ListItem"
})(["border-bottom:1px solid ", ";display:flex;flex-direction:column;justify-content:center;padding:24px 0;width:80%;"], function (props) {
  return props.theme.color.gray;
});

exports.ListItem = ListItem;

var ListTitle = _styledComponents["default"].h2.withConfig({
  displayName: "Liststyle__ListTitle"
})(["font-size:1.5rem;font-weight:800;line-height:1.3;margin-bottom:16px;"]);

exports.ListTitle = ListTitle;

var ListDescription = _styledComponents["default"].p.withConfig({
  displayName: "Liststyle__ListDescription"
})(["font-size:1rem;"]);

exports.ListDescription = ListDescription;