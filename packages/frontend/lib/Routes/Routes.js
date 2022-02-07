"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrRoutes = void 0;

var _react = _interopRequireDefault(require("react"));

var _Home = _interopRequireDefault(require("../Pages/Home/Home"));

var _Activities = _interopRequireDefault(require("../Pages/Activities/Activities"));

var _List = _interopRequireDefault(require("../Pages/List/List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var arrRoutes = [{
  path: '/',
  name: 'Home',
  exact: true,
  component: /*#__PURE__*/_react["default"].createElement(_Home["default"], null)
}, {
  path: '/desafios',
  name: 'Desafios',
  exact: true,
  component: /*#__PURE__*/_react["default"].createElement(_Activities["default"], null)
}, {
  path: '/beneficios',
  name: 'Benefícios',
  exact: true,
  component: /*#__PURE__*/_react["default"].createElement(_List["default"], null)
}];
exports.arrRoutes = arrRoutes;