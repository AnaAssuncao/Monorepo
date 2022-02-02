"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeTitle = exports.HomeLegend = exports.HomeContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HomeContainer = _styledComponents["default"].div.withConfig({
  displayName: "Homestyle__HomeContainer",
  componentId: "sc-vfsh2h-0"
})(["align-items:center;display:flex;flex-direction:column;justify-content:center;height:60%;"]);

exports.HomeContainer = HomeContainer;

var HomeTitle = _styledComponents["default"].h1.withConfig({
  displayName: "Homestyle__HomeTitle",
  componentId: "sc-vfsh2h-1"
})(["color:#456515;font-size:32px;font-weight:600;margin:15px 0;"]);

exports.HomeTitle = HomeTitle;

var HomeLegend = _styledComponents["default"].div.withConfig({
  displayName: "Homestyle__HomeLegend",
  componentId: "sc-vfsh2h-2"
})(["color:#456515;font-size:24px;font-weight:600;margin:15px 0;"]);

exports.HomeLegend = HomeLegend;