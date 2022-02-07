"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChallengesContext = void 0;
exports.ChallengesProvider = ChallengesProvider;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import Cookies from 'js-cookie'
var ChallengesContext = /*#__PURE__*/(0, _react.createContext)();
exports.ChallengesContext = ChallengesContext;

function ChallengesProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)("Seu Nome"),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      level = _useState4[0],
      setLevel = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      currentExperience = _useState6[0],
      setCurrentExperience = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      challengeCompleted = _useState8[0],
      setChallengeCompleted = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      activeChallenge = _useState10[0],
      setActiveChallenge = _useState10[1];

  var challenges = [];

  var getExperienceToNextLevel = function getExperienceToNextLevel(level) {
    return Math.pow((level + 1) * 4, 2);
  };

  (0, _react.useEffect)(function () {
    var nameCache = localStorage.getItem("Name") || "Seu Nome";
    setName(nameCache);
    var levelCache = Number(localStorage.getItem("Level")) || 1;
    setLevel(levelCache);
    var currentExperienceCache = Number(localStorage.getItem("CurrentExperience")) || 0;
    var experience = getExperienceToNextLevel(levelCache);

    if (currentExperienceCache >= experience) {
      currentExperienceCache = currentExperienceCache - experience;
    }

    setCurrentExperience(currentExperienceCache);
    var challengeCompletedCache = Number(localStorage.getItem("ChallengeCompleted")) || 0;
    setChallengeCompleted(challengeCompletedCache);
  }, []);
  (0, _react.useEffect)(function () {
    localStorage.setItem('Name', String(name));
  }, [name]);
  (0, _react.useEffect)(function () {
    localStorage.setItem('Level', String(level));
  }, [level]);
  (0, _react.useEffect)(function () {
    localStorage.setItem('CurrentExperience', String(currentExperience));
  }, [currentExperience]);
  (0, _react.useEffect)(function () {
    localStorage.setItem('ChallengeCompleted', String(challengeCompleted));
  }, [challengeCompleted]);
  (0, _react.useEffect)(function () {
    Notification.requestPermission();
  }, []);

  function clearData() {
    localStorage.clear();
    setName("Seu Nome");
    setLevel(1);
    setCurrentExperience(0);
    setChallengeCompleted(0);
  }

  var updateName = (0, _react.useCallback)(function (text) {
    setChallenges(text);
  }, [name]);

  var updateChallenges = function updateChallenges(dataChallenges) {
    challenges = dataChallenges;
  };

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    var randowChallengeIndex = Math.floor(Math.random() * challenges.length);
    var challenge = challenges[randowChallengeIndex];
    setActiveChallenge(challenge);

    if (Notification.permission === "granted") {
      new Notification("Novo Desafio", {
        body: "Valendo ".concat(challenge.amount, "xp")
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completedChallenge() {
    if (!activeChallenge) {
      return;
    }

    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + Number(amount);
    var experienceToNextLevel = getExperienceToNextLevel(level);

    while (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengeCompleted(challengeCompleted + 1);
  }

  return /*#__PURE__*/_react["default"].createElement(ChallengesContext.Provider, {
    value: {
      name: name,
      level: level,
      currentExperience: currentExperience,
      challengeCompleted: challengeCompleted,
      activeChallenge: activeChallenge,
      getExperienceToNextLevel: getExperienceToNextLevel,
      updateName: updateName,
      updateChallenges: updateChallenges,
      levelUp: levelUp,
      startNewChallenge: startNewChallenge,
      resetChallenge: resetChallenge,
      completedChallenge: completedChallenge,
      clearData: clearData
    }
  }, children);
}