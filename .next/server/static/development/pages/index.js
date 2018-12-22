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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
    className: "jsx-3822482412" + " " + 'footer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3822482412" + " " + 'cover',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3822482412" + " " + 'footerContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://codepen.io/pizza3/",
    target: "_blank",
    className: "jsx-3822482412",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/codepen.svg",
    className: "jsx-3822482412" + " " + 'imgl',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/yugam_",
    target: "_blank",
    className: "jsx-3822482412",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/twitter.svg",
    className: "jsx-3822482412" + " " + 'imgr',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/pizza3",
    target: "_blank",
    className: "jsx-3822482412",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/github.svg",
    className: "jsx-3822482412" + " " + 'imgr',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3822482412",
    css: ".cover.jsx-3822482412{position:absolute;}.footer.jsx-3822482412{position:fixed;width:100%;height:50px;background:transparent;overflow:hidden;margin-top:calc(100vh - 50px);z-index:100;}.footerContainer.jsx-3822482412{position:relative;width:300px;margin-left:calc(50% - 150px);padding-top:10px;}.imgl.jsx-3822482412{position:relative;width:28px;float:left;cursor:pointer;}.imgr.jsx-3822482412{position:relative;width:28px;float:right;margin-left:108px;cursor:pointer;}@media (max-width:800px){.cover.jsx-3822482412{width:100%;height:100%;background:rgba(255,255,255,0.7);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);z-index:-1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC9waXp6YTMuZ2l0aHViLmlvL2NvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCYSxBQUdzQyxBQUlILEFBVUcsQUFPQSxBQU9BLEFBU0gsV0FDQyxJQWpDTCxHQUpWLEFBY1csQUFPQSxBQU9BLEtBVXlCLEdBakN6QixHQWlCQSxBQU9DLENBZGlCLFFBVFAsRUFpQlIsQ0FPSSxjQU5sQixDQWU2QyxHQVIvQixDQWZHLENBVEYsYUF5Qm5CLEdBeEJrQyxBQVNsQyw4QkFSZ0IsWUFDWiw2QkE4QmMsV0FDZCIsImZpbGUiOiIvVm9sdW1lcy9NYWNpbnRvc2ggSEQvcGl6emEzLmdpdGh1Yi5pby9jb21wb25lbnRzL2Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgRm9vdGVyID0oKT0+e1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb290ZXInfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY292ZXInfT48L2Rpdj4gICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9vdGVyQ29udGFpbmVyJ30+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9waXp6YTMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXsnaW1nbCd9IHNyYz1cIi9zdGF0aWMvY29kZXBlbi5zdmdcIiAgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20veXVnYW1fXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXsnaW1ncid9IHNyYz1cIi9zdGF0aWMvdHdpdHRlci5zdmdcIiAgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9waXp6YTNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9eydpbWdyJ30gc3JjPVwiL3N0YXRpYy9naXRodWIuc3ZnXCIgIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuY292ZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZm9vdGVyQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDpjYWxjKDUwJSAtIDE1MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmltZ2x7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW1ncntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDhweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5jb3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOnNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4Oi0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il19 */\n/*@ sourceURL=/Volumes/Macintosh HD/pizza3.github.io/components/footer.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/global.js":
