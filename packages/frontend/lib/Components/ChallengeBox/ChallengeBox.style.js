"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChallengeBoxTitle = exports.ChallengeBoxText = exports.ChallengeBoxSubtitle = exports.ChallengeBoxNotActive = exports.ChallengeBoxMain = exports.ChallengeBoxContainer = exports.ChallengeBoxButtons = exports.ChallengeBoxActive = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ChallengeBoxContainer = _styledComponents["default"].section.withConfig({
  displayName: "ChallengeBoxstyle__ChallengeBoxContainer"
})(["background:", ";border-radius:5px;box-shadow:0 0 60px rgba(0,0,0,0.05);height:100%;padding:1.5rem 2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;"], function (props) {
  return props.theme.color.white;
});

exports.ChallengeBoxContainer = ChallengeBoxContainer;

var ChallengeBoxActive = _styledComponents["default"].div.withConfig({
  displayName: "ChallengeBoxstyle__ChallengeBoxActive"
})(["display:flex;flex-direction:column;height:100%;width:100%;"]);

exports.ChallengeBoxActive = ChallengeBoxActive;

var ChallengeBoxNotActive = _styledComponents["default"].div.withConfig({
  displayName: "ChallengeBoxstyle__ChallengeBoxNotActive"
})(["align-items:center;display:flex;flex-direction:column;font-size:1.5rem;font-weight:700;justify-content:center;line-height:1.4;"]);

exports.ChallengeBoxNotActive = ChallengeBoxNotActive;

var ChallengeBoxTitle = _styledComponents["default"].h1.withConfig({
  displayName: "ChallengeBoxstyle__ChallengeBoxTitle"
})(["color:#5965e0;border-bottom:1px solid ", ";font-size:1.25rem;font-weight:600;padding:0 2rem 1.5rem;"], function (props) {
  return props.theme.color.gray;
});

exports.ChallengeBoxTitle = ChallengeBoxTitle;

var ChallengeBoxMain = _styledComponents["default"].div.withConfig({
  displayName: "ChallengeBoxstyle__ChallengeBoxMain"
})(["align-items:center;display:flex;flex:1;flex-direction:column;justify-content:center;"]);

exports.ChallengeBoxMain = ChallengeBoxMain;

var ChallengeBoxSubtitle = _styledComponents["default"].h2.withConfig({
  displayName: "ChallengeBoxstyle__ChallengeBoxSubtitle"
})(["color:", ";font-size:2rem;font-weight:600;margin:1.5rem 0 1rem;"], function (props) {
  return props.theme.color.title;
});

exports.ChallengeBoxSubtitle = ChallengeBoxSubtitle;

var ChallengeBoxText = _styledComponents["default"].p.withConfig({
  displayName: "ChallengeBoxstyle__ChallengeBoxText"
})(["line-height:1.5;"]);

exports.ChallengeBoxText = ChallengeBoxText;

var ChallengeBoxButtons = _styledComponents["default"].div.withConfig({
  displayName: "ChallengeBoxstyle__ChallengeBoxButtons"
})(["display:grid;grid-template-columns:1fr 1fr;gap:1rem;"]);

exports.ChallengeBoxButtons = ChallengeBoxButtons;