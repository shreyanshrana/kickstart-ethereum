"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/shreyansh/Coding/kickstart/components/RequestTable.js";


var RequestTable = function (_React$Component) {
    (0, _inherits3.default)(RequestTable, _React$Component);

    function RequestTable() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestTable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestTable.__proto__ || (0, _getPrototypeOf2.default)(RequestTable)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(index) {
                var accounts, campaign;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log(index);
                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.next = 7;
                                return campaign.methods.approveRequest(index).send({ from: accounts[0] });

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onFinalise = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(index) {
                var accounts, campaign;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                console.log(index);
                                _context2.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context2.sent;
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context2.next = 7;
                                return campaign.methods.finalizeRequest(index).send({ from: accounts[0] });

                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestTable, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                requests = _props.requests,
                requestCount = _props.requestCount,
                contributorsCount = _props.contributorsCount;
            // console.log(this.props);

            return _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, "ID"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, "Description"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, "Amount"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, "Recipient"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, "Approval Count"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, "Approve"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, "Finalise")), requests.map(function (request, index) {
                var readyToFinalise = request.approvalCount > contributorsCount / 2;

                return _react2.default.createElement(Row, {
                    disabled: request.complete,
                    positive: readyToFinalise && !request.complete,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }, _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    }
                }, index + 1), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    }
                }, request.desc), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                }, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                    }
                }, request.receipt), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                }, request.approvalCount, "/", contributorsCount), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
                    onClick: _this3.onApprove.bind(_this3, index),
                    color: "green",
                    basic: true,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                }, "Approve")), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
                    onClick: _this3.onFinalise.bind(_this3, index),
                    color: "teal",
                    basic: true,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }, "Finalise")));
            }));
        }
    }]);

    return RequestTable;
}(_react2.default.Component);

