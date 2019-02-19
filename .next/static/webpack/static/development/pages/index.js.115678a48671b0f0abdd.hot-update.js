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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3700364939", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%', isScrolled ? '35px' : '40px']]]) + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3700364939", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%', isScrolled ? '35px' : '40px']]]) + " " + "logo-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://image.flaticon.com/icons/svg/865/865779.svg",
    alt: "",
    height: 40,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3700364939", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%', isScrolled ? '35px' : '40px']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3700364939", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%', isScrolled ? '35px' : '40px']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Boring Business")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3700364939", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%', isScrolled ? '35px' : '40px']]]) + " " + "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3700364939", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%', isScrolled ? '35px' : '40px']]]) + " " + "dark",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3700364939", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%', isScrolled ? '35px' : '40px']]]) + " " + "fas fa-moon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3700364939", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%', isScrolled ? '35px' : '40px']]]) + " " + "light",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3700364939", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%', isScrolled ? '35px' : '40px']]]) + " " + "fas fa-sun",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3700364939", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%', isScrolled ? '35px' : '40px']]]) + " " + "slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3700364939",
    dynamic: [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%', isScrolled ? '35px' : '40px'],
    __self: this
  }, ".header.__jsx-style-dynamic-selector{position:fixed;background:".concat(dark ? '#30353d' : '#f9fbff', ";font-family:Roboto;box-sizing:border-box;width:100%;padding:0 25%;height:").concat(isScrolled ? '80px' : '120px', ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:").concat(color, ";-webkit-transition:height 420ms;transition:height 420ms;}.logo-section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.switch.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:60px;height:30px;border-radius:15px;background:#000;}.slider.__jsx-style-dynamic-selector{position:absolute;height:30px;width:30px;border-radius:15px;background:#fff;outline:none;border:3px #000 solid;-webkit-transition:-webkit-transform 400ms;-webkit-transition:transform 400ms;transition:transform 400ms;-webkit-transform:translateX(").concat(dark ? '0%' : '100%', ");-ms-transform:translateX(").concat(dark ? '0%' : '100%', ");transform:translateX(").concat(dark ? '0%' : '100%', ");cursor:pointer;}.dark.__jsx-style-dynamic-selector{display:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:30px;right:0;}.light.__jsx-style-dynamic-selector{display:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:30px;left:0;}h1.__jsx-style-dynamic-selector{font-size:").concat(isScrolled ? '35px' : '40px', ";-webkit-transition:font-size 420ms;transition:font-size 420ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFyZG1hbi9Eb2N1bWVudHMvV29yay9uaWNrLWJsb2cvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUdnQyxBQWVGLEFBS0EsQUFTSyxBQWFELEFBU0EsQUFTc0IsZUEzREMsRUEwQzNCLEFBU0EsQ0F0QkQsWUFDRCxTQThCZ0IsRUE3QlIsY0E5QkEsS0ErQkgsY0E5Qk0sQUFjM0IsQUFBQyxBQUlzQixFQWFMLGFBQ1MsRUFTSCxBQVNBLENBL0JSLElBbEJBLEtBMERmLEVBdkNnQixJQWxCRSxJQStCYSxJQVpSLE1BbEJpQixhQW1CcEIsZ0JBQ3BCLE9BbkJpQiwyQkFzQ1UsQUFTQSxnQ0FqQjRCLGVBN0JoQyxvREFzQ1IsQUFTQSxXQVJILEFBU0QsT0FDWCxDQVRBLHNCQXZDa0MseURBNkJmLGVBQ25CLDJDQTdCdUMsbUNBQ1gsd0RBQzVCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGFyZG1hbi9Eb2N1bWVudHMvV29yay9uaWNrLWJsb2cvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQVCBmcm9tICdwcm9wLXR5cGVzJztcblxuZnVuY3Rpb24gSGVhZGVyKHsgY29sb3IsIGRhcmssIHNldERhcmsgfSkge1xuICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcbiAgICAgICAgcmV0dXJuIHNldElzU2Nyb2xsZWQodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghd2luZG93LnNjcm9sbFkpIHtcbiAgICAgICAgcmV0dXJuIHNldElzU2Nyb2xsZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tc2VjdGlvblwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy84NjUvODY1Nzc5LnN2Z1wiIGFsdD1cIlwiIGhlaWdodD17NDB9IC8+XG4gICAgICAgIDxoMT5Cb3JpbmcgQnVzaW5lc3M8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhcmtcIj5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLW1vb25cIlxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJyNmZmYnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlnaHRcIj5cbiAgICAgICAgICA8aVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXN1blwiXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAnI2ZmZicgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGFyayghZGFyayl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2RhcmsgPyAnIzMwMzUzZCcgOiAnI2Y5ZmJmZid9O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDI1JTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7aXNTY3JvbGxlZCA/ICc4MHB4JyA6ICcxMjBweCd9O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCA0MjBtcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zd2l0Y2gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggIzAwMCBzb2xpZDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXM7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7ZGFyayA/ICcwJScgOiAnMTAwJSd9KTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXJrIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5saWdodCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7aXNTY3JvbGxlZCA/ICczNXB4JyA6ICc0MHB4J307XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDQyMG1zO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IFBULnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXJrOiBQVC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2V0RGFyazogUFQuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/matthardman/Documents/Work/nick-blog/components/Header.js */")));
}

Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  setDark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.115678a48671b0f0abdd.hot-update.js.map