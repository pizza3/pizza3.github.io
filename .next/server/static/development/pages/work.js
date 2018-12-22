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

/***/ "./components/WorkCard.js":
/*!********************************!*\
  !*** ./components/WorkCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/Macintosh HD/pizza3.github.io/components/WorkCard.js";



var WorkCard = function WorkCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3415876418" + " " + 'pro',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.src,
    className: "jsx-3415876418" + " " + 'imgg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3415876418" + " " + 'cont',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3415876418" + " " + 'contTitle',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3415876418" + " " + 'contDef',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.desc), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: props.link,
    target: "_blank",
    className: "jsx-3415876418",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "jsx-3415876418" + " " + 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "view"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3415876418",
    css: ".pro.jsx-3415876418{position:relative;width:100%;height:400px;background-size:cover;margin-bottom:173px;}.imgg.jsx-3415876418{width:100%;height:91%;object-fit:contain;position:relative;left:0;right:0;margin-left:auto;margin-right:auto;-webkit-transition:0.3s;transition:0.3s;}.cont.jsx-3415876418{position:absolute;width:330px;height:372px;background:#131313;right:-52px;top:121px;padding-right:5%;padding-left:5%;padding-top:38px;-webkit-transition:0.3s;transition:0.3s;}.contTitle.jsx-3415876418{color:#c6c6c6;text-align:center;font-size:19px;margin-bottom:22px;}.contDef.jsx-3415876418{color:#878787;text-align:center;word-spacing:7px;}.button.jsx-3415876418{position:relative;width:80%;height:36px;color:#232323;border:1px solid #d8d8d8;background:#d8d8d8;font-size:20px;-webkit-transition:0.5s;transition:0.5s;cursor:pointer;background-blend-mode:screen;margin-top:25px;margin-left:10%;}@media (max-width:800px){.pro.jsx-3415876418{margin-bottom:202px;}.imgg.jsx-3415876418{width:100%;height:auto;object-fit:contain;position:relative;left:0;right:0;margin-left:auto;margin-right:auto;}.cont.jsx-3415876418{position:absolute;width:90%;height:34vh;background:#292929;right:-52px;top:45vw;left:0;right:0;margin-left:auto;margin-right:auto;padding-right:10%;padding-left:10%;padding-top:38px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC9waXp6YTMuZ2l0aHViLmlvL2NvbXBvbmVudHMvV29ya0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWEsQUFHc0MsQUFRTixBQVlPLEFBYUosQUFPQSxBQU1JLEFBaUJNLEFBSVQsQUFXTyxXQXJFWCxBQTJESyxHQWxDRSxBQU9BLElBeENSLEFBb0JFLEFBMEJGLEFBZ0NJLEVBZmQsRUF0RG1CLENBMkRJLEtBckJYLEFBZ0NJLENBOUVKLENBb0JDLEVBYUUsQUFPRSxRQU9ILEFBZ0NTLENBdEVMLENBUkksQUFtRUEsQ0EvQ0gsSUFhQSxFQU92QixLQU82QixLQXRDbEIsQUFzRVMsQ0FYTCxFQS9DQyxFQXBCUSxFQVNaLEFBd0JaLENBbUNnQixJQVdDLEdBckVJLEFBV1AsQ0FnRFcsSUF0QkYsQ0FpQ1IsSUEvRWYsQUFxQnFCLEdBMkRMLElBdEVNLENBMkRJLEdBWUQsR0FsQ04sR0F6QkMsUUFYRCxDQTJEZixFQVlzQixDQWxDTixJQXpCQyxhQTRESyxJQTNEUCxjQTRETSxDQXhFekIsSUFxQ21CLFlBb0NNLEdBbkNRLE1BekJqQyxRQTZESSxlQW5DZ0IsZ0JBQ0EsZ0JBQ3BCIiwiZmlsZSI6Ii9Wb2x1bWVzL01hY2ludG9zaCBIRC9waXp6YTMuZ2l0aHViLmlvL2NvbXBvbmVudHMvV29ya0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IFdvcmtDYXJkID0gKHByb3BzKSA9PntcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm8nPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltZ2cnIHNyYz17cHJvcHMuc3JjfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRUaXRsZSc+e3Byb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250RGVmJz57cHJvcHMuZGVzY308L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbic+dmlldzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLnByb3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTczcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmltZ2d7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkxJTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjowLjNzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMzBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNzJweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzEzMTMxMztcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC01MnB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEyMXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDM4cHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246MC4zcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udFRpdGxle1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2M2YzZjNjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnREZWZ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODc4Nzg3O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQtc3BhY2luZzogN3B4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5idXR0b257XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIzMjMyMztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2NyZWVuO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC5wcm97XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5pbWdne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY29udHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0dmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC01MnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA0NXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXb3JrQ2FyZDsiXX0= */\n/*@ sourceURL=/Volumes/Macintosh HD/pizza3.github.io/components/WorkCard.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkCard);

/***/ }),

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

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var _components_WorkCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WorkCard */ "./components/WorkCard.js");
var _jsxFileName = "/Volumes/Macintosh HD/pizza3.github.io/pages/work.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Work =
/*#__PURE__*/
function (_Component) {
  _inherits(Work, _Component);

  function Work(props) {
    var _this;

    _classCallCheck(this, Work);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Work).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Work, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2152944488" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2152944488" + " " + 'img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_WorkCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        src: '../../static/pro1.jpg',
        title: 'React gui controller',
        desc: "A graphical user interface for changing states in react. Inspired from Google's popular dat.GUI controller library. This library provides additional functionalities such as Ease curve editor, Draggable placement and Stylable component's. For styling this library uses Zeit styled-jsx.",
        link: 'https://github.com/pizza3/react-gui-controller',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_WorkCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        src: '../../static/pro2.jpg',
        title: 'React video pop',
        desc: "Floating video component made in react , which is draggable across any coordinate of the screen, consist of basic controls like mute, play etc and resizable too across any corner of the window. The working is inspired from the MacOS picture to picture feature.",
        link: 'https://github.com/pizza3/react-video-pop',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2152944488",
        css: ".container.jsx-2152944488{position:absolute;width:100%;height:100vh;padding-left:20%;padding-right:20%;}.img.jsx-2152944488{position:relative;width:100%;height:900px;margin-left:0;margin-top:calc(50vh - 200px);background:transparent;}@media (max-width:800px){.container.jsx-2152944488{padding-left:0%;padding-right:0%;}.img.jsx-2152944488{margin-top:112px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL01hY2ludG9zaCBIRC9waXp6YTMuZ2l0aHViLmlvL3BhZ2VzL3dvcmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJpQixBQUcwQyxBQVFDLEFBVUUsQUFLQyxnQkFKQSxDQUtyQixDQXZCVSxBQVFDLFdBUEMsQUFRQyxJQVViLFNBakJpQixBQVFILGNBQ2dCLEdBUlosa0JBQ3RCLFNBUTJCLHVCQUMzQiIsImZpbGUiOiIvVm9sdW1lcy9NYWNpbnRvc2ggSEQvcGl6emEzLmdpdGh1Yi5pby9wYWdlcy93b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi9sYXlvdXRzL21haW4nO1xuaW1wb3J0IFdvcmtDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvV29ya0NhcmQnO1xuY2xhc3MgV29yayBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlPXtcblxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V29ya0NhcmQgc3JjPXsnLi4vLi4vc3RhdGljL3BybzEuanBnJ30gdGl0bGU9eydSZWFjdCBndWkgY29udHJvbGxlcid9IGRlc2M9e1wiQSBncmFwaGljYWwgdXNlciBpbnRlcmZhY2UgZm9yIGNoYW5naW5nIHN0YXRlcyBpbiByZWFjdC4gSW5zcGlyZWQgZnJvbSBHb29nbGUncyBwb3B1bGFyIGRhdC5HVUkgY29udHJvbGxlciBsaWJyYXJ5LiBUaGlzIGxpYnJhcnkgcHJvdmlkZXMgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXRpZXMgc3VjaCBhcyBFYXNlIGN1cnZlIGVkaXRvciwgRHJhZ2dhYmxlIHBsYWNlbWVudCBhbmQgU3R5bGFibGUgY29tcG9uZW50J3MuIEZvciBzdHlsaW5nIHRoaXMgbGlicmFyeSB1c2VzIFplaXQgc3R5bGVkLWpzeC5cIn0gbGluaz17J2h0dHBzOi8vZ2l0aHViLmNvbS9waXp6YTMvcmVhY3QtZ3VpLWNvbnRyb2xsZXInfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V29ya0NhcmQgc3JjPXsnLi4vLi4vc3RhdGljL3BybzIuanBnJ30gdGl0bGU9eydSZWFjdCB2aWRlbyBwb3AnfSBkZXNjPXtcIkZsb2F0aW5nIHZpZGVvIGNvbXBvbmVudCBtYWRlIGluIHJlYWN0ICwgd2hpY2ggaXMgZHJhZ2dhYmxlIGFjcm9zcyBhbnkgY29vcmRpbmF0ZSBvZiB0aGUgc2NyZWVuLCBjb25zaXN0IG9mIGJhc2ljIGNvbnRyb2xzIGxpa2UgbXV0ZSwgcGxheSBldGMgYW5kIHJlc2l6YWJsZSB0b28gYWNyb3NzIGFueSBjb3JuZXIgb2YgdGhlIHdpbmRvdy4gVGhlIHdvcmtpbmcgaXMgaW5zcGlyZWQgZnJvbSB0aGUgTWFjT1MgcGljdHVyZSB0byBwaWN0dXJlIGZlYXR1cmUuXCJ9IGxpbms9eydodHRwczovL2dpdGh1Yi5jb20vcGl6emEzL3JlYWN0LXZpZGVvLXBvcCd9Lz4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjAlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyg1MHZoIC0gMjAwcHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgV29yayJdfQ== */\n/*@ sourceURL=/Volumes/Macintosh HD/pizza3.github.io/pages/work.js */",
        __self: this
      })));
    }
  }]);

  return Work;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/work.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/work.js */"./pages/work.js");


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

/***/ })

/******/ });
//# sourceMappingURL=work.js.map