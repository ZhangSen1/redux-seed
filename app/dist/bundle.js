webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(35);

	var _App2 = _interopRequireDefault(_App);

	var _reactRedux = __webpack_require__(39);

	var _redux = __webpack_require__(46);

	var _reduxThunk = __webpack_require__(65);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(66);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reactDom = __webpack_require__(70);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_App2.default, null)
	), document.getElementById('abc'));

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ButtonContainer = __webpack_require__(36);

	var _ButtonContainer2 = _interopRequireDefault(_ButtonContainer);

	var _Buttonc = __webpack_require__(37);

	var _Buttonc2 = _interopRequireDefault(_Buttonc);

	var _Loading = __webpack_require__(64);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Loading2.default, null),
	                _react2.default.createElement(_ButtonContainer2.default, null)
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _Buttonc = __webpack_require__(37);

	var _Buttonc2 = _interopRequireDefault(_Buttonc);

	var _reactRedux = __webpack_require__(39);

	var _redux = __webpack_require__(46);

	var _index = __webpack_require__(62);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        text: state.buttonClick.text,
	        data: state.commonReducer.data
	    };
	};

	// const mapDispatchToProps = (dispatch) =>{
	//     return {
	//         buttonClick: bindActionCreators(buttonClick, dispatch)
	//     }
	// }

	var actions = {
	    buttonClick: _index.buttonClick,
	    loadData: _index.loadData,
	    fetchObj: _index.fetchObj
	};

	var ButtonContainer = (0, _reactRedux.connect)(mapStateToProps, _extends({}, actions))(_Buttonc2.default);

	exports.default = ButtonContainer;

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Divc = __webpack_require__(38);

	var _Divc2 = _interopRequireDefault(_Divc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Buttonc = function (_React$Component) {
	    _inherits(Buttonc, _React$Component);

	    function Buttonc(props) {
	        _classCallCheck(this, Buttonc);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Buttonc).call(this, props));

	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    _createClass(Buttonc, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            var dom = this.refs.btn;
	            this.props.buttonClick(this.props.text == "123" ? "456" : "123");
	            // this.props.loadData({data:this.props.data == "no data" ? "123456" : "no data"});

	            this.props.fetchObj();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Divc2.default, { text: this.props.data }),
	                _react2.default.createElement(
	                    'button',
	                    { ref: 'btn', onClick: this.handleClick },
	                    this.props.text
	                )
	            );
	        }
	    }]);

	    return Buttonc;
	}(_react2.default.Component);

	exports.default = Buttonc;

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Divc = function (_React$Component) {
	    _inherits(Divc, _React$Component);

	    function Divc() {
	        _classCallCheck(this, Divc);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Divc).apply(this, arguments));
	    }

	    _createClass(Divc, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.text,
	                '1'
	            );
	        }
	    }]);

	    return Divc;
	}(_react2.default.Component);

	exports.default = Divc;

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.loadData = exports.changeText = exports.buttonClick = undefined;
	exports.fetchObj = fetchObj;
	exports.loadingShow = loadingShow;
	exports.loadingHide = loadingHide;

	var _ActionTypes = __webpack_require__(63);

	var types = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var buttonClick = exports.buttonClick = function buttonClick(text) {
	    return {
	        type: types.button_click,
	        text: text
	    };
	};

	var changeText = exports.changeText = function changeText(obj) {
	    return {
	        type: types.change_text,
	        obj: obj
	    };
	};

	var loadData = exports.loadData = function loadData(payload) {
	    return {
	        type: types.load_data,
	        payload: payload
	    };
	};

	function fetchObj() {
	    return function (dispatch) {
	        dispatch(loadingShow());
	        setTimeout(function () {
	            dispatch(loadData({ data: "settimeoutssss" }));
	            dispatch(loadingHide());
	        }, 6000);
	    };
	}

	function loadingShow() {
	    return {
	        type: types.loading_show,
	        isShow: true
	    };
	}

	function loadingHide() {
	    return {
	        type: types.loading_hide,
	        isShow: false
	    };
	}

/***/ },

