"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require("../../../routes");

var _RequestTable = require("../../../components/RequestTable");

var _RequestTable2 = _interopRequireDefault(_RequestTable);

var _campaign = require("../../../ethereum/campaign");

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