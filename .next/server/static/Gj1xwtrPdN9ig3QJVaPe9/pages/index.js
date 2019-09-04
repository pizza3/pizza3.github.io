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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "emotion"
var external_emotion_ = __webpack_require__(2);

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





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
    _this.handleCLick = _this.handleCLick.bind(_assertThisInitialized(_this));
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
        className: "jsx-528365962" + " " + 'nav'
      }, external_react_default.a.createElement("div", {
        className: "jsx-528365962" + " " + 'cover'
      }), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/"
      }, external_react_default.a.createElement("div", {
        className: "jsx-528365962" + " " + 'navHeader'
      }, "yugam dhuriya")), external_react_default.a.createElement("div", {
        className: "jsx-528365962" + " " + 'navSLide'.concat(" ", show ? 'open' : 'close')
      }, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/contact"
      }, external_react_default.a.createElement("div", {
        className: "jsx-528365962" + " " + 'navLink'
      }, "contact")), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/work"
      }, external_react_default.a.createElement("div", {
        className: "jsx-528365962" + " " + 'navLink'
      }, "work"))), external_react_default.a.createElement(burger, {
        handleCLick: this.handleCLick
      }), external_react_default.a.createElement(style_default.a, {
        styleId: "528365962",
        css: [".nav.jsx-528365962{position:fixed;width:100%;height:70px;background:transparent;top:40px;z-index:101;}", ".cover.jsx-528365962{position:absolute;}", ".navHeader.jsx-528365962{position:relative;float:left;color:#292929;font-family:'BebasNeue';font-size:47px;margin-top:9px;margin-left:70px;cursor:pointer;}", ".navLink.jsx-528365962{position:relative;float:right;font-family:'BebasNeue';color:#292929;font-size:21px;margin-right:70px;margin-top:23px;cursor:pointer;}", "@media (max-width:800px){.nav.jsx-528365962{top:0px;background:transparent;border-bottom:1px solid #f2f2f2;}.cover.jsx-528365962{width:100%;height:100%;background:rgba(255,255,255,0.7);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);z-index:-1;}.navHeader.jsx-528365962{font-size:40px;margin-left:17px;margin-top:15px;}.navLink.jsx-528365962{margin-right:17px;margin-top:0px;width:100%;margin-left:9px;height:44%;padding-top:19px;font-size:35px;margin-right:-12px;color:#565656;}.navSLide.jsx-528365962{position:fixed;width:150px;height:156px;background:#fff;-webkit-transition:all 200ms cubic-bezier(0.175,0.885,0.32,1.275);transition:all 200ms cubic-bezier(0.175,0.885,0.32,1.275);border-radius:12px;padding-top:0px;right:57px;top:69px;box-shadow:0px 0px 23px -17px rgba(0,0,0,0.75);border:1px solid #ececec;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}.open.jsx-528365962{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}.close.jsx-528365962{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}}"]
      }));
    }
  }]);

  return Nav;
}(external_react_["Component"]);

/* harmony default export */ var nav = (nav_Nav);
// CONCATENATED MODULE: ./components/footer.js



var footer_Footer = function Footer() {
  return external_react_default.a.createElement("div", {
    className: "jsx-3822482412" + " " + 'footer'
  }, external_react_default.a.createElement("div", {
    className: "jsx-3822482412" + " " + 'cover'
  }), external_react_default.a.createElement("div", {
    className: "jsx-3822482412" + " " + 'footerContainer'
  }, external_react_default.a.createElement("a", {
    href: "https://codepen.io/pizza3/",
    target: "_blank",
    className: "jsx-3822482412"
  }, external_react_default.a.createElement("img", {
    src: "/static/codepen.svg",
    className: "jsx-3822482412" + " " + 'imgl'
  })), external_react_default.a.createElement("a", {
    href: "https://twitter.com/yugam_",
    target: "_blank",
    className: "jsx-3822482412"
  }, external_react_default.a.createElement("img", {
    src: "/static/twitter.svg",
    className: "jsx-3822482412" + " " + 'imgr'
  })), external_react_default.a.createElement("a", {
    href: "https://github.com/pizza3",
    target: "_blank",
    className: "jsx-3822482412"
  }, external_react_default.a.createElement("img", {
    src: "/static/github.svg",
    className: "jsx-3822482412" + " " + 'imgr'
  }))), external_react_default.a.createElement(style_default.a, {
    styleId: "3822482412",
    css: [".cover.jsx-3822482412{position:absolute;}", ".footer.jsx-3822482412{position:fixed;width:100%;height:50px;background:transparent;overflow:hidden;margin-top:calc(100vh - 50px);z-index:100;}", ".footerContainer.jsx-3822482412{position:relative;width:300px;margin-left:calc(50% - 150px);padding-top:10px;}", ".imgl.jsx-3822482412{position:relative;width:28px;float:left;cursor:pointer;}", ".imgr.jsx-3822482412{position:relative;width:28px;float:right;margin-left:108px;cursor:pointer;}", "@media (max-width:800px){.cover.jsx-3822482412{width:100%;height:100%;background:rgba(255,255,255,0.7);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);z-index:-1;}}"]
  }));
};

