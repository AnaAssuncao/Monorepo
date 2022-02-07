"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Countdown;

var _react = _interopRequireWildcard(require("react"));

var _CountdownContext = require("../../Context/CountdownContext");

var _Button = _interopRequireDefault(require("../Button/Button"));

var El = _interopRequireWildcard(require("./Countdown.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Countdown() {
  var _useContext = (0, _react.useContext)(_CountdownContext.CountdownContext),
      minutes = _useContext.minutes,
      seconds = _useContext.seconds,
      hasFinished = _useContext.hasFinished,
      isActive = _useContext.isActive,
      startCountdown = _useContext.startCountdown,
      resetCountdown = _useContext.resetCountdown;

  var _String$padStart$spli = String(minutes).padStart(2, "0").split(''),
      _String$padStart$spli2 = _slicedToArray(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRight = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(seconds).padStart(2, "0").split(''),
      _String$padStart$spli4 = _slicedToArray(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRight = _String$padStart$spli4[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(El.Countdown, null, /*#__PURE__*/_react["default"].createElement(El.CountdownTime, null, /*#__PURE__*/_react["default"].createElement(El.CountdownNumber, null, minuteLeft), /*#__PURE__*/_react["default"].createElement(El.CountdownNumber, null, minuteRight)), /*#__PURE__*/_react["default"].createElement(El.CountdownText, null, ":"), /*#__PURE__*/_react["default"].createElement(El.CountdownTime, null, /*#__PURE__*/_react["default"].createElement(El.CountdownNumber, null, secondLeft), /*#__PURE__*/_react["default"].createElement(El.CountdownNumber, null, secondRight))), hasFinished ? /*#__PURE__*/_react["default"].createElement(El.Countdown, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    isDisabled: true,
    color: "title",
    backgroundColor: "white",
    height: 5,
    border: 0
  }, "Ciclo Encerrado")) : /*#__PURE__*/_react["default"].createElement(El.Countdown, null, isActive ? /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "white",
    backgroundColor: "red",
    height: 5,
    border: 0,
    onClick: resetCountdown
  }, "Abandonar Ciclo") : /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "white",
    backgroundColor: "blue",
    height: 5,
    border: 0,
    onClick: startCountdown
  }, "Iniciar um ciclo")));
}