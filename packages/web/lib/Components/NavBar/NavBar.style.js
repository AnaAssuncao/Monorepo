"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarText = exports.NavBarMenu = exports.NavBarLogo = exports.NavBarItem = exports.NavBarContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NavBarContainer = _styledComponents["default"].header.withConfig({
  displayName: "NavBarstyle__NavBarContainer",
  componentId: "sc-18objh-0"
})(["align-items:center;box-shadow:0px 1px 5px #ebebeb;display:flex;height:10%;justify-content:space-between;widht:100%;"]);

exports.NavBarContainer = NavBarContainer;

var NavBarLogo = _styledComponents["default"].h1.withConfig({
  displayName: "NavBarstyle__NavBarLogo",
  componentId: "sc-18objh-1"
})(["color:#0097ff;font-size:36px;margin-left:30px;"]);

exports.NavBarLogo = NavBarLogo;

var NavBarMenu = _styledComponents["default"].ul.withConfig({
  displayName: "NavBarstyle__NavBarMenu",
  componentId: "sc-18objh-2"
})(["align-items:center;display:flex;margin-right:50px;"]);

exports.NavBarMenu = NavBarMenu;

var NavBarItem = _styledComponents["default"].li.withConfig({
  displayName: "NavBarstyle__NavBarItem",
  componentId: "sc-18objh-3"
})(["list-style-type:none;margin-right:30px;"]);

exports.NavBarItem = NavBarItem;

var NavBarText = _styledComponents["default"].p.withConfig({
  displayName: "NavBarstyle__NavBarText",
  componentId: "sc-18objh-4"
})(["color:#0097ff;cursor:pointer;font-size:18px;text-decoration:none;"]);

exports.NavBarText = NavBarText;