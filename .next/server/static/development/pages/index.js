module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Macintosh HD/.Trashes/501/pizza3.github.io 2.05.47 PM/pizza3.github.io/components/footer.js";



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-618650999" + " " + 'footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-618650999" + " " + 'cover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-618650999" + " " + 'footerContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://codepen.io/pizza3/",
    target: "_blank",
    className: "jsx-618650999",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/codepen.svg",
    className: "jsx-618650999" + " " + 'imgl',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/tpizza3",
    target: "_blank",
    className: "jsx-618650999",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/twitter.svg",
    className: "jsx-618650999" + " " + 'imgr',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/pizza3",
    target: "_blank",
    className: "jsx-618650999",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/github.svg",
    className: "jsx-618650999" + " " + 'imgr',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "618650999",
    css: ".cover.jsx-618650999{position:absolute;}.footer.jsx-618650999{position:fixed;width:100%;height:50px;background:transparent;overflow:hidden;margin-top:calc(100vh - 50px);z-index:100;}.footerContainer.jsx-618650999{position:relative;width:300px;margin-left:calc(50% - 150px);padding-top:10px;}.imgl.jsx-618650999{position:relative;width:28px;float:left;cursor:pointer;}.imgr.jsx-618650999{position:relative;width:28px;float:right;margin-left:108px;cursor:pointer;}@media (max-width:800px){.cover.jsx-618650999{width:100%;height:100%;background:#fff;z-index:-1;opacity:0.9;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC8uVHJhc2hlcy81MDEvcGl6emEzLmdpdGh1Yi5pbyAyLjA1LjQ3IFBNL3BpenphMy5naXRodWIuaW8vY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJhLEFBR3NDLEFBSUgsQUFVRyxBQU9BLEFBT0EsQUFTSCxXQUNDLElBakNMLEdBSlYsQUFjVyxBQU9BLEFBT0EsS0FVUSxHQWpDUixHQWlCQSxBQU9DLENBZGlCLFFBVFAsQ0FpQ1IsQ0FoQkEsQ0FPSSxTQVVGLEtBaEJoQixJQU9jLENBZkcsQ0FURixDQWtDZixZQVRKLEdBeEJrQyxBQVNsQyw4QkFSZ0IsWUFDWiIsImZpbGUiOiIvVm9sdW1lcy9NYWNpbnRvc2ggSEQvLlRyYXNoZXMvNTAxL3BpenphMy5naXRodWIuaW8gMi4wNS40NyBQTS9waXp6YTMuZ2l0aHViLmlvL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBGb290ZXIgPSgpPT57XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvb3Rlcid9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb3Zlcid9PjwvZGl2PiAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb290ZXJDb250YWluZXInfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL3BpenphMy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9eydpbWdsJ30gc3JjPVwiL3N0YXRpYy9jb2RlcGVuLnN2Z1wiICAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS90cGl6emEzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXsnaW1ncid9IHNyYz1cIi9zdGF0aWMvdHdpdHRlci5zdmdcIiAgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9waXp6YTNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9eydpbWdyJ30gc3JjPVwiL3N0YXRpYy9naXRodWIuc3ZnXCIgIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuY292ZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDpjYWxjKDUwJSAtIDE1MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmltZ2x7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW1ncntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDhweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5jb3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6LTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXX0= */\n/*@ sourceURL=/Volumes/Macintosh HD/.Trashes/501/pizza3.github.io 2.05.47 PM/pizza3.github.io/components/footer.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nav_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/burger */ "./components/nav/burger.js");