/* harmony default export */ var footer = (footer_Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
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
      __html: "\n            @font-face {\n                font-family: 'BebasNeue';\n                src: url('./static/BebasNeue-Regular.otf');\n            }\n\n            *{\n                margin:0;\n                padding:0;\n                box-sizing:border-box;\n                font-family: 'BebasNeue';\n            }\n\n            :focus {\n                outline-color: transparent;\n                outline-style: none;\n            }\n        "
    }
  }), external_react_default.a.createElement("style", null, "\n                ::selection {\n                    color: #5f5f5f;\n                    background: #080808;                 \n                }\n\n                ::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n                    color: #D5D5D5;\n                }\n\n                ::-moz-placeholder { /* Firefox 19+ */\n                    color: #D5D5D5;\n                }\n                :-ms-input-placeholder { /* IE 10+ */\n                    color: #D5D5D5;\n                }\n\n                :-moz-placeholder { /* Firefox 18- */\n                    color: #D5D5D5;\n                }\n            ")), children);
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./layouts/main.js + 4 modules
var main = __webpack_require__(5);

// CONCATENATED MODULE: ./components/WorkCard.js



var WorkCard_WorkCard = function WorkCard(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-240288034" + " " + 'pro'
  }, props.type === 'video' ? external_react_default.a.createElement("video", {
    autoPlay: true,
    loop: true,
    mute: true,
    src: props.src,
    className: "jsx-240288034" + " " + 'imgg'
  }) : external_react_default.a.createElement("img", {
    src: props.src,
    className: "jsx-240288034" + " " + 'imgg'
  }), external_react_default.a.createElement("div", {
    className: "jsx-240288034" + " " + 'cont'
  }, external_react_default.a.createElement("div", {
    className: "jsx-240288034" + " " + 'contTitle'
  }, props.title), external_react_default.a.createElement("div", {
    className: "jsx-240288034" + " " + 'contDef'
  }, props.desc), external_react_default.a.createElement("a", {
    href: props.link,
    target: "_blank",
    className: "jsx-240288034"
  }, external_react_default.a.createElement("button", {
    className: "jsx-240288034" + " " + 'button'
  }, "view"))), external_react_default.a.createElement(style_default.a, {
    styleId: "240288034",
    css: [".pro.jsx-240288034{position:relative;width:100%;height:400px;text-align:center;background-size:cover;margin-bottom:173px;}", ".imgg.jsx-240288034{width:auto;height:100%;border-radius:4px;position:relative;-webkit-transition:0.3s;transition:0.3s;}", ".cont.jsx-240288034{position:absolute;width:330px;height:372px;background:#ffffff;border:1px solid #000;right:-52px;top:121px;padding-right:5%;padding-left:5%;padding-top:63px;box-shadow:10px 10px 0px 2px rgba(0,0,0,0.95);-webkit-transition:0.3s;transition:0.3s;}", ".contTitle.jsx-240288034{color:#000;text-align:center;font-size:19px;margin-bottom:22px;}", ".contDef.jsx-240288034{color:#787878;text-align:justify;font-family:monospace;}", ".button.jsx-240288034{position:relative;width:80%;height:36px;color:#fff;border:1px solid #000;background:#000;font-size:20px;-webkit-transition:0.5s;transition:0.5s;cursor:pointer;background-blend-mode:screen;margin-top:25px;}", "@media (max-width:800px){.pro.jsx-240288034{margin-bottom:202px;}.imgg.jsx-240288034{width:100%;height:auto;object-fit:contain;position:relative;left:0;right:0;margin-left:auto;margin-right:auto;}.cont.jsx-240288034{position:absolute;width:90%;height:34vh;right:-52px;top:45vw;left:0;right:0;margin-left:auto;margin-right:auto;padding-right:10%;padding-left:10%;padding-top:38px;}}"]
  }));
};

