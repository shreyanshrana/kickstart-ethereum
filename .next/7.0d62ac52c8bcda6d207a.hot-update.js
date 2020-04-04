webpackHotUpdate(7,{

/***/ 1318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1299);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(516);

var _routes = __webpack_require__(792);

var _RequestTable = __webpack_require__(1319);

var _RequestTable2 = _interopRequireDefault(_RequestTable);

var _campaign = __webpack_require__(1312);

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/shreyansh/Coding/kickstart/pages/campaigns/requests/index.js?entry";


var RequestIndex = function (_React$Component) {
    (0, _inherits3.default)(RequestIndex, _React$Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: "render",
        value: function render() {
            console.log(this.props);
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, "Request List"), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                primary: true,
                floated: "right",
                style: { margin: "10px" },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, "Create Request"))), _react2.default.createElement(_RequestTable2.default, {
                requests: this.props.requests,
                requestCount: this.props.requestCount,
                address: this.props.address,
                contributorsCount: this.props.contributorsCount,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { info: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, "Found ", this.props.requestCount, " request(s)"));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, summary, requestCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getSummary().call();

                            case 4:
                                summary = _context.sent;

                                console.log(summary);
                                _context.next = 8;
                                return campaign.methods.getRequestCount().call();

                            case 8:
                                requestCount = _context.sent;
                                _context.next = 11;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 11:
                                requests = _context.sent;
                                return _context.abrupt("return", {
                                    address: address,
                                    requests: requests,
                                    requestCount: requestCount,
                                    contributorsCount: summary[3]
                                });

                            case 13:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react2.default.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTWVzc2FnZSIsIkxpbmsiLCJSZXF1ZXN0VGFibGUiLCJDYW1wYWlnbiIsIlJlcXVlc3RJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImFkZHJlc3MiLCJtYXJnaW4iLCJyZXF1ZXN0cyIsInJlcXVlc3RDb3VudCIsImNvbnRyaWJ1dG9yc0NvdW50IiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJnZXRSZXF1ZXN0Q291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBUSxBQUFPOztBQUN4QixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztpQ0F1Qk8sQUFDTDtvQkFBQSxBQUFRLElBQUksS0FBWixBQUFpQixBQUNqQjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxpQ0FBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7eUJBQUQsQUFFSTt5QkFGSixBQUVZLEFBQ1I7dUJBQU8sRUFBRSxRQUhiLEFBR1csQUFBVTs7OEJBSHJCO2dDQUFBO0FBQUE7QUFDSSxlQUxoQixBQUVJLEFBQ0ksQUFDSSxBQVNSLHFDQUFBLEFBQUM7MEJBQ2EsS0FBQSxBQUFLLE1BRG5CLEFBQ3lCLEFBQ3JCOzhCQUFjLEtBQUEsQUFBSyxNQUZ2QixBQUU2QixBQUN6Qjt5QkFBUyxLQUFBLEFBQUssTUFIbEIsQUFHd0IsQUFDcEI7bUNBQW1CLEtBQUEsQUFBSyxNQUo1QixBQUlrQzs7OEJBSmxDO2dDQWJKLEFBYUksQUFPQTtBQVBBO0FBQ0ksZ0NBTUosQUFBQywwQ0FBUSxNQUFUOzhCQUFBO2dDQUFBO0FBQUE7ZUFDVyxlQUFBLEFBQUssTUFEaEIsQUFDc0IsY0F0QjlCLEFBQ0ksQUFvQkksQUFLWDs7Ozs7aUgsQUFsRDRCOzs7OztpQ0FDakI7QSwwQ0FBWSxNLEFBQU0sTSxBQUFsQixBQUVGO0EsMkNBQVcsd0IsQUFBQSxBQUFTOzt1Q0FDSixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOztpQ0FBOUM7QSxtREFDTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7O3VDQUNlLFNBQUEsQUFBUyxRQUFULEFBQWlCLGtCLEFBQWpCLEFBQW1DOztpQ0FBeEQ7QTs7eURBQ2lCLEFBQVEsVUFDckIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUNLLE9BREwsQUFFSyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNyQjsyQ0FBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQzNDO0EsQUFMYyxBQUNuQixpQ0FBQSxDQURtQjs7aUNBQWpCO0E7OzZDQVFDLEFBRUg7OENBRkcsQUFHSDtrREFIRyxBQUlIO3VEQUFtQixRLEFBSmhCLEFBSWdCLEFBQVE7QUFKeEIsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpCZSxnQixBQUFNLEFBc0RqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaHJleWFuc2gvQ29kaW5nL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/shreyansh/Coding/kickstart/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/shreyansh/Coding/kickstart/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4wZDYyYWM1MmM4YmNkYTZkMjA3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzPzc1MDU3MGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUsIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzXCI7XG5pbXBvcnQgUmVxdWVzdFRhYmxlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1JlcXVlc3RUYWJsZVwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuXG5jbGFzcyBSZXF1ZXN0SW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcblxuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhzdW1tYXJ5KTtcbiAgICAgICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0Q291bnQoKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBBcnJheShwYXJzZUludChyZXF1ZXN0Q291bnQpKVxuICAgICAgICAgICAgICAgIC5maWxsKClcbiAgICAgICAgICAgICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICByZXF1ZXN0cyxcbiAgICAgICAgICAgIHJlcXVlc3RDb3VudCxcbiAgICAgICAgICAgIGNvbnRyaWJ1dG9yc0NvdW50OiBzdW1tYXJ5WzNdLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8aDE+UmVxdWVzdCBMaXN0PC9oMT5cbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxSZXF1ZXN0VGFibGVcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdHM9e3RoaXMucHJvcHMucmVxdWVzdHN9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RDb3VudD17dGhpcy5wcm9wcy5yZXF1ZXN0Q291bnR9XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3JzQ291bnQ9e3RoaXMucHJvcHMuY29udHJpYnV0b3JzQ291bnR9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGluZm8+XG4gICAgICAgICAgICAgICAgICAgIEZvdW5kIHt0aGlzLnByb3BzLnJlcXVlc3RDb3VudH0gcmVxdWVzdChzKVxuICAgICAgICAgICAgICAgIDwvTWVzc2FnZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUE3Q0E7QUFBQTtBQUVBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBSUE7QUFIQTtBQUNBO0FBRkE7OztBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbEJBO0FBQ0E7QUFxREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==