var _jsxFileName = "/Volumes/Macintosh HD/.Trashes/501/pizza3.github.io 2.05.47 PM/pizza3.github.io/components/nav.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.state = {
      show: false
    };
    _this.handleCLick = _this.handleCLick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Nav, [{
    key: "handleCLick",
    value: function handleCLick() {
      var show = this.state.show;
      this.setState({
        show: !show
      });
    }
  }, {
    key: "render",
    value: function render() {
      var show = this.state.show;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'cover',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'navHeader',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "yugam dhuriya")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'navSLide'.concat(" ", show ? 'open' : 'close'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'navLink',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "contact")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'navLink',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "work"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nav_burger__WEBPACK_IMPORTED_MODULE_3__["default"], {
        handleCLick: this.handleCLick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3513806879",
        css: ".nav.jsx-3513806879{position:fixed;width:100%;height:70px;background:transparent;top:40px;z-index:101;}.cover.jsx-3513806879{position:absolute;}.navHeader.jsx-3513806879{position:relative;float:left;color:#292929;font-family:'BebasNeue';font-size:47px;margin-top:9px;margin-left:70px;cursor:pointer;}.navLink.jsx-3513806879{position:relative;float:right;font-family:'BebasNeue';color:#292929;font-size:21px;margin-right:70px;margin-top:23px;cursor:pointer;}@media (max-width:800px){.nav.jsx-3513806879{top:0px;background:transparent;border-bottom:1px solid #f2f2f2;}.cover.jsx-3513806879{width:100%;height:100%;background:#fff;z-index:-1;opacity:0.9;}.navHeader.jsx-3513806879{font-size:40px;margin-left:17px;margin-top:15px;}.navLink.jsx-3513806879{margin-right:17px;margin-top:0px;width:100%;margin-left:9px;height:44%;padding-top:19px;font-size:35px;margin-right:-12px;color:#565656;}.navSLide.jsx-3513806879{position:fixed;width:150px;height:156px;background:#fff;-webkit-transition:all 200ms cubic-bezier(0.175,0.885,0.32,1.275);transition:all 200ms cubic-bezier(0.175,0.885,0.32,1.275);border-radius:12px;padding-top:0px;right:57px;top:69px;box-shadow:0px 0px 23px -17px rgba(0,0,0,0.75);border:1px solid #ececec;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}.open.jsx-3513806879{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}.close.jsx-3513806879{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC8uVHJhc2hlcy81MDEvcGl6emEzLmdpdGh1Yi5pbyAyLjA1LjQ3IFBNL3BpenphMy5naXRodWIuaW8vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NpQixBQUl1QyxBQVNHLEFBSUMsQUFXQSxBQVlOLEFBTUUsQUFRSyxBQU1HLEFBWUgsQUFlRyxBQUtFLFFBbkRFLEdBTVgsSUExQ0wsQUFrRFcsQUFrQkwsR0EzRHBCLEFBSWUsQUFXQyxBQWdDTyxLQWJBLEdBMUNQLENBb0VLLEVBdkRILENBV1UsQ0FZWSxDQWNoQixDQU1MLEtBdkRPLENBMENSLENBMEJNLEdBdkRJLENBMkNKLElBTnBCLEVBUGdCLElBbkJGLEVBNkNtRCxJQVpsRCxDQXhETixDQTJDVCxDQVJBLElBdEJlLENBV0EsQ0F3REYsQ0EvRUYsQ0F3RFUsSUE0QlIsSUFKYixHQS9FSixBQVltQixDQVdHLEVBNkRsQixHQTVCbUIsU0EzQ0YsSUFXRCxFQWlDTyxXQTNDVCxHQVdBLEtBaUNJLE9BM0N0QixHQVdBLElBaUNJLDRDQVF1QixtQkFDSCxnQkFDTCxXQUNGLFNBQ3NDLCtDQUN0Qix5QkFDRixvRkFDM0IiLCJmaWxlIjoiL1ZvbHVtZXMvTWFjaW50b3NoIEhELy5UcmFzaGVzLzUwMS9waXp6YTMuZ2l0aHViLmlvIDIuMDUuNDcgUE0vcGl6emEzLmdpdGh1Yi5pby9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuL25hdi9idXJnZXInO1xuXG5jbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc2hvdzpmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ0xpY2sgPSB0aGlzLmhhbmRsZUNMaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ0xpY2soKXtcbiAgICAgICAgY29uc3Qge3Nob3d9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93OiAhc2hvd1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7c2hvd30gPSB0aGlzLnN0YXRlIDtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25hdid9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvdmVyJz48L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyduYXZIZWFkZXInfT55dWdhbSBkaHVyaXlhPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7J25hdlNMaWRlJ30gJHtzaG93PydvcGVuJzonY2xvc2UnfWB9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25hdkxpbmsnfT5jb250YWN0PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbmF2TGluayd9Pndvcms8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXJnZXIgaGFuZGxlQ0xpY2s9e3RoaXMuaGFuZGxlQ0xpY2t9Lz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcblxuICAgICAgICAgICAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jb3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hdkhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyOTI5Mjk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlYmFzTmV1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hdkxpbmt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlYmFzTmV1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5MjkyOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY292ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDotMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZIZWFkZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZMaW5re1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTlweDsgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTY1NjU2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2U0xpZGV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1NnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1N3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNjlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIzcHggLTE3cHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vcGVue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC41KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdfQ== */\n/*@ sourceURL=/Volumes/Macintosh HD/.Trashes/501/pizza3.github.io 2.05.47 PM/pizza3.github.io/components/nav.js */",
        __self: this
      }));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/nav/burger.js":
