"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterText = exports.FooterMenu = exports.FooterItem = exports.FooterContainer = exports.FooterButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FooterContainer = _styledComponents["default"].footer.withConfig({
  displayName: "Footerstyle__FooterContainer"
})(["align-items:center;background-color:#4c576c;color:#fff;display:flex;height:10%;justify-content:space-between;padding:20px 100px;widht:100%;"]);

exports.FooterContainer = FooterContainer;

var FooterMenu = _styledComponents["default"].ul.withConfig({
  displayName: "Footerstyle__FooterMenu"
})(["display:flex;"]);

exports.FooterMenu = FooterMenu;

var FooterItem = _styledComponents["default"].li.withConfig({
  displayName: "Footerstyle__FooterItem"
})(["list-style-type:none;margin-right:30px;"]);

exports.FooterItem = FooterItem;

var FooterText = _styledComponents["default"].p.withConfig({
  displayName: "Footerstyle__FooterText"
})(["color:#fff;cursor:pointer;font-size:20px;text-decoration:none;"]);

exports.FooterText = FooterText;

var FooterButton = _styledComponents["default"].p.withConfig({
  displayName: "Footerstyle__FooterButton"
})(["width:150px;"]);

exports.FooterButton = FooterButton;