/* harmony default export */ var components_WorkCard = (WorkCard_WorkCard);
// CONCATENATED MODULE: ./pages/work.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var work_Work =
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
      return external_react_default.a.createElement(main["a" /* default */], null, external_react_default.a.createElement("div", {
        className: "jsx-2807214414" + " " + 'container'
      }, external_react_default.a.createElement("div", {
        className: "jsx-2807214414" + " " + 'img'
      }, external_react_default.a.createElement(components_WorkCard, {
        src: '../../static/vid3.mp4',
        type: "video",
        title: 'Re Cardswipe',
        desc: "re-cardswipe is a react component library emulating the UI card swipe as seen on applications such as tinder, this library provides the state track for each card, controls for physics of animation, dynamic trigger, and other feature's.",
        link: 'https://github.com/pizza3/re-swipe'
      }), external_react_default.a.createElement(components_WorkCard, {
        src: '../../static/vid1.mp4',
        type: "video",
        title: 'React gui controller',
        desc: "A graphical user interface for changing states in react. Inspired from Google's popular dat.GUI controller library. This library provides additional functionalities such as Ease curve editor, Draggable placement and Stylable component's. For styling this library uses Zeit styled-jsx.",
        link: 'https://github.com/pizza3/react-gui-controller'
      }), external_react_default.a.createElement(components_WorkCard, {
        src: '../../static/vid2.mp4',
        type: "video",
        title: 'React video pop',
        desc: "Floating video component made in react , which is draggable across any coordinate of the screen, consist of basic controls like mute, play etc and resizable too across any corner of the window. The working is inspired from the MacOS picture to picture feature.",
        link: 'https://github.com/pizza3/react-video-pop'
      })), external_react_default.a.createElement(style_default.a, {
        styleId: "2807214414",
        css: [".container.jsx-2807214414{position:absolute;width:100%;height:100vh;padding-left:20%;padding-right:20%;}", ".img.jsx-2807214414{position:relative;width:100%;height:900px;margin-left:0;margin-top:calc(50vh - 350px);background:transparent;}", "@media (max-width:800px){.container.jsx-2807214414{padding-left:0%;padding-right:0%;}.img.jsx-2807214414{margin-top:6px;}}"]
      })));
    }
  }]);

  return Work;
}(external_react_["Component"]);

/* harmony default export */ var work = __webpack_exports__["default"] = (work_Work);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("simplex-noise");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./layouts/main.js + 4 modules
var main = __webpack_require__(5);

// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(3);

// EXTERNAL MODULE: external "simplex-noise"
var external_simplex_noise_ = __webpack_require__(9);
var external_simplex_noise_default = /*#__PURE__*/__webpack_require__.n(external_simplex_noise_);

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(8);

