"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrRoutes = void 0;

var _react = _interopRequireDefault(require("react"));

var _Home = _interopRequireDefault(require("../Pages/Home/Home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var arrRoutes = [{
  path: '/',
  name: 'Home',
  exact: true,
  component: /*#__PURE__*/_react["default"].createElement(_Home["default"], null)
}];
exports.arrRoutes = arrRoutes;