/***/ 63:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var button_click = exports.button_click = "button_click";
	var change_text = exports.change_text = "change_text";
	var load_data = exports.load_data = "load_data";
	var loading_show = exports.loading_show = "loading_show";
	var loading_hide = exports.loading_hide = "loading_hide";

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Loading = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(39);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var startSize = 0.02;

	var Loading = exports.Loading = function (_React$Component) {
	    _inherits(Loading, _React$Component);

	    function Loading(props) {
	        _classCallCheck(this, Loading);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).call(this, props));

	        _this2.incTimeout = null;
	        _this2.started = false;

	        _this2.state = {
	            // started: false,
	            isShow: false,
	            status: 0,
	            loadingBarWidth: '0%',
	            loadingText: '1%'
	        };

	        // this.start.bind(this);
	        return _this2;
	    }

	    // componentDidMount(){
	    //      if (this.props.isShow){
	    //
	    //          this.start()
	    //
	    //      }else{
	    //          this.started = false
	    //      }
	    // }

	    _createClass(Loading, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.isShow) {
	                this.setState({ isShow: true });
	                this.start();
	            } else {
	                this.complete();
	                this.started = false;
	            }
	        }
	    }, {
	        key: 'start',
	        value: function start() {

	            if (this.started) {
	                return;
	            }

	            this.started = true;
	            this.launch(this.props.startSize);
	        }
	    }, {
	        key: 'launch',
	        value: function launch(n) {
	            if (!this.started) {
	                return;
	            }

	            var pct = n * 100 + '%';
	            var tmpText = parseInt(n * 100) + "%";

	            this.setState({ loadingBarWidth: pct, loadingText: tmpText, status: n });
	            var _this = this;
	            clearTimeout(this.incTimeout);
	            this.incTimeout = setTimeout(function () {
	                _this.simulateProgress();
	            }, 250);
	        }
	    }, {
	        key: 'simulateProgress',
	        value: function simulateProgress() {
	            if (this.state.status >= 1) {
	                return;
	            }

	            var rnd = 0;

	            var stat = this.state.status;
	            if (stat >= 0 && stat < 0.25) {
	                // Start out between 3 - 6% increments
	                rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
	            } else if (stat >= 0.25 && stat < 0.65) {
	                // increment between 0 - 3%
	                rnd = Math.random() * 3 / 100;
	            } else if (stat >= 0.65 && stat < 0.75) {
	                // increment between 0 - 2%
	                rnd = Math.random() * 2 / 100;
	            } else if (stat >= 0.75 && stat < 0.99) {
	                // finally, increment it .5 %
	                rnd = 0.005;
	            } else {
	                // after 99%, don't increment:
	                rnd = 0;
	            }

	            var pct = this.state.status + rnd;

	            this.launch(pct);
	        }
	    }, {
	        key: 'complete',
	        value: function complete() {
	            this.launch(1);
	            var _this = this;

	            setTimeout(function () {
	                _this.setState({ isShow: false });
	            }, 100);
	        }
	    }, {
	        key: 'buildloadingBarStyle',
	        value: function buildloadingBarStyle() {
	            return {
	                width: this.state.loadingBarWidth
	            };
	        }

	        // buildStyle(){
	        //     return {
	        //         display: this.state.isShow ? "block" : "none"
	        //     }
	        // }

	    }, {
	        key: 'render',
	        value: function render() {
	            var loadingBarStyle = this.buildloadingBarStyle();
	            // const style = this.buildStyle()

	            return this.state.isShow ? _react2.default.createElement(
	                'div',
	                { id: 'mapped-routing-loading', className: 'mapped-routing-loading' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'loadingbar-wrapper', className: 'loadingbar-wrapper' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'loading-bar' },
	                        _react2.default.createElement('div', { ref: 'loadingBar', style: loadingBarStyle, className: 'bar' })
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'load-text' },
	                        this.state.loadingText
	                    )
	                )
	            ) : null;
	        }
	    }]);

	    return Loading;
	}(_react2.default.Component);

	Loading.defaultProps = {
	    style: {},
	    className: undefined,
	    startSize: 0.02,
	    isShow: false
	};

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        isShow: state.loadingBar.isShow
	    };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Loading);

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(46);

	var _buttonr = __webpack_require__(67);

	var _buttonr2 = _interopRequireDefault(_buttonr);

	var _common = __webpack_require__(68);

	var _common2 = _interopRequireDefault(_common);

	var _loadingReducer = __webpack_require__(69);

	var _loadingReducer2 = _interopRequireDefault(_loadingReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	    buttonClick: _buttonr2.default,
	    commonReducer: _common2.default,
	    loadingBar: _loadingReducer2.default
	});

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ActionTypes = __webpack_require__(63);

	var actionType = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var initialState = { text: '123' };

	var buttonClick = function buttonClick() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case actionType.button_click:
	            return { text: action.text };
	        default:
	            return state;
	    }
	};

	exports.default = buttonClick;

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ActionTypes = __webpack_require__(63);

	var actionType = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var initialState = { data: "no data" };

	var commonReducer = function commonReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case actionType.load_data:
	            return { data: action.payload.data };
	        default:
	            return state;
	    }
	};

	exports.default = commonReducer;

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ActionTypes = __webpack_require__(63);

	var actionType = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var initialState = { isShow: false };

	var loadingReducer = function loadingReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case actionType.loading_show:
	        case actionType.loading_hide:
	            return { isShow: action.isShow };
	        default:
	            return state;
	    }
	};

	exports.default = loadingReducer;

/***/ }

});