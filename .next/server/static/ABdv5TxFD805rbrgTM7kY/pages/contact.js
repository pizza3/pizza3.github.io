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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "emotion"
var external_emotion_ = __webpack_require__(1);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

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
function nav_templateObject6() {
  var data = nav_taggedTemplateLiteral(["\n    @media (max-width: 800px) {\n        transform:scale(0.5);\n        opacity:0;\n    }    \n"]);

  nav_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function nav_templateObject5() {
  var data = nav_taggedTemplateLiteral(["\n    @media (max-width: 800px) {\n        transform:scale(1);\n        opacity:1;\n    }    \n"]);

  nav_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function nav_templateObject4() {
  var data = nav_taggedTemplateLiteral(["\n\n    @media (max-width: 800px) {\n        position: fixed;\n        width: 150px;\n        height: 156px;\n        background: #fff;\n        transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275); \n        border-radius: 12px;\n        padding-top: 0px;\n        right: 57px;\n        top: 69px;\n        box-shadow: 0px 0px 23px -17px rgba(0,0,0,0.75);\n        border: 1px solid #ececec;  \n        transform-origin:center;\n        }\n"]);

  nav_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function nav_templateObject3() {
  var data = nav_taggedTemplateLiteral(["\n    position: relative;\n    float: right;\n    font-family: 'BebasNeue';\n    color: #292929;\n    font-size: 21px;\n    margin-right: 70px;\n    margin-top: 23px;\n    cursor:pointer;\n    @media (max-width: 800px) {\n        margin-right: 17px;\n        margin-top: 0px;\n        width: 100%;\n        margin-left: 9px;\n        height: 44%;\n        padding-top: 19px;        \n        font-size: 35px;\n        margin-right: -12px;\n        color: #565656;\n    }\n"]);

  nav_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function nav_templateObject2() {
  var data = nav_taggedTemplateLiteral(["\n    position: relative;\n    float: left;\n    font-family: 'BebasNeue';\n    color: #292929;\n    font-size: 47px;\n    margin-top: 9px;\n    margin-left: 70px;\n    cursor:pointer;\n    @media (max-width: 800px) {\n        margin-left: 17px;\n        margin-top: 17px;\n  }\n"]);

  nav_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function nav_templateObject() {
  var data = nav_taggedTemplateLiteral(["\n    position:fixed;\n    width:100%;\n    height: 70px;\n    top: 40px;\n    z-index:101;\n    @media (max-width: 800px) {\n        top: 0px;\n  }\n"]);

  nav_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function nav_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
        className: nav
      }, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/"
      }, external_react_default.a.createElement("div", {
        className: navHeader
      }, "yugam dhuriya")), external_react_default.a.createElement("div", {
        className: "".concat(navSLide, " ").concat(show ? nav_open : nav_close)
      }, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/contact"
      }, external_react_default.a.createElement("div", {
        className: navLink
      }, "contact")), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/work"
      }, external_react_default.a.createElement("div", {
        className: navLink
      }, "work"))), external_react_default.a.createElement(burger, {
        handleCLick: this.handleCLick
      }));
    }
  }]);

  return Nav;
}(external_react_["Component"]);

var nav = Object(external_emotion_["css"])(nav_templateObject());
var navHeader = Object(external_emotion_["css"])(nav_templateObject2());
var navLink = Object(external_emotion_["css"])(nav_templateObject3());
var navSLide = Object(external_emotion_["css"])(nav_templateObject4());
var nav_open = Object(external_emotion_["css"])(nav_templateObject5());
var nav_close = Object(external_emotion_["css"])(nav_templateObject6());
/* harmony default export */ var components_nav = (nav_Nav);
// CONCATENATED MODULE: ./components/footer.js