// CONCATENATED MODULE: ./components/scenes/sceneOne.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var sceneOne_SceneOne =
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
    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_this));
    _this.handleOut = _this.handleOut.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SceneOne, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.noise = new external_simplex_noise_default.a();
      this.mouse = new external_three_["Vector2"]();
      this.initScene();
      this.loadTexture();
      this.animateScene();
    }
  }, {
    key: "initScene",
    value: function initScene() {
      this.ts = 1;
      this.plane = null;
      this.scene = new external_three_["Scene"]();

      if (window.innerWidth <= 800) {
        this.width = 300;
        this.height = 300;
      } else {
        this.width = 400;
        this.height = 400;
      }

      this.renderer = new external_three_["WebGLRenderer"]();
      this.renderer.setClearColor(0xffffff);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.width, this.height);
      this.renderer.shadowMap.enabled = true;
      this.camera = new external_three_["OrthographicCamera"](window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 10000);
      this.camera.position.set(0, 0, 1000);
      this.camera.lookAt(this.scene.position);
      this.raycaster = new external_three_["Raycaster"]();
      var container = document.getElementById('container');
      container.appendChild(this.renderer.domElement);
      this.renderer.render(this.scene, this.camera);
      this.loader = new external_three_["ImageLoader"](); // window.addEventListener("resize", this.handleWindowResize.bind(this), false);
    }
  }, {
    key: "loadTexture",
    value: function loadTexture() {
      this.loader.load('https://avatars0.githubusercontent.com/u/20243009?s=400&u=a5e8ce01e8f7eaf67084cb18ae60413e1e9a2ec5&v=4', function (image) {
        var canvasWidth = image.width;
        var canvasHeight = image.height;
        var geometry;

        if (window.innerWidth <= 800) {
          geometry = new external_three_["PlaneGeometry"](250, 450, 100, 30);
        } else {
          geometry = new external_three_["PlaneGeometry"](640, 400, canvasWidth, 10);
        }

        var canvas = document.getElementById('image');
        canvas.height = canvasHeight;
        canvas.width = canvasWidth;
        var context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, canvasWidth + 1, canvasHeight + 1);
        var canvasTexture = new external_three_["Texture"](canvas);
        canvasTexture.minFilter = external_three_["LinearFilter"];
        var meshMaterial = new external_three_["MeshBasicMaterial"]({
          opacity: 1,
          side: external_three_["DoubleSide"],
          // wireframe: true,
          map: canvasTexture
        });
        meshMaterial.map.needsUpdate = true;
        this.plane = new external_three_["Mesh"](geometry, meshMaterial);
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
        var center = new external_three_["Vector2"](0, 0);
        var vLength = this.plane.geometry.vertices.length;

        for (var i = 0; i < vLength; i++) {
          var distance = this.noise.noise2D(this.plane.geometry.vertices[i].x + time * 0.0003, this.plane.geometry.vertices[i].y + time * 0.0003) * amp;
          var v = this.plane.geometry.vertices[i];
          var dist = new external_three_["Vector2"](v.x, v.y).sub(center);
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
        external_gsap_["TweenMax"].to(this.plane.rotation, 0.5, {
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
        external_gsap_["TweenMax"].to(this.plane.rotation, 0.5, {
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
      return external_react_default.a.createElement("div", {
        className: "jsx-485185958"
      }, external_react_default.a.createElement("canvas", {
        id: "image",
        className: "jsx-485185958" + " " + 'canvas'
      }), external_react_default.a.createElement("div", {
        id: "container",
        onMouseMove: this.handleMove,
        onMouseLeave: this.handleOut,
        className: "jsx-485185958" + " " + 'container'
      }), external_react_default.a.createElement(style_default.a, {
        styleId: "485185958",
        css: [".container.jsx-485185958{position:relative;width:400px;height:400px;}", ".canvas.jsx-485185958{visibility:hidden;display:none;}", "@media (max-width:800px){.container.jsx-485185958{position:relative;width:300px;height:300px;margin-left:calc(50% - 150px);}}"]
      }));
    }
  }]);

  return SceneOne;
}(external_react_["Component"]);

/* harmony default export */ var sceneOne = (sceneOne_SceneOne);
// EXTERNAL MODULE: ./pages/work.js + 1 modules
var work = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/index.js





/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(main["a" /* default */], null, external_react_default.a.createElement("div", {
    className: "jsx-2044388330" + " " + 'container'
  }, external_react_default.a.createElement("div", {
    className: "jsx-2044388330" + " " + 'navHeader'
  }, "yugam dhuriya"), external_react_default.a.createElement("div", {
    className: "jsx-2044388330" + " " + 'navLink'
  }, "Work"), external_react_default.a.createElement(work["default"], null), external_react_default.a.createElement(style_default.a, {
    styleId: "2044388330",
    css: [".container.jsx-2044388330{position:relative;width:100%;height:100vh;}", ".headContainer.jsx-2044388330{max-width:1000px;display:block;width:95%;margin:0 auto;}", ".contLeft.jsx-2044388330{position:relative;float:left;width:50%;top:50px;height:calc(100vh - 50px);padding-top:19vh;}", ".navHeader.jsx-2044388330{position:relative;text-align:center;color:#292929;font-family:'BebasNeue';font-weight:900;font-style:italic;font-size:60px;margin-top:calc(50vh - 46px);cursor:pointer;}", ".contRight.jsx-2044388330{position:relative;float:left;width:50%;top:50px;height:calc(100vh - 50px);padding-top:35vh;color:#B7B7B7;font-size:20px;padding-left:6%;padding-right:33px;line-height:24px;}", ".navLink.jsx-2044388330{position:relative;text-align:center;font-family:'BebasNeue';color:#949494;font-size:40px;font-style:italic;margin-top:34vh;cursor:pointer;}", "@media (max-width:800px){.contRight.jsx-2044388330{width:100%;top:0px;height:50%;padding-top:14vh;font-size:20px;padding-left:12%;padding-right:12%;text-align:center;line-height:30px;}.contLeft.jsx-2044388330{width:100%;top:0px;height:300px;padding-top:70px;}}"]
  })));
});

/***/ })
/******/ ]);