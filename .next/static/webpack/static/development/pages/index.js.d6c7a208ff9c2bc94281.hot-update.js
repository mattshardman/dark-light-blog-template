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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2756075330", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2756075330", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Boring Business"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2756075330", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2756075330", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    style: {
      fontSize: 14,
      color: '#fff'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2756075330", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "fas fa-moon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2756075330", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    style: {
      fontSize: 14,
      color: '#fff'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2756075330", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "fas fa-sun",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setDark(!dark);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2756075330", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2756075330",
    dynamic: [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%'],
    __self: this
  }, ".header.__jsx-style-dynamic-selector{position:fixed;background:".concat(dark ? '#30353d' : '#f9fbff', ";font-family:Roboto;box-sizing:border-box;width:100%;padding:0 25%;height:").concat(isScrolled ? '80px' : '120px', ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:").concat(color, ";-webkit-trainsition:height 420ms;trainsition:height 420ms;}.switch.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:60px;height:30px;border-radius:15px;background:#000;}.slider.__jsx-style-dynamic-selector{position:absolute;height:30px;width:30px;border-radius:15px;background:#fff;outline:none;border:3px #000 solid;-webkit-transition:-webkit-transform 400ms;-webkit-transition:transform 400ms;transition:transform 400ms;-webkit-transform:translateX(").concat(dark ? '0%' : '100%', ");-ms-transform:translateX(").concat(dark ? '0%' : '100%', ");transform:translateX(").concat(dark ? '0%' : '100%', ");cursor:pointer;}.dark.__jsx-style-dynamic-selector{display:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:30px;right:0;}.light.__jsx-style-dynamic-selector{display:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:30px;left:0;}h1.__jsx-style-dynamic-selector{font-size:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFyZG1hbi9Eb2N1bWVudHMvV29yay9uaWNrLWJsb2cvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNrQixBQUdnQyxBQWVGLEFBU0ssQUFhRCxBQVNBLEFBU0YsZUF0RHlCLEFBdUQ1QyxFQWxCaUIsQUFTQSxDQXRCRCxZQUNELFdBQ1EsY0F6QkEsS0EwQkgsY0F6Qk0sQUFhSixFQWFMLGFBQ1MsRUFTSCxBQVNBLENBL0JSLElBYkEsT0FjQyxJQWJFLElBMEJhLElBWlIsTUFiaUIsYUFjcEIsZ0JBQ3BCLE9BZGlCLDJCQWlDVSxBQVNBLGdDQWpCNEIsZUF4QmhDLG9EQWlDUixBQVNBLFdBUkgsQUFTRCxPQUNYLENBVEEsc0JBbENrQyx5REF3QmYsZUFDbkIsMkNBeEJ1QyxtQ0FDViwwREFDN0IiLCJmaWxlIjoiL1VzZXJzL21hdHRoYXJkbWFuL0RvY3VtZW50cy9Xb3JrL25pY2stYmxvZy9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5mdW5jdGlvbiBIZWFkZXIoeyBjb2xvciwgZGFyaywgc2V0RGFyayB9KSB7XG4gIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcbiAgICAgICAgcmV0dXJuIHNldElzU2Nyb2xsZWQodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghd2luZG93LnNjcm9sbFkpIHtcbiAgICAgICAgcmV0dXJuIHNldElzU2Nyb2xsZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8aDE+Qm9yaW5nIEJ1c2luZXNzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFya1wiPlxuICAgICAgICAgIDxpXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtbW9vblwiXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAnI2ZmZicgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodFwiPlxuICAgICAgICAgIDxpXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtc3VuXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICcjZmZmJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREYXJrKCFkYXJrKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7ZGFyayA/ICcjMzAzNTNkJyA6ICcjZjlmYmZmJ307XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogJHtpc1Njcm9sbGVkID8gJzgwcHgnIDogJzEyMHB4J307XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICAgICAgdHJhaW5zaXRpb246IGhlaWdodCA0MjBtcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN3aXRjaCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNsaWRlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCAjMDAwIHNvbGlkO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtkYXJrID8gJzAlJyA6ICcxMDAlJ30pO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRhcmsge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxpZ2h0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQVC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGFyazogUFQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNldERhcms6IFBULmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/matthardman/Documents/Work/nick-blog/components/Header.js */")));
}

Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  setDark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.d6c7a208ff9c2bc94281.hot-update.js.map