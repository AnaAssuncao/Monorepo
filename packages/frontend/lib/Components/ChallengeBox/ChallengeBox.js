"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChallengeBox;

var _react = _interopRequireWildcard(require("react"));

var _ChallengesContext = require("../../Context/ChallengesContext");

var _CountdownContext = require("../../Context/CountdownContext");

var _Button = _interopRequireDefault(require("../Button/Button"));

var El = _interopRequireWildcard(require("./ChallengeBox.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ChallengeBox() {
  var _useContext = (0, _react.useContext)(_ChallengesContext.ChallengesContext),
      activeChallenge = _useContext.activeChallenge,
      resetChallenge = _useContext.resetChallenge,
      completedChallenge = _useContext.completedChallenge;

  var _useContext2 = (0, _react.useContext)(_CountdownContext.CountdownContext),
      resetCountdown = _useContext2.resetCountdown;

  function handleChallengeSucceeded() {
    completedChallenge();
    resetCountdown();
  }

  function handleChallengeFailes() {
    resetChallenge();
    resetCountdown();
  }

  return /*#__PURE__*/_react["default"].createElement(El.ChallengeBoxContainer, null, activeChallenge ? /*#__PURE__*/_react["default"].createElement(El.ChallengeBoxActive, null, /*#__PURE__*/_react["default"].createElement(El.ChallengeBoxTitle, null, "Ganhe ", activeChallenge.amount), /*#__PURE__*/_react["default"].createElement(El.ChallengeBoxMain, null, /*#__PURE__*/_react["default"].createElement(El.ChallengeBoxSubtitle, null, "Novo Desafio"), /*#__PURE__*/_react["default"].createElement(El.ChallengeBoxText, null, activeChallenge.description)), /*#__PURE__*/_react["default"].createElement(El.ChallengeBoxButtons, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "white",
    backgroundColor: "red",
    height: 3,
    border: 0,
    onClick: handleChallengeFailes
  }, "Falhei"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "white",
    backgroundColor: "blue",
    height: 3,
    border: 0,
    onClick: handleChallengeSucceeded
  }, "Completei"))) : /*#__PURE__*/_react["default"].createElement(El.ChallengeBoxNotActive, null, /*#__PURE__*/_react["default"].createElement("span", null, "Finalize um ciclo para receber um desafio!")));
}