/*!**********************************!*\
  !*** ./components/nav/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Macintosh HD/.Trashes/501/pizza3.github.io 2.05.47 PM/pizza3.github.io/components/nav/burger.js";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    transform: translate(43%,0%);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 1s ease infinite;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    position:absolute;\n    width: 40px;\n    height: 2px;\n    background:#707070;\n    margin-top:4px;\n    transform-origin: center;\n    margin-top: 4px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position:absolute;\n    width:40px;\n    height:2px;\n    background:#707070;\n    transform-origin: center;\n    margin-top: -8px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    visibility:hidden;\n    @media (max-width: 800px) {\n        position: absolute;\n        visibility:visible;  \n        top: 24px;\n        right: 5%;\n        width: 40px;\n        height: 40px;\n        border: none;\n        background: #fff;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0%{\n        margin-top: 8px;\n    }\n    60%{\n        margin-top: 4px;\n        transform:rotate(0deg)\n    }\n    100%{\n        margin-top: 4px;\n        transform:rotate(-45deg)\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0%{\n        margin-top: 0px;\n    }\n    60%{\n        margin-top: 4px;\n        transform:rotate(0deg)\n    }\n    100%{\n        margin-top: 4px;\n        transform:rotate(45deg)\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Burger = function Burger(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: men,
    onClick: props.handleCLick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: menl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: menr,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

var startl = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var startr = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());
var men = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
var menl = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4());
var menr = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5());
var animl = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6(), startl);
var trans = Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7());
/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./components/scenes/sceneOne.js":
/*!***************************************!*\
  !*** ./components/scenes/sceneOne.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/Macintosh HD/.Trashes/501/pizza3.github.io 2.05.47 PM/pizza3.github.io/components/scenes/sceneOne.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position:relative;\n    width:100%;\n    height:100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // window.THREE = THREE;
// import TrackballControls from 'three/examples/js/controls/TrackballControls';

var SceneOne =
/*#__PURE__*/
function (_Component) {
  _inherits(SceneOne, _Component);

  function SceneOne(props) {
    var _this;

    _classCallCheck(this, SceneOne);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SceneOne).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(SceneOne, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initScene();
      this.animateScene();
    }
  }, {
    key: "initScene",
    value: function initScene() {
      this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
      this.width = 500;
      this.height = 500;
      this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]();
      this.renderer.setClearColor(0xffffff);
      this.renderer.setSize(this.width, this.height);
      this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["OrthographicCamera"](window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
      this.camera.position.set(0, 0, 10);
      this.camera.lookAt(this.scene.position);
      var container = document.getElementById('container');
      container.appendChild(this.renderer.domElement); // this.trackballControls = new THREE.TrackballControls(this.camera);

      this.renderer.render(this.scene, this.camera);
      var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1, 1, 1);
      var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        color: 0xffff00,
        side: three__WEBPACK_IMPORTED_MODULE_2__["DoubleSide"]
      });
      var plane = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material); // plane.position.x = -100;

      this.scene.add(plane);
    }
  }, {
    key: "animateScene",
    value: function animateScene() {
      var _this2 = this;

      requestAnimationFrame(function () {
        return _this2.animateScene();
      }); // this.trackballControls.update();

      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "container",
        className: container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      });
    }
  }]);

  return SceneOne;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var container = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (SceneOne);

/***/ }),

