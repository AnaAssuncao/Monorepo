"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Footer;

var _react = _interopRequireWildcard(require("react"));

var _ChallengesContext = require("../../Context/ChallengesContext");

var _Button = _interopRequireDefault(require("../Button/Button"));

var El = _interopRequireWildcard(require("./Footer.style"));

var _Routes = require("../../Routes/Routes");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Footer() {
  var _useContext = (0, _react.useContext)(_ChallengesContext.ChallengesContext),
      clearData = _useContext.clearData;

  var handleData = function handleData() {
    clearData();
  };

  return /*#__PURE__*/_react["default"].createElement(El.FooterContainer, null, /*#__PURE__*/_react["default"].createElement(El.FooterMenu, null, _Routes.arrRoutes.map(function (_ref) {
    var name = _ref.name,
        path = _ref.path;
    return /*#__PURE__*/_react["default"].createElement(El.FooterItem, {
      key: name
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: path
    }, /*#__PURE__*/_react["default"].createElement(El.FooterText, null, name)));
  })), /*#__PURE__*/_react["default"].createElement(El.FooterButton, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "title",
    backgroundColor: "white",
    height: 3,
    border: 0,
    onClick: function onClick() {
      return handleData();
    }
  }, "Limpar Dados")));
}