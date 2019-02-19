webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/matthardman/Documents/Work/nick-blog/components/Header.js";




function Header(_ref) {
  var color = _ref.color,
      dark = _ref.dark,
      setDark = _ref.setDark;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isScrolled = _useState2[0],
      setIsScrolled = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        return setIsScrolled(true);
      }

      if (!window.scrollY) {
        return setIsScrolled(false);
      }
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["530627348", [dark ? '#30353d' : '#f9fbff', isScrolled ? '60px' : '100px', color, dark ? '0%' : '100%', isScrolled ? 0 : 1]]]) + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["530627348", [dark ? '#30353d' : '#f9fbff', isScrolled ? '60px' : '100px', color, dark ? '0%' : '100%', isScrolled ? 0 : 1]]]) + " " + "logo-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/865/865779.svg",
    alt: "",
    height: 40,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["530627348", [dark ? '#30353d' : '#f9fbff', isScrolled ? '60px' : '100px', color, dark ? '0%' : '100%', isScrolled ? 0 : 1]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["530627348", [dark ? '#30353d' : '#f9fbff', isScrolled ? '60px' : '100px', color, dark ? '0%' : '100%', isScrolled ? 0 : 1]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Boring Business")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["530627348", [dark ? '#30353d' : '#f9fbff', isScrolled ? '60px' : '100px', color, dark ? '0%' : '100%', isScrolled ? 0 : 1]]]) + " " + "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["530627348", [dark ? '#30353d' : '#f9fbff', isScrolled ? '60px' : '100px', color, dark ? '0%' : '100%', isScrolled ? 0 : 1]]]) + " " + "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    style: {
      fontSize: 14,
      color: '#fff'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["530627348", [dark ? '#30353d' : '#f9fbff', isScrolled ? '60px' : '100px', color, dark ? '0%' : '100%', isScrolled ? 0 : 1]]]) + " " + "fas fa-moon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["530627348", [dark ? '#30353d' : '#f9fbff', isScrolled ? '60px' : '100px', color, dark ? '0%' : '100%', isScrolled ? 0 : 1]]]) + " " + "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    style: {
      fontSize: 14,
      color: '#fff'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["530627348", [dark ? '#30353d' : '#f9fbff', isScrolled ? '60px' : '100px', color, dark ? '0%' : '100%', isScrolled ? 0 : 1]]]) + " " + "fas fa-sun",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setDark(!dark);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["530627348", [dark ? '#30353d' : '#f9fbff', isScrolled ? '60px' : '100px', color, dark ? '0%' : '100%', isScrolled ? 0 : 1]]]) + " " + "slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "530627348",
    dynamic: [dark ? '#30353d' : '#f9fbff', isScrolled ? '60px' : '100px', color, dark ? '0%' : '100%', isScrolled ? 0 : 1],
    __self: this
  }, ".header.__jsx-style-dynamic-selector{position:fixed;background:".concat(dark ? '#30353d' : '#f9fbff', ";font-family:Roboto;box-sizing:border-box;width:100%;padding:0 25%;height:").concat(isScrolled ? '60px' : '100px', ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:").concat(color, ";-webkit-transition:height 420ms;transition:height 420ms;}.logo-section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:350px;}.switch.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:60px;height:30px;border-radius:15px;background:#000;}.slider.__jsx-style-dynamic-selector{position:absolute;height:30px;width:30px;border-radius:15px;background:#fff;outline:none;border:3px #000 solid;-webkit-transition:-webkit-transform 400ms;-webkit-transition:transform 400ms;transition:transform 400ms;-webkit-transform:translateX(").concat(dark ? '0%' : '100%', ");-ms-transform:translateX(").concat(dark ? '0%' : '100%', ");transform:translateX(").concat(dark ? '0%' : '100%', ");cursor:pointer;}.dark.__jsx-style-dynamic-selector{display:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:30px;right:0;}.light.__jsx-style-dynamic-selector{display:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:30px;left:0;}h1.__jsx-style-dynamic-selector{font-size:40px;opacity:").concat(isScrolled ? 0 : 1, ";-webkit-transition:opacity 420ms;transition:opacity 420ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFyZG1hbi9Eb2N1bWVudHMvV29yay9uaWNrLWJsb2cvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUdnQyxBQWVGLEFBT0EsQUFTSyxBQWFELEFBU0EsQUFTRixlQTdEeUIsQUE4REgsRUFsQnhCLEFBU0EsQ0F0QkQsWUFDRCxXQUNRLFdBOEJNLEdBOUROLEtBaUNILGNBaENNLEFBYUgsQUFPRCxFQWFMLGFBQ1MsRUFTSCxBQVNBLENBL0JSLElBcEJBLE9BcUJDLElBcEJFLEdBNERsQixDQTNCK0IsSUFaUixNQXBCaUIsYUFxQnBCLGdCQUNwQixPQXJCaUIsVUFVaUIsaUJBOEJQLEFBU0EsZ0NBakI0QixlQS9CaEMsbURBVVAsQ0E4QkQsQUFTQSxXQXRDZixBQThCWSxBQVNELE9BQ1gsQ0FUQSxzQkF6Q2tDLHlEQStCZixlQUNuQiwyQ0EvQnVDLG1DQUNYLHdEQUM1QiIsImZpbGUiOiIvVXNlcnMvbWF0dGhhcmRtYW4vRG9jdW1lbnRzL1dvcmsvbmljay1ibG9nL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIEhlYWRlcih7IGNvbG9yLCBkYXJrLCBzZXREYXJrIH0pIHtcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XG4gICAgICAgIHJldHVybiBzZXRJc1Njcm9sbGVkKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXdpbmRvdy5zY3JvbGxZKSB7XG4gICAgICAgIHJldHVybiBzZXRJc1Njcm9sbGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXNlY3Rpb25cIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvODY1Lzg2NTc3OS5zdmdcIiBhbHQ9XCJcIiBoZWlnaHQ9ezQwfSAvPlxuICAgICAgICA8aDE+Qm9yaW5nIEJ1c2luZXNzPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrXCI+XG4gICAgICAgICAgPGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1tb29uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICcjZmZmJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpZ2h0XCI+XG4gICAgICAgICAgPGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1zdW5cIlxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJyNmZmYnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhcmsoIWRhcmspfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtkYXJrID8gJyMzMDM1M2QnIDogJyNmOWZiZmYnfTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAke2lzU2Nyb2xsZWQgPyAnNjBweCcgOiAnMTAwcHgnfTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNDIwbXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3dpdGNoIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xpZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4ICMwMDAgc29saWQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke2RhcmsgPyAnMCUnIDogJzEwMCUnfSk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGFyayB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGlnaHQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7aXNTY3JvbGxlZCA/IDAgOiAxfTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQyMG1zO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IFBULnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXJrOiBQVC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2V0RGFyazogUFQuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/matthardman/Documents/Work/nick-blog/components/Header.js */")));
}

Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  setDark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.03ed07532a1981749f9f.hot-update.js.map