function footer_templateObject4() {
  var data = footer_taggedTemplateLiteral(["\n    position:relative;\n    width: 28px;\n    float: right;\n    margin-left: 108px;\n    cursor:pointer;\n\n"]);

  footer_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function footer_templateObject3() {
  var data = footer_taggedTemplateLiteral(["\n    position:relative;\n    width: 28px;\n    float: left;\n    cursor:pointer;\n"]);

  footer_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function footer_templateObject2() {
  var data = footer_taggedTemplateLiteral(["\n    position:relative;\n    width:300px;\n    margin-left:calc(50% - 150px);\n"]);

  footer_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function footer_templateObject() {
  var data = footer_taggedTemplateLiteral(["\n    position:fixed;\n    width:100%;\n    height:50px;\n    background:#fff;\n    overflow:hidden;\n    margin-top: calc(100vh - 50px);\n    z-index: 100;\n"]);

  footer_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function footer_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var footer_Footer = function Footer() {
  return external_react_default.a.createElement("div", {
    className: footer
  }, external_react_default.a.createElement("div", {
    className: footerContainer
  }, external_react_default.a.createElement("a", {
    href: "https://codepen.io/pizza3/",
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    className: imgl,
    src: "/static/codepen.svg",
    alt: "my image"
  })), external_react_default.a.createElement("a", {
    href: "https://twitter.com/tpizza3",
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    className: imgr,
    src: "/static/twitter.svg",
    alt: "my image"
  })), external_react_default.a.createElement("a", {
    href: "https://github.com/pizza3",
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    className: imgr,
    src: "/static/github.svg",
    alt: "my image"
  }))));
};

var footer = Object(external_emotion_["css"])(footer_templateObject());
var footerContainer = Object(external_emotion_["css"])(footer_templateObject2());
var imgl = Object(external_emotion_["css"])(footer_templateObject3());
var imgr = Object(external_emotion_["css"])(footer_templateObject4());
/* harmony default export */ var components_footer = (footer_Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./layouts/main.js




/* harmony default export */ var main = __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Yugam Dhuriya"), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), external_react_default.a.createElement("style", null, "\n                 @font-face {\n                    font-family: 'BebasNeue';\n                    src: url('./static/BebasNeue-Regular.otf');\n                }\n    \n                *{\n                    margin:0;\n                    padding:0;\n                    box-sizing:border-box;\n                    font-family: 'BebasNeue';\n                }\n\n                ::selection {\n                    color: #5f5f5f;\n                    background: #080808;                 \n                }\n\n                ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                    color: #D5D5D5;\n                }\n\n                ::-moz-placeholder { /* Firefox 19+ */\n                    color: #D5D5D5;\n                }\n                :-ms-input-placeholder { /* IE 10+ */\n                    color: #D5D5D5;\n                }\n\n                :-moz-placeholder { /* Firefox 18- */\n                    color: #D5D5D5;\n                }\n            ")), external_react_default.a.createElement(components_nav, null), external_react_default.a.createElement(components_footer, null), children);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 800px) {\n        padding-left: 3%;\n    padding-right: 3%;\n    }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    float: right;\n    border: 1px solid #ECECEC;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    color: #D5D5D5;\n    padding-left: 30PX;\n    padding-right: 30px;\n    padding-top: 8px;\n    margin-top: 19vh;\n    width: 294px;\n    height: 36px;\n    text-align: center;\n    @media (max-width: 800px) {\n        float: left;\n        padding-top: 14px;\n        margin-top: 7vh;\n        width: 100%;\n        height: 46px;\n        }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    width: 17px;\n    position: relative;\n    float: left;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    float: left;\n    width: 100%;\n    height: 331px;\n    border-left: 1px solid #d1d1d1;\n    @media (max-width: 800px) {\n        border-left:none;\n        border-top: 1px solid #d1d1d1;\n        }\n}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    position:relative;\n    width: 80%;\n    height: 36px;\n    border: 1px solid #000;\n    background: transparent;\n    font-size: 20px;\n    transition:0.5s;\n    cursor:pointer;\n    :hover{\n        color: #232931;\n        fill: #ffffff;\n        stroke: #ffffff;\n    }\n\n    ::before,\n    ::after {\n        content: \"\";\n        background: #e4d183;\n        position: absolute;\n        top: 0%;\n        height: 100%;\n        width: 0;\n        color: #ffffff;\n        background-blend-mode: screen;\n        z-index: -1;\n    }\n\n    ::before {\n        left: 0;\n    }\n\n    ::after {\n        right: 0;\n        -webkit-transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);\n        transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);\n    }\n\n    :hover::before {\n        width: 100%;\n        -webkit-transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);\n        transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);\n    }\n\n    :hover::after {\n        width: 100%;\n        background: transparent;\n        -webkit-transition: 0;\n        transition: 0;\n    }\n    @media (max-width: 800px) {\n        width: 100%;\n    height: 46px;\n\n    }\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 80%;\n    height: 170px;\n    font-size: 17px;\n    padding-left: 8px;\n    border: 1px solid #D1D1D1;\n    margin-bottom: 17px;\n    padding-top: 7px;\n    @media (max-width: 800px) {\n        width: 100%;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width: 80%;\n    height: 36px;\n    font-size: 17px;\n    padding-left: 8px;\n    border: 1px solid #D1D1D1;\n    margin-bottom: 17px;\n    @media (max-width: 800px) {\n        width: 100%;\n    height: 46px;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    float: right;\n    width: 50%;\n    top: 50px;\n    height: calc(100vh - 50px);\n    padding-top:19vh;\n    z-index:-1;\n    @media (max-width: 800px) {\n        width: 100%;\n        top: 0px;\n        height: 30vh;\n        padding-top: 0vh;\n        overflow: hidden; \n        padding-left: 3%;\n        padding-right: 3%;\n        }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    float: left;\n    width: 50%;\n    top: 50px;\n    height: calc(100vh - 50px);\n    padding-top:19vh;\n    z-index:10;\n    @media (max-width: 800px) {\n        width: 100%;\n        top: 0px;\n        height: 70vh;\n        padding-top: 122px;    \n        }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    max-width: 1000px;\n    display: block;\n    width: 95%;\n    margin: 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n    height: 100vh;\n"]);

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: container
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: headContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: contLeft
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: form
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: text,
        placeholder: "NAME"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        className: text,
        placeholder: "EMAIL"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: textArea,
        placeholder: "MESSAGE"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: button
      }, "SUBMIT"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: contRight
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: mailCont
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:yugam.dhuriya@gmail.com"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: atag
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/paperplane.svg",
        className: mailPlane,
        alt: "my image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "yugam.dhuriya@gmail.com"))))))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var container = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject());
var headContainer = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());
var contLeft = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3());
var contRight = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4());
var text = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5());
var textArea = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6());
var button = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject7());
var mailCont = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject8());
var mailPlane = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject9());
var atag = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject10());
var form = Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject11());
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })
/******/ ]);