"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Layout;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _Routes = require("./Routes");

var _ChallengesContext = require("../Context/ChallengesContext");

var _CountdownContext = require("../Context/CountdownContext");

var _NavBar = _interopRequireDefault(require("../Components/NavBar/NavBar"));

var _Footer = _interopRequireDefault(require("../Components/Footer/Footer"));

var El = _interopRequireWildcard(require("./Layout.style"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Layout() {
  return /*#__PURE__*/_react["default"].createElement(El.Container, null, /*#__PURE__*/_react["default"].createElement(_ChallengesContext.ChallengesProvider, null, /*#__PURE__*/_react["default"].createElement(_CountdownContext.CountdownProvider, null, /*#__PURE__*/_react["default"].createElement(_NavBar["default"], null), /*#__PURE__*/_react["default"].createElement(_reactRouter.Routes, null, _Routes.arrRoutes.map(function (route) {
    var Component = route.component,
        path = route.path,
        name = route.name,
        exact = route.exact;
    return /*#__PURE__*/_react["default"].createElement(_reactRouter.Route, {
      path: path,
      key: name,
      exact: exact,
      element: Component
    });
  })), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null))));
}