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
var _jsxFileName = "/Volumes/Macintosh HD/pizza3.github.io/components/footer.js";



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
    css: ".cover.jsx-618650999{position:absolute;}.footer.jsx-618650999{position:fixed;width:100%;height:50px;background:transparent;overflow:hidden;margin-top:calc(100vh - 50px);z-index:100;}.footerContainer.jsx-618650999{position:relative;width:300px;margin-left:calc(50% - 150px);padding-top:10px;}.imgl.jsx-618650999{position:relative;width:28px;float:left;cursor:pointer;}.imgr.jsx-618650999{position:relative;width:28px;float:right;margin-left:108px;cursor:pointer;}@media (max-width:800px){.cover.jsx-618650999{width:100%;height:100%;background:#fff;z-index:-1;opacity:0.9;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC9waXp6YTMuZ2l0aHViLmlvL2NvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCYSxBQUdzQyxBQUlILEFBVUcsQUFPQSxBQU9BLEFBU0gsV0FDQyxJQWpDTCxHQUpWLEFBY1csQUFPQSxBQU9BLEtBVVEsR0FqQ1IsR0FpQkEsQUFPQyxDQWRpQixRQVRQLENBaUNSLENBaEJBLENBT0ksU0FVRixLQWhCaEIsSUFPYyxDQWZHLENBVEYsQ0FrQ2YsWUFUSixHQXhCa0MsQUFTbEMsOEJBUmdCLFlBQ1oiLCJmaWxlIjoiL1ZvbHVtZXMvTWFjaW50b3NoIEhEL3BpenphMy5naXRodWIuaW8vY29tcG9uZW50cy9mb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IEZvb3RlciA9KCk9PntcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9vdGVyJ30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvdmVyJ30+PC9kaXY+ICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvb3RlckNvbnRhaW5lcid9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vcGl6emEzL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17J2ltZ2wnfSBzcmM9XCIvc3RhdGljL2NvZGVwZW4uc3ZnXCIgIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3RwaXp6YTNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9eydpbWdyJ30gc3JjPVwiL3N0YXRpYy90d2l0dGVyLnN2Z1wiICAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3BpenphM1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17J2ltZ3InfSBzcmM9XCIvc3RhdGljL2dpdGh1Yi5zdmdcIiAgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5jb3ZlcntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5mb290ZXJDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OmNhbGMoNTAlIC0gMTUwcHgpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW1nbHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbWdye1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwOHB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmNvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDotMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */\n/*@ sourceURL=/Volumes/Macintosh HD/pizza3.github.io/components/footer.js */",
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
var _jsxFileName = "/Volumes/Macintosh HD/pizza3.github.io/components/nav.js";


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
        css: ".nav.jsx-3513806879{position:fixed;width:100%;height:70px;background:transparent;top:40px;z-index:101;}.cover.jsx-3513806879{position:absolute;}.navHeader.jsx-3513806879{position:relative;float:left;color:#292929;font-family:'BebasNeue';font-size:47px;margin-top:9px;margin-left:70px;cursor:pointer;}.navLink.jsx-3513806879{position:relative;float:right;font-family:'BebasNeue';color:#292929;font-size:21px;margin-right:70px;margin-top:23px;cursor:pointer;}@media (max-width:800px){.nav.jsx-3513806879{top:0px;background:transparent;border-bottom:1px solid #f2f2f2;}.cover.jsx-3513806879{width:100%;height:100%;background:#fff;z-index:-1;opacity:0.9;}.navHeader.jsx-3513806879{font-size:40px;margin-left:17px;margin-top:15px;}.navLink.jsx-3513806879{margin-right:17px;margin-top:0px;width:100%;margin-left:9px;height:44%;padding-top:19px;font-size:35px;margin-right:-12px;color:#565656;}.navSLide.jsx-3513806879{position:fixed;width:150px;height:156px;background:#fff;-webkit-transition:all 200ms cubic-bezier(0.175,0.885,0.32,1.275);transition:all 200ms cubic-bezier(0.175,0.885,0.32,1.275);border-radius:12px;padding-top:0px;right:57px;top:69px;box-shadow:0px 0px 23px -17px rgba(0,0,0,0.75);border:1px solid #ececec;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}.open.jsx-3513806879{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}.close.jsx-3513806879{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC9waXp6YTMuZ2l0aHViLmlvL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDaUIsQUFJdUMsQUFTRyxBQUlDLEFBV0EsQUFZTixBQU1FLEFBUUssQUFNRyxBQVlILEFBZUcsQUFLRSxRQW5ERSxHQU1YLElBMUNMLEFBa0RXLEFBa0JMLEdBM0RwQixBQUllLEFBV0MsQUFnQ08sS0FiQSxHQTFDUCxDQW9FSyxFQXZESCxDQVdVLENBWVksQ0FjaEIsQ0FNTCxLQXZETyxDQTBDUixDQTBCTSxHQXZESSxDQTJDSixJQU5wQixFQVBnQixJQW5CRixFQTZDbUQsSUFabEQsQ0F4RE4sQ0EyQ1QsQ0FSQSxJQXRCZSxDQVdBLENBd0RGLENBL0VGLENBd0RVLElBNEJSLElBSmIsR0EvRUosQUFZbUIsQ0FXRyxFQTZEbEIsR0E1Qm1CLFNBM0NGLElBV0QsRUFpQ08sV0EzQ1QsR0FXQSxLQWlDSSxPQTNDdEIsR0FXQSxJQWlDSSw0Q0FRdUIsbUJBQ0gsZ0JBQ0wsV0FDRixTQUNzQywrQ0FDdEIseUJBQ0Ysb0ZBQzNCIiwiZmlsZSI6Ii9Wb2x1bWVzL01hY2ludG9zaCBIRC9waXp6YTMuZ2l0aHViLmlvL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQnVyZ2VyIGZyb20gJy4vbmF2L2J1cmdlcic7XG5cbmNsYXNzIE5hdiBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBzaG93OmZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVDTGljayA9IHRoaXMuaGFuZGxlQ0xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDTGljaygpe1xuICAgICAgICBjb25zdCB7c2hvd30gPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3c6ICFzaG93XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHtzaG93fSA9IHRoaXMuc3RhdGUgO1xuICAgICAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbmF2J30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY292ZXInPjwvZGl2PlxuICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25hdkhlYWRlcid9Pnl1Z2FtIGRodXJpeWE8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHsnbmF2U0xpZGUnfSAke3Nob3c/J29wZW4nOidjbG9zZSd9YH0+XG4gICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbmF2TGluayd9PmNvbnRhY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi93b3JrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyduYXZMaW5rJ30+d29yazwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1cmdlciBoYW5kbGVDTGljaz17dGhpcy5oYW5kbGVDTGlja30vPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuXG4gICAgICAgICAgICAgICAgICAgIC5uYXYge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmF2SGVhZGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5MjkyOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmViYXNOZXVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubmF2TGlua3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmViYXNOZXVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmYyZjI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4Oi0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdkhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdkxpbmt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDQlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxOXB4OyAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NjU2NTY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZTTGlkZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTU2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDU3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA2OXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjNweCAtMTdweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLm9wZW57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl19 */\n/*@ sourceURL=/Volumes/Macintosh HD/pizza3.github.io/components/nav.js */",
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
var _jsxFileName = "/Volumes/Macintosh HD/pizza3.github.io/components/nav/burger.js";

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
var _jsxFileName = "/Volumes/Macintosh HD/pizza3.github.io/components/scenes/sceneOne.js";

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
var _jsxFileName = "/Volumes/Macintosh HD/pizza3.github.io/layouts/main.js";




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
var _jsxFileName = "/Volumes/Macintosh HD/pizza3.github.io/pages/index.js";




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
    css: ".container.jsx-1568551836{position:relative;width:100%;height:100vh;}.headContainer.jsx-1568551836{max-width:1000px;display:block;width:95%;margin:0 auto;}.contLeft.jsx-1568551836{position:relative;float:left;width:50%;top:50px;height:calc(100vh - 50px);padding-top:19vh;}.contRight.jsx-1568551836{position:relative;float:left;width:50%;top:50px;height:calc(100vh - 50px);padding-top:35vh;color:#B7B7B7;font-size:20px;padding-left:6%;padding-right:33px;line-height:24px;}@media (max-width:800px){.contRight.jsx-1568551836{width:100%;top:0px;height:50%;padding-top:0vh;font-size:21px;padding-left:12%;padding-right:12%;text-align:center;line-height:30px;}.contLeft.jsx-1568551836{width:100%;top:0px;height:50vh;padding-top:0vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC9waXp6YTMuZ2l0aHViLmlvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCYSxBQUd1QyxBQUtELEFBT0MsQUFTQSxBQWVILEFBV0EsV0FWSCxBQVdBLE1BMUNFLENBTEgsQUFZQSxBQVNBLENBZ0JJLEFBV0MsVUEvQ0gsQUFZSCxBQVNBLENBZ0JVLENBaENWLEFBMkNVLFFBbkNYLEFBU0EsRUFoQkssQ0FMbEIsSUFxQ3VCLENBV25CLENBbkMwQixBQVNBLE9BaEI5QixNQWdDeUIsYUF4QkosQUFTQSxJQWdCSyxhQXhCMUIsQUFTa0IsS0FnQlEsU0FmUCxTQWdCTSxNQWZMLFdBZ0JoQixLQWZtQixtQkFDRixpQkFDckIiLCJmaWxlIjoiL1ZvbHVtZXMvTWFjaW50b3NoIEhEL3BpenphMy5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tICcuLi9sYXlvdXRzL21haW4nO1xuaW1wb3J0IFNjZW5lT25lIGZyb20gJy4uL2NvbXBvbmVudHMvc2NlbmVzL3NjZW5lT25lJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgIDxQYWdlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRhaW5lcid9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydoZWFkQ29udGFpbmVyJ30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250TGVmdCd9PlxuICAgICAgICAgICAgICAgICAgICA8U2NlbmVPbmUvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udFJpZ2h0J30+XG4gICAgICAgICAgICAgICAgICAgIEZyb250ZW5kIGRldmVsb3BlciBGcm9tIE5ldyBEZWxoaSwgSW5kaWFcbiAgICAgICAgICAgICAgICAgICAgQ3VycmVudGx5IGxpdmluZyBpbiBDaGVubmFpLCBtYWtpbmcgU3R1ZmYgXG4gICAgICAgICAgICAgICAgICAgIHdpdGggcmVhY3QsIG5vZGUsIHRocmVlcywgJiBBZnJhbWUuICBcbiAgICAgICAgICAgICAgICAgICAgSW50ZXJlc3RlZCBpbiB0ZWNobm9sb2dpZXMgc3VjaCBhcyBBUi9WcixcbiAgICAgICAgICAgICAgICAgICAgV2FudCB0byBiZWNvbWUgYSBjcmVhdGl2ZSBkZXZlbG9wZXIuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5oZWFkQ29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250TGVmdHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE5dmg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRSaWdodHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDM1dmg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQjdCN0I3O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNiU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMzcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAuY29udFJpZ2h0eyAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICAuY29udExlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDB2aDsgIFxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICA8L1BhZ2U+XG4pXG4iXX0= */\n/*@ sourceURL=/Volumes/Macintosh HD/pizza3.github.io/pages/index.js */",
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