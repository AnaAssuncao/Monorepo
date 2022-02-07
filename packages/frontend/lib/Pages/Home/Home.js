"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;

var _react = _interopRequireWildcard(require("react"));

var _client = require("@apollo/client");

var _Profile = _interopRequireDefault(require("../../Components/Profile/Profile"));

var _CompletedChallenge = _interopRequireDefault(require("../../Components/CompletedChallenge/CompletedChallenge"));

var _Countdown = _interopRequireDefault(require("../../Components/Countdown/Countdown"));

var _ChallengeBox = _interopRequireDefault(require("../../Components/ChallengeBox/ChallengeBox"));

var _ExperienceBar = _interopRequireDefault(require("../../Components/ExperienceBar/ExperienceBar"));

var _ChallengesContext = require("../../Context/ChallengesContext");

var El = _interopRequireWildcard(require("./Home.style"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CHALLENGES = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query Query {\n    challenges{\n      type\n      description\n      amount\n    }\n  }\n"])));

function Home() {
  var _useContext = (0, _react.useContext)(_ChallengesContext.ChallengesContext),
      updateChallenges = _useContext.updateChallenges;

  var _useQuery = (0, _client.useQuery)(CHALLENGES),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) {
    return /*#__PURE__*/_react["default"].createElement(El.HomeContainer, null, /*#__PURE__*/_react["default"].createElement("p", null, "Loading..."));
  }

  if (error) {
    return /*#__PURE__*/_react["default"].createElement(El.HomeContainer, null, /*#__PURE__*/_react["default"].createElement("p", null, "Erro :( "));
  }

  updateChallenges(data.challenges);
  return /*#__PURE__*/_react["default"].createElement(El.HomeContainer, null, /*#__PURE__*/_react["default"].createElement(_ExperienceBar["default"], null), /*#__PURE__*/_react["default"].createElement(El.HomeSection, null, /*#__PURE__*/_react["default"].createElement(El.HomeBox, null, /*#__PURE__*/_react["default"].createElement(_Profile["default"], null), /*#__PURE__*/_react["default"].createElement(_CompletedChallenge["default"], null), /*#__PURE__*/_react["default"].createElement(_Countdown["default"], null)), /*#__PURE__*/_react["default"].createElement(El.HomeBox, null, /*#__PURE__*/_react["default"].createElement(_ChallengeBox["default"], null))));
}