/*!******************************!*\
  !*** ./components/global.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Volumes/Macintosh HD/pizza3.github.io/components/global.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  });
});

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
        className: "jsx-528365962" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-528365962" + " " + 'cover',
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
        className: "jsx-528365962" + " " + 'navHeader',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "yugam dhuriya")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-528365962" + " " + 'navSLide'.concat(" ", show ? 'open' : 'close'),
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
        className: "jsx-528365962" + " " + 'navLink',
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
        className: "jsx-528365962" + " " + 'navLink',
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
        styleId: "528365962",
        css: ".nav.jsx-528365962{position:fixed;width:100%;height:70px;background:transparent;top:40px;z-index:101;}.cover.jsx-528365962{position:absolute;}.navHeader.jsx-528365962{position:relative;float:left;color:#292929;font-family:'BebasNeue';font-size:47px;margin-top:9px;margin-left:70px;cursor:pointer;}.navLink.jsx-528365962{position:relative;float:right;font-family:'BebasNeue';color:#292929;font-size:21px;margin-right:70px;margin-top:23px;cursor:pointer;}@media (max-width:800px){.nav.jsx-528365962{top:0px;background:transparent;border-bottom:1px solid #f2f2f2;}.cover.jsx-528365962{width:100%;height:100%;background:rgba(255,255,255,0.7);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);z-index:-1;}.navHeader.jsx-528365962{font-size:40px;margin-left:17px;margin-top:15px;}.navLink.jsx-528365962{margin-right:17px;margin-top:0px;width:100%;margin-left:9px;height:44%;padding-top:19px;font-size:35px;margin-right:-12px;color:#565656;}.navSLide.jsx-528365962{position:fixed;width:150px;height:156px;background:#fff;-webkit-transition:all 200ms cubic-bezier(0.175,0.885,0.32,1.275);transition:all 200ms cubic-bezier(0.175,0.885,0.32,1.275);border-radius:12px;padding-top:0px;right:57px;top:69px;box-shadow:0px 0px 23px -17px rgba(0,0,0,0.75);border:1px solid #ececec;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}.open.jsx-528365962{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}.close.jsx-528365962{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC9waXp6YTMuZ2l0aHViLmlvL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDaUIsQUFJdUMsQUFTRyxBQUlDLEFBV0EsQUFZTixBQU1FLEFBUUssQUFNRyxBQVlILEFBZUcsQUFLRSxRQW5ERSxHQU1YLElBMUNMLEFBa0RXLEFBa0JMLEdBM0RwQixBQUllLEFBV0MsQUFnQ08sS0FiaUIsR0ExQ3hCLENBb0VLLEVBdkRILENBV1UsQ0FZWSxDQWNoQixDQU1MLEtBdkRPLEVBb0VGLEdBdkRJLENBMkNKLElBTnBCLE1BMUJjLEVBa0IrQixBQTJCb0IsSUFabEQsQ0F4RE4sRUFtQ1QsSUF0QmUsQ0FXQSxDQXdERixDQS9FRixDQXdEVSxJQTRCUixJQUpiLEdBL0VKLEFBWW1CLENBV0csRUE2RGxCLEdBNUJtQixTQTNDRixJQVdELEVBaUNPLFdBM0NULEdBV0EsS0FpQ0ksT0EzQ3RCLEdBV0EsSUFpQ0ksWUFuQmMsV0FDZCxxQkEwQnVCLG1CQUNILGdCQUNMLFdBQ0YsU0FDc0MsK0NBQ3RCLHlCQUNGLG9GQUMzQiIsImZpbGUiOiIvVm9sdW1lcy9NYWNpbnRvc2ggSEQvcGl6emEzLmdpdGh1Yi5pby9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuL25hdi9idXJnZXInO1xuXG5jbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgc2hvdzpmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ0xpY2sgPSB0aGlzLmhhbmRsZUNMaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ0xpY2soKXtcbiAgICAgICAgY29uc3Qge3Nob3d9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93OiAhc2hvd1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7c2hvd30gPSB0aGlzLnN0YXRlIDtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25hdid9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvdmVyJz48L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyduYXZIZWFkZXInfT55dWdhbSBkaHVyaXlhPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7J25hdlNMaWRlJ30gJHtzaG93PydvcGVuJzonY2xvc2UnfWB9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25hdkxpbmsnfT5jb250YWN0PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbmF2TGluayd9Pndvcms8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXJnZXIgaGFuZGxlQ0xpY2s9e3RoaXMuaGFuZGxlQ0xpY2t9Lz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcblxuICAgICAgICAgICAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jb3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hdkhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyOTI5Mjk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlYmFzTmV1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm5hdkxpbmt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlYmFzTmV1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5MjkyOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY292ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4Oi0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2SGVhZGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2TGlua3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE5cHg7ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU2NTY1NjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdlNMaWRle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNTdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDY5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyM3B4IC0xN3B4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYzsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAub3BlbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXX0= */\n/*@ sourceURL=/Volumes/Macintosh HD/pizza3.github.io/components/nav.js */",
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
  var data = _taggedTemplateLiteral(["\n    visibility:hidden;\n    @media (max-width: 800px) {\n        position: absolute;\n        visibility:visible;  \n        top: 17px;\n        right: 5%;\n        width: 40px;\n        height: 40px;\n        border: none;\n        background: transparent;\n    }\n"]);

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simplex-noise */ "simplex-noise");
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simplex_noise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Volumes/Macintosh HD/pizza3.github.io/components/scenes/sceneOne.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var SceneOne =
/*#__PURE__*/
function (_Component) {
  _inherits(SceneOne, _Component);

  function SceneOne(props) {
    var _this;

    _classCallCheck(this, SceneOne);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SceneOne).call(this, props));
    _this.state = {
      check: false
    };
    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOut = _this.handleOut.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SceneOne, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.noise = new simplex_noise__WEBPACK_IMPORTED_MODULE_3___default.a();
      this.mouse = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
      this.initScene();
      this.loadTexture();
      this.animateScene();
    }
  }, {
    key: "initScene",
    value: function initScene() {
      this.ts = 1;
      this.plane = null;
      this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();

      if (window.innerWidth <= 800) {
        this.width = 300;
        this.height = 300;
      } else {
        this.width = 400;
        this.height = 400;
      }

      this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]();
      this.renderer.setClearColor(0xffffff);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.width, this.height);
      this.renderer.shadowMap.enabled = true;
      this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["OrthographicCamera"](window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 10000);
      this.camera.position.set(0, 0, 1000);
      this.camera.lookAt(this.scene.position);
      this.raycaster = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"]();
      var container = document.getElementById('container');
      container.appendChild(this.renderer.domElement);
      this.renderer.render(this.scene, this.camera);
      this.loader = new three__WEBPACK_IMPORTED_MODULE_2__["ImageLoader"](); // window.addEventListener("resize", this.handleWindowResize.bind(this), false);
    }
  }, {
    key: "loadTexture",
    value: function loadTexture() {
      this.loader.load('https://avatars0.githubusercontent.com/u/20243009?s=400&u=a5e8ce01e8f7eaf67084cb18ae60413e1e9a2ec5&v=4', function (image) {
        var canvasWidth = image.width;
        var canvasHeight = image.height;
        var geometry;

        if (window.innerWidth <= 800) {
          geometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](250, 450, 100, 30);
        } else {
          geometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](640, 400, canvasWidth, 10);
        }

        var canvas = document.getElementById('image');
        canvas.height = canvasHeight;
        canvas.width = canvasWidth;
        var context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, canvasWidth + 1, canvasHeight + 1);
        var canvasTexture = new three__WEBPACK_IMPORTED_MODULE_2__["Texture"](canvas);
        canvasTexture.minFilter = three__WEBPACK_IMPORTED_MODULE_2__["LinearFilter"];
        var meshMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
          opacity: 1,
          side: three__WEBPACK_IMPORTED_MODULE_2__["DoubleSide"],
          // wireframe: true,
          map: canvasTexture
        });
        meshMaterial.map.needsUpdate = true;
        this.plane = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, meshMaterial);
        this.scene.add(this.plane); //   this.plane.rotation.y=Math.PI/80;

        this.plane.rotation.y = Math.PI / 4;
        this.plane.rotation.x = Math.PI / 4;
      }.bind(this));
    }
  }, {
    key: "handleWindowResize",
    value: function handleWindowResize() {
      var HEIGHT = window.innerHeight;
      var WIDTH = window.innerWidth;
      this.renderer.setSize(WIDTH, HEIGHT);
      this.camera.aspect = WIDTH / HEIGHT;
      this.camera.updateProjectionMatrix();
    }
  }, {
    key: "createNoise",
    value: function createNoise(ts) {
      var amp = 4;
      var time = Date.now();

      if (this.plane) {
        var center = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](0, 0);
        var vLength = this.plane.geometry.vertices.length;

        for (var i = 0; i < vLength; i++) {
          var distance = this.noise.noise2D(this.plane.geometry.vertices[i].x + time * 0.0003, this.plane.geometry.vertices[i].y + time * 0.0003) * amp;
          var v = this.plane.geometry.vertices[i];
          var dist = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](v.x, v.y).sub(center);
          var size = 14.0;
          var magnitude = 150;

          if (window.innerWidth <= 800) {
            size = 13.0;
            magnitude = 80;
            v.z = Math.sin(dist.length() / -size + ts / 100 + distance / 2) * magnitude;
          } else {
            v.z = Math.sin(dist.length() / -size + ts / 100 + 0 / 2) * magnitude;
          }
        }

        this.plane.geometry.verticesNeedUpdate = true;
        this.plane.geometry.normalsNeedUpdate = true;
        this.plane.geometry.computeVertexNormals();
        this.plane.geometry.computeFaceNormals();
      }
    }
  }, {
    key: "handleMove",
    value: function handleMove(event) {
      if (this.plane) {
        gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].to(this.plane.rotation, 0.5, {
          ease: Power2.easeOut,
          y: Math.PI / 80,
          x: 0
        });
      }
    }
  }, {
    key: "handleOut",
    value: function handleOut() {
      if (this.plane) {
        gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].to(this.plane.rotation, 0.5, {
          y: Math.PI / 4,
          x: Math.PI / 4
        });
      }
    }
  }, {
    key: "animateScene",
    value: function animateScene() {
      var _this2 = this;

      requestAnimationFrame(function () {
        return _this2.animateScene();
      });
      this.ts += 10;
      this.createNoise(this.ts);
      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-485185958",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        id: "image",
        className: "jsx-485185958" + " " + 'canvas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "container",
        onMouseMove: this.handleMove,
        onMouseLeave: this.handleOut,
        className: "jsx-485185958" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "485185958",
        css: ".container.jsx-485185958{position:relative;width:400px;height:400px;}.canvas.jsx-485185958{visibility:hidden;display:none;}@media (max-width:800px){.container.jsx-485185958{position:relative;width:300px;height:300px;margin-left:calc(50% - 150px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC9waXp6YTMuZ2l0aHViLmlvL2NvbXBvbmVudHMvc2NlbmVzL3NjZW5lT25lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJKaUIsQUFHMEMsQUFNQSxBQU1JLGtCQVhWLEFBTUUsQUFNRSxZQVhILEFBWUksQ0FOcEIsWUFMQSxBQVlzQyw4QkFDbEMiLCJmaWxlIjoiL1ZvbHVtZXMvTWFjaW50b3NoIEhEL3BpenphMy5naXRodWIuaW8vY29tcG9uZW50cy9zY2VuZXMvc2NlbmVPbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IFNpbXBsZXhOb2lzZSBmcm9tICdzaW1wbGV4LW5vaXNlJ1xuaW1wb3J0IHtUd2Vlbk1heH0gZnJvbSBcImdzYXBcIjtcblxuXG5jbGFzcyBTY2VuZU9uZSBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBjaGVjazpmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlTW92ZT10aGlzLmhhbmRsZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVPdXQ9dGhpcy5oYW5kbGVPdXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgIHRoaXMubm9pc2UgPSBuZXcgU2ltcGxleE5vaXNlKCk7XG4gICAgICAgdGhpcy5tb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgdGhpcy5pbml0U2NlbmUoKTtcbiAgICAgICB0aGlzLmxvYWRUZXh0dXJlKCk7XG4gICAgICAgdGhpcy5hbmltYXRlU2NlbmUoKTtcbiAgICB9XG5cbiAgICBpbml0U2NlbmUoKXtcbiAgICAgICAgdGhpcy50cz0xO1xuICAgICAgICB0aGlzLnBsYW5lPW51bGw7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPD0gODAwKXtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSAzMDA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9ICAzMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSA0MDA7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9ICA0MDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweGZmZmZmZik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEod2luZG93LmlubmVyV2lkdGggLyAtIDIsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0IC8gMiwgd2luZG93LmlubmVySGVpZ2h0IC8gLSAyLCAxLCAxMDAwMCk7XG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAwLCAxMDAwKTtcbiAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KHRoaXMuc2NlbmUucG9zaXRpb24pO1xuICAgICAgICB0aGlzLnJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcbiAgICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGxvYWRUZXh0dXJlKCl7XG4gICAgICAgIHRoaXMubG9hZGVyLmxvYWQoXG4gICAgICAgICAgICAnaHR0cHM6Ly9hdmF0YXJzMC5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMDI0MzAwOT9zPTQwMCZ1PWE1ZThjZTAxZThmN2VhZjY3MDg0Y2IxOGFlNjA0MTNlMWU5YTJlYzUmdj00JyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgICBsZXQgY2FudmFzV2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgICAgICAgbGV0IGNhbnZhc0hlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgICAgICAgbGV0IGdlb21ldHJ5O1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDgwMCl7XG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMjUwLCA0NTAsIDEwMCwgMzApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDY0MCwgNDAwLCBjYW52YXNXaWR0aCwgMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZScpO1xuICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXNXaWR0aDtcbiAgICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGNhbnZhc1dpZHRoICsgMSwgY2FudmFzSGVpZ2h0ICsgMSk7XG4gICAgICAgICAgICAgIGxldCBjYW52YXNUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoY2FudmFzKTtcbiAgICAgICAgICAgICAgY2FudmFzVGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXJcbiAgICAgICAgICAgICAgbGV0IG1lc2hNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxuICAgICAgICAgICAgICAgIC8vIHdpcmVmcmFtZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXA6IGNhbnZhc1RleHR1cmVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIG1lc2hNYXRlcmlhbC5tYXAubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLnBsYW5lID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1lc2hNYXRlcmlhbCk7XG4gICAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUpO1xuICAgICAgICAgICAgLy8gICB0aGlzLnBsYW5lLnJvdGF0aW9uLnk9TWF0aC5QSS84MDtcbiAgICAgICAgICAgICAgdGhpcy5wbGFuZS5yb3RhdGlvbi55ID0gTWF0aC5QSS80O1xuICAgICAgICAgICAgICB0aGlzLnBsYW5lLnJvdGF0aW9uLnggPSBNYXRoLlBJLzQ7XG4gICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZVdpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgbGV0IEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgbGV0IFdJRFRIID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZShXSURUSCwgSEVJR0hUKTtcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gV0lEVEggLyBIRUlHSFQ7XG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgIH1cblxuICAgIGNyZWF0ZU5vaXNlKHRzKXtcbiAgICAgICAgbGV0IGFtcCA9IDQ7XG4gICAgICAgIGxldCB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYodGhpcy5wbGFuZSl7XG4gICAgICAgICAgICBsZXQgY2VudGVyID0gbmV3IFRIUkVFLlZlY3RvcjIoMCwwKTtcbiAgICAgICAgICAgIGxldCB2TGVuZ3RoID0gdGhpcy5wbGFuZS5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID1cbiAgICAgICAgICAgIHRoaXMubm9pc2Uubm9pc2UyRChcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW5lLmdlb21ldHJ5LnZlcnRpY2VzW2ldLnggKyB0aW1lICogMC4wMDAzLFxuICAgICAgICAgICAgICAgIHRoaXMucGxhbmUuZ2VvbWV0cnkudmVydGljZXNbaV0ueSArIHRpbWUgKiAwLjAwMDNcbiAgICAgICAgICAgICkgKiBhbXA7XG4gICAgICAgICAgICAgIGxldCB2ID0gdGhpcy5wbGFuZS5nZW9tZXRyeS52ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgICAgbGV0IGRpc3QgPSBuZXcgVEhSRUUuVmVjdG9yMih2LngsIHYueSkuc3ViKGNlbnRlcik7XG4gICAgICAgICAgICAgIGxldCBzaXplID0gMTQuMDtcbiAgICAgICAgICAgICAgbGV0IG1hZ25pdHVkZSA9IDE1MDtcbiAgICAgICAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPD0gODAwKXtcbiAgICAgICAgICAgICAgICBzaXplID0gMTMuMDtcbiAgICAgICAgICAgICAgICBtYWduaXR1ZGUgPSA4MDtcbiAgICAgICAgICAgICAgICB2LnogPSBNYXRoLnNpbihkaXN0Lmxlbmd0aCgpLy1zaXplICsgKHRzLzEwMCkgKyBkaXN0YW5jZSAvIDIpICogbWFnbml0dWRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdi56ID0gTWF0aC5zaW4oZGlzdC5sZW5ndGgoKS8tc2l6ZSArICh0cy8xMDApICsgMCAvIDIpICogbWFnbml0dWRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsYW5lLmdlb21ldHJ5LnZlcnRpY2VzTmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBsYW5lLmdlb21ldHJ5Lm5vcm1hbHNOZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGxhbmUuZ2VvbWV0cnkuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICAgICAgICAgIHRoaXMucGxhbmUuZ2VvbWV0cnkuY29tcHV0ZUZhY2VOb3JtYWxzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb3ZlKGV2ZW50KXtcbiAgICAgICAgaWYodGhpcy5wbGFuZSl7XG4gICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLnBsYW5lLnJvdGF0aW9uLCAwLjUsIHtlYXNlOiBQb3dlcjIuZWFzZU91dCx5Ok1hdGguUEkvODAseDowfSk7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBoYW5kbGVPdXQoKXtcbiAgICAgICAgaWYodGhpcy5wbGFuZSl7XG4gICAgICAgICAgICBUd2Vlbk1heC50byh0aGlzLnBsYW5lLnJvdGF0aW9uLCAwLjUsIHt5Ok1hdGguUEkvNCx4Ok1hdGguUEkvNH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZVNjZW5lKCl7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+dGhpcy5hbmltYXRlU2NlbmUoKSk7XG4gICAgICAgIHRoaXMudHMrPTEwO1xuICAgICAgICB0aGlzLmNyZWF0ZU5vaXNlKHRoaXMudHMpXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJpbWFnZVwiIGNsYXNzTmFtZT17J2NhbnZhcyd9PjwvY2FudmFzPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2NvbnRhaW5lcicgY2xhc3NOYW1lPXsnY29udGFpbmVyJ30gb25Nb3VzZU1vdmU9e3RoaXMuaGFuZGxlTW92ZX0gb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU91dH0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jYW52YXN7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OmhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDE1MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBTY2VuZU9uZTsiXX0= */\n/*@ sourceURL=/Volumes/Macintosh HD/pizza3.github.io/components/scenes/sceneOne.js */",
        __self: this
      }));
    }
  }]);

  return SceneOne;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

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
/* harmony import */ var _components_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global */ "./components/global.js");
var _jsxFileName = "/Volumes/Macintosh HD/pizza3.github.io/layouts/main.js";





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Yugam Dhuriya"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "\n            @font-face {\n                font-family: 'BebasNeue';\n                src: url('./static/BebasNeue-Regular.otf');\n            }\n\n            *{\n                margin:0;\n                padding:0;\n                box-sizing:border-box;\n                font-family: 'BebasNeue';\n            }\n\n            :focus {\n                outline-color: transparent;\n                outline-style: none;\n            }\n        "
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\n                ::selection {\n                    color: #5f5f5f;\n                    background: #080808;                 \n                }\n\n                ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                    color: #D5D5D5;\n                }\n\n                ::-moz-placeholder { /* Firefox 19+ */\n                    color: #D5D5D5;\n                }\n                :-ms-input-placeholder { /* IE 10+ */\n                    color: #D5D5D5;\n                }\n\n                :-moz-placeholder { /* Firefox 18- */\n                    color: #D5D5D5;\n                }\n            ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
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
    className: "jsx-3141031502" + " " + 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3141031502" + " " + 'headContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3141031502" + " " + 'contLeft',
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
    className: "jsx-3141031502" + " " + 'contRight',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Frontend developer From New Delhi, India Currently living in Chennai, making Stuff with react, node, threes, & Aframe. Interested in technologies such as AR/Vr, Want to become a creative developer.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3141031502",
    css: ".container.jsx-3141031502{position:relative;width:100%;height:100vh;}.headContainer.jsx-3141031502{max-width:1000px;display:block;width:95%;margin:0 auto;}.contLeft.jsx-3141031502{position:relative;float:left;width:50%;top:50px;height:calc(100vh - 50px);padding-top:19vh;}.contRight.jsx-3141031502{position:relative;float:left;width:50%;top:50px;height:calc(100vh - 50px);padding-top:35vh;color:#B7B7B7;font-size:20px;padding-left:6%;padding-right:33px;line-height:24px;}@media (max-width:800px){.contRight.jsx-3141031502{width:100%;top:0px;height:50%;padding-top:14vh;font-size:20px;padding-left:12%;padding-right:12%;text-align:center;line-height:30px;}.contLeft.jsx-3141031502{width:100%;top:0px;height:300px;padding-top:70px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC9waXp6YTMuZ2l0aHViLmlvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCYSxBQUd1QyxBQUtELEFBT0MsQUFTQSxBQWVILEFBV0EsV0FWSCxBQVdBLE1BMUNFLENBTEgsQUFZQSxBQVNBLENBZ0JJLEFBV0UsVUEvQ0osQUFZSCxBQVNBLENBZ0JXLENBaENYLENBMkNXLE9BbkNaLEFBU0EsRUFoQkssQ0FMbEIsS0FxQ3VCLENBeEJPLEFBU0EsQ0EwQjFCLE1BMUNKLE9BZ0N5QixZQXhCSixBQVNBLEtBZ0JLLFlBeEIxQixBQVNrQixNQWdCUSxRQWZQLFVBZ0JNLEtBZkwsWUFnQmhCLElBZm1CLG1CQUNGLGlCQUNyQiIsImZpbGUiOiIvVm9sdW1lcy9NYWNpbnRvc2ggSEQvcGl6emEzLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJy4uL2xheW91dHMvbWFpbic7XG5pbXBvcnQgU2NlbmVPbmUgZnJvbSAnLi4vY29tcG9uZW50cy9zY2VuZXMvc2NlbmVPbmUnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgPFBhZ2U+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udGFpbmVyJ30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2hlYWRDb250YWluZXInfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRMZWZ0J30+XG4gICAgICAgICAgICAgICAgICAgIDxTY2VuZU9uZS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250UmlnaHQnfT5cbiAgICAgICAgICAgICAgICAgICAgRnJvbnRlbmQgZGV2ZWxvcGVyIEZyb20gTmV3IERlbGhpLCBJbmRpYVxuICAgICAgICAgICAgICAgICAgICBDdXJyZW50bHkgbGl2aW5nIGluIENoZW5uYWksIG1ha2luZyBTdHVmZiBcbiAgICAgICAgICAgICAgICAgICAgd2l0aCByZWFjdCwgbm9kZSwgdGhyZWVzLCAmIEFmcmFtZS4gIFxuICAgICAgICAgICAgICAgICAgICBJbnRlcmVzdGVkIGluIHRlY2hub2xvZ2llcyBzdWNoIGFzIEFSL1ZyLFxuICAgICAgICAgICAgICAgICAgICBXYW50IHRvIGJlY29tZSBhIGNyZWF0aXZlIGRldmVsb3Blci5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmhlYWRDb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRMZWZ0e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTl2aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udFJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzV2aDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNCN0I3Qjc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzNweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5jb250UmlnaHR7ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNHZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICAuY29udExlZnR7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3MHB4OyAgXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgIDwvUGFnZT5cbilcbiJdfQ== */\n/*@ sourceURL=/Volumes/Macintosh HD/pizza3.github.io/pages/index.js */",
    __self: this
  })));
});

/***/ }),

/***/ 4:
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

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

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

/***/ "simplex-noise":
/*!********************************!*\
  !*** external "simplex-noise" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simplex-noise");

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