/***/ "./layouts/main.js":
/*!*************************!*\
  !*** ./layouts/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Volumes/Macintosh HD/.Trashes/501/pizza3.github.io 2.05.47 PM/pizza3.github.io/layouts/main.js";




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Yugam Dhuriya"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\n                 @font-face {\n                    font-family: 'BebasNeue';\n                    src: url('./static/BebasNeue-Regular.otf');\n                }\n    \n                *{\n                    margin:0;\n                    padding:0;\n                    box-sizing:border-box;\n                    font-family: 'BebasNeue';\n                }\n\n                ::selection {\n                    color: #5f5f5f;\n                    background: #080808;                 \n                }\n\n                ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                    color: #D5D5D5;\n                }\n\n                ::-moz-placeholder { /* Firefox 19+ */\n                    color: #D5D5D5;\n                }\n                :-ms-input-placeholder { /* IE 10+ */\n                    color: #D5D5D5;\n                }\n\n                :-moz-placeholder { /* Firefox 18- */\n                    color: #D5D5D5;\n                }\n            ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), children);
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var _components_scenes_sceneOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/scenes/sceneOne */ "./components/scenes/sceneOne.js");
var _jsxFileName = "/Volumes/Macintosh HD/.Trashes/501/pizza3.github.io 2.05.47 PM/pizza3.github.io/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1568551836" + " " + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1568551836" + " " + 'headContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1568551836" + " " + 'contLeft',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_scenes_sceneOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1568551836" + " " + 'contRight',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Frontend developer From New Delhi, India Currently living in Chennai, making Stuff with react, node, threes, & Aframe. Interested in technologies such as AR/Vr, Want to become a creative developer.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1568551836",
    css: ".container.jsx-1568551836{position:relative;width:100%;height:100vh;}.headContainer.jsx-1568551836{max-width:1000px;display:block;width:95%;margin:0 auto;}.contLeft.jsx-1568551836{position:relative;float:left;width:50%;top:50px;height:calc(100vh - 50px);padding-top:19vh;}.contRight.jsx-1568551836{position:relative;float:left;width:50%;top:50px;height:calc(100vh - 50px);padding-top:35vh;color:#B7B7B7;font-size:20px;padding-left:6%;padding-right:33px;line-height:24px;}@media (max-width:800px){.contRight.jsx-1568551836{width:100%;top:0px;height:50%;padding-top:0vh;font-size:21px;padding-left:12%;padding-right:12%;text-align:center;line-height:30px;}.contLeft.jsx-1568551836{width:100%;top:0px;height:50vh;padding-top:0vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC8uVHJhc2hlcy81MDEvcGl6emEzLmdpdGh1Yi5pbyAyLjA1LjQ3IFBNL3BpenphMy5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJhLEFBR3VDLEFBS0QsQUFPQyxBQVNBLEFBZUgsQUFXQSxXQVZILEFBV0EsTUExQ0UsQ0FMSCxBQVlBLEFBU0EsQ0FnQkksQUFXQyxVQS9DSCxBQVlILEFBU0EsQ0FnQlUsQ0FoQ1YsQUEyQ1UsUUFuQ1gsQUFTQSxFQWhCSyxDQUxsQixJQXFDdUIsQ0FXbkIsQ0FuQzBCLEFBU0EsT0FoQjlCLE1BZ0N5QixhQXhCSixBQVNBLElBZ0JLLGFBeEIxQixBQVNrQixLQWdCUSxTQWZQLFNBZ0JNLE1BZkwsV0FnQmhCLEtBZm1CLG1CQUNGLGlCQUNyQiIsImZpbGUiOiIvVm9sdW1lcy9NYWNpbnRvc2ggSEQvLlRyYXNoZXMvNTAxL3BpenphMy5naXRodWIuaW8gMi4wNS40NyBQTS9waXp6YTMuZ2l0aHViLmlvL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vbGF5b3V0cy9tYWluJztcbmltcG9ydCBTY2VuZU9uZSBmcm9tICcuLi9jb21wb25lbnRzL3NjZW5lcy9zY2VuZU9uZSc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICA8UGFnZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250YWluZXInfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaGVhZENvbnRhaW5lcid9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udExlZnQnfT5cbiAgICAgICAgICAgICAgICAgICAgPFNjZW5lT25lLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRSaWdodCd9PlxuICAgICAgICAgICAgICAgICAgICBGcm9udGVuZCBkZXZlbG9wZXIgRnJvbSBOZXcgRGVsaGksIEluZGlhXG4gICAgICAgICAgICAgICAgICAgIEN1cnJlbnRseSBsaXZpbmcgaW4gQ2hlbm5haSwgbWFraW5nIFN0dWZmIFxuICAgICAgICAgICAgICAgICAgICB3aXRoIHJlYWN0LCBub2RlLCB0aHJlZXMsICYgQWZyYW1lLiAgXG4gICAgICAgICAgICAgICAgICAgIEludGVyZXN0ZWQgaW4gdGVjaG5vbG9naWVzIHN1Y2ggYXMgQVIvVnIsXG4gICAgICAgICAgICAgICAgICAgIFdhbnQgdG8gYmVjb21lIGEgY3JlYXRpdmUgZGV2ZWxvcGVyLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaGVhZENvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udExlZnR7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxOXZoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250UmlnaHR7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzNXZoO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0I3QjdCNztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzM3B4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRSaWdodHsgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTIlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTIlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRMZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwdmg7ICBcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgPC9QYWdlPlxuKVxuIl19 */\n/*@ sourceURL=/Volumes/Macintosh HD/.Trashes/501/pizza3.github.io 2.05.47 PM/pizza3.github.io/pages/index.js */",
    __self: this
  })));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map