"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Primary = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Avatar",
  component: _Avatar["default"],
  argTypes: {
    onClick: {
      action: "clicked"
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_Avatar["default"], args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  src: "https://static.vecteezy.com/ti/vetor-gratis/t1/594333-a-cabeca-e-o-rosto-da-forma-alienigena-sao-simples-vetor.jpg",
  width: 100
};