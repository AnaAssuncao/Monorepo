"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountdownTime = exports.CountdownText = exports.CountdownNumber = exports.CountdownContainer = exports.Countdown = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CountdownContainer = _styledComponents["default"].div.withConfig({
  displayName: "Countdownstyle__CountdownContainer"
})(["display:flex;align-items:center;"]);

exports.CountdownContainer = CountdownContainer;

var Countdown = _styledComponents["default"].div.withConfig({
  displayName: "Countdownstyle__Countdown"
})(["display:flex;align-items:center;font-size:20px;font-weight:600;color:", ";margin-top:2rem;"], function (props) {
  return props.theme.color.title;
});

exports.Countdown = Countdown;

var CountdownTime = _styledComponents["default"].div.withConfig({
  displayName: "Countdownstyle__CountdownTime"
})(["flex:1;display:flex;align-items:center;justify-content:space-evenly;background:", ";box-shadow:0 0 60px rgba(0,0,0,0.05);font-size:8.5rem;text-align:center;"], function (props) {
  return props.theme.color.white;
});

exports.CountdownTime = CountdownTime;

var CountdownText = _styledComponents["default"].div.withConfig({
  displayName: "Countdownstyle__CountdownText"
})(["font-size:6.5rem;margin:0 0.5rem;"]);

exports.CountdownText = CountdownText;

var CountdownNumber = _styledComponents["default"].div.withConfig({
  displayName: "Countdownstyle__CountdownNumber"
})(["flex:1;"]);

exports.CountdownNumber = CountdownNumber;