"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 操作区默认样式
 */
const ConfigDefaults = {
  next: true,
  pre: true,
  roate: true,
  flip: true,
  scale: true,
  reset: true,
  initZoom: true
};
const defaultOptions = {
  images: [],
  index: 0,
  maskCloseable: false,
  configSlot: ''
};

const PreviewImage = options => {
  const bottomConfig = options && options.config ? options.config : ConfigDefaults;

  const config = _objectSpread(_objectSpread(_objectSpread({}, options), defaultOptions), bottomConfig);

  console.log('config', config);
};

var _default = PreviewImage;
exports.default = _default;