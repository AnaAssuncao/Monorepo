"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterText = exports.FooterMenu = exports.FooterItem = exports.FooterContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FooterContainer = _styledComponents["default"].footer.withConfig({
  displayName: "Footerstyle__FooterContainer",
  componentId: "sc-4fh7go-0"
})(["align-items:center;background-color:#4c576c;color:#fff;display:flex;height:30%;justify-content:space-between;padding:20px;widht:100%;"]);

exports.FooterContainer = FooterContainer;

var FooterMenu = _styledComponents["default"].ul.withConfig({
  displayName: "Footerstyle__FooterMenu",
  componentId: "sc-4fh7go-1"
})(["display:flex;flex-direction:column;margin-left:50px;"]);

exports.FooterMenu = FooterMenu;

var FooterItem = _styledComponents["default"].li.withConfig({
  displayName: "Footerstyle__FooterItem",
  componentId: "sc-4fh7go-2"
})(["list-style-type:none;margin-top:30px;"]);

exports.FooterItem = FooterItem;

var FooterText = _styledComponents["default"].p.withConfig({
  displayName: "Footerstyle__FooterText",
  componentId: "sc-4fh7go-3"
})(["color:#fff;cursor:pointer;font-size:20px;text-decoration:none;"]);

exports.FooterText = FooterText;