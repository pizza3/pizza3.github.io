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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "emotion"
var external_emotion_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/nav/burger.js
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




var burger_Burger = function Burger(props) {
  return external_react_default.a.createElement("button", {
    className: men,
    onClick: props.handleCLick
  }, external_react_default.a.createElement("div", {
    className: menl
  }), external_react_default.a.createElement("div", {
    className: menr
  }));
};

var startl = Object(external_emotion_["keyframes"])(_templateObject());
var startr = Object(external_emotion_["keyframes"])(_templateObject2());
var men = Object(external_emotion_["css"])(_templateObject3());
var menl = Object(external_emotion_["css"])(_templateObject4());
var menr = Object(external_emotion_["css"])(_templateObject5());
var animl = Object(external_emotion_["css"])(_templateObject6(), startl);
var trans = Object(external_emotion_["css"])(_templateObject7());
/* harmony default export */ var burger = (burger_Burger);
// CONCATENATED MODULE: ./components/nav.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var nav_Nav =
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
      return external_react_default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'nav'
      }, external_react_default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'cover'
      }), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'navHeader'
      }, "yugam dhuriya")), external_react_default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'navSLide'.concat(" ", show ? 'open' : 'close')
      }, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/contact"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'navLink'
      }, "contact")), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/work"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3513806879" + " " + 'navLink'
      }, "work"))), external_react_default.a.createElement(burger, {
        handleCLick: this.handleCLick
      }), external_react_default.a.createElement(style_default.a, {
        styleId: "3513806879",
        css: [".nav.jsx-3513806879{position:fixed;width:100%;height:70px;background:transparent;top:40px;z-index:101;}", ".cover.jsx-3513806879{position:absolute;}", ".navHeader.jsx-3513806879{position:relative;float:left;color:#292929;font-family:'BebasNeue';font-size:47px;margin-top:9px;margin-left:70px;cursor:pointer;}", ".navLink.jsx-3513806879{position:relative;float:right;font-family:'BebasNeue';color:#292929;font-size:21px;margin-right:70px;margin-top:23px;cursor:pointer;}", "@media (max-width:800px){.nav.jsx-3513806879{top:0px;background:transparent;border-bottom:1px solid #f2f2f2;}.cover.jsx-3513806879{width:100%;height:100%;background:#fff;z-index:-1;opacity:0.9;}.navHeader.jsx-3513806879{font-size:40px;margin-left:17px;margin-top:15px;}.navLink.jsx-3513806879{margin-right:17px;margin-top:0px;width:100%;margin-left:9px;height:44%;padding-top:19px;font-size:35px;margin-right:-12px;color:#565656;}.navSLide.jsx-3513806879{position:fixed;width:150px;height:156px;background:#fff;-webkit-transition:all 200ms cubic-bezier(0.175,0.885,0.32,1.275);transition:all 200ms cubic-bezier(0.175,0.885,0.32,1.275);border-radius:12px;padding-top:0px;right:57px;top:69px;box-shadow:0px 0px 23px -17px rgba(0,0,0,0.75);border:1px solid #ececec;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}.open.jsx-3513806879{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}.close.jsx-3513806879{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}}"]
      }));
    }
  }]);

  return Nav;
}(external_react_["Component"]);

/* harmony default export */ var nav = (nav_Nav);
// CONCATENATED MODULE: ./components/footer.js



var footer_Footer = function Footer() {
  return external_react_default.a.createElement("div", {
    className: "jsx-618650999" + " " + 'footer'
  }, external_react_default.a.createElement("div", {
    className: "jsx-618650999" + " " + 'cover'
  }), external_react_default.a.createElement("div", {
    className: "jsx-618650999" + " " + 'footerContainer'
  }, external_react_default.a.createElement("a", {
    href: "https://codepen.io/pizza3/",
    target: "_blank",
    className: "jsx-618650999"
  }, external_react_default.a.createElement("img", {
    src: "/static/codepen.svg",
    className: "jsx-618650999" + " " + 'imgl'
  })), external_react_default.a.createElement("a", {
    href: "https://twitter.com/tpizza3",
    target: "_blank",
    className: "jsx-618650999"
  }, external_react_default.a.createElement("img", {
    src: "/static/twitter.svg",
    className: "jsx-618650999" + " " + 'imgr'
  })), external_react_default.a.createElement("a", {
    href: "https://github.com/pizza3",
    target: "_blank",
    className: "jsx-618650999"
  }, external_react_default.a.createElement("img", {
    src: "/static/github.svg",
    className: "jsx-618650999" + " " + 'imgr'
  }))), external_react_default.a.createElement(style_default.a, {
    styleId: "618650999",
    css: [".cover.jsx-618650999{position:absolute;}", ".footer.jsx-618650999{position:fixed;width:100%;height:50px;background:transparent;overflow:hidden;margin-top:calc(100vh - 50px);z-index:100;}", ".footerContainer.jsx-618650999{position:relative;width:300px;margin-left:calc(50% - 150px);padding-top:10px;}", ".imgl.jsx-618650999{position:relative;width:28px;float:left;cursor:pointer;}", ".imgr.jsx-618650999{position:relative;width:28px;float:right;margin-left:108px;cursor:pointer;}", "@media (max-width:800px){.cover.jsx-618650999{width:100%;height:100%;background:#fff;z-index:-1;opacity:0.9;}}"]
  }));
};