exports.default = RequestTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFRhYmxlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0VGFibGUiLCJvbkFwcHJvdmUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsIm9uRmluYWxpc2UiLCJmaW5hbGl6ZVJlcXVlc3QiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIkNlbGwiLCJyZXF1ZXN0cyIsInJlcXVlc3RDb3VudCIsImNvbnRyaWJ1dG9yc0NvdW50IiwibWFwIiwicmVxdWVzdCIsInJlYWR5VG9GaW5hbGlzZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2MiLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2VpcHQiLCJiaW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTzs7QUFFaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7OzROLEFBQ0Y7aUdBQVksaUJBQUEsQUFBTyxPQUFQOzhCQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNSO3dDQUFBLEFBQVEsSUFEQSxBQUNSLEFBQVk7Z0RBREo7dUNBRWUsY0FBQSxBQUFLLElBRnBCLEFBRWUsQUFBUzs7aUNBQTFCO0FBRkUsb0RBR0Y7QUFIRSwyQ0FHUyx3QkFBUyxNQUFBLEFBQUssTUFIdkIsQUFHUyxBQUFvQjtnREFIN0I7dUNBSUYsU0FBQSxBQUFTLFFBQVQsQUFDRCxlQURDLEFBQ2MsT0FEZCxBQUVELEtBQUssRUFBRSxNQUFNLFNBTlYsQUFJRixBQUVJLEFBQVEsQUFBUzs7aUNBTm5CO2lDQUFBO2dEQUFBOztBQUFBOzRCQUFBO0E7Ozs7O21CLEFBUVo7aUdBQWEsa0JBQUEsQUFBTyxPQUFQOzhCQUFBO2dGQUFBOzhCQUFBOzJEQUFBO2lDQUNUO3dDQUFBLEFBQVEsSUFEQyxBQUNULEFBQVk7aURBREg7dUNBRWMsY0FBQSxBQUFLLElBRm5CLEFBRWMsQUFBUzs7aUNBQTFCO0FBRkcscURBR0g7QUFIRywyQ0FHUSx3QkFBUyxNQUFBLEFBQUssTUFIdEIsQUFHUSxBQUFvQjtpREFINUI7dUNBSUgsU0FBQSxBQUFTLFFBQVQsQUFDRCxnQkFEQyxBQUNlLE9BRGYsQUFFRCxLQUFLLEVBQUUsTUFBTSxTQU5ULEFBSUgsQUFFSSxBQUFRLEFBQVM7O2lDQU5sQjtpQ0FBQTtpREFBQTs7QUFBQTs2QkFBQTtBOzs7Ozs7Ozs7O2lDQVNKO3lCQUFBOztnQkFBQSxBQUNHLFNBREgsQUFDMkMsdUJBRDNDLEFBQ0c7Z0JBREgsQUFDVyxNQURYLEFBQzJDLHVCQUQzQyxBQUNXO2dCQURYLEFBQ2dCLGFBRGhCLEFBQzJDLHVCQUQzQyxBQUNnQjtnQkFEaEIsQUFDNEIsT0FENUIsQUFDMkMsdUJBRDNDLEFBQzRCO2dCQUQ1QixBQUNrQyxPQURsQyxBQUMyQyx1QkFEM0MsQUFDa0M7eUJBQ2UsS0FGakQsQUFFc0Q7Z0JBRnRELEFBRUcsa0JBRkgsQUFFRztnQkFGSCxBQUVhLHNCQUZiLEFBRWE7Z0JBRmIsQUFFMkIsMkJBRjNCLEFBRTJCLEFBQ2hDO0FBQ0E7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0EsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxtQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBQ0EsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBUlIsQUFDSSxBQU9JLEFBR0gsdUJBQUEsQUFBUyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUM5QjtvQkFBTSxrQkFDRixRQUFBLEFBQVEsZ0JBQWdCLG9CQUQ1QixBQUNnRCxBQUVoRDs7dUNBQ0ssY0FBRDs4QkFDYyxRQURkLEFBQ3NCLEFBQ2xCOzhCQUFVLG1CQUFtQixDQUFDLFFBRmxDLEFBRTBDOztrQ0FGMUM7b0NBQUEsQUFJSTtBQUpKO0FBQ0ksaUJBREosa0JBSUssY0FBRDs7a0NBQUE7b0NBQUEsQUFBTztBQUFQO0FBQUEsMkJBSkosQUFJSSxBQUFlLEFBQ2Ysb0JBQUMsY0FBRDs7a0NBQUE7b0NBQUEsQUFBTztBQUFQO0FBQUEsMkJBTEosQUFLSSxBQUFlLEFBQ2YsdUJBQUMsY0FBRDs7a0NBQUE7b0NBQUEsQUFDSztBQURMO0FBQUEsaUNBQ0ssQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQVBwQyxBQU1JLEFBQ0ssQUFBa0MsQUFFdkMsMkJBQUMsY0FBRDs7a0NBQUE7b0NBQUEsQUFBTztBQUFQO0FBQUEsMkJBVEosQUFTSSxBQUFlLEFBQ2YsMEJBQUMsY0FBRDs7a0NBQUE7b0NBQUEsQUFDSztBQURMO0FBQUEsMkJBQUEsQUFDYSxlQUFnQixLQVhqQyxBQVVJLEFBR0Esb0NBQUMsY0FBRDs7a0NBQUE7b0NBQUEsQUFDSztBQURMO0FBQUEsMkJBQ0ssQUFBUSxXQUFSLEFBQW1CLHVCQUNoQixBQUFDOzZCQUNZLE9BQUEsQUFBSyxVQUFMLEFBQWUsYUFENUIsQUFDYSxBQUVMLEFBRUo7MkJBTEosQUFLVSxBQUNOOzJCQU5KOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQ0ksaUJBREosRUFmWixBQWFJLEFBRVEsQUFZUiw2QkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUNLO0FBREw7QUFBQSwyQkFDSyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2hCLEFBQUM7NkJBQ1ksT0FBQSxBQUFLLFdBQUwsQUFBZ0IsYUFEN0IsQUFDYSxBQUVMLEFBRUo7MkJBTEosQUFLVSxBQUNOOzJCQU5KOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQ0ksaUJBREosRUE5QmhCLEFBQ0ksQUEyQkksQUFFUSxBQWNuQjtBQTVEVCxBQUNJLEFBV0ssQUFtRFo7Ozs7O0VBckZzQixnQixBQUFNLEFBd0ZqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0VGFibGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hyZXlhbnNoL0NvZGluZy9raWNrc3RhcnQifQ==