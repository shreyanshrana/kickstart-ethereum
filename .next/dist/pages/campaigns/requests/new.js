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

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require("../../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/shreyansh/Coding/kickstart/pages/campaigns/requests/new.js?entry";


var RequestNew = function (_React$Component) {
    (0, _inherits3.default)(RequestNew, _React$Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            descValue: "",
            amountValue: "",
            recipientValue: "",
            loading: false,
            errorMessage: ""
        }, _this.createRequest = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, campaign;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({
                                    loading: true,
                                    errorMessage: ""
                                });
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;
                                _context.next = 7;
                                return (0, _campaign2.default)(_this.props.address);

                            case 7:
                                campaign = _context.sent;
                                _context.prev = 8;
                                _context.next = 11;
                                return campaign.methods.createRequest(_this.state.descValue, _web2.default.utils.toWei(_this.state.amountValue), _this.state.recipientValue).send({
                                    from: accounts[0]
                                });

                            case 11:
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context["catch"](8);

                                _this.setState({
                                    errorMessage: _context.t0.message,
                                    loading: false
                                });

                            case 16:

                                _this.setState({
                                    loading: false
                                });

                            case 17:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[8, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, "Back")), _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, "Create new request"), _react2.default.createElement(_semanticUiReact.Form, {
                onSubmit: this.createRequest,
                error: !!this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, "Description of the request"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.descValue,
                onChange: function onChange(event) {
                    return _this3.setState({ descValue: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, "Amount required(in ether)"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.amountValue,
                onChange: function onChange(event) {
                    return _this3.setState({
                        amountValue: event.target.value
                    });
                },
                label: "ether",
                labelPosition: "right",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, "Recipient of the request"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipientValue,
                onChange: function onChange(event) {
                    return _this3.setState({
                        recipientValue: event.target.value
                    });
                },
                placeholder: "Address of the recipient",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: "Something went wrong",
                content: this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, "Create Request")));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt("return", { address: address });

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react2.default.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJNZXNzYWdlIiwid2ViMyIsIkNhbXBhaWduIiwiTGluayIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsImRlc2NWYWx1ZSIsImFtb3VudFZhbHVlIiwicmVjaXBpZW50VmFsdWUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiY3JlYXRlUmVxdWVzdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJwcm9wcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQU8sQUFBUTs7QUFFOUIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFDRjt1QkFBUSxBQUNPLEFBQ1g7eUJBRkksQUFFUyxBQUNiOzRCQUhJLEFBR1ksQUFDaEI7cUJBSkksQUFJSyxBQUNUOzBCLEFBTEksQUFLVTtBQUxWLEFBQ0osaUIsQUFXSjtpR0FBZ0IsaUJBQUEsQUFBTSxPQUFOOzhCQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNaO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLOzZDQUFTLEFBQ0QsQUFDVDtrREFKUSxBQUVaLEFBQWMsQUFFSTtBQUZKLEFBQ1Y7Z0RBSFE7dUNBTVcsY0FBQSxBQUFLLElBTmhCLEFBTVcsQUFBUzs7aUNBQTFCO0FBTk0sb0RBQUE7Z0RBQUE7dUNBT1csd0JBQVMsTUFBQSxBQUFLLE1BUHpCLEFBT1csQUFBb0I7O2lDQUFyQztBQVBNLG9EQUFBO2dEQUFBO2dEQUFBO2dEQVNGLEFBQVMsUUFBVCxBQUNELGNBQ0csTUFBQSxBQUFLLE1BRlAsQUFFYSxXQUNYLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFIeEIsQUFHRSxBQUE0QixjQUM1QixNQUFBLEFBQUssTUFKUCxBQUlhLGdCQUpiLEFBTUQ7MENBQ1MsU0FoQk4sQUFTRixBQU1JLEFBQ0ksQUFBUztBQURiLEFBQ0YsaUNBUEY7O2lDQVRFO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQW1CUjs7c0NBQUEsQUFBSztrREFDYSxZQURKLEFBQ1EsQUFDbEI7NkNBckJJLEFBbUJSLEFBQWMsQUFFRDtBQUZDLEFBQ1Y7O2lDQUtSOztzQ0FBQSxBQUFLOzZDQXpCTyxBQXlCWixBQUFjLEFBQ0Q7QUFEQyxBQUNWOztpQ0ExQlE7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0E2QlA7eUJBQ0w7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksQUFFSiwwQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFKSixBQUlJLEFBQ0EsdUNBQUEsQUFBQzswQkFDYSxLQURkLEFBQ21CLEFBQ2Y7dUJBQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUZsQixBQUV3Qjs7OEJBRnhCO2dDQUFBLEFBSUk7QUFKSjtBQUNJLCtCQUdDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLCtDQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxNQUFBLEFBQU0sT0FEM0IsQUFDTixBQUFjLEFBQTBCO0FBSGhEOzs4QkFBQTtnQ0FOUixBQUlJLEFBRUksQUFPSjtBQVBJO0FBQ0ksaUNBTVAsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOENBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7a0NBQ04sQUFBSztxQ0FDWSxNQUFBLEFBQU0sT0FGakIsQUFDTixBQUFjLEFBQ2dCO0FBRGhCLEFBQ1YscUJBREo7QUFIUixBQU9JO3VCQVBKLEFBT1UsQUFDTjsrQkFSSixBQVFrQjs7OEJBUmxCO2dDQWZSLEFBYUksQUFFSSxBQVdKO0FBWEk7QUFDSSxpQ0FVUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw2Q0FBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTtrQ0FDTixBQUFLO3dDQUNlLE1BQUEsQUFBTSxPQUZwQixBQUNOLEFBQWMsQUFDbUI7QUFEbkIsQUFDVixxQkFESjtBQUhSLEFBT0k7NkJBUEosQUFPZ0I7OzhCQVBoQjtnQ0E1QlIsQUEwQkksQUFFSSxBQVVKO0FBVkk7QUFDSSxpQ0FTUixBQUFDO3VCQUFELEFBRUk7d0JBRkosQUFFVyxBQUNQO3lCQUFTLEtBQUEsQUFBSyxNQUhsQixBQUd3Qjs7OEJBSHhCO2dDQXRDSixBQXNDSSxBQUtBO0FBTEE7QUFDSSxnQ0FJSixBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7ZUFqRFosQUFDSSxBQUtJLEFBMkNJLEFBTWY7Ozs7O21ILEFBMUY0Qjs7Ozs7aUNBQ2pCO0EsMENBQVksTSxBQUFNLE0sQUFBbEI7a0VBRUQsRUFBRSxTLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFYVSxnQixBQUFNLEFBcUcvQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc2hyZXlhbnNoL0NvZGluZy9raWNrc3RhcnQifQ==