/* harmony default export */ var footer = (footer_Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/global.js

/* harmony default export */ var global = (function () {
  return external_react_default.a.createElement("div", null);
});
// CONCATENATED MODULE: ./layouts/main.js





/* harmony default export */ var main = __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Yugam Dhuriya"), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), external_react_default.a.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "\n            @font-face {\n                font-family: 'BebasNeue';\n                src: url('./static/BebasNeue-Regular.otf');\n            }\n\n            *{\n                margin:0;\n                padding:0;\n                box-sizing:border-box;\n                font-family: 'BebasNeue';\n            }\n        "
    }
  }), external_react_default.a.createElement("style", null, "\n                ::selection {\n                    color: #5f5f5f;\n                    background: #080808;                 \n                }\n\n                ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                    color: #D5D5D5;\n                }\n\n                ::-moz-placeholder { /* Firefox 19+ */\n                    color: #D5D5D5;\n                }\n                :-ms-input-placeholder { /* IE 10+ */\n                    color: #D5D5D5;\n                }\n\n                :-moz-placeholder { /* Firefox 18- */\n                    color: #D5D5D5;\n                }\n            ")), external_react_default.a.createElement(nav, null), external_react_default.a.createElement(footer, null), children);
});

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Contact).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-759569460" + " " + 'container'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-759569460" + " " + 'headContainer'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-759569460" + " " + 'contLeft'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: "jsx-759569460" + " " + 'form'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        placeholder: "NAME",
        className: "jsx-759569460" + " " + 'text'
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "email",
        placeholder: "EMAIL",
        className: "jsx-759569460" + " " + 'text'
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        placeholder: "MESSAGE",
        className: "jsx-759569460" + " " + 'textArea'
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit",
        className: "jsx-759569460" + " " + 'button'
      }, "SUBMIT"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-759569460" + " " + 'contRight'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-759569460" + " " + 'mailCont'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "mailto:yugam.dhuriya@gmail.com"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-759569460" + " " + 'atag'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../../static/paperplane.svg",
        className: "jsx-759569460" + " " + 'mailPlane'
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-759569460"
      }, "yugam.dhuriya@gmail.com")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "759569460",
        css: [".container.jsx-759569460{position:relative;width:100%;height:100vh;}", ".headContainer.jsx-759569460{max-width:1000px;display:block;width:95%;margin:0 auto;}", ".contLeft.jsx-759569460{position:relative;float:left;width:50%;top:50px;height:calc(100vh - 50px);padding-top:19vh;z-index:10;}", ".contRight.jsx-759569460{position:relative;float:right;width:50%;top:50px;height:calc(100vh - 50px);padding-top:19vh;z-index:-1;}", ".text.jsx-759569460{width:80%;height:36px;font-size:17px;padding-left:8px;border:1px solid #D1D1D1;margin-bottom:17px;}", ".textArea.jsx-759569460{width:80%;height:170px;font-size:17px;padding-left:8px;border:1px solid #D1D1D1;margin-bottom:17px;padding-top:7px;}", ".button.jsx-759569460{position:relative;width:80%;height:36px;border:1px solid #000;background:transparent;font-size:20px;-webkit-transition:0.5s;transition:0.5s;cursor:pointer;}", ".button.jsx-759569460:hover{color:#232931;fill:#ffffff;stroke:#ffffff;}", ".button.jsx-759569460::before,.jsx-759569460::after{content:\"\";background:#e4d183;position:absolute;top:0%;height:100%;width:0;color:#ffffff;background-blend-mode:screen;z-index:-1;}", ".button.jsx-759569460::before{left:0;}", ".button.jsx-759569460::after{right:0;-webkit-transition:width 500ms cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:width 500ms cubic-bezier(0.645,0.045,0.355,1);transition:width 500ms cubic-bezier(0.645,0.045,0.355,1);}", ".button.jsx-759569460:hover.jsx-759569460::before{width:100%;-webkit-transition:width 500ms cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:width 500ms cubic-bezier(0.645,0.045,0.355,1);transition:width 500ms cubic-bezier(0.645,0.045,0.355,1);}", ".button.jsx-759569460:hover.jsx-759569460::after{width:100%;background:transparent;-webkit-transition:0;-webkit-transition:0;transition:0;}", ".mailCont.jsx-759569460{position:relative;float:left;width:100%;height:331px;border-left:1px solid #d1d1d1;}", ".mailPlane.jsx-759569460{width:17px;position:relative;float:left;}", ".atag.jsx-759569460{float:right;border:1px solid #ECECEC;-webkit-text-decoration:none;-webkit-text-decoration:none;text-decoration:none;color:#D5D5D5;padding-left:30PX;padding-right:30px;padding-top:8px;margin-top:19vh;width:294px;height:36px;text-align:center;}", "@media (max-width:800px){.contLeft.jsx-759569460{width:100%;top:0px;height:70vh;padding-top:122px;}.contRight.jsx-759569460{width:100%;top:0px;height:30vh;padding-top:0vh;overflow:hidden;padding-left:3%;padding-right:3%;}.text.jsx-759569460{width:100%;height:46px;}.textArea.jsx-759569460{width:100%;}.button.jsx-759569460{width:100%;height:46px;}.mailCont.jsx-759569460{border-left:none;border-top:1px solid #d1d1d1;}.atag.jsx-759569460{float:left;padding-top:14px;margin-top:7vh;width:100%;height:46px;}.form.jsx-759569460{padding-left:3%;padding-right:3%;}}"]
      })));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })
/******/ ]);