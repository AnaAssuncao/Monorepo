"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActivitiesTitle = exports.ActivitiesItem = exports.ActivitiesDescription = exports.ActivitiesContainer = exports.ActivitiesAmount = exports.Activities = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ActivitiesContainer = _styledComponents["default"].div.withConfig({
  displayName: "Activitiesstyle__ActivitiesContainer"
})(["align-items:center;background-color:", ";display:flex;flex-direction:column;justify-content:center;height:85%;padding-top:2rem;"], function (props) {
  return props.theme.color.background;
});

exports.ActivitiesContainer = ActivitiesContainer;

var Activities = _styledComponents["default"].ul.withConfig({
  displayName: "Activitiesstyle__Activities"
})(["align-items:center;background-color:", ";display:flex;flex-direction:column;height:90%;padding:50px 0;width:80%;overflow:auto;"], function (props) {
  return props.theme.color.white;
});

exports.Activities = Activities;

var ActivitiesItem = _styledComponents["default"].li.withConfig({
  displayName: "Activitiesstyle__ActivitiesItem"
})(["border-bottom:1px solid ", ";display:flex;flex-direction:column;justify-content:center;padding:24px 0;width:80%;"], function (props) {
  return props.theme.color.gray;
});

exports.ActivitiesItem = ActivitiesItem;

var ActivitiesTitle = _styledComponents["default"].h2.withConfig({
  displayName: "Activitiesstyle__ActivitiesTitle"
})(["font-size:1.5rem;font-weight:800;line-height:1.3;margin-bottom:16px;"]);

exports.ActivitiesTitle = ActivitiesTitle;

var ActivitiesDescription = _styledComponents["default"].p.withConfig({
  displayName: "Activitiesstyle__ActivitiesDescription"
})(["font-size:1rem;"]);

exports.ActivitiesDescription = ActivitiesDescription;

var ActivitiesAmount = _styledComponents["default"].p.withConfig({
  displayName: "Activitiesstyle__ActivitiesAmount"
})(["margin-top:12px;font-size:1rem;color:", ";"], function (props) {
  return props.theme.color.blue;
});

exports.ActivitiesAmount = ActivitiesAmount;