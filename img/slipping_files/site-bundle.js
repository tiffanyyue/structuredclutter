/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	var _controller = __webpack_require__(35);

	var _controller2 = _interopRequireDefault(_controller);

	var _videoBackground = __webpack_require__(36);

	var _videoBackground2 = _interopRequireDefault(_videoBackground);

	var _collectionBlog = __webpack_require__(151);

	var _collectionBlog2 = _interopRequireDefault(_collectionBlog);

	var _FolderToggle = __webpack_require__(163);

	var _FolderToggle2 = _interopRequireDefault(_FolderToggle);

	var _GalleryLayout = __webpack_require__(170);

	var _GalleryLayout2 = _interopRequireDefault(_GalleryLayout);

	var _GalleryVideoHandler = __webpack_require__(205);

	var _GalleryVideoHandler2 = _interopRequireDefault(_GalleryVideoHandler);

	var _HeaderOverflow = __webpack_require__(206);

	var _HeaderOverflow2 = _interopRequireDefault(_HeaderOverflow);

	var _HeaderScroll = __webpack_require__(212);

	var _HeaderScroll2 = _interopRequireDefault(_HeaderScroll);

	var _IndexGallery = __webpack_require__(214);

	var _IndexGallery2 = _interopRequireDefault(_IndexGallery);

	var _IndexNavOverflow = __webpack_require__(217);

	var _IndexNavOverflow2 = _interopRequireDefault(_IndexNavOverflow);

	var _IndexNavScroll = __webpack_require__(218);

	var _IndexNavScroll2 = _interopRequireDefault(_IndexNavScroll);

	var _IndexSetup = __webpack_require__(221);

	var _IndexSetup2 = _interopRequireDefault(_IndexSetup);

	var _IndexPositioning = __webpack_require__(223);

	var _IndexPositioning2 = _interopRequireDefault(_IndexPositioning);

	var _MainContentPositioning = __webpack_require__(224);

	var _MainContentPositioning2 = _interopRequireDefault(_MainContentPositioning);

	var _MercuryLoader = __webpack_require__(225);

	var _MercuryLoader2 = _interopRequireDefault(_MercuryLoader);

	var _NavToggle = __webpack_require__(232);

	var _NavToggle2 = _interopRequireDefault(_NavToggle);

	var _OverlayNavOverflow = __webpack_require__(233);

	var _OverlayNavOverflow2 = _interopRequireDefault(_OverlayNavOverflow);

	var _PageBanners = __webpack_require__(234);

	var _PageBanners2 = _interopRequireDefault(_PageBanners);

	var _SetActiveNavLink = __webpack_require__(235);

	var _SetActiveNavLink2 = _interopRequireDefault(_SetActiveNavLink);

	var _SocialIconFadein = __webpack_require__(236);

	var _SocialIconFadein2 = _interopRequireDefault(_SocialIconFadein);

	var _TitleCardHandler = __webpack_require__(237);

	var _TitleCardHandler2 = _interopRequireDefault(_TitleCardHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Bind controllers
	// Polyfills
	_controller2.default.register('BlogList', _collectionBlog2.default.list);

	// controllers


	// General imports

	_controller2.default.register('BlogItem', _collectionBlog2.default.item);
	_controller2.default.register('FolderToggle', _FolderToggle2.default);
	_controller2.default.register('GalleryLayout', _GalleryLayout2.default);
	_controller2.default.register('GalleryVideoHandler', _GalleryVideoHandler2.default);
	_controller2.default.register('HeaderOverflow', _HeaderOverflow2.default);
	_controller2.default.register('HeaderScroll', _HeaderScroll2.default);
	_controller2.default.register('IndexGallery', _IndexGallery2.default);
	_controller2.default.register('IndexNavOverflow', _IndexNavOverflow2.default);
	_controller2.default.register('IndexNavScroll', _IndexNavScroll2.default);
	_controller2.default.register('IndexSetup', _IndexSetup2.default);
	_controller2.default.register('IndexPositioning', _IndexPositioning2.default);
	_controller2.default.register('MainContentPositioning', _MainContentPositioning2.default);
	_controller2.default.register('MercuryLoader', _MercuryLoader2.default);
	_controller2.default.register('NavToggle', _NavToggle2.default);
	_controller2.default.register('OverlayNavOverflow', _OverlayNavOverflow2.default);
	_controller2.default.register('PageBanners', _PageBanners2.default);
	_controller2.default.register('SetActiveNavLink', _SetActiveNavLink2.default);
	_controller2.default.register('SocialIconFadein', _SocialIconFadein2.default);
	_controller2.default.register('TitleCardHandler', _TitleCardHandler2.default);

	_controller2.default.register('VideoBackground', function (element) {
	  return (0, _videoBackground2.default)(element, ['tweak-page-banner-image-height', 'tweak-show-page-banner-image']);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(6).Array.find;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(4)
	  , $find   = __webpack_require__(22)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(34)(KEY);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(6)
	  , hide      = __webpack_require__(7)
	  , redefine  = __webpack_require__(17)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(8)
	  , createDesc = __webpack_require__(16);
	module.exports = __webpack_require__(12) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(9)
	  , IE8_DOM_DEFINE = __webpack_require__(11)
	  , toPrimitive    = __webpack_require__(15)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(12) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(12) && !__webpack_require__(13)(function(){
	  return Object.defineProperty(__webpack_require__(14)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(13)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10)
	  , document = __webpack_require__(5).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(10);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , hide      = __webpack_require__(7)
	  , has       = __webpack_require__(18)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(6).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(23)
	  , toObject = __webpack_require__(25)
	  , toLength = __webpack_require__(27)
	  , asc      = __webpack_require__(29);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(24);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(26);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(28)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(30);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(10)
	  , isArray  = __webpack_require__(31)
	  , SPECIES  = __webpack_require__(32)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(24);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(33)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(5).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(32)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(7)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Change to true for verbose logs.
	 *
	 * @name DEBUG
	 * @type {Boolean}
	 */
	var DEBUG = false;

	/**
	 * Cached object containing controller functions indexed by registered name string.
	 *
	 * @name CONTROLLERS_BY_NAME
	 * @type {Object}
	 */
	var CONTROLLERS_BY_NAME = {};

	/**
	 * Cached array of live controllers.
	 *
	 * @name _liveControllers
	 * @type {Array}
	 */
	var _liveControllers = [];

	/**
	 * Given a controller object, run its function with its element as the context
	 * and first parameter, and return whatever the result of the function call is
	 * (lifecycle methods).
	 *
	 * @method process
	 * @param {Object} controller   Controller object to process, incl. fn and element
	 * @return {*}                  Result of function call
	 */
	function process(controller) {
	  if (!controller.fn || !controller.element) {
	    return null;
	  }
	  return controller.fn(controller.element);
	}

	/**
	 * Compare two controller objects and returns whether they are equal.
	 *
	 * @method isEqualController
	 */
	function isEqualController(a, b) {
	  if (!a.element || !b.element || !a.fn || !b.fn) {
	    return false;
	  }
	  return a.element === b.element && a.fn === b.fn;
	}

	/**
	 * Registers a controller with a given name and function body.
	 *
	 * @method register
	 * @param {String} name           String to register controller fn to
	 * @param {Function} controller   Controller fn to register
	 */
	function register(name, controller) {
	  CONTROLLERS_BY_NAME[name] = controller;
	}

	/**
	 * Sychronize all controllers. Process new controllers, destroy controllers
	 * whose elements are no longer on the DOM, and sync others.
	 *
	 * @method refresh
	 */
	function refresh() {

	  // Get all nodes with controllers and convert to array
	  var nodesWithControllers = Array.prototype.slice.call(document.querySelectorAll('[data-controller]'));

	  // Create array to house new controller objects
	  var newControllers = [];

	  // Convert found nodes to controller objects
	  // so we can do comparisons later
	  nodesWithControllers.forEach(function (node) {

	    // Get controller names on node
	    var controllerNames = node.getAttribute('data-controller').split(',');

	    // Loop
	    controllerNames.forEach(function (controllerName) {

	      controllerName = controllerName.trim();

	      var controller = CONTROLLERS_BY_NAME[controllerName];

	      if (!controller) {
	        return;
	      }

	      // Add to new controller array
	      newControllers.push({
	        namespace: controllerName,
	        element: node,
	        fn: controller
	      });
	    });
	  });

	  // Loop through live controllers and find ones that need to be destroyed
	  // or synced
	  _liveControllers = _liveControllers.filter(function (liveController) {

	    // Boolean to indicate whether one of new controllers matches current
	    // live controller.
	    var isControllerActive = newControllers.some(function (newController) {
	      return isEqualController(liveController, newController);
	    });

	    if (isControllerActive) {

	      if (DEBUG) {
	        console.log('Sync controller: ' + liveController.namespace);
	      }

	      // Controller element is still in the DOM, run sync method of controller.
	      if (liveController.methods && liveController.methods.sync) {
	        liveController.methods.sync.apply(liveController.element, null);
	      }

	      // Remove existing controllers from new controllers array, so they are not
	      // reinitialized.
	      newControllers = newControllers.filter(function (newController) {
	        return !isEqualController(liveController, newController);
	      });
	    } else {

	      if (DEBUG) {
	        console.log('Destroy controller: ' + liveController.namespace);
	      }

	      // Controller element is no longer in the DOM, call destructor method of
	      // controller.
	      if (liveController.methods && liveController.methods.destroy) {
	        liveController.methods.destroy.apply(liveController.element, null);
	      }
	    }
	    return isControllerActive;
	  });

	  // Process new controllers for the first time
	  newControllers.forEach(function (controller) {
	    if (DEBUG) {
	      console.log('New controller: ' + controller.namespace);
	    }

	    controller.methods = process(controller);
	    _liveControllers.push(controller);

	    // Add controller binded info
	    var bindedControllersName = [];
	    if (controller.element.hasAttribute('data-controllers-binded')) {
	      var existingControllers = controller.element.getAttribute('data-controllers-binded').split(', ');
	      bindedControllersName = bindedControllersName.concat(existingControllers);
	    }

	    bindedControllersName.push(controller.namespace);

	    controller.element.setAttribute('data-controllers-binded', bindedControllersName.join(', '));
	  });
	}

	document.addEventListener('DOMContentLoaded', refresh);

	exports.default = {
	  refresh: refresh,
	  register: register
	};
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _videoBackgroundRendering = __webpack_require__(37);

	var _GetVideoPropsFromNode = __webpack_require__(146);

	var _GetVideoPropsFromNode2 = _interopRequireDefault(_GetVideoPropsFromNode);

	var _core = __webpack_require__(147);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function VideoBackground(element, tweaksToWatch) {
	  var rootNode = element.querySelector('.sqs-video-background');
	  var props = (0, _GetVideoPropsFromNode2.default)(rootNode);
	  var renderer = new _videoBackgroundRendering.VideoBackground(props);

	  var destroy = function destroy() {
	    renderer.destroy();
	  };

	  if (tweaksToWatch) {
	    _core.Tweak.watch(tweaksToWatch, function () {
	      renderer.destroy();
	      renderer = new _videoBackgroundRendering.VideoBackground(props);
	    });
	  }

	  return { destroy: destroy };
	}

	exports.default = VideoBackground;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var VideoBackground = __webpack_require__(38);
	var VideoFilterPropertyValues = __webpack_require__(141).filterProperties;

	var videoAutoplayTest = __webpack_require__(123);

	module.exports = {
	  VideoBackground: VideoBackground,
	  VideoFilterPropertyValues: VideoFilterPropertyValues,
	  videoAutoplayTest: videoAutoplayTest
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = __webpack_require__(39);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _stringify = __webpack_require__(107);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _assign = __webpack_require__(109);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(113);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(114);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var custEvent = __webpack_require__(118);
	var parseUrl = __webpack_require__(119);
	var testAutoPlay = __webpack_require__(123);

	var DEBUG = false;

	var DEFAULT_PROPERTY_VALUES = {
	  'container': '.background-wrapper',
	  'url': 'https://youtu.be/xkEmYQvJ_68',
	  'fitMode': 'fill',
	  'maxLoops': '',
	  'scaleFactor': 1,
	  'playbackSpeed': 1,
	  'filter': 1,
	  'filterStrength': 50,
	  'timeCode': { 'start': 0, 'end': null },
	  'useCustomFallbackImage': false
	};

	var FILTER_OPTIONS = __webpack_require__(141).filterOptions;
	var FILTER_PROPERTIES = __webpack_require__(141).filterProperties;

	var YOUTUBE_REGEX = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11}).*/;
	var VIMEO_REGEX = /^.*(vimeo\.com\/)([0-9]{7,}(#t\=.*s)?)/;

	/**
	 * A class which uses the YouTube API to initialize an IFRAME with a YouTube video.
	 * Additional display options and functionality are configured through a set of properties,
	 * superceding default properties.
	 */

	var VideoBackground = function () {
	  /**
	   * @param {Object} props - An optional object with configuation.
	   * @param {Object} windowContext - The parent window object (due to .sqs-site-frame).
	   */
	  function VideoBackground(props) {
	    var _this = this;

	    var windowContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
	    (0, _classCallCheck3.default)(this, VideoBackground);

	    this.windowContext = windowContext;
	    this.events = [];

	    this.initializeProperties(props);
	    testAutoPlay().then(function (value) {
	      _this.canAutoPlay = true;
	    }, function (reason) {
	      _this.canAutoPlay = false;
	      _this.container.classList.add('mobile');
	      _this.logger('added mobile');
	    }).then(function (value) {
	      _this.setDisplayEffects();
	      _this.setFallbackImage();
	      _this.callVideoAPI();
	      _this.bindUI();

	      if (DEBUG === true) {
	        window.vdbg = _this;
	        _this.debugInterval = setInterval(function () {
	          if (_this.player.getCurrentTime) {
	            _this.logger((_this.player.getCurrentTime() / _this.player.getDuration()).toFixed(2));
	          }
	        }, 900);
	      }
	    });
	  }

	  (0, _createClass3.default)(VideoBackground, [{
	    key: 'destroy',
	    value: function destroy() {
	      if (this.events) {
	        this.events.forEach(function (evt) {
	          return evt.target.removeEventListener(evt.type, evt.handler, true);
	        });
	      }
	      this.events = null;

	      if (this.player && typeof this.player.destroy === 'function') {
	        this.player.iframe.classList.remove('ready');
	        clearTimeout(this.player.playTimeout);
	        this.player.playTimeout = null;
	        this.player.destroy();
	        this.player = {};
	      }

	      if (typeof this.timer === 'number') {
	        clearTimeout(this.timer);
	        this.timer = null;
	      }

	      if (typeof this.debugInterval === 'number') {
	        clearInterval(this.debugInterval);
	        this.debugInterval = null;
	      }
	    }
	  }, {
	    key: 'bindUI',
	    value: function bindUI() {
	      var _this2 = this;

	      var resizeEvent = typeof window.orientation === 'undefined' ? 'resize' : 'orientationchange';
	      var resizeHandler = function resizeHandler() {
	        if (resizeEvent === 'resize' && _this2.player.iframe) {
	          _this2.windowContext.requestAnimationFrame(function () {
	            _this2.scaleVideo();
	          });
	        } else if (_this2.useCustomFallbackImage && _this2.windowContext.ImageLoader) {
	          var customFallbackImage = _this2.container.querySelector('img[data-src]');
	          _this2.windowContext.ImageLoader.load(customFallbackImage, true);
	        }
	      };
	      this.events.push({
	        'target': this.windowContext,
	        'type': 'resize',
	        'handler': resizeHandler
	      });
	      this.windowContext.addEventListener(resizeEvent, resizeHandler, true);
	    }

	    /**
	     * Merge configuration properties with defaults with minimal validation.
	     */

	  }, {
	    key: 'initializeProperties',
	    value: function initializeProperties() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      props = (0, _assign2.default)({}, DEFAULT_PROPERTY_VALUES, props);
	      if (props.container.nodeType === 1) {
	        this.container = props.container;
	      } else if (typeof props.container === 'string') {
	        this.container = document.querySelector(props.container);
	      } else {
	        console.error('Container ' + props.container + ' not found');
	        return false;
	      }
	      this.videoId = this.getVideoID(props.url);
	      this.filter = props.filter;
	      this.filterStrength = props.filterStrength;
	      this.useCustomFallbackImage = props.useCustomFallbackImage;
	      this.fitMode = props.fitMode;
	      this.maxLoops = parseInt(props.maxLoops, 10) || null;
	      this.scaleFactor = props.scaleFactor;
	      this.playbackSpeed = parseFloat(props.playbackSpeed) === 0.0 ? 1 : parseFloat(props.playbackSpeed);
	      this.timeCode = {
	        start: this._getStartTime(props.url) || props.timeCode.start,
	        end: props.timeCode.end
	      };
	      this.player = {};
	      this.currentLoop = 0;
	    }

	    /**
	     * The ID is the only unique property need to use in the YouTube and Vimeo APIs.
	     */

	  }, {
	    key: 'getVideoID',
	    value: function getVideoID(value) {
	      if (!value) {
	        value = DEFAULT_PROPERTY_VALUES.url;
	      }

	      var match = value.match(YOUTUBE_REGEX);
	      if (match && match[2].length) {
	        this.videoSource = 'youtube';
	        return match[2];
	      }

	      match = value.match(VIMEO_REGEX);
	      if (match && match[2].length) {
	        this.videoSource = 'vimeo';
	        return match[2];
	      }

	      return '';
	    }

	    /**
	     * A default fallback image element will be create from the YouTube API, unless the
	     * custom fallback image exists.
	     */

	  }, {
	    key: 'setFallbackImage',
	    value: function setFallbackImage() {
	      var _this3 = this;

	      if (this.useCustomFallbackImage) {
	        (function () {
	          var customFallbackImage = _this3.container.querySelector('.custom-fallback-image');
	          var tempImage = document.createElement('img');
	          tempImage.src = customFallbackImage.src;
	          tempImage.addEventListener('load', function () {
	            customFallbackImage.classList.add('loaded');
	          });
	        })();
	      }
	    }

	    /**
	     * Determine which API to use
	     */

	  }, {
	    key: 'callVideoAPI',
	    value: function callVideoAPI() {
	      if (this.videoSource === 'youtube') {
	        this.initializeYouTubeAPI();
	      }

	      if (this.videoSource === 'vimeo') {
	        this.initializeVimeoAPI();
	      }
	    }

	    /**
	     * Call YouTube API per their guidelines.
	     */

	  }, {
	    key: 'initializeYouTubeAPI',
	    value: function initializeYouTubeAPI() {
	      var _this4 = this;

	      if (!this.canAutoPlay) {
	        return;
	      }

	      if (this.windowContext.document.documentElement.querySelector('script[src*="www.youtube.com/iframe_api"].loaded')) {
	        this.setVideoPlayer();
	        return;
	      }

	      this.player.ready = false;
	      var tag = this.windowContext.document.createElement('script');
	      tag.src = 'https://www.youtube.com/iframe_api';
	      var firstScriptTag = this.windowContext.document.getElementsByTagName('script')[0];
	      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	      tag.addEventListener('load', function (evt) {
	        evt.currentTarget.classList.add('loaded');
	        _this4.setVideoPlayer();
	      }, true);
	    }

	    /**
	     * Call the Vimeo API per their guidelines.
	     */

	  }, {
	    key: 'initializeVimeoAPI',
	    value: function initializeVimeoAPI() {
	      // No external API call is necessary; preserved for parity with YouTube and
	      // potential additional integrations.
	      if (!this.canAutoPlay) {
	        return;
	      }

	      this.setVideoPlayer();
	    }

	    /**
	     * If the source is YouTube, initialize the video player and register its callbacks.
	     * If the source is Vimeo, construct and append the player node and register handlers.
	     */

	  }, {
	    key: 'setVideoPlayer',
	    value: function setVideoPlayer() {
	      if (this.player.ready) {
	        try {
	          this.player.destroy();
	          this.player.ready = false;
	        } catch (e) {
	          // nothing to destroy
	        }
	      }

	      if (this.videoSource === 'youtube') {
	        this.initializeYouTubePlayer();
	      } else if (this.videoSource === 'vimeo') {
	        this.initializeVimeoPlayer();
	      }
	    }

	    /**
	     * Initialize the player and bind player events.
	     */

	  }, {
	    key: 'initializeYouTubePlayer',
	    value: function initializeYouTubePlayer() {
	      var _this5 = this;

	      var awaitingLoopRequestedAt = null;

	      // Poll until the API is ready.
	      if (this.windowContext.YT.loaded !== 1) {
	        setTimeout(this.setVideoPlayer.bind(this), 100);
	        return false;
	      }

	      /**
	       * YouTube event handler. Add the proper class to the player element, and set
	       * player properties. All player methods via YouTube API.
	       */
	      var onYouTubePlayerReady = function onYouTubePlayerReady(event) {
	        var player = _this5.player;
	        player.iframe = player.getIframe();
	        player.iframe.classList.add('background-video');
	        _this5.syncPlayer();
	        player.mute();
	        if (typeof window.CustomEvent !== 'function') {
	          custEvent();
	        }
	        var readyEvent = new CustomEvent('ready');
	        _this5.container.dispatchEvent(readyEvent);
	        document.body.classList.add('ready');
	        player.ready = true;
	        if (!_this5.canAutoPlay) {
	          return;
	        }
	        if (_this5.timeCode.start >= player.getDuration()) {
	          _this5.timeCode.start = 0;
	        }
	        player.seekTo(_this5.timeCode.start);
	        player.playVideo();
	        _this5.logger('playing');
	      };

	      /**
	       * YouTube event handler. Determine whether or not to loop the video.
	       */
	      var onYouTubePlayerStateChange = function onYouTubePlayerStateChange(event) {
	        var player = _this5.player;
	        var playerIframe = player.getIframe();
	        var duration = (player.getDuration() - _this5.timeCode.start) / _this5.playbackSpeed;

	        var doLoop = function doLoop() {
	          if (awaitingLoopRequestedAt === null) {
	            if (player.getCurrentTime() + 0.1 >= player.getDuration()) {
	              if (_this5.maxLoops) {
	                _this5.currentLoop++;
	                if (_this5.currentLoop > _this5.maxLoops) {
	                  player.pauseVideo();
	                  _this5.currentLoop = 0;
	                  return;
	                }
	              }
	              awaitingLoopRequestedAt = player.getCurrentTime();
	              player.pauseVideo();
	              player.seekTo(_this5.timeCode.start);
	            }
	          } else if (player.getCurrentTime() < awaitingLoopRequestedAt) {
	            awaitingLoopRequestedAt = null;
	            player.playVideo();
	          }
	          requestAnimationFrame(doLoop.bind(_this5));
	        };

	        if (event.data === _this5.windowContext.YT.PlayerState.BUFFERING && player.getVideoLoadedFraction() !== 1 && (player.getCurrentTime() === 0 || player.getCurrentTime() > duration - -0.1)) {
	          _this5.logger('BUFFERING');
	          _this5.autoPlayTestTimeout();
	        } else if (event.data === _this5.windowContext.YT.PlayerState.PLAYING) {
	          if (_this5.player.playTimeout !== null) {
	            clearTimeout(_this5.player.playTimeout);
	            _this5.player.playTimeout = null;
	          }
	          if (!_this5.canAutoPlay) {
	            _this5.canAutoPlay = true;
	            _this5.container.classList.remove('mobile');
	          }
	          _this5.logger('PLAYING');
	          playerIframe.classList.add('ready');
	          requestAnimationFrame(doLoop.bind(_this5));
	        } else if (event.data === _this5.windowContext.YT.PlayerState.ENDED) {
	          player.playVideo();
	        }
	      };

	      this.player = new this.windowContext.YT.Player(this.container.querySelector('#player'), {
	        height: '315',
	        width: '560',
	        videoId: this.videoId,
	        playerVars: {
	          'autohide': 1,
	          'autoplay': 0,
	          'controls': 0,
	          'enablejsapi': 1,
	          'iv_load_policy': 3,
	          'loop': 0,
	          'modestbranding': 1,
	          'playsinline': 1,
	          'rel': 0,
	          'showinfo': 0,
	          'wmode': 'opaque'
	        },
	        events: {
	          'onReady': function onReady(event) {
	            onYouTubePlayerReady(event);
	          },
	          'onStateChange': function onStateChange(event) {
	            onYouTubePlayerStateChange(event);
	          }
	        }
	      });
	    }

	    /**
	     * Initialize the player and bind player events with a postMessage handler.
	     */

	  }, {
	    key: 'initializeVimeoPlayer',
	    value: function initializeVimeoPlayer() {
	      var _this6 = this;

	      var playerIframe = this.windowContext.document.createElement('iframe');
	      playerIframe.id = 'vimeoplayer';
	      playerIframe.classList.add('background-video');
	      var playerConfig = '&background=1';
	      playerIframe.src = '//player.vimeo.com/video/' + this.videoId + '?api=1' + playerConfig;
	      this.container.appendChild(playerIframe);
	      this.player.iframe = playerIframe;

	      /**
	       * Creates cross frame postMessage handlers, gets proper dimensions of player,
	       * and sets ready state for the player and container.
	       *
	       */
	      var player = this.player;
	      var playerOrigin = '*';

	      var postMessageManager = function postMessageManager(action, value) {
	        var data = {
	          method: action
	        };

	        if (value) {
	          data.value = value;
	        }

	        var message = (0, _stringify2.default)(data);
	        _this6.windowContext.eval('(function(ctx){ ctx.player.iframe.contentWindow.postMessage(' + message + ', ' + (0, _stringify2.default)(playerOrigin) + '); })')(_this6);
	      };
	      player.postMessageManager = postMessageManager;

	      var syncAndStartPlayback = function syncAndStartPlayback() {
	        if (!player.dimensions.width || !player.dimensions.height || !player.duration) {
	          return;
	        }
	        _this6.syncPlayer();
	        if (typeof window.CustomEvent !== 'function') {
	          custEvent();
	        }

	        var readyEvent = new CustomEvent('ready');
	        _this6.container.dispatchEvent(readyEvent);
	        document.body.classList.add('ready');

	        // Only required for Vimeo Basic videos, or video URLs with a start time hash.
	        // Plus and Pro utilize `background=1` URL parameter.
	        // See https://vimeo.com/forums/topic:278001
	        postMessageManager('setVolume', '0');
	        postMessageManager('setLoop', 'true');
	        postMessageManager('seekTo', _this6.timeCode.start);
	        postMessageManager('play');
	        postMessageManager('addEventListener', 'playProgress');
	      };

	      var onReady = function onReady() {
	        player.dimensions = {};
	        postMessageManager('getDuration');
	        postMessageManager('getVideoHeight');
	        postMessageManager('getVideoWidth');
	      };

	      var onPlaying = function onPlaying() {
	        clearTimeout(player.playTimeout);
	        player.playTimeout = null;
	        player.ready = true;
	        player.iframe.classList.add('ready');

	        if (!_this6.canAutoPlay) {
	          _this6.canAutoPlay = true;
	          _this6.container.classList.remove('mobile');
	        }
	      };

	      var onMessageReceived = function onMessageReceived(event) {
	        if (!/^https?:\/\/player.vimeo.com/.test(event.origin)) {
	          return false;
	        }

	        playerOrigin = event.origin;

	        var data = event.data;
	        if (typeof data === 'string') {
	          data = JSON.parse(data);
	        }
	        _this6.logger(data);

	        switch (data.event) {
	          case 'ready':
	            onReady();
	            break;

	          case 'playProgress':
	          case 'timeupdate':
	            if (player.playTimeout !== null) {
	              onPlaying();
	            }
	            if (data.data.percent >= 0.98 && _this6.timeCode.start > 0) {
	              postMessageManager('seekTo', _this6.timeCode.start);
	            }
	            break;
	        }

	        switch (data.method) {
	          case 'getVideoHeight':
	            player.dimensions.height = data.value;
	            syncAndStartPlayback();
	            break;
	          case 'getVideoWidth':
	            player.dimensions.width = data.value;
	            syncAndStartPlayback();
	            break;
	          case 'getDuration':
	            player.duration = data.value;
	            if (_this6.timeCode.start >= player.duration) {
	              _this6.timeCode.start = 0;
	            }
	            syncAndStartPlayback();
	            break;
	        }
	      };

	      var messageHandler = function messageHandler(e) {
	        onMessageReceived(e);
	      };

	      this.windowContext.addEventListener('message', messageHandler, false);
	      this.autoPlayTestTimeout();

	      player.destroy = function () {
	        _this6.windowContext.removeEventListener('message', messageHandler);
	        // If the iframe node has already been removed from the DOM by the
	        // implementer, parentElement.removeChild will error out unless we do
	        // this check here first.
	        if (player.iframe.parentElement) {
	          player.iframe.parentElement.removeChild(player.iframe);
	        }
	      };
	    }

	    /**
	     * The IFRAME will be the entire width and height of its container, but the video
	     * may be a completely different size and ratio. Scale up the IFRAME so the inner video
	     * behaves in the proper `fitMode`, with optional additional scaling to zoom in.
	     */

	  }, {
	    key: 'scaleVideo',
	    value: function scaleVideo(scaleValue) {
	      var scale = scaleValue || this.scaleFactor;
	      var playerIframe = this.player.iframe;
	      var videoDimensions = this._findPlayerDimensions();

	      if (this.fitMode !== 'fill') {
	        playerIframe.style.width = '';
	        playerIframe.style.height = '';
	        return false;
	      }

	      var containerWidth = playerIframe.parentNode.clientWidth;
	      var containerHeight = playerIframe.parentNode.clientHeight;
	      var containerRatio = containerWidth / containerHeight;
	      var videoRatio = videoDimensions.width / videoDimensions.height;
	      var pWidth = 0;
	      var pHeight = 0;
	      if (containerRatio > videoRatio) {
	        // at the same width, the video is taller than the window
	        pWidth = containerWidth * scale;
	        pHeight = containerWidth * scale / videoRatio;
	        playerIframe.style.width = pWidth + 'px';
	        playerIframe.style.height = pHeight + 'px';
	      } else if (videoRatio > containerRatio) {
	        // at the same width, the video is shorter than the window
	        pWidth = containerHeight * scale * videoRatio;
	        pHeight = containerHeight * scale;
	        playerIframe.style.width = pWidth + 'px';
	        playerIframe.style.height = pHeight + 'px';
	      } else {
	        // the window and video ratios match
	        pWidth = containerWidth * scale;
	        pHeight = containerHeight * scale;
	        playerIframe.style.width = pWidth + 'px';
	        playerIframe.style.height = pHeight + 'px';
	      }
	      playerIframe.style.left = 0 - (pWidth - containerWidth) / 2 + 'px';
	      playerIframe.style.top = 0 - (pHeight - containerHeight) / 2 + 'px';
	    }

	    /**
	     * Play back speed options, based on the YouTube API options.
	     */

	  }, {
	    key: 'setSpeed',
	    value: function setSpeed(speedValue) {
	      this.playbackSpeed = parseFloat(this.playbackSpeed);
	      this.player.setPlaybackRate(this.playbackSpeed);
	    }

	    /**
	     * All diplay related effects should be applied prior to the video loading to
	     * ensure the effects are visible on the fallback image while loading.
	     */

	  }, {
	    key: 'setDisplayEffects',
	    value: function setDisplayEffects() {
	      this.setFilter();
	    }

	    /**
	     * Apply filter with values based on filterStrength.
	     */

	  }, {
	    key: 'setFilter',
	    value: function setFilter() {
	      var containerStyle = this.container.style;
	      var filter = FILTER_OPTIONS[this.filter - 1];
	      var filterStyle = '';
	      if (filter !== 'none') {
	        filterStyle = this.getFilterStyle(filter, this.filterStrength);
	      }

	      // To prevent the blur effect from displaying the background at the edges as
	      // part of the blur, the filer needs to be applied to the player and fallback image,
	      // and those elements need to be scaled slightly.
	      // No other combination of filter target and scaling seems to work.
	      if (filter === 'blur') {
	        containerStyle.webkitFilter = '';
	        containerStyle.filter = '';
	        this.container.classList.add('filter-blur');

	        Array.prototype.slice.call(this.container.children).forEach(function (el) {
	          el.style.webkitFilter = filterStyle;
	          el.style.filter = filterStyle;
	        });
	      } else {
	        containerStyle.webkitFilter = filterStyle;
	        containerStyle.filter = filterStyle;
	        this.container.classList.remove('filter-blur');

	        Array.prototype.slice.call(this.container.children).forEach(function (el) {
	          el.style.webkitFilter = '';
	          el.style.filter = '';
	        });
	      }
	    }

	    /**
	     * Construct the style based on the filter, strength and `FILTER_PROPERTIES`.
	     */

	  }, {
	    key: 'getFilterStyle',
	    value: function getFilterStyle(filter, strength) {
	      return filter + '(' + (FILTER_PROPERTIES[filter].modifier(strength) + FILTER_PROPERTIES[filter].unit) + ')';
	    }

	    /**
	     * The YouTube API seemingly does not expose the actual width and height dimensions
	     * of the video itself. The video's dimensions and ratio may be completely different
	     * than the IFRAME's. This hack finds those values inside some private objects.
	     * Since this is not part of the pbulic API, the dimensions will fall back to the
	     * container width and height, in case YouTube changes the internals unexpectedly.
	     */

	  }, {
	    key: '_findPlayerDimensions',
	    value: function _findPlayerDimensions() {
	      var _this7 = this;

	      var w = void 0;
	      var h = void 0;
	      if (this.videoSource === 'youtube') {
	        (function () {
	          w = _this7.container.clientWidth;
	          h = _this7.container.clientHeight;
	          var hasDimensions = false;
	          var playerObjs = [];
	          var player = _this7.player;
	          for (var o in player) {
	            if ((0, _typeof3.default)(player[o]) === 'object') {
	              playerObjs.push(player[o]);
	            }
	          }
	          playerObjs.forEach(function (obj) {
	            for (var p in obj) {
	              if (hasDimensions) {
	                break;
	              }
	              try {
	                if ((0, _typeof3.default)(obj[p]) === 'object' && !!obj[p].host) {
	                  if (obj[p].width && obj[p].height) {
	                    w = obj[p].width;
	                    h = obj[p].height;
	                    hasDimensions = true;
	                  }
	                }
	              } catch (err) {
	                // console.error(err);
	              }
	            }
	          });
	        })();
	      } else if (this.videoSource === 'vimeo') {
	        if (!this.player.dimensions) {
	          w = this.player.iframe.clientWidth;
	          h = this.player.iframe.clientHeight;
	        } else {
	          w = this.player.dimensions.width;
	          h = this.player.dimensions.height;
	        }
	      }
	      return {
	        'width': w,
	        'height': h
	      };
	    }

	    /**
	     * Get the start time base on the URL formats of YouTube and Vimeo.
	     */

	  }, {
	    key: '_getStartTime',
	    value: function _getStartTime(url) {
	      var parsedUrl = new parseUrl(url, true);
	      var timeParam = this._getTimeParameter(parsedUrl);
	      if (!timeParam) {
	        return false;
	      }

	      var timeRegexYoutube = /[hms]/;
	      var timeRegexVimeo = /[#t=s]/;

	      var match = void 0;
	      switch (this.videoSource) {
	        case 'youtube':
	          match = timeParam.split(timeRegexYoutube).filter(Boolean);
	          break;
	        case 'vimeo':
	          match = timeParam.split(timeRegexVimeo).filter(Boolean);
	          break;
	      }
	      var s = parseInt(match.pop(), 10) || 0;
	      var m = parseInt(match.pop(), 10) * 60 || 0;
	      var h = parseInt(match.pop(), 10) * 3600 || 0;
	      return h + m + s;
	    }

	    /**
	     * YouTube and Vimeo have optional URL formats to allow playback at a certain
	     * timecode.
	     * Returns the appropriate time parameter or false.
	     */

	  }, {
	    key: '_getTimeParameter',
	    value: function _getTimeParameter(parsedUrl) {
	      if (this.videoSource === 'youtube' && (!parsedUrl.query || !parsedUrl.query.t) || this.videoSource === 'vimeo' && !parsedUrl.hash) {
	        return false;
	      }
	      var timeParam = void 0;
	      if (this.videoSource === 'youtube') {
	        timeParam = parsedUrl.query.t;
	      } else if (this.videoSource === 'vimeo') {
	        timeParam = parsedUrl.hash;
	      }
	      return timeParam;
	    }

	    /**
	      * Since we cannot inspect the video element inside the provider's IFRAME to
	      * check for `autoplay` and `playsinline` attributes, set a timeout that will
	      * tell this instance that the media cannot auto play. The timeout will be
	      * cleared via the media's playback API if it does begin playing.
	      */

	  }, {
	    key: 'autoPlayTestTimeout',
	    value: function autoPlayTestTimeout() {
	      var _this8 = this;

	      this.player.playTimeout = setTimeout(function () {
	        _this8.canAutoPlay = false;
	        _this8.container.classList.add('mobile');
	        _this8.logger('added mobile');
	      }, 2500);
	    }

	    /**
	      * Apply the purely visual effects.
	      */

	  }, {
	    key: 'syncPlayer',
	    value: function syncPlayer() {
	      this.setDisplayEffects();
	      if (this.videoSource === 'youtube') {
	        this.setSpeed();
	      }
	      this.scaleVideo();
	    }
	  }, {
	    key: 'logger',
	    value: function logger(msg) {
	      if (!DEBUG) {
	        return;
	      }

	      console.log(msg);
	    }
	  }]);
	  return VideoBackground;
	}();

	module.exports = VideoBackground;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(40);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(91);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	__webpack_require__(86);
	module.exports = __webpack_require__(90).f('iterator');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(43)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(46)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(44)
	  , defined   = __webpack_require__(45);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(47)
	  , $export        = __webpack_require__(48)
	  , redefine       = __webpack_require__(63)
	  , hide           = __webpack_require__(53)
	  , has            = __webpack_require__(64)
	  , Iterators      = __webpack_require__(65)
	  , $iterCreate    = __webpack_require__(66)
	  , setToStringTag = __webpack_require__(82)
	  , getPrototypeOf = __webpack_require__(84)
	  , ITERATOR       = __webpack_require__(83)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(49)
	  , core      = __webpack_require__(50)
	  , ctx       = __webpack_require__(51)
	  , hide      = __webpack_require__(53)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 49 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 50 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(52);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(54)
	  , createDesc = __webpack_require__(62);
	module.exports = __webpack_require__(58) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(55)
	  , IE8_DOM_DEFINE = __webpack_require__(57)
	  , toPrimitive    = __webpack_require__(61)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(58) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(56);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(58) && !__webpack_require__(59)(function(){
	  return Object.defineProperty(__webpack_require__(60)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(59)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(56)
	  , document = __webpack_require__(49).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(56);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(53);

/***/ },
/* 64 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(67)
	  , descriptor     = __webpack_require__(62)
	  , setToStringTag = __webpack_require__(82)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(53)(IteratorPrototype, __webpack_require__(83)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(55)
	  , dPs         = __webpack_require__(68)
	  , enumBugKeys = __webpack_require__(80)
	  , IE_PROTO    = __webpack_require__(77)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(60)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(81).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(54)
	  , anObject = __webpack_require__(55)
	  , getKeys  = __webpack_require__(69);

	module.exports = __webpack_require__(58) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(70)
	  , enumBugKeys = __webpack_require__(80);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(64)
	  , toIObject    = __webpack_require__(71)
	  , arrayIndexOf = __webpack_require__(74)(false)
	  , IE_PROTO     = __webpack_require__(77)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(72)
	  , defined = __webpack_require__(45);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(73);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(71)
	  , toLength  = __webpack_require__(75)
	  , toIndex   = __webpack_require__(76);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(44)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(44)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(78)('keys')
	  , uid    = __webpack_require__(79);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(49)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(49).document && document.documentElement;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(54).f
	  , has = __webpack_require__(64)
	  , TAG = __webpack_require__(83)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(78)('wks')
	  , uid        = __webpack_require__(79)
	  , Symbol     = __webpack_require__(49).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(64)
	  , toObject    = __webpack_require__(85)
	  , IE_PROTO    = __webpack_require__(77)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(45);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	var global        = __webpack_require__(49)
	  , hide          = __webpack_require__(53)
	  , Iterators     = __webpack_require__(65)
	  , TO_STRING_TAG = __webpack_require__(83)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(88)
	  , step             = __webpack_require__(89)
	  , Iterators        = __webpack_require__(65)
	  , toIObject        = __webpack_require__(71);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(46)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(83);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(93);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	module.exports = __webpack_require__(50).Symbol;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(49)
	  , has            = __webpack_require__(64)
	  , DESCRIPTORS    = __webpack_require__(58)
	  , $export        = __webpack_require__(48)
	  , redefine       = __webpack_require__(63)
	  , META           = __webpack_require__(94).KEY
	  , $fails         = __webpack_require__(59)
	  , shared         = __webpack_require__(78)
	  , setToStringTag = __webpack_require__(82)
	  , uid            = __webpack_require__(79)
	  , wks            = __webpack_require__(83)
	  , wksExt         = __webpack_require__(90)
	  , wksDefine      = __webpack_require__(95)
	  , keyOf          = __webpack_require__(96)
	  , enumKeys       = __webpack_require__(97)
	  , isArray        = __webpack_require__(100)
	  , anObject       = __webpack_require__(55)
	  , toIObject      = __webpack_require__(71)
	  , toPrimitive    = __webpack_require__(61)
	  , createDesc     = __webpack_require__(62)
	  , _create        = __webpack_require__(67)
	  , gOPNExt        = __webpack_require__(101)
	  , $GOPD          = __webpack_require__(103)
	  , $DP            = __webpack_require__(54)
	  , $keys          = __webpack_require__(69)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(102).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(99).f  = $propertyIsEnumerable;
	  __webpack_require__(98).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(47)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(53)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(79)('meta')
	  , isObject = __webpack_require__(56)
	  , has      = __webpack_require__(64)
	  , setDesc  = __webpack_require__(54).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(59)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(49)
	  , core           = __webpack_require__(50)
	  , LIBRARY        = __webpack_require__(47)
	  , wksExt         = __webpack_require__(90)
	  , defineProperty = __webpack_require__(54).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(69)
	  , toIObject = __webpack_require__(71);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(69)
	  , gOPS    = __webpack_require__(98)
	  , pIE     = __webpack_require__(99);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 99 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(73);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(71)
	  , gOPN      = __webpack_require__(102).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(70)
	  , hiddenKeys = __webpack_require__(80).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(99)
	  , createDesc     = __webpack_require__(62)
	  , toIObject      = __webpack_require__(71)
	  , toPrimitive    = __webpack_require__(61)
	  , has            = __webpack_require__(64)
	  , IE8_DOM_DEFINE = __webpack_require__(57)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(58) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(95)('asyncIterator');

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(95)('observable');

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(50)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(111);
	module.exports = __webpack_require__(50).Object.assign;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(48);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(112)});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(69)
	  , gOPS     = __webpack_require__(98)
	  , pIE      = __webpack_require__(99)
	  , toObject = __webpack_require__(85)
	  , IObject  = __webpack_require__(72)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(59)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(115);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(117);
	var $Object = __webpack_require__(50).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(48);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(58), 'Object', {defineProperty: __webpack_require__(54).f});

/***/ },
/* 118 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * CustomEvent polyfill for Internet Explorer versions >= 9
	 * Polyfill from
	 *   https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
	 */
	var custEvent = function custEvent() {
	  (function () {

	    function CustomEvent(event, params) {
	      params = params || { bubbles: false, cancelable: false, detail: undefined };
	      var evt = document.createEvent('CustomEvent');
	      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	      return evt;
	    }

	    CustomEvent.prototype = window.Event.prototype;

	    window.CustomEvent = CustomEvent;
	  })();
	};

	module.exports = custEvent;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var required = __webpack_require__(120)
	  , lolcation = __webpack_require__(121)
	  , qs = __webpack_require__(122)
	  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;

	/**
	 * These are the parse rules for the URL parser, it informs the parser
	 * about:
	 *
	 * 0. The char it Needs to parse, if it's a string it should be done using
	 *    indexOf, RegExp using exec and NaN means set as current value.
	 * 1. The property we should set when parsing this value.
	 * 2. Indication if it's backwards or forward parsing, when set as number it's
	 *    the value of extra chars that should be split off.
	 * 3. Inherit from location if non existing in the parser.
	 * 4. `toLowerCase` the resulting value.
	 */
	var rules = [
	  ['#', 'hash'],                        // Extract from the back.
	  ['?', 'query'],                       // Extract from the back.
	  ['/', 'pathname'],                    // Extract from the back.
	  ['@', 'auth', 1],                     // Extract from the front.
	  [NaN, 'host', undefined, 1, 1],       // Set left over value.
	  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
	  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
	];

	/**
	 * @typedef ProtocolExtract
	 * @type Object
	 * @property {String} protocol Protocol matched in the URL, in lowercase.
	 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
	 * @property {String} rest Rest of the URL that is not part of the protocol.
	 */

	/**
	 * Extract protocol information from a URL with/without double slash ("//").
	 *
	 * @param {String} address URL we want to extract from.
	 * @return {ProtocolExtract} Extracted information.
	 * @api private
	 */
	function extractProtocol(address) {
	  var match = protocolre.exec(address);

	  return {
	    protocol: match[1] ? match[1].toLowerCase() : '',
	    slashes: !!match[2],
	    rest: match[3]
	  };
	}

	/**
	 * Resolve a relative URL pathname against a base URL pathname.
	 *
	 * @param {String} relative Pathname of the relative URL.
	 * @param {String} base Pathname of the base URL.
	 * @return {String} Resolved pathname.
	 * @api private
	 */
	function resolve(relative, base) {
	  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
	    , i = path.length
	    , last = path[i - 1]
	    , unshift = false
	    , up = 0;

	  while (i--) {
	    if (path[i] === '.') {
	      path.splice(i, 1);
	    } else if (path[i] === '..') {
	      path.splice(i, 1);
	      up++;
	    } else if (up) {
	      if (i === 0) unshift = true;
	      path.splice(i, 1);
	      up--;
	    }
	  }

	  if (unshift) path.unshift('');
	  if (last === '.' || last === '..') path.push('');

	  return path.join('/');
	}

	/**
	 * The actual URL instance. Instead of returning an object we've opted-in to
	 * create an actual constructor as it's much more memory efficient and
	 * faster and it pleases my OCD.
	 *
	 * @constructor
	 * @param {String} address URL we want to parse.
	 * @param {Object|String} location Location defaults for relative paths.
	 * @param {Boolean|Function} parser Parser for the query string.
	 * @api public
	 */
	function URL(address, location, parser) {
	  if (!(this instanceof URL)) {
	    return new URL(address, location, parser);
	  }

	  var relative, extracted, parse, instruction, index, key
	    , instructions = rules.slice()
	    , type = typeof location
	    , url = this
	    , i = 0;

	  //
	  // The following if statements allows this module two have compatibility with
	  // 2 different API:
	  //
	  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
	  //    where the boolean indicates that the query string should also be parsed.
	  //
	  // 2. The `URL` interface of the browser which accepts a URL, object as
	  //    arguments. The supplied object will be used as default values / fall-back
	  //    for relative paths.
	  //
	  if ('object' !== type && 'string' !== type) {
	    parser = location;
	    location = null;
	  }

	  if (parser && 'function' !== typeof parser) parser = qs.parse;

	  location = lolcation(location);

	  //
	  // Extract protocol information before running the instructions.
	  //
	  extracted = extractProtocol(address || '');
	  relative = !extracted.protocol && !extracted.slashes;
	  url.slashes = extracted.slashes || relative && location.slashes;
	  url.protocol = extracted.protocol || location.protocol || '';
	  address = extracted.rest;

	  //
	  // When the authority component is absent the URL starts with a path
	  // component.
	  //
	  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

	  for (; i < instructions.length; i++) {
	    instruction = instructions[i];
	    parse = instruction[0];
	    key = instruction[1];

	    if (parse !== parse) {
	      url[key] = address;
	    } else if ('string' === typeof parse) {
	      if (~(index = address.indexOf(parse))) {
	        if ('number' === typeof instruction[2]) {
	          url[key] = address.slice(0, index);
	          address = address.slice(index + instruction[2]);
	        } else {
	          url[key] = address.slice(index);
	          address = address.slice(0, index);
	        }
	      }
	    } else if (index = parse.exec(address)) {
	      url[key] = index[1];
	      address = address.slice(0, index.index);
	    }

	    url[key] = url[key] || (
	      relative && instruction[3] ? location[key] || '' : ''
	    );

	    //
	    // Hostname, host and protocol should be lowercased so they can be used to
	    // create a proper `origin`.
	    //
	    if (instruction[4]) url[key] = url[key].toLowerCase();
	  }

	  //
	  // Also parse the supplied query string in to an object. If we're supplied
	  // with a custom parser as function use that instead of the default build-in
	  // parser.
	  //
	  if (parser) url.query = parser(url.query);

	  //
	  // If the URL is relative, resolve the pathname against the base URL.
	  //
	  if (
	      relative
	    && location.slashes
	    && url.pathname.charAt(0) !== '/'
	    && (url.pathname !== '' || location.pathname !== '')
	  ) {
	    url.pathname = resolve(url.pathname, location.pathname);
	  }

	  //
	  // We should not add port numbers if they are already the default port number
	  // for a given protocol. As the host also contains the port number we're going
	  // override it with the hostname which contains no port number.
	  //
	  if (!required(url.port, url.protocol)) {
	    url.host = url.hostname;
	    url.port = '';
	  }

	  //
	  // Parse down the `auth` for the username and password.
	  //
	  url.username = url.password = '';
	  if (url.auth) {
	    instruction = url.auth.split(':');
	    url.username = instruction[0] || '';
	    url.password = instruction[1] || '';
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';

	  //
	  // The href is just the compiled result.
	  //
	  url.href = url.toString();
	}

	/**
	 * This is convenience method for changing properties in the URL instance to
	 * insure that they all propagate correctly.
	 *
	 * @param {String} part          Property we need to adjust.
	 * @param {Mixed} value          The newly assigned value.
	 * @param {Boolean|Function} fn  When setting the query, it will be the function
	 *                               used to parse the query.
	 *                               When setting the protocol, double slash will be
	 *                               removed from the final url if it is true.
	 * @returns {URL}
	 * @api public
	 */
	URL.prototype.set = function set(part, value, fn) {
	  var url = this;

	  switch (part) {
	    case 'query':
	      if ('string' === typeof value && value.length) {
	        value = (fn || qs.parse)(value);
	      }

	      url[part] = value;
	      break;

	    case 'port':
	      url[part] = value;

	      if (!required(value, url.protocol)) {
	        url.host = url.hostname;
	        url[part] = '';
	      } else if (value) {
	        url.host = url.hostname +':'+ value;
	      }

	      break;

	    case 'hostname':
	      url[part] = value;

	      if (url.port) value += ':'+ url.port;
	      url.host = value;
	      break;

	    case 'host':
	      url[part] = value;

	      if (/:\d+$/.test(value)) {
	        value = value.split(':');
	        url.port = value.pop();
	        url.hostname = value.join(':');
	      } else {
	        url.hostname = value;
	        url.port = '';
	      }

	      break;

	    case 'protocol':
	      url.protocol = value.toLowerCase();
	      url.slashes = !fn;
	      break;

	    case 'pathname':
	      url.pathname = value.length && value.charAt(0) !== '/' ? '/' + value : value;

	      break;

	    default:
	      url[part] = value;
	  }

	  for (var i = 0; i < rules.length; i++) {
	    var ins = rules[i];

	    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
	  }

	  url.origin = url.protocol && url.host && url.protocol !== 'file:'
	    ? url.protocol +'//'+ url.host
	    : 'null';

	  url.href = url.toString();

	  return url;
	};

	/**
	 * Transform the properties back in to a valid and full URL string.
	 *
	 * @param {Function} stringify Optional query stringify function.
	 * @returns {String}
	 * @api public
	 */
	URL.prototype.toString = function toString(stringify) {
	  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

	  var query
	    , url = this
	    , protocol = url.protocol;

	  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

	  var result = protocol + (url.slashes ? '//' : '');

	  if (url.username) {
	    result += url.username;
	    if (url.password) result += ':'+ url.password;
	    result += '@';
	  }

	  result += url.host + url.pathname;

	  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
	  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

	  if (url.hash) result += url.hash;

	  return result;
	};

	//
	// Expose the URL parser and some additional properties that might be useful for
	// others or testing.
	//
	URL.extractProtocol = extractProtocol;
	URL.location = lolcation;
	URL.qs = qs;

	module.exports = URL;


/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Check if we're required to add a port number.
	 *
	 * @see https://url.spec.whatwg.org/#default-port
	 * @param {Number|String} port Port number we need to check
	 * @param {String} protocol Protocol we need to check against.
	 * @returns {Boolean} Is it a default port for the given protocol
	 * @api private
	 */
	module.exports = function required(port, protocol) {
	  protocol = protocol.split(':')[0];
	  port = +port;

	  if (!port) return false;

	  switch (protocol) {
	    case 'http':
	    case 'ws':
	    return port !== 80;

	    case 'https':
	    case 'wss':
	    return port !== 443;

	    case 'ftp':
	    return port !== 21;

	    case 'gopher':
	    return port !== 70;

	    case 'file':
	    return false;
	  }

	  return port !== 0;
	};


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

	/**
	 * These properties should not be copied or inherited from. This is only needed
	 * for all non blob URL's as a blob URL does not include a hash, only the
	 * origin.
	 *
	 * @type {Object}
	 * @private
	 */
	var ignore = { hash: 1, query: 1 }
	  , URL;

	/**
	 * The location object differs when your code is loaded through a normal page,
	 * Worker or through a worker using a blob. And with the blobble begins the
	 * trouble as the location object will contain the URL of the blob, not the
	 * location of the page where our code is loaded in. The actual origin is
	 * encoded in the `pathname` so we can thankfully generate a good "default"
	 * location from it so we can generate proper relative URL's again.
	 *
	 * @param {Object|String} loc Optional default location object.
	 * @returns {Object} lolcation object.
	 * @api public
	 */
	module.exports = function lolcation(loc) {
	  loc = loc || global.location || {};
	  URL = URL || __webpack_require__(119);

	  var finaldestination = {}
	    , type = typeof loc
	    , key;

	  if ('blob:' === loc.protocol) {
	    finaldestination = new URL(unescape(loc.pathname), {});
	  } else if ('string' === type) {
	    finaldestination = new URL(loc, {});
	    for (key in ignore) delete finaldestination[key];
	  } else if ('object' === type) {
	    for (key in loc) {
	      if (key in ignore) continue;
	      finaldestination[key] = loc[key];
	    }

	    if (finaldestination.slashes === undefined) {
	      finaldestination.slashes = slashes.test(loc.href);
	    }
	  }

	  return finaldestination;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Simple query string parser.
	 *
	 * @param {String} query The query string that needs to be parsed.
	 * @returns {Object}
	 * @api public
	 */
	function querystring(query) {
	  var parser = /([^=?&]+)=?([^&]*)/g
	    , result = {}
	    , part;

	  //
	  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
	  // the lastIndex property so we can continue executing this loop until we've
	  // parsed all results.
	  //
	  for (;
	    part = parser.exec(query);
	    result[decodeURIComponent(part[1])] = decodeURIComponent(part[2])
	  );

	  return result;
	}

	/**
	 * Transform a query string to an object.
	 *
	 * @param {Object} obj Object that should be transformed.
	 * @param {String} prefix Optional prefix.
	 * @returns {String}
	 * @api public
	 */
	function querystringify(obj, prefix) {
	  prefix = prefix || '';

	  var pairs = [];

	  //
	  // Optionally prefix with a '?' if needed
	  //
	  if ('string' !== typeof prefix) prefix = '?';

	  for (var key in obj) {
	    if (has.call(obj, key)) {
	      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
	    }
	  }

	  return pairs.length ? prefix + pairs.join('&') : '';
	}

	//
	// Expose the module.
	//
	exports.stringify = querystringify;
	exports.parse = querystring;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _promise = __webpack_require__(124);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	The MIT License (MIT)
	Copyright (c) 2016
	Faruk Ates
	Paul Irish
	Alex Sexton
	Ryan Seddon
	Patrick Kettner
	Stu Cox
	Richard Herrera

	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
	of the Software, and to permit persons to whom the Software is furnished to do
	so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	*/

	var DEBUG = false;

	var RETRIES = 5;
	var WAITTIME = 200; //ms

	var _require = __webpack_require__(140);

	var OggVideo = _require.OggVideo;
	var Mp4Video = _require.Mp4Video;


	var VideoAutoplayTest = function VideoAutoplayTest() {
	  return new _promise2.default(function (resolve, reject) {
	    if (DEBUG === 'resolve') {
	      resolve(true);
	      return;
	    } else if (DEBUG === 'reject') {
	      reject('rejected for debugging');
	      return;
	    }

	    var elem = document.createElement('video');
	    var elemStyle = elem.style;

	    var currentTry = 0;
	    var timeout = void 0;

	    var testAutoplay = function testAutoplay(evt) {
	      currentTry++;
	      clearTimeout(timeout);

	      var canAutoPlay = evt && evt.type === 'playing' || elem.currentTime !== 0;

	      if (!canAutoPlay && currentTry < RETRIES) {
	        timeout = setTimeout(testAutoplay, WAITTIME);
	        return;
	      }

	      elem.removeEventListener('playing', testAutoplay, false);
	      if (canAutoPlay) {
	        resolve(canAutoPlay);
	      } else {
	        reject('no autoplay: browser does not support autoplay');
	      }
	      elem.parentNode.removeChild(elem);
	    };

	    // skip the test if the autoplay isn't supported on `video` elements
	    if (!('autoplay' in elem)) {
	      reject('no autoplay: browser does not support autoplay attribute');
	      return;
	    }

	    elemStyle.cssText = 'position: absolute; height: 0; width: 0; overflow: hidden; visibility: hidden; z-index: -100';

	    try {
	      if (elem.canPlayType('video/ogg; codecs="theora"').match(/^(probably)|(maybe)/)) {
	        elem.src = OggVideo;
	      } else if (elem.canPlayType('video/mp4; codecs="avc1.42E01E"').match(/^(probably)|(maybe)/)) {
	        elem.src = Mp4Video;
	      } else {
	        reject('no autoplay: element does not support mp4 or ogg format');
	        return;
	      }
	    } catch (err) {
	      reject('no autoplay: ' + err);
	      return;
	    }

	    elem.setAttribute('autoplay', '');
	    elem.setAttribute('muted', 'true');
	    elem.style.cssText = 'display:none';
	    document.body.appendChild(elem);
	    // wait for the next tick to add the listener, otherwise the element may
	    // not have time to play in high load situations (e.g. the test suite)
	    setTimeout(function () {
	      elem.addEventListener('playing', testAutoplay, false);
	      timeout = setTimeout(testAutoplay, WAITTIME);
	    }, 0);
	  });
	};

	module.exports = VideoAutoplayTest;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(104);
	__webpack_require__(42);
	__webpack_require__(86);
	__webpack_require__(126);
	module.exports = __webpack_require__(50).Promise;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(47)
	  , global             = __webpack_require__(49)
	  , ctx                = __webpack_require__(51)
	  , classof            = __webpack_require__(127)
	  , $export            = __webpack_require__(48)
	  , isObject           = __webpack_require__(56)
	  , aFunction          = __webpack_require__(52)
	  , anInstance         = __webpack_require__(128)
	  , forOf              = __webpack_require__(129)
	  , speciesConstructor = __webpack_require__(133)
	  , task               = __webpack_require__(134).set
	  , microtask          = __webpack_require__(136)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(83)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(137)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(82)($Promise, PROMISE);
	__webpack_require__(138)(PROMISE);
	Wrapper = __webpack_require__(50)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(139)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(73)
	  , TAG = __webpack_require__(83)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(51)
	  , call        = __webpack_require__(130)
	  , isArrayIter = __webpack_require__(131)
	  , anObject    = __webpack_require__(55)
	  , toLength    = __webpack_require__(75)
	  , getIterFn   = __webpack_require__(132)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(55);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(65)
	  , ITERATOR   = __webpack_require__(83)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(127)
	  , ITERATOR  = __webpack_require__(83)('iterator')
	  , Iterators = __webpack_require__(65);
	module.exports = __webpack_require__(50).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(55)
	  , aFunction = __webpack_require__(52)
	  , SPECIES   = __webpack_require__(83)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(51)
	  , invoke             = __webpack_require__(135)
	  , html               = __webpack_require__(81)
	  , cel                = __webpack_require__(60)
	  , global             = __webpack_require__(49)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(73)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(49)
	  , macrotask = __webpack_require__(134).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(73)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(53);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(49)
	  , core        = __webpack_require__(50)
	  , dP          = __webpack_require__(54)
	  , DESCRIPTORS = __webpack_require__(58)
	  , SPECIES     = __webpack_require__(83)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(83)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 140 */
/***/ function(module, exports) {

	'use strict';

	var OggVideo = 'data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A';
	var Mp4Video = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==';

	module.exports = {
	  OggVideo: OggVideo,
	  Mp4Video: Mp4Video
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _freeze = __webpack_require__(142);

	var _freeze2 = _interopRequireDefault(_freeze);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var filterOptions = ['none', 'blur', 'brightness', 'contrast', 'invert', 'opacity', 'saturate', 'sepia', 'drop-shadow', 'grayscale', 'hue-rotate'];

	(0, _freeze2.default)(filterOptions);

	/**
	 * Each filter style needs to adjust the strength value (1 - 100) by a `modifier`
	 * function and a unit, as appropriate. The `modifier` is purely subjective.
	 */
	var filterProperties = {
	  blur: {
	    modifier: function modifier(value) {
	      return value * 0.3;
	    },
	    unit: 'px'
	  },
	  brightness: {
	    modifier: function modifier(value) {
	      return value * 0.009 + 0.1;
	    },
	    unit: ''
	  },
	  contrast: {
	    modifier: function modifier(value) {
	      return value * 0.4 + 80;
	    },
	    unit: '%'
	  },
	  grayscale: {
	    modifier: function modifier(value) {
	      return value;
	    },
	    unit: '%'
	  },
	  'hue-rotate': {
	    modifier: function modifier(value) {
	      return value * 3.6;
	    },
	    unit: 'deg'
	  },
	  invert: {
	    modifier: function modifier(value) {
	      return 1;
	    },
	    unit: ''
	  },
	  opacity: {
	    modifier: function modifier(value) {
	      return value;
	    },
	    unit: '%'
	  },
	  saturate: {
	    modifier: function modifier(value) {
	      return value * 2;
	    },
	    unit: '%'
	  },
	  sepia: {
	    modifier: function modifier(value) {
	      return value;
	    },
	    unit: '%'
	  }
	};

	(0, _freeze2.default)(filterProperties);

	module.exports = {
	  filterOptions: filterOptions,
	  filterProperties: filterProperties
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(144);
	module.exports = __webpack_require__(50).Object.freeze;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(56)
	  , meta     = __webpack_require__(94).onFreeze;

	__webpack_require__(145)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(48)
	  , core    = __webpack_require__(50)
	  , fails   = __webpack_require__(59);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';

	var getPropsFromNode = function getPropsFromNode(node) {
	  var props = {
	    container: node
	  };

	  if (node.getAttribute('data-config-url')) {
	    props.url = node.getAttribute('data-config-url');
	  }

	  if (node.getAttribute('data-config-playback-speed')) {
	    props.playbackSpeed = node.getAttribute('data-config-playback-speed');
	  }

	  if (node.getAttribute('data-config-filter')) {
	    props.filter = node.getAttribute('data-config-filter');
	  }

	  if (node.getAttribute('data-config-filter-strength')) {
	    props.filterStrength = node.getAttribute('data-config-filter-strength');
	  }

	  return props;
	};

	module.exports = getPropsFromNode;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ImageLoader = __webpack_require__(148);

	var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

	var _Lifecycle = __webpack_require__(149);

	var _Lifecycle2 = _interopRequireDefault(_Lifecycle);

	var _Tweak = __webpack_require__(150);

	var _Tweak2 = _interopRequireDefault(_Tweak);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The public JavaScript API for Squarespace template developers.
	 * @namespace SQS
	 */
	var SQS = {
	  ImageLoader: _ImageLoader2.default,
	  Lifecycle: _Lifecycle2.default,
	  Tweak: _Tweak2.default
	};

	exports.default = SQS;
	module.exports = exports['default'];

/***/ },
/* 148 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * ​Squarespace comes with a number of built-in facilities for managing images
	 * that are uploaded to our system. After uploading an image into a collection,
	 * Squarespace automatically creates multiple copies of the image with different 
	 * sizes. Our ImageLoader will then help render images properly when they are
	 * presented on a page, even on retina displays.
	 *
	 * ImageLoader can also be used to fit or fill an image inside ​a parent
	 * container, where it automatically determines which image size to use
	 * depending on the current dimensions of the container.
	 *
	 * WARNING:
	 * Currently, ImageLoader is present on all Squarespace sites under the global
	 * namespace ImageLoader, but this is an unsupported API and we recommend
	 * accessing this functionality through squarespace-core.
	 *
	 * @namespace ImageLoader
	 */
	var ImageLoader = {

	  /**
	   * Using the global ImageLoader namespace, calls ImageLoader.load on the
	   * given node with the given config options.
	   *
	   * @method load
	   * @param  {HTMLElement} img    Image node to be loaded
	   * @param  {Object} config      Config object
	   * @return {Boolean}            True if the image was loaded, false otherwise
	   */
	  load: function load(img, config) {
	    return window.ImageLoader.load(img, config);
	  }
	};

	/**
	 * @exports {Object} ImageLoader
	 */
	exports.default = ImageLoader;
	module.exports = exports["default"];

/***/ },
/* 149 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Squarespace provides default functionality for some content that users add
	 * in the CMS.
	 *
	 * If you are building a Developer Platform site that loads Squarespace content
	 * through an XHR or some other kind of AJAX, you can use the Lifecycle methods
	 * provided here to initialize and/or destroy this functionality.
	 *
	 * WARNING:
	 * The functionality called by Lifecycle is available on the global namespace
	 * window.Squarespace, but this is an unsupported API and it is highly
	 * recommended that you access it through squarespace-core.
	 *
	 * @namespace Lifecycle
	 */
	var Lifecycle = {

	  /**
	   * Squarespace.afterBodyLoad() trigger loads scripts and calls onInitialize,
	   * which individual modules' init functions are bound to. This should be
	   * called after new HTML content containing Squarespace default functionality
	   * is added to a page (for example, after AJAX loading a new page).
	   *
	   * @method init
	   */
	  init: function init() {
	    window.Squarespace.AFTER_BODY_LOADED = false;
	    window.Squarespace.afterBodyLoad();
	  },


	  /**
	   * Squarespace.globalDestroy calls onDestroy, triggering each module's
	   * destructor. This should be called prior to loading in new HTML content
	   * containing Squarespace default functionality.
	   *
	   * @method  destroy
	   */
	  destroy: function destroy() {
	    window.Squarespace.globalDestroy(Y);
	  }
	};

	/**
	 * @exports {Object} Lifecycle
	 */
	exports.default = Lifecycle;
	module.exports = exports["default"];

/***/ },
/* 150 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @const {Object} tweaksToWatch
	 */
	var tweaksToWatch = {
	  all: {
	    callbacks: []
	  }
	};

	/**
	 * Tweaks allow a developer to isolate specific elements of the design and
	 * present options to the user in an easy-to-use interface. Tweaks are surfaced
	 * in the Squarespace interface through Style Editor (e.g.
	 * yoursite.squarespace.com/config/design/style). Using tweaks, a user can make
	 * presentational changes to their website without having to know or edit CSS code.
	 *
	 * Tweaks are typically used by the developers through LESS variables, mixins,
	 * and class names added to the <body> element.
	 * 
	 * Sometimes, a developer may find it necessary to access the value of a tweak
	 * through Javascript, or to watch for changes in that tweak and update the DOM
	 * accordingly. The Tweak module of squarespace-core is meant to provide an
	 * official interface for doing so.
	 *
	 * @namespace Tweak
	 */
	var Tweak = {

	  /**
	   * Gets the value of one of the tweaks given its name.
	   *
	   * @method getValue
	   * @param {String} name      Name of the tweak
	   * @returns {String}         The value of the tweak
	   */
	  getValue: function getValue(name) {
	    if (!name || typeof name !== 'string') {
	      console.error('squarespace-core: Invalid tweak name ' + name);
	      return null;
	    }

	    return Y.Squarespace.Template.getTweakValue(name);
	  },


	  /**
	   * Listen for changes on a tweak item. If one parameter is provided, the
	   * callback will be executed every time any tweak changes. If two parameters
	   * are provided and the first parameter is a String, the callback will be
	   * executed only when that particular tweak changes. If two parameters are
	   * provided and the first parameter is an Array of strings, the callback will
	   * be executed any time one of those tweaks changes.
	   *
	   * @method watch
	   * @param {String}          Optional: Name of the tweak
	   * @param {Array}           Optional: Array with multiple tweak names
	   * @param {Function}        Callback to call when watcher is triggered
	   */
	  watch: function watch() {
	    var _arguments = arguments;

	    if (arguments.length === 0) {
	      console.error('squarespace-core: ' + 'Tweak.watch must be called with at least one parameter');
	      return;
	    }

	    if (arguments.length === 1) {
	      // Only callback passed in, no tweak name string or tweaks array passed.
	      // Run callback for all tweaks.
	      if (typeof arguments[0] === 'function') {
	        tweaksToWatch.all.callbacks.push(arguments[0]);
	      }
	      return;
	    }

	    if (typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {
	      // Specific tweak name passed in. Run callback when that tweak is changed.
	      var tweakName = arguments[0];
	      if (!tweaksToWatch[tweakName]) {
	        tweaksToWatch[tweakName] = {
	          callbacks: []
	        };
	      }
	      tweaksToWatch[tweakName].callbacks.push(arguments[1]);
	    } else if (arguments[0].constructor === Array && typeof arguments[1] === 'function') {
	      // Multiple tweak names passed in as array. Run callback when any one of
	      // those tweaks are changed.
	      arguments[0].forEach(function (tweakName) {
	        if (!tweaksToWatch[tweakName]) {
	          tweaksToWatch[tweakName] = {
	            callbacks: []
	          };
	        }
	        tweaksToWatch[tweakName].callbacks.push(_arguments[1]);
	      });
	    }
	  }
	};

	if (window.Y.Global) {
	  // If Y.Global is present on the page, set up the tweak event listener.
	  window.Y.Global.on('tweak:change', function (e) {
	    var tweakName = e.getName();
	    var callbackSignature = {
	      name: tweakName,
	      value: e.config && e.config.value || e.value
	    };

	    if (tweaksToWatch[tweakName]) {
	      tweaksToWatch[tweakName].callbacks.forEach(function (callback) {
	        try {
	          callback(callbackSignature);
	        } catch (err) {
	          console.error(err);
	        }
	      });
	    }

	    if (tweaksToWatch.all.callbacks.length > 0) {
	      tweaksToWatch.all.callbacks.forEach(function (callback) {
	        try {
	          callback(callbackSignature);
	        } catch (err) {
	          console.error(err);
	        }
	      });
	    }
	  });
	}

	/**
	 * @exports {Object} Tweak
	 */
	exports.default = Tweak;
	module.exports = exports['default'];

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _list = __webpack_require__(152);

	var _list2 = _interopRequireDefault(_list);

	var _item = __webpack_require__(157);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { list: _list2.default, item: _item2.default };
	module.exports = exports['default'];

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _core = __webpack_require__(153);

	var _core2 = _interopRequireDefault(_core);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function BlogList(element) {
	  var sync = function sync() {
	    if (_core2.default.Tweak.getValue('tweak-blog-list-item-image-show') !== 'true') {
	      return;
	    }

	    var images = Array.prototype.slice.call(element.querySelectorAll('.BlogList-item-image img'));
	    var isStacked = _core2.default.Tweak.getValue('tweak-blog-list-style').toLowerCase() === 'stacked';
	    var isAuto = _core2.default.Tweak.getValue('tweak-blog-list-item-image-aspect-ratio-stacked').toLowerCase() === 'auto';
	    var mode = isStacked && isAuto ? null : 'fill';

	    // Load images
	    images.forEach(function (image) {
	      image.style.position = '';
	      image.style.top = '';
	      image.style.right = '';
	      image.style.bottom = '';
	      image.style.left = '';
	      image.style.width = '';
	      image.style.height = '';

	      _core2.default.ImageLoader.load(image, {
	        load: true,
	        mode: mode
	      });
	    });
	  };

	  var destroy = function destroy() {
	    window.removeEventListener('resize', sync);
	  };

	  sync();
	  window.addEventListener('resize', sync);
	  _core2.default.Tweak.watch(['tweak-blog-list-style', 'tweak-blog-list-columns', 'tweak-blog-list-spacing', 'tweak-blog-list-item-image-aspect-ratio-grid', 'tweak-blog-list-item-image-aspect-ratio-stacked', 'tweak-blog-list-item-image-show', 'tweak-blog-list-item-image-width'], sync);

	  return { sync: sync, destroy: destroy };
	}

	exports.default = BlogList;
	module.exports = exports['default'];

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ImageLoader = __webpack_require__(154);

	var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

	var _Lifecycle = __webpack_require__(155);

	var _Lifecycle2 = _interopRequireDefault(_Lifecycle);

	var _Tweak = __webpack_require__(156);

	var _Tweak2 = _interopRequireDefault(_Tweak);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The public JavaScript API for Squarespace template developers.
	 * @namespace SQS
	 */
	var SQS = {
	  ImageLoader: _ImageLoader2.default,
	  Lifecycle: _Lifecycle2.default,
	  Tweak: _Tweak2.default
	};

	exports.default = SQS;
	module.exports = exports['default'];

/***/ },
/* 154 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * ​Squarespace comes with a number of built-in facilities for managing images
	 * that are uploaded to our system. After uploading an image into a collection,
	 * Squarespace automatically creates multiple copies of the image with different 
	 * sizes. Our ImageLoader will then help render images properly when they are
	 * presented on a page, even on retina displays.
	 *
	 * ImageLoader can also be used to fit or fill an image inside ​a parent
	 * container, where it automatically determines which image size to use
	 * depending on the current dimensions of the container.
	 *
	 * WARNING:
	 * Currently, ImageLoader is present on all Squarespace sites under the global
	 * namespace ImageLoader, but this is an unsupported API and we recommend
	 * accessing this functionality through squarespace-core.
	 *
	 * @namespace ImageLoader
	 */
	var ImageLoader = {

	  /**
	   * Using the global ImageLoader namespace, calls ImageLoader.load on the
	   * given node with the given config options.
	   *
	   * @method load
	   * @param  {HTMLElement} img    Image node to be loaded
	   * @param  {Object} config      Config object
	   * @return {Boolean}            True if the image was loaded, false otherwise
	   */
	  load: function load(img, config) {
	    return window.ImageLoader.load(img, config);
	  }
	};

	/**
	 * @exports {Object} ImageLoader
	 */
	exports.default = ImageLoader;
	module.exports = exports["default"];

/***/ },
/* 155 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Squarespace provides default functionality for some content that users add
	 * in the CMS.
	 *
	 * If you are building a Developer Platform site that loads Squarespace content
	 * through an XHR or some other kind of AJAX, you can use the Lifecycle methods
	 * provided here to initialize and/or destroy this functionality.
	 *
	 * WARNING:
	 * The functionality called by Lifecycle is available on the global namespace
	 * window.Squarespace, but this is an unsupported API and it is highly
	 * recommended that you access it through squarespace-core.
	 *
	 * @namespace Lifecycle
	 */
	var Lifecycle = {

	  /**
	   * Squarespace.afterBodyLoad() trigger loads scripts and calls onInitialize,
	   * which individual modules' init functions are bound to. This should be
	   * called after new HTML content containing Squarespace default functionality
	   * is added to a page (for example, after AJAX loading a new page).
	   *
	   * @method init
	   */
	  init: function init() {
	    window.Squarespace.AFTER_BODY_LOADED = false;
	    window.Squarespace.afterBodyLoad();
	  },


	  /**
	   * Squarespace.globalDestroy calls onDestroy, triggering each module's
	   * destructor. This should be called prior to loading in new HTML content
	   * containing Squarespace default functionality.
	   *
	   * @method  destroy
	   */
	  destroy: function destroy() {
	    window.Squarespace.globalDestroy(Y);
	  }
	};

	/**
	 * @exports {Object} Lifecycle
	 */
	exports.default = Lifecycle;
	module.exports = exports["default"];

/***/ },
/* 156 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @const {Object} tweaksToWatch
	 */
	var tweaksToWatch = {
	  all: {
	    callbacks: []
	  }
	};

	/**
	 * Tweaks allow a developer to isolate specific elements of the design and
	 * present options to the user in an easy-to-use interface. Tweaks are surfaced
	 * in the Squarespace interface through Style Editor (e.g.
	 * yoursite.squarespace.com/config/design/style). Using tweaks, a user can make
	 * presentational changes to their website without having to know or edit CSS code.
	 *
	 * Tweaks are typically used by the developers through LESS variables, mixins,
	 * and class names added to the <body> element.
	 * 
	 * Sometimes, a developer may find it necessary to access the value of a tweak
	 * through Javascript, or to watch for changes in that tweak and update the DOM
	 * accordingly. The Tweak module of squarespace-core is meant to provide an
	 * official interface for doing so.
	 *
	 * @namespace Tweak
	 */
	var Tweak = {

	  /**
	   * Gets the value of one of the tweaks given its name.
	   *
	   * @method getValue
	   * @param {String} name      Name of the tweak
	   * @returns {String}         The value of the tweak
	   */
	  getValue: function getValue(name) {
	    if (!name || typeof name !== 'string') {
	      console.error('squarespace-core: Invalid tweak name ' + name);
	      return null;
	    }

	    return Y.Squarespace.Template.getTweakValue(name);
	  },


	  /**
	   * Listen for changes on a tweak item. If one parameter is provided, the
	   * callback will be executed every time any tweak changes. If two parameters
	   * are provided and the first parameter is a String, the callback will be
	   * executed only when that particular tweak changes. If two parameters are
	   * provided and the first parameter is an Array of strings, the callback will
	   * be executed any time one of those tweaks changes.
	   *
	   * @method watch
	   * @param {String}          Optional: Name of the tweak
	   * @param {Array}           Optional: Array with multiple tweak names
	   * @param {Function}        Callback to call when watcher is triggered
	   */
	  watch: function watch() {
	    var _arguments = arguments;

	    if (arguments.length === 0) {
	      console.error('squarespace-core: ' + 'Tweak.watch must be called with at least one parameter');
	      return;
	    }

	    if (arguments.length === 1) {
	      // Only callback passed in, no tweak name string or tweaks array passed.
	      // Run callback for all tweaks.
	      if (typeof arguments[0] === 'function') {
	        tweaksToWatch.all.callbacks.push(arguments[0]);
	      }
	      return;
	    }

	    if (typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {
	      // Specific tweak name passed in. Run callback when that tweak is changed.
	      var tweakName = arguments[0];
	      if (!tweaksToWatch[tweakName]) {
	        tweaksToWatch[tweakName] = {
	          callbacks: []
	        };
	      }
	      tweaksToWatch[tweakName].callbacks.push(arguments[1]);
	    } else if (arguments[0].constructor === Array && typeof arguments[1] === 'function') {
	      // Multiple tweak names passed in as array. Run callback when any one of
	      // those tweaks are changed.
	      arguments[0].forEach(function (tweakName) {
	        if (!tweaksToWatch[tweakName]) {
	          tweaksToWatch[tweakName] = {
	            callbacks: []
	          };
	        }
	        tweaksToWatch[tweakName].callbacks.push(_arguments[1]);
	      });
	    }
	  }
	};

	if (window.Y.Global) {
	  // If Y.Global is present on the page, set up the tweak event listener.
	  window.Y.Global.on('tweak:change', function (e) {
	    var tweakName = e.getName();
	    var callbackSignature = {
	      name: tweakName,
	      value: e.config && e.config.value || e.value
	    };

	    if (tweaksToWatch[tweakName]) {
	      tweaksToWatch[tweakName].callbacks.forEach(function (callback) {
	        try {
	          callback(callbackSignature);
	        } catch (err) {
	          console.error(err);
	        }
	      });
	    }

	    if (tweaksToWatch.all.callbacks.length > 0) {
	      tweaksToWatch.all.callbacks.forEach(function (callback) {
	        try {
	          callback(callbackSignature);
	        } catch (err) {
	          console.error(err);
	        }
	      });
	    }
	  });
	}

	/**
	 * @exports {Object} Tweak
	 */
	exports.default = Tweak;
	module.exports = exports['default'];

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _shareButtons = __webpack_require__(158);

	var _shareButtons2 = _interopRequireDefault(_shareButtons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function BlogItem(element) {
	  var rootNode = element.querySelector('.ShareButtons');
	  var instance = (0, _shareButtons2.default)(rootNode);
	  var destroy = function destroy() {
	    instance.destroy();
	  };
	  return { destroy: destroy };
	}

	exports.default = BlogItem;
	module.exports = exports['default'];

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ShareButtons = undefined;
	exports.default = ShareButtonsController;

	var _ShareButtons = __webpack_require__(159);

	var _ShareButtons2 = _interopRequireDefault(_ShareButtons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SHARE_CLASSNAME = 'ShareButtons';
	var ID_ATTR = 'data-item-identifier';

	function ShareButtonsController(element) {
	  var elementIsRootNode = element.classList.contains(SHARE_CLASSNAME) && element.getAttribute(ID_ATTR);
	  var rootNode = elementIsRootNode ? element : element.querySelector('.' + SHARE_CLASSNAME + '[' + ID_ATTR + ']');
	  if (!rootNode) {
	    console.error('Element provided to ShareButtonsController is not and ' + 'does not contain ShareButtons rootNode.');
	    return null;
	  }

	  var shareButtons = new _ShareButtons2.default(rootNode);
	  var destroy = function destroy() {
	    shareButtons.destroy();
	  };
	  shareButtons.init();
	  return { destroy: destroy };
	}

	exports.ShareButtons = _ShareButtons2.default;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _JSONPInfo = __webpack_require__(160);

	var _JSONPInfo2 = _interopRequireDefault(_JSONPInfo);

	var _JSONPUtils = __webpack_require__(161);

	var _JSONPUtils2 = _interopRequireDefault(_JSONPUtils);

	var _cookieCutter = __webpack_require__(162);

	var _cookieCutter2 = _interopRequireDefault(_cookieCutter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A plug-and-play social share button set for Squarespace templates. Includes
	 * markup, a number of different styles to choose from, and Javascript to
	 * bootstrap the share functionality.
	 */
	var ShareButtons = function () {

	  /**
	   * @constructor
	   * @param  {Object} container  Root node for class
	   */
	  function ShareButtons(container) {
	    _classCallCheck(this, ShareButtons);

	    this.container = container;

	    if (!this.container instanceof HTMLElement) {
	      throw new TypeError('ShareButtons container is not an HTMLElement');
	    }

	    this.id = container.getAttribute('data-item-identifier');

	    if (!this.id) {
	      throw new Error('data-item-identifier not found on ShareButtons container');
	    }

	    this.likeButton = container.querySelector('.ShareButtons-item--like');
	  }

	  /**
	   * Initialize counts for share buttons, like button, and bind click event
	   * handler.
	   *
	   * @method init
	   * @public
	   */


	  _createClass(ShareButtons, [{
	    key: 'init',
	    value: function init() {
	      _JSONPUtils2.default.assignCallbacks();
	      _JSONPInfo2.default.serviceNames.forEach(function (serviceName) {
	        _JSONPUtils2.default.getCount(serviceName);
	      }, this);

	      if (this.likeButton) {
	        this.syncLikesToDOM();
	        if (this.isInLocalStorage(this.likeButton)) {
	          this.likeButton.classList.add('is-active');
	        }
	      }

	      this.boundHandleClick = this.handleClick.bind(this);
	      this.container.addEventListener('click', this.boundHandleClick);
	    }

	    /**
	     * Remove event listener on click.
	     *
	     * @public
	     * @method destroy
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.container.removeEventListener('click', this.boundHandleClick);
	    }

	    /**
	     * Click handler: routes a share button click to appropriate functionality,
	     * whether like or share.
	     *
	     * @private
	     * @method handleClick
	     * @param {Object} e    eventObject from click
	     */

	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      e.preventDefault();
	      var button = e.target;
	      while (button.parentElement && button !== this.container && !button.classList.contains('ShareButtons-item')) {
	        button = button.parentElement;
	      }
	      if (!button.getAttribute('data-service')) {
	        return;
	      }
	      if (button === this.likeButton) {
	        this.handleLike();
	      } else {
	        this.handleShare(button);
	      }
	    }

	    /**
	     * Like button click handler that kicks off a like request to the like
	     * endpoint. Handler syncs like if successful, and adds to localStorage.
	     *
	     * @private
	     * @method handleLike
	     */

	  }, {
	    key: 'handleLike',
	    value: function handleLike() {
	      var _this = this;

	      // First, check if already active (has been liked)
	      if (this.likeButton.classList.contains('is-active')) {
	        return;
	      }

	      // Generate like API link with crumb
	      var url = [window.location.origin, '/api/content-items/', this.id, '/sentiment/like', '?crumb=' + _cookieCutter2.default.get('crumb')].join('');

	      // AJAX
	      var likeRequest = new XMLHttpRequest();
	      likeRequest.onreadystatechange = function (e) {
	        if (e.target.readyState !== XMLHttpRequest.DONE || e.target.status !== 200) {
	          return;
	        }
	        try {
	          var response = JSON.parse(e.target.responseText);
	          // NOTE: "commited" key misspelled in response
	          if (response.commited === true) {
	            _this.incrementLike();
	            _this.addToLocalStorage(_this.likeButton);
	          }
	        } catch (err) {
	          console.error('ERROR LIKING:', err);
	        }
	      };
	      likeRequest.open('POST', url, true);
	      likeRequest.send();
	    }

	    /**
	     * Updates a button's like count.
	     *
	     * @private
	     * @method incrementLike
	     */

	  }, {
	    key: 'incrementLike',
	    value: function incrementLike() {
	      var count = parseInt(this.likeButton.getAttribute('data-like-count'), 10) + 1;
	      this.likeButton.classList.add('is-active');
	      this.syncLikesToDOM(count);
	    }

	    /**
	     * Sync like count to the proper node in the DOM.
	     *
	     * @private
	     * @method syncLikes
	     * @param {Number} count  Current count to sync to DOM
	     */

	  }, {
	    key: 'syncLikesToDOM',
	    value: function syncLikesToDOM(count) {
	      var label = this.likeButton.querySelector('.ShareButtons-item-label');
	      if (label) {
	        count = count || parseInt(this.likeButton.getAttribute('data-like-count'), 10);
	        label.innerHTML = count === 1 ? count + ' Like' : count + ' Likes';
	        this.likeButton.setAttribute('data-like-count', count);
	      }
	    }

	    /**
	     * Click handler for share. Opens a popup window with share link.
	     *
	     * @private
	     * @method handleShare
	     * @param {Object} button  Button DOM node
	     */

	  }, {
	    key: 'handleShare',
	    value: function handleShare(button) {
	      window.open(button.getAttribute('href'), 'Share', 'width=420,height=230,dialog');

	      // We have no immediate way of determining whether the share was actually
	      // registered, so we assume it was and increment the count temporarily.
	      var countNode = button.querySelector('.ShareButtons-item-count');
	      if (countNode) {
	        countNode.innerHTML = parseInt(countNode.innerHTML, 10) + 1;
	      }
	    }

	    /**
	     * Given a button, returns the corresponding localStorage key for that button
	     * type.
	     *
	     * @private
	     * @method getLocalStorageKey
	     * @param {Object} button  Button DOM node
	     */

	  }, {
	    key: 'getLocalStorageKey',
	    value: function getLocalStorageKey(button) {
	      var serviceName = button.getAttribute('data-service');
	      if (button === this.likeButton) {
	        return 'squarespace-likes';
	      } else if (serviceName) {
	        return 'squarespace-shares-' + serviceName;
	      }
	      return null;
	    }

	    /**
	     * Given a button, checks to see if localStorage indicates that the button has
	     * been clicked in the past by this user.
	     *
	     * @private
	     * @method isInLocalStorage
	     * @param {Object} button  Button DOM node
	     * @return {Boolean}       Whether the button has been clicked
	     */

	  }, {
	    key: 'isInLocalStorage',
	    value: function isInLocalStorage(button) {
	      if (!localStorage || !JSON) {
	        return false;
	      }
	      var localStorageKey = this.getLocalStorageKey(button);
	      var previousInteractions = JSON.parse(localStorage.getItem(localStorageKey));
	      return previousInteractions && previousInteractions[this.id] === true;
	    }

	    /*
	     * Given a button, adds info to localStorage indicating that the interaction
	     * for that button has occurred.
	     *
	     * @private
	     * @method addToLocalStorage
	     * @param {Object} button  Button DOM node
	     */

	  }, {
	    key: 'addToLocalStorage',
	    value: function addToLocalStorage(button) {
	      if (!localStorage || !JSON) {
	        return;
	      }
	      var localStorageKey = this.getLocalStorageKey(button);
	      if (!localStorageKey) {
	        console.error('ShareButtons: Invalid localStorage key: ' + localStorageKey);
	        return;
	      }
	      var previousInteractions = JSON.parse(localStorage.getItem(localStorageKey)) || {};
	      previousInteractions[this.id] = true;
	      localStorage.setItem(localStorageKey, JSON.stringify(previousInteractions));
	    }
	  }]);

	  return ShareButtons;
	}();

	exports.default = ShareButtons;
	module.exports = exports['default'];

/***/ },
/* 160 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Store JSONP info in var, so it can be
	// accessed by both the callbacks on the
	// global namespace and by the ShareButtons class.

	var JSONPInfo = {
	  callbackNamespace: 'SquarespaceShareButtonCounts' + Date.now(),
	  serviceNames: ['facebook', 'linkedin', 'pinterest'],
	  serviceMap: {
	    facebook: {
	      countKey: 'shares',
	      URLKey: 'id',
	      APIBaseURL: 'https://graph.facebook.com/?id='
	    },
	    linkedin: {
	      countKey: 'count',
	      URLKey: 'url',
	      APIBaseURL: 'https://www.linkedin.com/countserv/count/share?url='
	    },
	    pinterest: {
	      countKey: 'count',
	      URLKey: 'url',
	      APIBaseURL: 'https://widgets.pinterest.com/v1/urls/count.json?source=6&url='
	    }
	  }
	};

	exports.default = JSONPInfo;
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var JSONPInfo = __webpack_require__(160);

	/**
	 * JSONP callback. Given a response and service name, update the service's count
	 * DOM node with the proper count.
	 *
	 * @function updateCount
	 * @param {Object} response     Response object from JSONP function call
	 * @param {String} serviceName  Name of service, as it appears in JSONPInfo
	 */

	function updateCount(response, serviceName) {
	  // Since this function doesn't know its caller, but knows the URL that is liked,
	  // we can find the right node by getting the path from the URL and using an
	  // attribute selector with attr [data-item-path].
	  try {
	    (function () {
	      // Get url being shared from response
	      var url = response[JSONPInfo.serviceMap[serviceName].URLKey];

	      // Get the pathname from the url
	      var dummyEl = document.createElement('a');
	      dummyEl.href = url;
	      var path = dummyEl.pathname.replace(/^\/|\/$/g, ''); // remove forward and trailing slash, if any
	      dummyEl.remove();

	      // Construct selector with path, finding proper .Share container using
	      // [data-item-path], and proper service using [data-service].
	      var selector = '.Share[data-item-path="' + path + '"] .Share-buttons-item[data-service="' + serviceName + '"]';

	      // Get count from response
	      var count = response[JSONPInfo.serviceMap[serviceName].countKey] || 0;

	      // Update DOM for all instances of correct node
	      var buttons = Array.prototype.slice.call(document.querySelectorAll(selector));
	      buttons.forEach(function (button) {
	        button.querySelector('.Share-buttons-item-count').innerHTML = count;
	      });
	    })();
	  } catch (error) {
	    console.error(error);
	  }
	}

	function assignCallbacks() {
	  // Assign updateCount function calls to global namespace, so the &callback=
	  // section of the query string in JSONP can refer to them.

	  window[JSONPInfo.callbackNamespace] = JSONPInfo.serviceNames.reduce(function (acc, serviceName) {
	    acc[serviceName] = function (response) {
	      updateCount(response, serviceName);
	    };
	    return acc;
	  }, {});
	}

	/**
	 * Grabs the updated count from a given share service's end point via jsonp.
	 * Injects a script node which fires the jsonp callback (and then immediately
	 * removes the node from the DOM).
	 *
	 * @method injectScriptNode
	 */
	function getCount(serviceName) {
	  var scriptNode = document.createElement('script');

	  scriptNode.src = [JSONPInfo.serviceMap[serviceName].APIBaseURL, encodeURIComponent(window.location.href), '&callback=', JSONPInfo.callbackNamespace, '.', serviceName].join('');

	  document.body.appendChild(scriptNode);
	  document.body.removeChild(scriptNode);
	}

	exports.default = {
	  assignCallbacks: assignCallbacks,
	  getCount: getCount
	};
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports) {

	var exports = module.exports = function (doc) {
	    if (!doc) doc = {};
	    if (typeof doc === 'string') doc = { cookie: doc };
	    if (doc.cookie === undefined) doc.cookie = '';
	    
	    var self = {};
	    self.get = function (key) {
	        var splat = doc.cookie.split(/;\s*/);
	        for (var i = 0; i < splat.length; i++) {
	            var ps = splat[i].split('=');
	            var k = unescape(ps[0]);
	            if (k === key) return unescape(ps[1]);
	        }
	        return undefined;
	    };
	    
	    self.set = function (key, value, opts) {
	        if (!opts) opts = {};
	        var s = escape(key) + '=' + escape(value);
	        if (opts.expires) s += '; expires=' + opts.expires;
	        if (opts.path) s += '; path=' + escape(opts.path);
	        if (opts.domain) s += '; domain=' + escape(opts.domain);
	        if (opts.secure) s += '; secure';
	        doc.cookie = s;
	        return s;
	    };
	    return self;
	};

	if (typeof document !== 'undefined') {
	    var cookie = exports(document);
	    exports.get = cookie.get;
	    exports.set = cookie.set;
	}


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getSiblingsAsArray = __webpack_require__(164);

	var _getSiblingsAsArray2 = _interopRequireDefault(_getSiblingsAsArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function FolderToggle(element) {
	  var siteHeader = document.querySelector('.site-header');
	  // This is the time of the folder opacity transition (in ms) set in the css.
	  // Using it as a timeout here so it doesn't get cut off when the header
	  // overflow is set back to hidden on folder close.
	  var folderOpacityTransitionTime = 200;
	  var isAnotherFolderOpen = function isAnotherFolderOpen(folder) {
	    return (0, _getSiblingsAsArray2.default)(folder, '.folder-open').length > 0;
	  };

	  /**
	   * Sets both the folder-open class on the folder itself and
	   * the folder overflow class on the header.
	   */
	  var setFolderState = function setFolderState(e) {
	    if (!element.classList.contains('folder-open')) {
	      element.classList.add('folder-open');
	      // if no other folders are open, set the header to overflow so the folders
	      // is visible.
	      if (!isAnotherFolderOpen(e.target.parentNode)) {
	        siteHeader.classList.add('folder-overflow');
	      }
	    } else {
	      element.classList.remove('folder-open');
	      // if no other folders are open when you close the folder, remove the
	      // overflow on the header.
	      if (!isAnotherFolderOpen(e.target.parentNode)) {
	        setTimeout(function () {
	          siteHeader.classList.remove('folder-overflow');
	        }, folderOpacityTransitionTime);
	      }
	    }
	  };

	  element.addEventListener('click', setFolderState);
	}

	exports.default = FolderToggle;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _from = __webpack_require__(165);

	var _from2 = _interopRequireDefault(_from);

	__webpack_require__(169);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (el) {
	  var filterBySelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

	  var children = (0, _from2.default)(el.parentNode.children);
	  return children.filter(function (child) {
	    return child !== el && child.matches(filterBySelector);
	  });
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(166), __esModule: true };

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	__webpack_require__(167);
	module.exports = __webpack_require__(50).Array.from;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(51)
	  , $export        = __webpack_require__(48)
	  , toObject       = __webpack_require__(85)
	  , call           = __webpack_require__(130)
	  , isArrayIter    = __webpack_require__(131)
	  , toLength       = __webpack_require__(75)
	  , createProperty = __webpack_require__(168)
	  , getIterFn      = __webpack_require__(132);

	$export($export.S + $export.F * !__webpack_require__(139)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(54)
	  , createDesc      = __webpack_require__(62);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Polyfill for Element.prototype.matches
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
	 *
	 * Slightly modified to remove the fallback function, as <IE9 support is not
	 * necessary.
	 */

	(function () {
	  if (typeof Element.prototype.matches === 'function') {
	    return;
	  }
	  Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (sel) {
	    var matches = (this.document || this.ownerDocument).querySelectorAll(sel);
	    var i = matches.length;
	    while (--i >= 0 && matches.item(i) !== this) {/* noop */}
	    return i > -1;
	  };
	})();

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _from = __webpack_require__(165);

	var _from2 = _interopRequireDefault(_from);

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _layoutAutocolumns = __webpack_require__(183);

	var _layoutAutocolumns2 = _interopRequireDefault(_layoutAutocolumns);

	var _Autorows = __webpack_require__(188);

	var _Autorows2 = _interopRequireDefault(_Autorows);

	var _core = __webpack_require__(199);

	var _hasTouch = __webpack_require__(203);

	var _hasTouch2 = _interopRequireDefault(_hasTouch);

	var _constants = __webpack_require__(204);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function GalleryLayout(element) {
	  var imagesArray = (0, _from2.default)(element.querySelectorAll('.grid-image-wrapper img'));
	  var grid = void 0;
	  var infoHoverTimeout = void 0;
	  var gridWrapper = element.querySelector('.grid-wrapper');

	  var tweaksToWatch = ['tweak-gallery-gutter', 'tweak-gallery-style', 'tweak-full-width-first-landscape', 'tweak-show-gallery-image-captions', 'tweak-site-outer-padding', 'tweak-gallery-title-overlay'];

	  var getTweakVals = function getTweakVals() {
	    return {
	      galleryStyle: _core.Tweak.getValue('tweak-gallery-style').toLowerCase(),
	      titleOverlaySetting: _core.Tweak.getValue('tweak-show-gallery-title-overlay').toLowerCase(),
	      gutter: _core.Tweak.getValue('tweak-gallery-gutter'),
	      isFullWidthLandscape: _core.Tweak.getValue('tweak-full-width-first-landscape') === 'true'
	    };
	  };

	  /**
	   * After all bricks are placed, remove the hidden class on each one at an interval.
	   *
	   * @method gridReveal
	   * @param {Array} Items you want to reveal
	   * @param {Integer} Delay between revealing items in ms
	   */
	  var gridReveal = function gridReveal() {
	    var items = element.querySelectorAll('.grid-hidden');
	    var i = 0;
	    var interval = setInterval(function () {
	      if (items[i]) {
	        items[i].classList.remove('grid-hidden');
	        i++;
	      } else {
	        clearInterval(interval);
	      }
	    }, 130);
	  };

	  /**
	   * Listen for hover over the caption indicator and show the caption
	   */
	  var infoButtonMouseoverHandler = function infoButtonMouseoverHandler(e) {
	    if (e.target.classList.contains('info-button')) {
	      element.querySelector('.grid-image-wrapper').classList.remove('info-view');
	      var hoveredInfoButton = '[data-slide-id="' + e.target.getAttribute('data-slide-id') + '"]';
	      if (infoHoverTimeout) {
	        clearTimeout(infoHoverTimeout);
	      }
	      element.querySelector('.grid-image-wrapper' + hoveredInfoButton).classList.add('info-view');
	    }
	  };

	  /**
	   * Listen for mouseout on the caption indicator and hide the caption 200ms after
	   */
	  var infoButtonMouseoutHandler = function infoButtonMouseoutHandler(e) {
	    if (e.target.classList.contains('info-button')) {
	      (function () {
	        var hoveredInfoButton = '[data-slide-id="' + e.target.getAttribute('data-slide-id') + '"]';
	        if (infoHoverTimeout) {
	          clearTimeout(infoHoverTimeout);
	        }
	        infoHoverTimeout = setTimeout(function () {
	          element.querySelector('.grid-image-wrapper' + hoveredInfoButton).classList.remove('info-view');
	        }, 200);
	      })();
	    }
	  };

	  /**
	   * On touch devices, switch to click listener.
	   */
	  var infoButtonClickHandler = function infoButtonClickHandler(e) {
	    if (e.target.classList.contains('info-button')) {
	      var clickedInfoButton = '[data-slide-id="' + e.target.getAttribute('data-slide-id') + '"]';
	      element.querySelector('.grid-image-wrapper' + clickedInfoButton).classList.toggle('info-view');
	    }
	  };

	  /**
	   * On resize, re-convert the vw gutter to pixels to pass to grid script.
	   */
	  var updateGutterOnResize = function updateGutterOnResize() {
	    if (window.innerWidth > _constants2.default.mobileBreakpoint) {
	      grid.config.gutter = window.innerWidth * parseFloat(getTweakVals().gutter) / 100;
	    }
	  };

	  /**
	   * Render the gallery.
	   *
	   * @method render
	   * @param {Boolean} shouldDestroy true = delete grid object and rebuild in new style
	   */
	  var render = function render(shouldDestroy) {
	    if (shouldDestroy && grid) {
	      grid.destroy();
	      grid = null;
	    }

	    var tweakVals = getTweakVals();
	    if (window.innerWidth <= _constants2.default.mobileBreakpoint) {
	      // in this case, we force stacked on small devices.
	      imagesArray.forEach(function (img) {
	        _core.ImageLoader.load(img, {
	          mode: null,
	          load: true
	        });
	      });
	    } else if (tweakVals.galleryStyle === 'masonry') {
	      grid = new _layoutAutocolumns2.default(gridWrapper, {
	        gutter: window.innerWidth * parseFloat(tweakVals.gutter) / 100, // essentially converted to vw units
	        minColumns: 2,
	        maxColumns: 2,
	        childSelector: 'grid-item-wrapper',
	        imgWrapperSelector: 'grid-image-wrapper',
	        afterLayout: gridReveal,
	        autoLoadImages: true,
	        beforeResize: updateGutterOnResize
	      });
	      grid.layout();
	    } else if (tweakVals.galleryStyle === 'horizontal') {
	      grid = new _Autorows2.default(gridWrapper, {
	        gutter: window.innerWidth * parseFloat(tweakVals.gutter) / 100, // essentially converted to vw units
	        columns: 2,
	        childSelector: 'grid-item-wrapper',
	        imgWrapperSelector: 'grid-image-wrapper',
	        isFullWidthLandscape: tweakVals.isFullWidthLandscape,
	        afterLayout: gridReveal,
	        autoLoadImages: true,
	        beforeResize: updateGutterOnResize
	      });
	      grid.layout();
	    } else {
	      // in this case, the images are just stacked in a single column, so just load them.
	      imagesArray.forEach(function (img) {
	        _core.ImageLoader.load(img, {
	          mode: null,
	          load: true
	        });
	      });
	    }
	  };

	  var resizeHandler = function resizeHandler(e) {
	    if (window.innerWidth <= _constants2.default.mobileBreakpoint) {
	      if (grid) {
	        grid.destroy();
	        grid = null;
	      }
	      imagesArray.forEach(function (img) {
	        _core.ImageLoader.load(img, {
	          mode: null,
	          load: true
	        });
	      });
	    } else if (grid) {
	      grid.layout();
	    } else {
	      render(false);
	    }
	  };

	  var debouncedResize = (0, _debounce2.default)(resizeHandler, 120);

	  /**
	   * Bind event listeners and tweak watcher.
	   *
	   * @method bind
	   */
	  var bindEventListeners = function bindEventListeners() {
	    window.addEventListener('resize', debouncedResize);

	    if ((0, _hasTouch2.default)()) {
	      gridWrapper.addEventListener('click', infoButtonClickHandler);
	    } else {
	      gridWrapper.addEventListener('mouseover', infoButtonMouseoverHandler);
	      gridWrapper.addEventListener('mouseout', infoButtonMouseoutHandler);
	    }
	  };

	  var sync = function sync() {
	    render(false);
	  };

	  var init = function init() {
	    render(false);
	    bindEventListeners();
	  };

	  var destroy = function destroy() {
	    debouncedResize.cancel();
	    window.removeEventListener('resize', debouncedResize);
	    gridWrapper.removeEventListener('mouseover', infoButtonMouseoverHandler);
	    gridWrapper.removeEventListener('mouseout', infoButtonMouseoutHandler);
	    gridWrapper.removeEventListener('click', infoButtonClickHandler);
	  };

	  init();

	  _core.Tweak.watch(tweaksToWatch, function (tweak) {
	    var renderTriggeringTweaks = ['tweak-gallery-style', 'tweak-gallery-gutter', 'tweak-site-outer-padding', 'tweak-full-width-first-landscape'];
	    var needsRenderUpdate = renderTriggeringTweaks.some(function (name) {
	      return tweak.name === name;
	    });

	    if (needsRenderUpdate) {
	      render(true);
	    }

	    if (tweak.name === 'tweak-show-gallery-image-captions') {
	      gridWrapper.removeEventListener('mouseover', infoButtonMouseoverHandler);
	      gridWrapper.removeEventListener('mouseout', infoButtonMouseoutHandler);
	      gridWrapper.removeEventListener('click', infoButtonClickHandler);

	      if (tweak.value.toLowerCase() === 'on hover' && (0, _hasTouch2.default)()) {
	        gridWrapper.addEventListener('click', infoButtonClickHandler);
	      } else if (tweak.value.toLowerCase() === 'on hover') {
	        gridWrapper.addEventListener('mouseover', infoButtonMouseoverHandler);
	        gridWrapper.addEventListener('mouseout', infoButtonMouseoutHandler);
	      }
	    }
	  });

	  return {
	    sync: sync,
	    destroy: destroy
	  };
	}

	exports.default = GalleryLayout;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(172),
	    now = __webpack_require__(173),
	    toNumber = __webpack_require__(176);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 172 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(174);

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	module.exports = now;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(175);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 175 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(172),
	    isSymbol = __webpack_require__(177);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(178),
	    isObjectLike = __webpack_require__(182);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(179),
	    getRawTag = __webpack_require__(180),
	    objectToString = __webpack_require__(181);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(174);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(179);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 181 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 182 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _core = __webpack_require__(184);

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MODULE_CLASSES = {
	  wrapperSelector: 'masonry-wrapper',
	  childSelector: 'masonry-item-wrapper',
	  imgWrapperSelector: 'masonry-image-wrapper'
	};

	var MODULE_DEFAULTS = {
	  minColumns: 1,
	  maxColumns: 12,
	  minColumnWidth: 300,
	  gutter: 5,
	  autoLoadImages: false
	};

	var Autocolumns = function () {
	  function Autocolumns(rootNode) {
	    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Autocolumns);

	    this.config = Object.assign({}, MODULE_DEFAULTS, config);

	    this.rootNode = rootNode;
	    if (!this.rootNode.nodeName) {
	      throw new Error('No root element given');
	    }
	    if (!this.rootNode.classList.contains(MODULE_CLASSES.wrapperSelector)) {
	      this.rootNode.classList.add(MODULE_CLASSES.wrapperSelector);
	    }

	    this.items = this.setupItems();

	    this.debouncedResize = (0, _debounce2.default)(this.resize.bind(this));
	    window.addEventListener('resize', this.debouncedResize);
	  }

	  _createClass(Autocolumns, [{
	    key: 'setupItems',
	    value: function setupItems() {
	      var _this = this;

	      var configSelectorArray = Array.from(this.rootNode.querySelectorAll('.' + this.config.childSelector));
	      configSelectorArray.forEach(function (selector) {
	        selector.classList.add(MODULE_CLASSES.childSelector);
	        selector.querySelector('.' + _this.config.imgWrapperSelector).classList.add(MODULE_CLASSES.imgWrapperSelector);
	      });
	    }

	    /**
	     * Gets the aspect ratio of an image.
	     *
	     * @param {Node} img
	     * @method getImageRatio
	     * @return {Integer} (height/width) * 100
	     *                   100 = square
	     *                   < 100 = landscape
	     *                   > 100 = portrait
	     */

	  }, {
	    key: 'getImageRatio',
	    value: function getImageRatio(img) {
	      // this conditional is a hack to get around the fact that system placeholder
	      // images get their data-image-dimensions attr set late
	      if (img.getAttribute('data-image-dimensions') !== '') {
	        var _img$getAttribute$spl = img.getAttribute('data-image-dimensions').split('x').map(function (dim) {
	          return parseFloat(dim, 10);
	        });

	        var _img$getAttribute$spl2 = _slicedToArray(_img$getAttribute$spl, 2);

	        var x = _img$getAttribute$spl2[0];
	        var y = _img$getAttribute$spl2[1];

	        return 100 * y / x;
	      } else {
	        return 100;
	      }
	    }

	    /**
	     * Set an intrinsic padding on image wrapper.
	     *
	     * @param {Node} imgWrapper
	     * @method setIntrinsicPadding
	     */

	  }, {
	    key: 'setIntrinsicPadding',
	    value: function setIntrinsicPadding(imgWrapper) {
	      var imgRatio = this.getImageRatio(imgWrapper.querySelector('img'));
	      imgWrapper.style.paddingBottom = Math.floor(imgRatio) + '%';
	    }
	  }, {
	    key: 'loadImage',
	    value: function loadImage(img) {
	      _core.ImageLoader.load(img, {
	        mode: null,
	        load: true
	      });
	    }

	    /**
	     * Calculate the number of columns in the masonry grid
	     *
	     * @method getNumberOfColumns
	     * @return {Integer}
	     */

	  }, {
	    key: 'getNumberOfColumns',
	    value: function getNumberOfColumns(wrapperWidth) {
	      // first divide available width by minColumnWidth setting
	      var calculatedCols = Math.floor((wrapperWidth + this.config.gutter) / (this.config.minColumnWidth + this.config.gutter));
	      // then, get the min of columns that fit vs. the max number of columns specified...
	      calculatedCols = Math.min(calculatedCols, this.config.maxColumns);
	      // then get the max of that and the min number of columns specified...
	      calculatedCols = Math.max(calculatedCols, this.config.minColumns);
	      // then make sure you don't end up with 0 columns.
	      return Math.max(calculatedCols, 1);
	    }

	    /**
	     * Calculate the width of the columns in the masonry grid
	     *
	     * @param {Integer} cols
	     * @method getFinalColumnWidth
	     * @return {Integer}
	     */

	  }, {
	    key: 'getFinalColumnWidth',
	    value: function getFinalColumnWidth(wrapperWidth, cols) {
	      return (wrapperWidth - (cols - 1) * this.config.gutter) / cols;
	    }

	    /**
	     * Positions brick at x/y coordinates
	     * @param  {DOMNode} el  brick to place
	     * @param  {number} left left position
	     * @param  {number} top  top position
	     */

	  }, {
	    key: 'placeBrick',
	    value: function placeBrick(el, left, top) {
	      el.style.top = top + 'px';
	      el.style.left = left + 'px';
	    }

	    /**
	     * After a brick is placed, run a
	     * callback if one is provided.
	     *
	     * @method afterItemPlaced
	     * @param {Node} masonry item
	     */

	  }, {
	    key: 'afterItemPlaced',
	    value: function afterItemPlaced(item) {
	      if (typeof this.config.onItemLoad === 'function') {
	        this.config.onItemLoad(item);
	      }
	    }

	    /**
	     * After all bricks are placed, set the height on the wrapper and
	     * run the onLoad callback.
	     *
	     * @method afterLayout
	     * @param {Integer} Final height of the wrapper
	     */

	  }, {
	    key: 'afterLayout',
	    value: function afterLayout(wrapperHeight) {
	      this.rootNode.style.height = wrapperHeight + 'px';

	      if (typeof this.config.afterLayout === 'function') {
	        this.config.afterLayout();
	      }
	    }
	  }, {
	    key: 'layout',
	    value: function layout() {
	      var _this2 = this;

	      var updatedConfig = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      if (updatedConfig) {
	        Object.keys(updatedConfig).forEach(function (prop) {
	          if (_this2.config.hasOwnProperty(prop)) {
	            _this2.config[prop] = updatedConfig[prop];
	          }
	        });
	      }

	      var wrapperWidth = this.rootNode.offsetWidth;
	      var numCols = this.getNumberOfColumns(wrapperWidth);
	      var colWidth = this.getFinalColumnWidth(wrapperWidth, numCols);
	      var bricks = this.rootNode.querySelectorAll('.' + this.config.childSelector);
	      var bricksArray = Array.from(bricks);

	      var wrapperHeight = 0;
	      var leftPos = 0;
	      var topPos = 0;
	      var coords = [];

	      bricksArray.forEach(function (brick, index) {
	        var img = brick.querySelector('img[data-src]');

	        var brickTop = void 0;
	        var brickHeight = void 0;

	        // set the width on the brick
	        brick.style.width = colWidth + 'px';

	        // if there's an image, set up its wrapper and load it
	        if (img) {
	          img.removeAttribute('data-load');
	          _this2.setIntrinsicPadding(brick.querySelector('.' + _this2.config.imgWrapperSelector));

	          if (_this2.config.autoLoadImages) {
	            _this2.loadImage(img);
	          }
	        }

	        // first row
	        if (index < numCols) {
	          _this2.placeBrick(brick, leftPos, topPos);
	          // coords will be an array of arrays, tracking the left/top
	          // coordinate of the current bottom of each row
	          brickTop = brick.offsetTop;
	          brickHeight = brick.offsetHeight;
	          coords.push([leftPos, brickTop + brickHeight]);
	          leftPos += colWidth + _this2.config.gutter;
	          // now fill in gaps
	        } else {
	          // sort the coords array so that the shortest column is always first
	          coords.sort(function (a, b) {
	            return a[1] - b[1];
	          });

	          // set the position to the first array in the sorted coords array
	          topPos = coords[0][1] + _this2.config.gutter;
	          leftPos = coords[0][0];

	          _this2.placeBrick(brick, leftPos, topPos);

	          // clip off the array you just used and add the new left/bottom of the
	          // current column to the array
	          coords.splice(0, 1);
	          brickTop = brick.offsetTop;
	          brickHeight = brick.offsetHeight;
	          coords.push([leftPos, brickTop + brickHeight]);
	        }

	        // run the onItemLoad callback if provided
	        _this2.afterItemPlaced(brick);

	        // set the height of the wrapper to the max of the last brick's
	        // bottom or the current wrapper height
	        wrapperHeight = Math.max(wrapperHeight, brickTop + brickHeight);
	      });

	      // - set the height of the wrapper
	      // - run onLoad callback
	      this.afterLayout(wrapperHeight);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var _this3 = this;

	      var bricks = this.rootNode.querySelectorAll('.' + this.config.childSelector);
	      Array.from(bricks).forEach(function (brick) {
	        var imgWrapper = brick.querySelector('.' + _this3.config.imgWrapperSelector);

	        brick.style.top = '';
	        brick.style.left = '';
	        brick.style.width = '';
	        imgWrapper.style.paddingBottom = '';
	      });
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this4 = this;

	      this.debouncedResize.cancel();
	      window.removeEventListener('resize', this.debouncedResize);

	      this.reset();

	      this.rootNode.style.height = '';
	      if (this.config.wrapperSelector !== MODULE_CLASSES.wrapperSelector) {
	        this.rootNode.classList.remove(MODULE_CLASSES.wrapperSelector);
	      }

	      var bricks = this.rootNode.querySelectorAll('.' + MODULE_CLASSES.childSelector);
	      Array.from(bricks).forEach(function (brick) {
	        brick.classList.remove(MODULE_CLASSES.childSelector);
	        brick.querySelector('.' + _this4.config.imgWrapperSelector).classList.remove(MODULE_CLASSES.imgWrapperSelector);
	      });
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      if (typeof this.config.beforeResize === 'function') {
	        this.config.beforeResize();
	      }
	      this.reset();
	      this.layout();
	      if (typeof this.config.afterResize === 'function') {
	        this.config.afterResize();
	      }
	    }
	  }]);

	  return Autocolumns;
	}();

	exports.default = Autocolumns;
	module.exports = exports['default'];

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ImageLoader = __webpack_require__(185);

	var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

	var _Lifecycle = __webpack_require__(186);

	var _Lifecycle2 = _interopRequireDefault(_Lifecycle);

	var _Tweak = __webpack_require__(187);

	var _Tweak2 = _interopRequireDefault(_Tweak);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The public JavaScript API for Squarespace template developers.
	 * @namespace SQS
	 */
	var SQS = {
	  ImageLoader: _ImageLoader2.default,
	  Lifecycle: _Lifecycle2.default,
	  Tweak: _Tweak2.default
	};

	exports.default = SQS;
	module.exports = exports['default'];

/***/ },
/* 185 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * ​Squarespace comes with a number of built-in facilities for managing images
	 * that are uploaded to our system. After uploading an image into a collection,
	 * Squarespace automatically creates multiple copies of the image with different 
	 * sizes. Our ImageLoader will then help render images properly when they are
	 * presented on a page, even on retina displays.
	 *
	 * ImageLoader can also be used to fit or fill an image inside ​a parent
	 * container, where it automatically determines which image size to use
	 * depending on the current dimensions of the container.
	 *
	 * WARNING:
	 * Currently, ImageLoader is present on all Squarespace sites under the global
	 * namespace ImageLoader, but this is an unsupported API and we recommend
	 * accessing this functionality through squarespace-core.
	 *
	 * @namespace ImageLoader
	 */
	var ImageLoader = {

	  /**
	   * Using the global ImageLoader namespace, calls ImageLoader.load on the
	   * given node with the given config options.
	   *
	   * @method load
	   * @param  {HTMLElement} img    Image node to be loaded
	   * @param  {Object} config      Config object
	   * @return {Boolean}            True if the image was loaded, false otherwise
	   */
	  load: function load(img, config) {
	    return window.ImageLoader.load(img, config);
	  }
	};

	/**
	 * @exports {Object} ImageLoader
	 */
	exports.default = ImageLoader;
	module.exports = exports["default"];

/***/ },
/* 186 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Squarespace provides default functionality for some content that users add
	 * in the CMS.
	 *
	 * If you are building a Developer Platform site that loads Squarespace content
	 * through an XHR or some other kind of AJAX, you can use the Lifecycle methods
	 * provided here to initialize and/or destroy this functionality.
	 *
	 * WARNING:
	 * The functionality called by Lifecycle is available on the global namespace
	 * window.Squarespace, but this is an unsupported API and it is highly
	 * recommended that you access it through squarespace-core.
	 *
	 * @namespace Lifecycle
	 */
	var Lifecycle = {

	  /**
	   * Squarespace.afterBodyLoad() trigger loads scripts and calls onInitialize,
	   * which individual modules' init functions are bound to. This should be
	   * called after new HTML content containing Squarespace default functionality
	   * is added to a page (for example, after AJAX loading a new page).
	   *
	   * @method init
	   */
	  init: function init() {
	    window.Squarespace.AFTER_BODY_LOADED = false;
	    window.Squarespace.afterBodyLoad();
	  },


	  /**
	   * Squarespace.globalDestroy calls onDestroy, triggering each module's
	   * destructor. This should be called prior to loading in new HTML content
	   * containing Squarespace default functionality.
	   *
	   * @method  destroy
	   */
	  destroy: function destroy() {
	    window.Squarespace.globalDestroy(Y);
	  }
	};

	/**
	 * @exports {Object} Lifecycle
	 */
	exports.default = Lifecycle;
	module.exports = exports["default"];

/***/ },
/* 187 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @const {Object} tweaksToWatch
	 */
	var tweaksToWatch = {
	  all: {
	    callbacks: []
	  }
	};

	/**
	 * Tweaks allow a developer to isolate specific elements of the design and
	 * present options to the user in an easy-to-use interface. Tweaks are surfaced
	 * in the Squarespace interface through Style Editor (e.g.
	 * yoursite.squarespace.com/config/design/style). Using tweaks, a user can make
	 * presentational changes to their website without having to know or edit CSS code.
	 *
	 * Tweaks are typically used by the developers through LESS variables, mixins,
	 * and class names added to the <body> element.
	 * 
	 * Sometimes, a developer may find it necessary to access the value of a tweak
	 * through Javascript, or to watch for changes in that tweak and update the DOM
	 * accordingly. The Tweak module of squarespace-core is meant to provide an
	 * official interface for doing so.
	 *
	 * @namespace Tweak
	 */
	var Tweak = {

	  /**
	   * Gets the value of one of the tweaks given its name.
	   *
	   * @method getValue
	   * @param {String} name      Name of the tweak
	   * @returns {String}         The value of the tweak
	   */
	  getValue: function getValue(name) {
	    if (!name || typeof name !== 'string') {
	      console.error('squarespace-core: Invalid tweak name ' + name);
	      return null;
	    }

	    return Y.Squarespace.Template.getTweakValue(name);
	  },


	  /**
	   * Listen for changes on a tweak item. If one parameter is provided, the
	   * callback will be executed every time any tweak changes. If two parameters
	   * are provided and the first parameter is a String, the callback will be
	   * executed only when that particular tweak changes. If two parameters are
	   * provided and the first parameter is an Array of strings, the callback will
	   * be executed any time one of those tweaks changes.
	   *
	   * @method watch
	   * @param {String}          Optional: Name of the tweak
	   * @param {Array}           Optional: Array with multiple tweak names
	   * @param {Function}        Callback to call when watcher is triggered
	   */
	  watch: function watch() {
	    var _arguments = arguments;

	    if (arguments.length === 0) {
	      console.error('squarespace-core: ' + 'Tweak.watch must be called with at least one parameter');
	      return;
	    }

	    if (arguments.length === 1) {
	      // Only callback passed in, no tweak name string or tweaks array passed.
	      // Run callback for all tweaks.
	      if (typeof arguments[0] === 'function') {
	        tweaksToWatch.all.callbacks.push(arguments[0]);
	      }
	      return;
	    }

	    if (typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {
	      // Specific tweak name passed in. Run callback when that tweak is changed.
	      var tweakName = arguments[0];
	      if (!tweaksToWatch[tweakName]) {
	        tweaksToWatch[tweakName] = {
	          callbacks: []
	        };
	      }
	      tweaksToWatch[tweakName].callbacks.push(arguments[1]);
	    } else if (arguments[0].constructor === Array && typeof arguments[1] === 'function') {
	      // Multiple tweak names passed in as array. Run callback when any one of
	      // those tweaks are changed.
	      arguments[0].forEach(function (tweakName) {
	        if (!tweaksToWatch[tweakName]) {
	          tweaksToWatch[tweakName] = {
	            callbacks: []
	          };
	        }
	        tweaksToWatch[tweakName].callbacks.push(_arguments[1]);
	      });
	    }
	  }
	};

	if (window.Y.Global) {
	  // If Y.Global is present on the page, set up the tweak event listener.
	  window.Y.Global.on('tweak:change', function (e) {
	    var tweakName = e.getName();
	    var callbackSignature = {
	      name: tweakName,
	      value: e.config && e.config.value || e.value
	    };

	    if (tweaksToWatch[tweakName]) {
	      tweaksToWatch[tweakName].callbacks.forEach(function (callback) {
	        try {
	          callback(callbackSignature);
	        } catch (err) {
	          console.error(err);
	        }
	      });
	    }

	    if (tweaksToWatch.all.callbacks.length > 0) {
	      tweaksToWatch.all.callbacks.forEach(function (callback) {
	        try {
	          callback(callbackSignature);
	        } catch (err) {
	          console.error(err);
	        }
	      });
	    }
	  });
	}

	/**
	 * @exports {Object} Tweak
	 */
	exports.default = Tweak;
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(189);

	var _keys2 = _interopRequireDefault(_keys);

	var _slicedToArray2 = __webpack_require__(192);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _from = __webpack_require__(165);

	var _from2 = _interopRequireDefault(_from);

	var _assign = __webpack_require__(109);

	var _assign2 = _interopRequireDefault(_assign);

	var _classCallCheck2 = __webpack_require__(113);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(114);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _core = __webpack_require__(199);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MODULE_CLASSES = {
	  wrapperSelector: 'autorows-wrapper',
	  childSelector: 'autorows-item-wrapper',
	  imgWrapperSelector: 'autorows-image-wrapper'
	};

	var MODULE_DEFAULTS = {
	  columns: 4,
	  gutter: 5,
	  autoLoadImages: false,
	  isFullWidthLandscape: false
	};

	/*
	 * Autorows layouts
	 * This uses a custom version rather than a module since the template requires
	 * custom isFullWidthLandscape tweak, where it makes the first image in a row
	 * full-width if it's landscape.
	 */

	var Autorows = function () {
	  function Autorows(rootNode) {
	    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    (0, _classCallCheck3.default)(this, Autorows);

	    this.rootNode = rootNode;
	    this.config = (0, _assign2.default)({}, MODULE_DEFAULTS, config);

	    if (!this.rootNode.nodeName) {
	      throw new Error('No root element given');
	    }
	    if (!rootNode.classList.contains(MODULE_CLASSES.wrapperSelector)) {
	      this.rootNode.classList.add(MODULE_CLASSES.wrapperSelector);
	    }

	    this.items = this.setupItems();
	    this.debouncedResize = (0, _debounce2.default)(this.resize.bind(this), 120);
	    window.addEventListener('resize', this.debouncedResize);
	  }

	  /**
	   * Add necessary classes to elements.
	   *
	   * @method setupItems
	   */


	  (0, _createClass3.default)(Autorows, [{
	    key: 'setupItems',
	    value: function setupItems() {
	      var _this = this;

	      var configSelectorArray = (0, _from2.default)(this.rootNode.querySelectorAll('.' + this.config.childSelector));
	      configSelectorArray.forEach(function (selector) {
	        selector.classList.add(MODULE_CLASSES.childSelector);
	        selector.querySelector('.' + _this.config.imgWrapperSelector).classList.add(MODULE_CLASSES.imgWrapperSelector);
	      });
	    }

	    /**
	     * Load a given image.
	     *
	     * @method loadImage
	     */

	  }, {
	    key: 'loadImage',
	    value: function loadImage(img) {
	      _core.ImageLoader.load(img, {
	        mode: null,
	        load: true
	      });
	    }

	    /**
	     * Gets the aspect ratio of an image.
	     *
	     * @param {Node} img
	     * @method getImageRatio
	     * @return {Integer} (height/width) * 100
	     *                   100 = square
	     *                   < 100 = landscape
	     *                   > 100 = portrait
	     */

	  }, {
	    key: 'getImageRatio',
	    value: function getImageRatio(img) {
	      // this conditional is a hack to get around the fact that system placeholder
	      // images get their data-image-dimensions attr set late
	      if (img.getAttribute('data-image-dimensions') !== '') {
	        var _img$getAttribute$spl = img.getAttribute('data-image-dimensions').split('x').map(function (dim) {
	          return parseFloat(dim, 10);
	        }),
	            _img$getAttribute$spl2 = (0, _slicedToArray3.default)(_img$getAttribute$spl, 2),
	            x = _img$getAttribute$spl2[0],
	            y = _img$getAttribute$spl2[1];

	        return 100 * y / x;
	      } else {
	        return 100;
	      }
	    }

	    /**
	     * Set an intrinsic padding on image wrapper.
	     *
	     * @param {Node} imgWrapper
	     * @method setIntrinsicPadding
	     */

	  }, {
	    key: 'setIntrinsicPadding',
	    value: function setIntrinsicPadding(imgWrapper) {
	      var imgRatio = this.getImageRatio(imgWrapper.querySelector('img'));
	      imgWrapper.style.paddingBottom = imgRatio + '%';
	    }

	    /**
	     * Determine the relative widths of the images in a row when their heights are normalized.
	     *
	     * @param {Node List} imgs
	     * @method getRowWidthRatios
	     * @return {Array}
	     */

	  }, {
	    key: 'getRowWidthRatios',
	    value: function getRowWidthRatios(array) {
	      var totalWidth = 0;
	      var heightNorm = 600;

	      // Push the widths and heights of the images into an array.
	      var dimsArray = array.map(function (img) {
	        var dims = void 0;
	        // this conditional is a hack to get around the fact that system placeholder
	        // images get their data-image-dimensions attr set late
	        if (img.getAttribute('data-image-dimensions') !== '') {
	          dims = JSON.parse('[' + img.getAttribute('data-image-dimensions').split('x') + ']');
	        } else {
	          dims = [100, 100];
	        }
	        // See what the total width of the row is when all images are set to 600px tall.
	        totalWidth += dims[0] * heightNorm / dims[1];
	        return dims;
	      });

	      // Return an array with each image's width relative to the total width
	      // when all image heights are normalized.
	      return dimsArray.map(function (imgDims) {
	        var multiplier = heightNorm / imgDims[1];
	        return imgDims[0] * multiplier / totalWidth;
	      });
	    }

	    /**
	     * Place grid items in a row.
	     *
	     * @param {Array} itemsArray
	     * @param {Array} widthRatios
	     * @param {Integer} availableWidth (total width of row/container)
	     * @param {Integer} topPos (current top for row)
	     * @method positionItemsInRow
	     */

	  }, {
	    key: 'positionItemsInRow',
	    value: function positionItemsInRow(rowItemsArray, rowWidthRatios, availableWidth, topPos) {
	      var _this2 = this;

	      var left = 0;
	      rowItemsArray.forEach(function (itemNode, i) {
	        itemNode.style.width = rowWidthRatios[i] * availableWidth + 'px';
	        itemNode.style.left = left + 'px';
	        itemNode.style.top = topPos + 'px';
	        left += Math.floor(rowWidthRatios[i] * availableWidth + _this2.config.gutter);
	      });
	    }

	    /**
	     * After all bricks are placed, set the height on the wrapper and
	     * run the afterLayout callback.
	     *
	     * @method afterLayout
	     * @param {Integer} Final height of the wrapper
	     */

	  }, {
	    key: 'afterLayout',
	    value: function afterLayout(wrapperHeight) {
	      this.rootNode.style.height = wrapperHeight + 'px';

	      if (typeof this.config.afterLayout === 'function') {
	        this.config.afterLayout();
	      }
	    }
	  }, {
	    key: 'layout',
	    value: function layout() {
	      var _this3 = this;

	      var updatedConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      if (updatedConfig) {
	        (0, _keys2.default)(updatedConfig).forEach(function (prop) {
	          if (_this3.config.hasOwnProperty(prop)) {
	            _this3.config[prop] = updatedConfig[prop];
	          }
	        });
	      }

	      var availableWidth = this.rootNode.offsetWidth - this.config.gutter * (this.config.columns - 1);
	      var allItemsArray = (0, _from2.default)(this.rootNode.querySelectorAll('.' + this.config.childSelector));
	      var allImagesArray = (0, _from2.default)(this.rootNode.querySelectorAll('.' + this.config.imgWrapperSelector + ' img'));

	      var wrapperHeight = 0;
	      var rowStart = 0;
	      var rowEnd = this.config.columns;
	      var topPos = 0;
	      var rowItemsArray = allItemsArray.slice(rowStart, rowEnd);
	      var rowImagesArray = allImagesArray.slice(rowStart, rowEnd);
	      var totalItems = allItemsArray.length;

	      while (totalItems > 0) {
	        // If the first image in the row is a wide image, make it full-width.
	        if (this.getImageRatio(rowImagesArray[0]) < 100 && this.config.isFullWidthLandscape || totalItems === 1) {
	          this.setIntrinsicPadding(rowImagesArray[0].parentNode);
	          rowItemsArray[0].style.width = Math.ceil(this.rootNode.offsetWidth) + 'px';
	          rowItemsArray[0].style.left = '0px';
	          rowItemsArray[0].style.top = topPos + 'px';

	          // reset for next row
	          topPos = Math.floor(rowItemsArray[0].offsetTop + rowItemsArray[0].offsetHeight + this.config.gutter - 1);
	          rowStart = rowStart + 1;
	          rowEnd = rowEnd + 1;
	          rowItemsArray = allItemsArray.slice(rowStart, rowEnd);
	          rowImagesArray = allImagesArray.slice(rowStart, rowEnd);
	          totalItems--;
	        } else {
	          var rowWidthRatios = this.getRowWidthRatios(rowImagesArray);
	          rowImagesArray.forEach(function (img) {
	            _this3.setIntrinsicPadding(img.parentNode);
	          });
	          this.positionItemsInRow(rowItemsArray, rowWidthRatios, availableWidth, topPos);

	          // reset for next row
	          topPos = Math.floor(rowItemsArray[0].offsetTop + rowItemsArray[0].offsetHeight + this.config.gutter - 1);
	          rowStart = rowStart + this.config.columns;
	          rowEnd = rowEnd + this.config.columns;
	          totalItems -= this.config.columns;
	          rowItemsArray = allItemsArray.slice(rowStart, rowEnd);
	          rowImagesArray = allImagesArray.slice(rowStart, rowEnd);
	        }

	        wrapperHeight = topPos - this.config.gutter;
	      }

	      allImagesArray.forEach(function (img) {
	        if (_this3.config.autoLoadImages) {
	          img.removeAttribute('data-load');
	          _this3.loadImage(img);
	        }
	      });

	      // Set the height of the wrapper
	      // Run the afterLayout callback if provided
	      this.afterLayout(wrapperHeight);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var _this4 = this;

	      var children = this.rootNode.querySelectorAll('.' + this.config.childSelector);
	      (0, _from2.default)(children).forEach(function (child) {
	        child.style.top = '';
	        child.style.left = '';
	        child.style.width = '';
	        child.querySelector('.' + _this4.config.imgWrapperSelector).style.paddingBottom = '';
	      });

	      this.rootNode.style.height = '';
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      if (typeof this.config.beforeResize === 'function') {
	        this.config.beforeResize();
	      }
	      this.reset();
	      this.layout();
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this5 = this;

	      this.debouncedResize.cancel();
	      window.removeEventListener('resize', this.debouncedResize);
	      this.reset();
	      this.rootNode.classList.remove(MODULE_CLASSES.wrapperSelector);
	      var children = this.rootNode.querySelectorAll('.' + MODULE_CLASSES.childSelector);
	      (0, _from2.default)(children).forEach(function (child) {
	        child.classList.remove(MODULE_CLASSES.childSelector);
	        child.querySelector('.' + _this5.config.imgWrapperSelector).classList.remove(MODULE_CLASSES.imgWrapperSelector);
	      });
	    }
	  }]);
	  return Autorows;
	}();

	exports.default = Autorows;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(190), __esModule: true };

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(191);
	module.exports = __webpack_require__(50).Object.keys;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(85)
	  , $keys    = __webpack_require__(69);

	__webpack_require__(145)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(193);

	var _isIterable3 = _interopRequireDefault(_isIterable2);

	var _getIterator2 = __webpack_require__(196);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(194), __esModule: true };

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	__webpack_require__(42);
	module.exports = __webpack_require__(195);

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(127)
	  , ITERATOR  = __webpack_require__(83)('iterator')
	  , Iterators = __webpack_require__(65);
	module.exports = __webpack_require__(50).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(197), __esModule: true };

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	__webpack_require__(42);
	module.exports = __webpack_require__(198);

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(55)
	  , get      = __webpack_require__(132);
	module.exports = __webpack_require__(50).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ImageLoader = __webpack_require__(200);

	var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

	var _Lifecycle = __webpack_require__(201);

	var _Lifecycle2 = _interopRequireDefault(_Lifecycle);

	var _Tweak = __webpack_require__(202);

	var _Tweak2 = _interopRequireDefault(_Tweak);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The public JavaScript API for Squarespace template developers.
	 * @namespace SQS
	 */
	var SQS = {
	  ImageLoader: _ImageLoader2.default,
	  Lifecycle: _Lifecycle2.default,
	  Tweak: _Tweak2.default
	};

	exports.default = SQS;
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * ​Squarespace comes with a number of built-in facilities for managing images
	 * that are uploaded to our system. After uploading an image into a collection,
	 * Squarespace automatically creates multiple copies of the image with different 
	 * sizes. Our ImageLoader will then help render images properly when they are
	 * presented on a page, even on retina displays.
	 *
	 * ImageLoader can also be used to fit or fill an image inside ​a parent
	 * container, where it automatically determines which image size to use
	 * depending on the current dimensions of the container.
	 *
	 * WARNING:
	 * Currently, ImageLoader is present on all Squarespace sites under the global
	 * namespace ImageLoader, but this is an unsupported API and we recommend
	 * accessing this functionality through squarespace-core.
	 *
	 * @namespace ImageLoader
	 */
	var ImageLoader = {

	  /**
	   * Using the global ImageLoader namespace, calls ImageLoader.load on the
	   * given node with the given config options.
	   *
	   * @method load
	   * @param  {HTMLElement} img    Image node to be loaded
	   * @param  {Object} config      Config object
	   * @return {Boolean}            True if the image was loaded, false otherwise
	   */
	  load: function load(img, config) {
	    return window.ImageLoader.load(img, config);
	  }
	};

	/**
	 * @exports {Object} ImageLoader
	 */
	exports.default = ImageLoader;
	module.exports = exports["default"];

/***/ },
/* 201 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Squarespace provides default functionality for some content that users add
	 * in the CMS.
	 *
	 * If you are building a Developer Platform site that loads Squarespace content
	 * through an XHR or some other kind of AJAX, you can use the Lifecycle methods
	 * provided here to initialize and/or destroy this functionality.
	 *
	 * WARNING:
	 * The functionality called by Lifecycle is available on the global namespace
	 * window.Squarespace, but this is an unsupported API and it is highly
	 * recommended that you access it through squarespace-core.
	 *
	 * @namespace Lifecycle
	 */
	var Lifecycle = {

	  /**
	   * Squarespace.afterBodyLoad() trigger loads scripts and calls onInitialize,
	   * which individual modules' init functions are bound to. This should be
	   * called after new HTML content containing Squarespace default functionality
	   * is added to a page (for example, after AJAX loading a new page).
	   *
	   * @method init
	   */
	  init: function init() {
	    window.Squarespace.AFTER_BODY_LOADED = false;
	    window.Squarespace.afterBodyLoad();
	  },


	  /**
	   * Squarespace.globalDestroy calls onDestroy, triggering each module's
	   * destructor. This should be called prior to loading in new HTML content
	   * containing Squarespace default functionality.
	   *
	   * @method  destroy
	   */
	  destroy: function destroy() {
	    window.Squarespace.globalDestroy(Y);
	  }
	};

	/**
	 * @exports {Object} Lifecycle
	 */
	exports.default = Lifecycle;
	module.exports = exports["default"];

/***/ },
/* 202 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var isAuthenticated = Static.SQUARESPACE_CONTEXT.authenticatedAccount;

	/**
	 * @const {Object} tweaksToWatch
	 */
	var tweaksToWatch = {
	  all: {
	    callbacks: []
	  }
	};

	/**
	 * Tweaks allow a developer to isolate specific elements of the design and
	 * present options to the user in an easy-to-use interface. Tweaks are surfaced
	 * in the Squarespace interface through Style Editor (e.g.
	 * yoursite.squarespace.com/config/design/style). Using tweaks, a user can make
	 * presentational changes to their website without having to know or edit CSS code.
	 *
	 * Tweaks are typically used by the developers through LESS variables, mixins,
	 * and class names added to the <body> element.
	 *
	 * Sometimes, a developer may find it necessary to access the value of a tweak
	 * through Javascript, or to watch for changes in that tweak and update the DOM
	 * accordingly. The Tweak module of squarespace-core is meant to provide an
	 * official interface for doing so.
	 *
	 * @namespace Tweak
	 */
	var Tweak = {

	  /**
	   * Gets the value of one of the tweaks given its name.
	   *
	   * @method getValue
	   * @param {String} name      Name of the tweak
	   * @returns {String}         The value of the tweak
	   */
	  getValue: function getValue(name) {
	    if (!name || typeof name !== 'string') {
	      console.error('squarespace-core: Invalid tweak name ' + name);
	      return null;
	    }

	    return Y.Squarespace.Template.getTweakValue(name);
	  },


	  /**
	   * Listen for changes on a tweak item. If one parameter is provided, the
	   * callback will be executed every time any tweak changes. If two parameters
	   * are provided and the first parameter is a String, the callback will be
	   * executed only when that particular tweak changes. If two parameters are
	   * provided and the first parameter is an Array of strings, the callback will
	   * be executed any time one of those tweaks changes.
	   *
	   * @method watch
	   * @param {String}          Optional: Name of the tweak
	   * @param {Array}           Optional: Array with multiple tweak names
	   * @param {Function}        Callback to call when watcher is triggered
	   */
	  watch: function watch() {
	    var _arguments = arguments;


	    if (!isAuthenticated) {
	      return;
	    }

	    if (arguments.length === 0) {
	      console.error('squarespace-core: ' + 'Tweak.watch must be called with at least one parameter');
	      return;
	    }

	    if (arguments.length === 1) {
	      // Only callback passed in, no tweak name string or tweaks array passed.
	      // Run callback for all tweaks.
	      if (typeof arguments[0] === 'function') {
	        tweaksToWatch.all.callbacks.push(arguments[0]);
	      }
	      return;
	    }

	    if (typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {
	      // Specific tweak name passed in. Run callback when that tweak is changed.
	      var tweakName = arguments[0];
	      if (!tweaksToWatch[tweakName]) {
	        tweaksToWatch[tweakName] = {
	          callbacks: []
	        };
	      }
	      tweaksToWatch[tweakName].callbacks.push(arguments[1]);
	    } else if (arguments[0].constructor === Array && typeof arguments[1] === 'function') {
	      // Multiple tweak names passed in as array. Run callback when any one of
	      // those tweaks are changed.
	      arguments[0].forEach(function (tweakName) {
	        if (!tweaksToWatch[tweakName]) {
	          tweaksToWatch[tweakName] = {
	            callbacks: []
	          };
	        }
	        tweaksToWatch[tweakName].callbacks.push(_arguments[1]);
	      });
	    }
	  }
	};

	if (window.Y.Global && isAuthenticated) {
	  // If Y.Global is present on the page, set up the tweak event listener.
	  window.Y.Global.on('tweak:change', function (e) {
	    var tweakName = e.getName();
	    var callbackSignature = {
	      name: tweakName,
	      value: e.config && e.config.value || e.value
	    };

	    if (tweaksToWatch[tweakName]) {
	      tweaksToWatch[tweakName].callbacks.forEach(function (callback) {
	        try {
	          callback(callbackSignature);
	        } catch (err) {
	          console.error(err);
	        }
	      });
	    }

	    if (tweaksToWatch.all.callbacks.length > 0) {
	      tweaksToWatch.all.callbacks.forEach(function (callback) {
	        try {
	          callback(callbackSignature);
	        } catch (err) {
	          console.error(err);
	        }
	      });
	    }
	  });
	}

	/**
	 * @exports {Object} Tweak
	 */
	exports.default = Tweak;
	module.exports = exports['default'];

/***/ },
/* 203 */
/***/ function(module, exports) {

	'use strict';

	// from here: https://github.com/radubrehar/has-touch/blob/master/index.js

	module.exports = function () {
	  return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch || window.navigator.msMaxTouchPoints);
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * TemplateConstants holds all constants, such
	 * as breakpoints, timeouts, etc.
	 */

	var TemplateConstants = {
	  isAuthenticated: document.documentElement.classList.contains('authenticated-account'),
	  debug: true,
	  mobileBreakpoint: 640,
	  tabletBreakpoint: 1024
	};

	exports.default = TemplateConstants;

/***/ },
/* 205 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function GalleryVideoHandler(element) {
	  var video = element.querySelector('.sqs-video-wrapper');

	  var clickHandler = function clickHandler(e) {
	    e.preventDefault();

	    // WARNING: Y.Squarespace.Lightbox2 is an
	    // unstable API meant strictly for internal
	    // Squarespace use.
	    var lightbox = new window.Y.Squarespace.Lightbox2({
	      content: window.Y.one(video),
	      controls: {
	        previous: false,
	        next: false
	      }
	    });

	    lightbox.render();
	  };

	  var sync = function sync() {
	    if (video) {
	      video.parentNode.removeChild(video);
	      element.addEventListener('click', clickHandler);
	    }
	  };

	  var destroy = function destroy() {
	    element.removeEventListener('click', clickHandler);
	  };

	  sync();

	  return {
	    sync: sync,
	    destroy: destroy
	  };
	}

	exports.default = GalleryVideoHandler;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(189);

	var _keys2 = _interopRequireDefault(_keys);

	var _isNan = __webpack_require__(207);

	var _isNan2 = _interopRequireDefault(_isNan);

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _core = __webpack_require__(199);

	var _fontsLoaded = __webpack_require__(210);

	var _fontsLoaded2 = _interopRequireDefault(_fontsLoaded);

	var _constants = __webpack_require__(204);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Determines if the elements in the header are too wide and
	 * hides/moves them when appropriate.
	 */
	function HeaderOverflow(element) {
	  var siteHeaderNode = element.querySelector('.site-header');
	  var cachedNavWidth = void 0;

	  var headerSelectors = {
	    header: '.site-header',
	    siteTitle: '.site-branding h1',
	    siteTagline: '.site-tagline',
	    icon: '.nav-toggle',
	    nav: '.main-navigation',
	    socialNav: '.header-social-icons-with-nav',
	    socialRight: '.header-social-icons-right',
	    cartIcon: '.Cart--icon'
	  };

	  var tweaksToWatch = ['tweak-site-title-font', 'tweak-site-tagline-font', 'tweak-nav-font', 'tweak-logo-height', 'tweak-header-outer-padding', 'tweak-header-element-spacing', 'tweak-display-social-icons', 'tweak-social-icons-on-right', 'tweak-nav-link-spacing', 'tweak-nav-style', 'tweak-menu-icon-size', 'tweak-template-social-icon-size', 'tweak-cart-link-display'];

	  /**
	   * Make sure the width from getComputedStyle is a pixel value and not "auto"
	   *
	   * @method widthToNumber
	   * @param {string} style
	   * @return {Number} 0 if auto, otherwise the value.
	   */
	  var widthToNumber = function widthToNumber(style) {
	    var parseStyle = parseFloat(style);
	    return (0, _isNan2.default)(parseStyle) ? 0 : parseStyle;
	  };

	  /**
	   * Get the computed widths for all the header elements
	   *
	   * @method getHeaderElComputedWidths
	   * @return {object} headerElWidths
	   */
	  var getHeaderElComputedWidths = function getHeaderElComputedWidths(keys) {
	    var widths = {};
	    keys.forEach(function (key) {
	      var el = element.querySelector(headerSelectors[key]);
	      if (el) {
	        widths[key] = widthToNumber(window.getComputedStyle(el).width);
	      } else {
	        widths[key] = 0;
	      }
	    });

	    return widths;
	  };

	  /**
	   * Detect when elements are overflowing the header and manage classes/styles.
	   *
	   * @method resolveOverflows
	   */
	  var resolveOverflows = function resolveOverflows() {
	    var socialIconsDisplayed = _core.Tweak.getValue('tweak-display-social-icons') === 'true';
	    var cartIconDisplayed = _core.Tweak.getValue('tweak-cart-link-display').toLowerCase() === 'icon on right';
	    var spacingMultiplier = window.innerWidth <= _constants2.default.tabletBreakpoint ? 1.5 : 1;
	    var elementSpacingTweak = parseFloat(_core.Tweak.getValue('tweak-header-element-spacing'));
	    var elementSpacingPixels = elementSpacingTweak * spacingMultiplier * window.innerWidth / 100;
	    var widths = getHeaderElComputedWidths((0, _keys2.default)(headerSelectors));
	    var brandingWidth = widths.siteTitle + widths.siteTagline;
	    var availableWidth = widths.header;
	    document.body.classList.remove('mobile-style-nav', 'hide-tagline', 'move-social');

	    // max available width will always be header width - icon because
	    // icon is the smallest possible width for the nav.
	    availableWidth -= widths.icon + elementSpacingPixels;

	    // if the social icons are displayed, subtract their width from the available width.
	    if (socialIconsDisplayed) {
	      availableWidth -= widths.socialRight + elementSpacingPixels;
	    }

	    // if the social icons are displayed, subtract their width from the available width.
	    if (cartIconDisplayed) {
	      availableWidth -= widths.cartIcon + elementSpacingPixels;
	    }

	    // When site title + tagline + nav are wider than available space, switch to icon/mobile nav
	    if (brandingWidth + cachedNavWidth + elementSpacingPixels > availableWidth) {
	      document.body.classList.add('mobile-style-nav');
	    }

	    // already in icon/mobile nav here, so if title + tagline wider, hide the tagline
	    if (brandingWidth + elementSpacingPixels > availableWidth) {
	      document.body.classList.add('hide-tagline');
	    }

	    // if icon/mobile nav & tagline hidden and you run out of space, move the
	    // social icons into the nav if they're on the right.
	    if (widths.siteTitle > availableWidth) {
	      document.body.classList.add('move-social');
	    }

	    siteHeaderNode.classList.add('show');
	  };

	  /**
	   * Initial render on page load, run after fontCheck, i.e., fonts are loaded.
	   *
	   * @method render
	   */
	  var render = function render() {
	    // cache the nav width when it's not mobile style, i.e.,
	    // when it's as wide as possible.
	    var computedNavWidth = window.getComputedStyle(element.querySelector('.main-navigation')).width;
	    cachedNavWidth = widthToNumber(parseInt(computedNavWidth, 10));
	    resolveOverflows();
	  };

	  var handleResize = function handleResize() {
	    siteHeaderNode.classList.remove('show');
	    resolveOverflows();
	  };

	  var debouncedResolveOverflows = (0, _debounce2.default)(handleResize, 120);

	  var destroy = function destroy() {
	    siteHeaderNode.classList.remove('show');
	    window.removeEventListener('resize', debouncedResolveOverflows);
	  };

	  var init = function init() {
	    var fontsLoaded = new _fontsLoaded2.default([element.querySelector('.site-branding')]);
	    fontsLoaded.check().then(render);
	    window.addEventListener('resize', debouncedResolveOverflows);
	  };

	  init();

	  _core.Tweak.watch(tweaksToWatch, resolveOverflows);

	  return {
	    sync: render,
	    destroy: destroy
	  };
	}

	exports.default = HeaderOverflow;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(208), __esModule: true };

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(209);
	module.exports = __webpack_require__(50).Number.isNaN;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(48);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var FontsLoaded = __webpack_require__(211);

	module.exports = FontsLoaded;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _promise = __webpack_require__(124);

	var _promise2 = _interopRequireDefault(_promise);

	var _classCallCheck2 = __webpack_require__(113);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(114);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FontsLoaded = function () {
	  /**
	  * @param {Array} elementArray - An array of HTML Elements.
	  * @param {Number} maxCheckCount - The number of 50ms intervals to check.
	   */
	  function FontsLoaded(elementArray) {
	    var maxCheckCount = arguments.length <= 1 || arguments[1] === undefined ? 20 : arguments[1];
	    (0, _classCallCheck3.default)(this, FontsLoaded);

	    this.getFontFamilies(elementArray);
	    this.createFontElements();
	    this.initialWidths = this.getWidths();
	    this.hasLoaded = false;
	    this.maxCheckCount = maxCheckCount;
	  }

	  (0, _createClass3.default)(FontsLoaded, [{
	    key: 'destroy',
	    value: function destroy() {
	      clearInterval(this.checkInterval);
	      this.testWrapper.remove();
	    }

	    /**
	     * A public method used to compare the current widths of the created font HTML Elements
	     * to their initial values on an interval. Returns a Promise and resolves if the
	     * current value does not match the initial, or after a configurable
	     * number of 50ms intervals.
	     *
	     * The Promise will never reject as we will always want to continue onto
	     * the `then`, since there are virtually no cases where a site sohuld not display
	     * content due to a missing font.
	     *
	     * @return {Promise} A promise that will resolve when the check is complete.
	     */

	  }, {
	    key: 'check',
	    value: function check() {
	      var _this = this;

	      return new _promise2.default(function (resolve) {
	        var maxCheckCount = _this.maxCheckCount;
	        var checkCount = 0;

	        _this.checkInterval = setInterval(function () {
	          if (checkCount === maxCheckCount || _this.allChanged()) {
	            _this.hasLoaded = true;
	            resolve({
	              checkCount: checkCount,
	              maxCheckCount: maxCheckCount
	            });
	            _this.destroy();
	          }
	          checkCount++;
	        }, 50);
	      });
	    }

	    /**
	     * Set the internal array of font families based on the given test elements.
	     *
	     * @param {Array} elementArray - The array of selectors to pull fonts from.
	     */

	  }, {
	    key: 'getFontFamilies',
	    value: function getFontFamilies(elementArray) {
	      this.fontFamilies = elementArray.map(function (el) {
	        return getComputedStyle(el)['font-family'];
	      });
	    }

	    /**
	     * Create a wrapper div that is hidden and append test elements with the font
	     * families of the existing HTML Elements in the elementArray argument. The
	     * wrapper is appended to the container.
	     */

	  }, {
	    key: 'createFontElements',
	    value: function createFontElements() {
	      var testWrapper = document.createElement('div');
	      this.testWrapper = testWrapper;
	      testWrapper.style.cssText = 'position: absolute; visibility: hidden; z-index: -1; pointer-events: none;';
	      testWrapper.setAttribute('aria-role', 'hidden');

	      this.fontFamilies.forEach(function (fontFamily) {
	        var fontTestElement = document.createElement('span');
	        fontTestElement.style.cssText = 'font-family: ' + fontFamily + 'font-size: 300px; white-space: nowrap;';
	        fontTestElement.setAttribute('aria-role', 'hidden');
	        // Use a mix of characters which may vary in width between font families.
	        fontTestElement.innerHTML = '#%-&GgWwOoqQLlAaSs680';
	        testWrapper.appendChild(fontTestElement);
	      });

	      document.body.appendChild(testWrapper);
	    }

	    /**
	     * Get the widths from each rendered check node.
	     *
	     * @return {Array} The array of widths.
	     */

	  }, {
	    key: 'getWidths',
	    value: function getWidths() {
	      var childNodesArray = Array.prototype.slice.call(this.testWrapper.childNodes);
	      return childNodesArray.map(function (fontNode) {
	        return fontNode.offsetWidth;
	      });
	    }

	    /**
	     * Determine whether the widths of all of the check test elements have changed.
	     *
	     * @return {Boolean} Whether or not all widths have changed.
	     */

	  }, {
	    key: 'allChanged',
	    value: function allChanged() {
	      var _this2 = this;

	      return this.getWidths().every(function (width, index) {
	        return width !== _this2.initialWidths[index];
	      });
	    }
	  }]);
	  return FontsLoaded;
	}();

	module.exports = FontsLoaded;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _throttle = __webpack_require__(213);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * This controller listens to a scroll event and:
	 * 1. determines if the header should be hidden or not
	 *    - it's hidden if you're scrolled down the pageSize
	 *    - it's un-hidden once you start scrolling back up or if you've reached the
	 *      bottom of a page with the index nav
	 * 2. swaps the header color when you reach the bottom of a page with an index nav
	 *    since it will now be over an image (essentially mimicking the index itself).
	 */
	function HeaderScroll(element) {
	  var startingScroll = void 0;
	  var siteHeader = element.querySelector('.site-header');

	  var respondToScroll = function respondToScroll() {
	    var pos = window.pageYOffset;
	    var pageScrollHeight = element.offsetHeight;

	    if (pos > 0) {
	      siteHeader.classList.add('hide-header');
	    }

	    if (pos < startingScroll || pos >= pageScrollHeight || pos === 0) {
	      siteHeader.classList.remove('hide-header');
	    }

	    document.body.classList.remove('swap-header-color');
	    if (pos >= pageScrollHeight - 40) {
	      document.body.classList.add('swap-header-color');
	    }

	    startingScroll = window.pageYOffset;
	  };

	  var throttleScroll = (0, _throttle2.default)(respondToScroll, 10);

	  var sync = function sync() {
	    startingScroll = window.pageYOffset;
	  };

	  var resizeHandler = function resizeHandler() {
	    window.removeEventListener('scroll', throttleScroll);
	    sync();
	    window.addEventListener('scroll', throttleScroll);
	  };

	  var debouncedResize = (0, _debounce2.default)(resizeHandler, 120);

	  window.addEventListener('resize', debouncedResize);
	  window.addEventListener('scroll', throttleScroll);

	  var destroy = function destroy() {
	    siteHeader.classList.remove('hide-header');
	    document.body.classList.remove('swap-header-color');
	    window.removeEventListener('scroll', throttleScroll);
	    window.removeEventListener('resize', debouncedResize);
	  };

	  window.onLoad = function () {
	    sync();
	  };

	  return {
	    sync: sync,
	    destroy: destroy
	  };
	}

	exports.default = HeaderScroll;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(171),
	    isObject = __webpack_require__(172);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	module.exports = throttle;


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _core = __webpack_require__(199);

	var _IndexGallerySlideshow = __webpack_require__(215);

	var _IndexGallerySlideshow2 = _interopRequireDefault(_IndexGallerySlideshow);

	var _hasTouch = __webpack_require__(203);

	var _hasTouch2 = _interopRequireDefault(_hasTouch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var shouldShowTitleCard = function shouldShowTitleCard() {
	  return _core.Tweak.getValue('tweak-index-inactive-on-load') === 'true';
	};
	var hideDescDuringSlideshow = function hideDescDuringSlideshow() {
	  return _core.Tweak.getValue('tweak-hide-index-desc-on-hover') === 'true';
	};
	var isSlideshowOn = function isSlideshowOn() {
	  return _core.Tweak.getValue('tweak-index-slideshow-on') === 'true';
	};
	var isSlideshowTouchOn = function isSlideshowTouchOn() {
	  return _core.Tweak.getValue('tweak-index-slideshow-touch-on') === 'true';
	};
	var getSlideshowDelay = function getSlideshowDelay() {
	  return parseFloat(_core.Tweak.getValue('tweak-index-slideshow-delay')) * 1000;
	};

	var getGallerySlideshowSelector = function getGallerySlideshowSelector() {
	  if (shouldShowTitleCard()) {
	    return '.collection-images .image-container';
	  }
	  return '.collection-images .image-container:not(.index-main-image)';
	};

	/**
	 * Passthrough controller that initializes an instance of IndexGallerySlideshow,
	 * which makes the Index List view rotate between each of its "slides".
	 */
	function IndexGallery(element) {
	  var slideshow = void 0;

	  // NOTE:
	  // The title of the 'tweak-index-inactive-on-load' tweak no longer accurately
	  // describes what it's doing. See README for more info.
	  var tweaksToWatch = ['tweak-site-outer-padding', 'tweak-index-slideshow-on', 'tweak-index-slideshow-delay', 'tweak-index-inactive-on-load'];

	  var titleCard = element.querySelector('.index-main-image');

	  var syncSlideshow = function syncSlideshow() {
	    element.classList.remove('hide-desc');
	    if (isSlideshowOn() || (0, _hasTouch2.default)() && isSlideshowTouchOn()) {
	      if (slideshow) {
	        slideshow.destroy();
	      }
	      slideshow = new _IndexGallerySlideshow2.default(element, {
	        selector: getGallerySlideshowSelector(),
	        slideshowDelay: getSlideshowDelay(),
	        afterSetSlide: function afterSetSlide(currentSlide) {
	          var isTitleCard = currentSlide === titleCard;
	          if (hideDescDuringSlideshow() && !isTitleCard) {
	            element.classList.add('hide-desc');
	          } else {
	            element.classList.remove('hide-desc');
	          }
	        }
	      });
	      slideshow.init();
	    } else if (slideshow) {
	      slideshow.destroy();
	    }
	  };

	  var destroy = function destroy() {
	    if (slideshow) {
	      slideshow.destroy();
	    }
	  };

	  _core.Tweak.watch(tweaksToWatch, syncSlideshow);

	  syncSlideshow();

	  return {
	    destroy: destroy
	  };
	}

	exports.default = IndexGallery;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _from = __webpack_require__(165);

	var _from2 = _interopRequireDefault(_from);

	var _classCallCheck2 = __webpack_require__(113);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(114);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _indexUtils = __webpack_require__(216);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var collectionNavSelector = '.collection-nav';

	/**
	 * Makes the Index List view rotate between all its "slides" (including the
	 * collection mainImage, if relevant).
	 */

	var IndexGallerySlideshow = function () {

	  /**
	   * @param  {HTMLElement}  rootNode                 Element from controller
	   * @param  {Object}       config
	   * @param  {Number}       config.slideshowDelay    Amount of time for each slide in ms
	   * @param  {String}       config.selector          image container selector
	   * @param  {String}       config.titleCardSelector selector for the title card
	   */
	  function IndexGallerySlideshow(rootNode) {
	    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    (0, _classCallCheck3.default)(this, IndexGallerySlideshow);

	    this.rootNode = rootNode;
	    this.config = config;

	    this.imageWrappers = (0, _from2.default)(rootNode.querySelectorAll(config.selector));
	    this.collectionNav = rootNode.querySelector(collectionNavSelector);
	    this.collectionLinks = (0, _from2.default)(rootNode.querySelectorAll(collectionNavSelector + ' div'));
	    this.slideInterval = null;
	    this._currentSlide = 0;

	    this.boundHandleMouseover = this.handleMouseover.bind(this);
	    this.boundHandleMouseleave = this.handleMouseleave.bind(this);
	  }

	  /**
	   * Getter for this._currentSlide
	   * @return {Number} Current slide index
	   */


	  (0, _createClass3.default)(IndexGallerySlideshow, [{
	    key: 'startSlideshow',


	    /**
	     * Start playing the slideshow. Can be called at init, or after pausing.
	     */
	    value: function startSlideshow() {
	      var _this = this;

	      this.rootNode.classList.remove('animation-paused');

	      this.slideInterval = setInterval(function () {
	        if (typeof _this.currentSlide === 'number' && _this.currentSlide < _this.imageWrappers.length - 1) {
	          _this.currentSlide++;
	        } else {
	          _this.currentSlide = 0;
	        }
	      }, this.config.slideshowDelay);
	    }

	    /**
	     * Mouseover handler. Pauses slideshow when hovering over link.
	     * @param  {Object} e   eventObject from event handler
	     */

	  }, {
	    key: 'handleMouseover',
	    value: function handleMouseover(e) {
	      if (e.target.classList.contains('collection-nav-item-span')) {
	        if (this.slideInterval) {
	          clearInterval(this.slideInterval);
	        }
	        this.rootNode.classList.add('animation-paused');
	      }
	    }

	    /**
	     * Mouseleave handler. Resumes slideshow.
	     */

	  }, {
	    key: 'handleMouseleave',
	    value: function handleMouseleave() {
	      if (this.slideInterval) {
	        clearInterval(this.slideInterval);
	      }
	      (0, _indexUtils.setActive)(this.imageWrappers[this.currentSlide]);
	      (0, _indexUtils.setActive)((0, _indexUtils.getCurrentLink)(this.imageWrappers[this._currentSlide], this.collectionLinks));
	      this.startSlideshow();
	    }

	    /**
	     * Destructor. Unbinds event listeners, remove active classnames, clears interval.
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this.slideInterval) {
	        clearInterval(this.slideInterval);
	      }
	      this.collectionNav.removeEventListener('mouseover', this.boundHandleMouseover);
	      this.collectionNav.removeEventListener('mouseleave', this.boundHandleMouseleave);
	    }

	    /**
	     * Initializer. Starts slideshow and adds event listeners.
	     */

	  }, {
	    key: 'init',
	    value: function init() {
	      this.startSlideshow();
	      this.collectionNav.addEventListener('mouseover', this.boundHandleMouseover);
	      this.collectionNav.addEventListener('mouseleave', this.boundHandleMouseleave);
	    }
	  }, {
	    key: 'currentSlide',
	    get: function get() {
	      return this._currentSlide;
	    }

	    /**
	     * Setter for this._currentSlide. Sets the private property, removes active
	     * state from all els and applies to current el.
	     * @param {Number} slide  Index to set the currentSlide to
	     */
	    ,
	    set: function set(slide) {
	      this._currentSlide = slide || 0;

	      this.imageWrappers.forEach(_indexUtils.removeActive);
	      this.collectionLinks.forEach(_indexUtils.removeActive);

	      (0, _indexUtils.setActive)(this.imageWrappers[slide]);
	      (0, _indexUtils.setActive)((0, _indexUtils.getCurrentLink)(this.imageWrappers[slide], this.collectionLinks));

	      if (typeof this.config.afterSetSlide === 'function') {
	        this.config.afterSetSlide(this.imageWrappers[slide], slide);
	      }
	    }
	  }]);
	  return IndexGallerySlideshow;
	}();

	module.exports = IndexGallerySlideshow;

/***/ },
/* 216 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * @param  {HTMLElement} [el]   Element to add active class to
	 */
	var setActive = exports.setActive = function setActive(el) {
	  return el && el.classList.add('active');
	};

	/**
	 * @param  {HTMLElement} [el]   Element to remove active class from
	 */
	var removeActive = exports.removeActive = function removeActive(el) {
	  return el && el.classList.remove('active');
	};

	/**
	 * @param  {HTMLElement}        currentImage  Currently displayed image
	 * @param  {Array<HTMLElement>} links         All the links
	 * @return {HTMLElement}                      Corresponding link
	 */
	var getCurrentLink = exports.getCurrentLink = function getCurrentLink(currentImage, links) {
	  return links.find(function (el) {
	    return el.getAttribute('data-url-id') === currentImage.getAttribute('data-url-id');
	  });
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _core = __webpack_require__(199);

	var _fontsLoaded = __webpack_require__(210);

	var _fontsLoaded2 = _interopRequireDefault(_fontsLoaded);

	var _constants = __webpack_require__(204);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Determines if the index elements (nav and description) are too tall for the
	 * viewport and sets positions/styles if necessary.
	 */
	function IndexNavOverflow(element) {
	  var collectionNavWrapper = element.querySelector('.collection-nav');
	  var collectionNavDescWrapper = element.querySelector('.collection-nav-desc-wrapper');
	  var collectionDesc = element.querySelector('.collection-desc');
	  var siteHeader = document.querySelector('.site-header');

	  var getSettings = function getSettings() {
	    return {
	      descPosition: _core.Tweak.getValue('tweak-index-desc-position').toLowerCase(),
	      descVisible: _core.Tweak.getValue('tweak-show-index-desc') === 'true',
	      hasDescription: collectionDesc !== null,
	      menuDescSpacing: parseFloat(_core.Tweak.getValue('tweak-index-menu-desc-spacing')),
	      menuPadding: parseFloat(_core.Tweak.getValue('tweak-index-menu-padding')),
	      menuPosition: _core.Tweak.getValue('tweak-index-nav-position').toLowerCase(),
	      spacingMultiplier: window.innerWidth <= _constants2.default.tabletBreakpoint ? 1.5 : 1
	    };
	  };

	  var tweaksToWatch = ['tweak-header-outer-padding', 'tweak-logo-height', 'tweak-index-menu-font', 'tweak-site-outer-padding', 'tweak-index-menu-font-min', 'tweak-index-desc-font', 'tweak-index-desc-font-min', 'tweak-index-nav-position', 'tweak-index-nav-layout', 'tweak-index-menu-max-width', 'tweak-index-menu-spacing', 'tweak-index-menu-padding', 'tweak-index-desc-position', 'tweak-index-desc-max-width', 'tweak-index-menu-desc-spacing', 'tweak-show-index-desc'];

	  /**
	   * Determines if content is too tall for its available space
	   *
	   * @method isTooTall
	   * @param {Object} settings
	   * @param {Boolean} isAllMiddle - are the desc and nav both set to center/middle?
	   * @return {Boolean}
	   */
	  var isTooTall = function isTooTall(settings, isAllMiddle) {
	    var headerHeight = siteHeader.offsetHeight;
	    var menuPadding = settings.menuPadding * window.innerWidth / 100; // converted to vw
	    var windowHeight = window.innerHeight;
	    var wrapper = isAllMiddle ? collectionNavDescWrapper : collectionNavWrapper;
	    // if isAllMiddle, then use the whole wrapper; otherwise use the nav wrapper,
	    // since if they're all middle, then desc and nav share a wrapper for positioning.

	    var menuPositionMiddle = settings.menuPosition === 'left' || settings.menuPosition === 'center';

	    // this will cover when both are centered vertically together or
	    // when the nav is on the bottom and the desc is hidden or missing
	    var availableHeight = windowHeight - headerHeight - menuPadding;

	    if (settings.descVisible && settings.hasDescription && settings.descPosition === 'middle' && !isAllMiddle) {
	      // desc centered vertically, nav on the bottom
	      availableHeight = windowHeight / 2 - collectionDesc.offsetHeight / 2 - menuPadding;
	    } else if (settings.descVisible && settings.hasDescription && menuPositionMiddle && !isAllMiddle) {
	      // desc on the top and nav centered vertically
	      availableHeight = windowHeight - 2 * collectionDesc.getBoundingClientRect().bottom;
	    } else if (settings.descVisible && settings.hasDescription && !isAllMiddle) {
	      // desc on the top and nav on the bottom
	      availableHeight = windowHeight - collectionDesc.getBoundingClientRect().bottom - menuPadding;
	    } else if (!settings.descVisible && menuPositionMiddle) {
	      // desc hidden or missing and menu centered vertically
	      availableHeight = windowHeight - 2 * headerHeight;
	    }

	    var menuHeight = wrapper.offsetHeight;
	    return menuHeight > availableHeight;
	  };

	  var resetStyles = function resetStyles() {
	    collectionNavDescWrapper.classList.remove('too-tall', 'show');
	    collectionNavWrapper.style.cssText = '';
	    collectionNavDescWrapper.style.cssText = '';
	  };

	  /**
	   * Repositions elements if necessary
	   *
	   * @method respositionIfContentTooTall
	   */
	  var respositionIfContentTooTall = function respositionIfContentTooTall() {
	    var settings = getSettings();
	    // are both the desc and nav centered vertically?
	    var isAllMiddle = settings.descPosition === 'middle' && (settings.menuPosition === 'left' || settings.menuPosition === 'center');

	    // set the deafult top to the bottom of the header
	    var newTop = siteHeader.offsetHeight;

	    if (settings.descVisible && settings.hasDescription && settings.descPosition === 'middle' && !isAllMiddle) {
	      // desc centered vertically and nav on the bottom
	      newTop = window.innerHeight / 2 + collectionDesc.offsetHeight / 2;
	    } else if (settings.descVisible && settings.hasDescription && !isAllMiddle) {
	      // desc on the top and nav in either position
	      newTop = collectionDesc.getBoundingClientRect().bottom;
	    }

	    if (isTooTall(settings, isAllMiddle)) {
	      // if both are centered vertically, then use the wrapper around both to set the position;
	      // otherwise, position them separately
	      var wrapper = isAllMiddle ? collectionNavDescWrapper : collectionNavWrapper;

	      collectionNavDescWrapper.classList.add('too-tall');
	      wrapper.style.top = newTop + 'px';
	      wrapper.style.bottom = 'auto';
	      wrapper.style.paddingBottom = settings.menuPadding + 'vw';
	    }
	    // after re-positioning, then reveal
	    collectionNavDescWrapper.classList.add('show');
	  };

	  var resizeHandler = function resizeHandler() {
	    resetStyles();
	    respositionIfContentTooTall();
	  };

	  var debouncedResize = (0, _debounce2.default)(resizeHandler, 120);

	  var destroy = function destroy() {
	    window.removeEventListener('resize', debouncedResize);
	  };

	  var init = function init() {
	    // wait until fonts are loaded, as this will affect the sizes of elements
	    var fontsLoaded = new _fontsLoaded2.default([element.querySelector('.collection-nav')]);
	    fontsLoaded.check().then(respositionIfContentTooTall);
	    window.addEventListener('resize', debouncedResize);
	  };

	  init();

	  _core.Tweak.watch(tweaksToWatch, function (tweak) {
	    resetStyles();
	    respositionIfContentTooTall();
	  });

	  return {
	    destroy: destroy
	  };
	}

	exports.default = IndexNavOverflow;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _throttle = __webpack_require__(213);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _imagesloaded = __webpack_require__(219);

	var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 1. Hides the index nav under the content until you start to scroll to keep
	 *    it from bleeding through.
	 * 2. keeps the index nav from being scrollable until you are 20 pixels from the
	 *    bottom of the page, so you don't end up with 2 scrollable elements.
	 */
	function IndexNavScroll(element) {
	  var pageScrollHeight = void 0;

	  var respondToScroll = function respondToScroll() {
	    var pos = window.pageYOffset;

	    if (pos >= pageScrollHeight - 20) {
	      element.classList.add('scrollable');
	    } else {
	      element.classList.remove('scrollable');
	    }
	  };

	  var throttleScroll = (0, _throttle2.default)(respondToScroll, 10);

	  var init = function init() {
	    pageScrollHeight = document.querySelector('.content-outer-wrapper').offsetHeight;
	    window.addEventListener('scroll', throttleScroll);
	  };

	  var resizeHandler = function resizeHandler() {
	    window.removeEventListener('scroll', throttleScroll);
	    init();
	  };

	  var debouncedResize = (0, _debounce2.default)(resizeHandler, 120);

	  var destroy = function destroy() {
	    window.removeEventListener('scroll', throttleScroll);
	    window.removeEventListener('resize', debouncedResize);
	  };

	  window.addEventListener('resize', debouncedResize);

	  (0, _imagesloaded2.default)(document.querySelector('.content-outer-wrapper'), function () {
	    init();
	  });

	  return {
	    destroy: destroy
	  };
	}

	exports.default = IndexNavScroll;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * imagesLoaded v4.1.1
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */

	( function( window, factory ) { 'use strict';
	  // universal module definition

	  /*global define: false, module: false, require: false */

	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(220)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter ) {
	      return factory( window, EvEmitter );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter')
	    );
	  } else {
	    // browser global
	    window.imagesLoaded = factory(
	      window,
	      window.EvEmitter
	    );
	  }

	})( window,

	// --------------------------  factory -------------------------- //

	function factory( window, EvEmitter ) {

	'use strict';

	var $ = window.jQuery;
	var console = window.console;

	// -------------------------- helpers -------------------------- //

	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}

	// turn element or nodeList into an array
	function makeArray( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	}

	// -------------------------- imagesLoaded -------------------------- //

	/**
	 * @param {Array, Element, NodeList, String} elem
	 * @param {Object or Function} options - if function, use as callback
	 * @param {Function} onAlways - callback function
	 */
	function ImagesLoaded( elem, options, onAlways ) {
	  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	  if ( !( this instanceof ImagesLoaded ) ) {
	    return new ImagesLoaded( elem, options, onAlways );
	  }
	  // use elem as selector string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelectorAll( elem );
	  }

	  this.elements = makeArray( elem );
	  this.options = extend( {}, this.options );

	  if ( typeof options == 'function' ) {
	    onAlways = options;
	  } else {
	    extend( this.options, options );
	  }

	  if ( onAlways ) {
	    this.on( 'always', onAlways );
	  }

	  this.getImages();

	  if ( $ ) {
	    // add jQuery Deferred object
	    this.jqDeferred = new $.Deferred();
	  }

	  // HACK check async to allow time to bind listeners
	  setTimeout( function() {
	    this.check();
	  }.bind( this ));
	}

	ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

	ImagesLoaded.prototype.options = {};

	ImagesLoaded.prototype.getImages = function() {
	  this.images = [];

	  // filter & find items if we have an item selector
	  this.elements.forEach( this.addElementImages, this );
	};

	/**
	 * @param {Node} element
	 */
	ImagesLoaded.prototype.addElementImages = function( elem ) {
	  // filter siblings
	  if ( elem.nodeName == 'IMG' ) {
	    this.addImage( elem );
	  }
	  // get background image on element
	  if ( this.options.background === true ) {
	    this.addElementBackgroundImages( elem );
	  }

	  // find children
	  // no non-element nodes, #143
	  var nodeType = elem.nodeType;
	  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
	    return;
	  }
	  var childImgs = elem.querySelectorAll('img');
	  // concat childElems to filterFound array
	  for ( var i=0; i < childImgs.length; i++ ) {
	    var img = childImgs[i];
	    this.addImage( img );
	  }

	  // get child background images
	  if ( typeof this.options.background == 'string' ) {
	    var children = elem.querySelectorAll( this.options.background );
	    for ( i=0; i < children.length; i++ ) {
	      var child = children[i];
	      this.addElementBackgroundImages( child );
	    }
	  }
	};

	var elementNodeTypes = {
	  1: true,
	  9: true,
	  11: true
	};

	ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
	    return;
	  }
	  // get url inside url("...")
	  var reURL = /url\((['"])?(.*?)\1\)/gi;
	  var matches = reURL.exec( style.backgroundImage );
	  while ( matches !== null ) {
	    var url = matches && matches[2];
	    if ( url ) {
	      this.addBackground( url, elem );
	    }
	    matches = reURL.exec( style.backgroundImage );
	  }
	};

	/**
	 * @param {Image} img
	 */
	ImagesLoaded.prototype.addImage = function( img ) {
	  var loadingImage = new LoadingImage( img );
	  this.images.push( loadingImage );
	};

	ImagesLoaded.prototype.addBackground = function( url, elem ) {
	  var background = new Background( url, elem );
	  this.images.push( background );
	};

	ImagesLoaded.prototype.check = function() {
	  var _this = this;
	  this.progressedCount = 0;
	  this.hasAnyBroken = false;
	  // complete if no images
	  if ( !this.images.length ) {
	    this.complete();
	    return;
	  }

	  function onProgress( image, elem, message ) {
	    // HACK - Chrome triggers event before object properties have changed. #83
	    setTimeout( function() {
	      _this.progress( image, elem, message );
	    });
	  }

	  this.images.forEach( function( loadingImage ) {
	    loadingImage.once( 'progress', onProgress );
	    loadingImage.check();
	  });
	};

	ImagesLoaded.prototype.progress = function( image, elem, message ) {
	  this.progressedCount++;
	  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	  // progress event
	  this.emitEvent( 'progress', [ this, image, elem ] );
	  if ( this.jqDeferred && this.jqDeferred.notify ) {
	    this.jqDeferred.notify( this, image );
	  }
	  // check if completed
	  if ( this.progressedCount == this.images.length ) {
	    this.complete();
	  }

	  if ( this.options.debug && console ) {
	    console.log( 'progress: ' + message, image, elem );
	  }
	};

	ImagesLoaded.prototype.complete = function() {
	  var eventName = this.hasAnyBroken ? 'fail' : 'done';
	  this.isComplete = true;
	  this.emitEvent( eventName, [ this ] );
	  this.emitEvent( 'always', [ this ] );
	  if ( this.jqDeferred ) {
	    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
	    this.jqDeferred[ jqMethod ]( this );
	  }
	};

	// --------------------------  -------------------------- //

	function LoadingImage( img ) {
	  this.img = img;
	}

	LoadingImage.prototype = Object.create( EvEmitter.prototype );

	LoadingImage.prototype.check = function() {
	  // If complete is true and browser supports natural sizes,
	  // try to check for image status manually.
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    // report based on naturalWidth
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    return;
	  }

	  // If none of the checks above matched, simulate loading on detached element.
	  this.proxyImage = new Image();
	  this.proxyImage.addEventListener( 'load', this );
	  this.proxyImage.addEventListener( 'error', this );
	  // bind to image as well for Firefox. #191
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.proxyImage.src = this.img.src;
	};

	LoadingImage.prototype.getIsImageComplete = function() {
	  return this.img.complete && this.img.naturalWidth !== undefined;
	};

	LoadingImage.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.img, message ] );
	};

	// ----- events ----- //

	// trigger specified handler for event type
	LoadingImage.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};

	LoadingImage.prototype.onload = function() {
	  this.confirm( true, 'onload' );
	  this.unbindEvents();
	};

	LoadingImage.prototype.onerror = function() {
	  this.confirm( false, 'onerror' );
	  this.unbindEvents();
	};

	LoadingImage.prototype.unbindEvents = function() {
	  this.proxyImage.removeEventListener( 'load', this );
	  this.proxyImage.removeEventListener( 'error', this );
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};

	// -------------------------- Background -------------------------- //

	function Background( url, element ) {
	  this.url = url;
	  this.element = element;
	  this.img = new Image();
	}

	// inherit LoadingImage prototype
	Background.prototype = Object.create( LoadingImage.prototype );

	Background.prototype.check = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  this.img.src = this.url;
	  // check if image is already complete
	  var isComplete = this.getIsImageComplete();
	  if ( isComplete ) {
	    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	    this.unbindEvents();
	  }
	};

	Background.prototype.unbindEvents = function() {
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );
	};

	Background.prototype.confirm = function( isLoaded, message ) {
	  this.isLoaded = isLoaded;
	  this.emitEvent( 'progress', [ this, this.element, message ] );
	};

	// -------------------------- jQuery -------------------------- //

	ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
	  jQuery = jQuery || window.jQuery;
	  if ( !jQuery ) {
	    return;
	  }
	  // set local variable
	  $ = jQuery;
	  // $().imagesLoaded()
	  $.fn.imagesLoaded = function( options, callback ) {
	    var instance = new ImagesLoaded( this, options, callback );
	    return instance.jqDeferred.promise( $(this) );
	  };
	};
	// try making plugin
	ImagesLoaded.makeJQueryPlugin();

	// --------------------------  -------------------------- //

	return ImagesLoaded;

	});


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * EvEmitter v1.0.3
	 * Lil' event emitter
	 * MIT License
	 */

	/* jshint unused: true, undef: true, strict: true */

	( function( global, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }

	}( typeof window != 'undefined' ? window : this, function() {

	"use strict";

	function EvEmitter() {}

	var proto = EvEmitter.prototype;

	proto.on = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // set events hash
	  var events = this._events = this._events || {};
	  // set listeners array
	  var listeners = events[ eventName ] = events[ eventName ] || [];
	  // only add once
	  if ( listeners.indexOf( listener ) == -1 ) {
	    listeners.push( listener );
	  }

	  return this;
	};

	proto.once = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // add event
	  this.on( eventName, listener );
	  // set once flag
	  // set onceEvents hash
	  var onceEvents = this._onceEvents = this._onceEvents || {};
	  // set onceListeners object
	  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
	  // set flag
	  onceListeners[ listener ] = true;

	  return this;
	};

	proto.off = function( eventName, listener ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var index = listeners.indexOf( listener );
	  if ( index != -1 ) {
	    listeners.splice( index, 1 );
	  }

	  return this;
	};

	proto.emitEvent = function( eventName, args ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var i = 0;
	  var listener = listeners[i];
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

	  while ( listener ) {
	    var isOnce = onceListeners && onceListeners[ listener ];
	    if ( isOnce ) {
	      // remove listener
	      // remove before trigger to prevent recursion
	      this.off( eventName, listener );
	      // unset once flag
	      delete onceListeners[ listener ];
	    }
	    // trigger listener
	    listener.apply( this, args );
	    // get next listener
	    i += isOnce ? 0 : 1;
	    listener = listeners[i];
	  }

	  return this;
	};

	return EvEmitter;

	}));


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _from = __webpack_require__(165);

	var _from2 = _interopRequireDefault(_from);

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	__webpack_require__(222);

	var _hasTouch = __webpack_require__(203);

	var _hasTouch2 = _interopRequireDefault(_hasTouch);

	var _core = __webpack_require__(199);

	var _indexUtils = __webpack_require__(216);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// NOTE:
	// The title of the 'tweak-index-inactive-on-load' tweak no longer accurately
	// describes what it's doing. See README for more info.
	var tweaksToWatch = ['tweak-index-inactive-on-load', 'tweak-index-slideshow-on', 'tweak-hide-index-desc-on-hover'];

	/**
	 * Indicates whether an element is the initially active element. This is useful
	 * for index nav, where on mouseleave, the active state reverts to the initially
	 * active element.
	 *
	 * NOTE: .active-page refers to the initially active element, while .active
	 * refers to the currently active element.
	 *
	 * @param  {HTMLElement} el   Element to check
	 * @return {Boolean}          Whether or not it's initially active
	 */
	var isInitiallyActive = function isInitiallyActive(el) {
	  return el.classList.contains('active-page');
	};

	/*
	 * Set up the Index view, whether on Index List (index.list) or Index Nav
	 * (index-navigation.block, which displays at the bottom of pages that appear
	 * within the index).
	 */
	function IndexSetup(element) {
	  var collectionNav = element.querySelector('.collection-nav');
	  var links = (0, _from2.default)(element.querySelectorAll('.collection-nav-item'));
	  var imageContainers = (0, _from2.default)(element.querySelectorAll('.collection-images .image-container'));
	  var images = (0, _from2.default)(element.querySelectorAll('.collection-images .image-container img[data-src]'));
	  var hideDescOnHover = _core.Tweak.getValue('tweak-hide-index-desc-on-hover') === 'true';
	  var slideshowActive = _core.Tweak.getValue('tweak-index-slideshow-on') === 'true';

	  var initiallyActiveLink = links.find(isInitiallyActive);
	  var initiallyActiveImageContainer = imageContainers.find(isInitiallyActive);

	  /**
	   * Whether or not you should show the first element i.e. is the tweak checked,
	   * and is it the Index List?
	   * @return {Boolean}
	   */
	  var shouldShowTitleCard = function shouldShowTitleCard() {
	    var tweakOn = _core.Tweak.getValue('tweak-index-inactive-on-load') === 'true';
	    return tweakOn && !element.classList.contains('index-item-navigation');
	  };

	  /**
	   * Mouseover handler. If the target is one of the spans inside the link, set
	   * that to active and remove the active state from the rest of the elements.
	   *
	   * @param  {Object} e   event object
	   */
	  var handleMouseover = function handleMouseover(e) {
	    if (e.target.classList.contains('collection-nav-item-span')) {
	      var currentLink = e.target.closest('[data-url-id]');
	      var urlId = currentLink.getAttribute('data-url-id');
	      var currentImage = element.querySelector('.collection-images .image-container[data-url-id="' + urlId + '"]');

	      links.forEach(_indexUtils.removeActive);
	      imageContainers.forEach(_indexUtils.removeActive);

	      (0, _indexUtils.setActive)(currentLink);
	      (0, _indexUtils.setActive)(currentImage);
	      element.classList.add('nav-hovered');
	      if (hideDescOnHover) {
	        element.classList.add('hide-desc');
	      }
	    }
	  };

	  /**
	   * Mouse leave handler. Remove all active states, and revert back to initial.
	   * If we're on Index List and the tweak for first-image is checked, revert
	   * back to the first image. If this is Index Nav, go back to the link that was
	   * initially active (i.e. the current collection within the index).
	   */
	  var handleMouseleave = function handleMouseleave() {
	    links.forEach(_indexUtils.removeActive);
	    imageContainers.forEach(_indexUtils.removeActive);

	    if (!slideshowActive || element.classList.contains('index-item-navigation')) {
	      if (initiallyActiveLink) {
	        (0, _indexUtils.setActive)(initiallyActiveLink);
	        (0, _indexUtils.setActive)(initiallyActiveImageContainer);
	      } else if (shouldShowTitleCard()) {
	        (0, _indexUtils.setActive)(imageContainers[0]);
	      } else {
	        (0, _indexUtils.setActive)(imageContainers[1]);
	        (0, _indexUtils.setActive)((0, _indexUtils.getCurrentLink)(imageContainers[1], links));
	      }
	    }
	    element.classList.remove('nav-hovered');
	    if (!slideshowActive) {
	      element.classList.remove('hide-desc');
	    }
	  };

	  /**
	   * Load all images in the images array.
	   */
	  var loadImages = function loadImages() {
	    images.forEach(function (image) {
	      _core.ImageLoader.load(image, {
	        mode: 'fill',
	        load: true
	      });
	    });
	  };

	  var resizeHandler = function resizeHandler() {
	    element.style.height = window.innerHeight + 'px';
	    loadImages();
	  };

	  var debouncedResize = (0, _debounce2.default)(resizeHandler, 120);

	  var bindListeners = function bindListeners() {
	    collectionNav.addEventListener('mouseover', handleMouseover);
	    collectionNav.addEventListener('mouseleave', handleMouseleave);
	    window.addEventListener('resize', debouncedResize);
	  };

	  var destroy = function destroy() {
	    collectionNav.removeEventListener('mouseover', handleMouseover);
	    collectionNav.removeEventListener('mouseleave', handleMouseleave);
	    window.removeEventListener('resize', debouncedResize);
	  };

	  /**
	   * Init. Set a height for the element, bind event listeners, load images, and,
	   * if we should show the first image, set the first image to active.
	   */
	  var init = function init() {
	    if ((0, _hasTouch2.default)()) {
	      element.classList.add('has-touch');
	    }
	    element.style.height = window.innerHeight + 'px';
	    bindListeners();
	    loadImages();
	    if (element.classList.contains('index-item-navigation') && initiallyActiveLink) {
	      (0, _indexUtils.setActive)(initiallyActiveLink);
	      (0, _indexUtils.setActive)(initiallyActiveImageContainer);
	    } else if (shouldShowTitleCard()) {
	      (0, _indexUtils.setActive)(imageContainers[0]);
	    } else {
	      (0, _indexUtils.setActive)(imageContainers[1]);
	      (0, _indexUtils.setActive)((0, _indexUtils.getCurrentLink)(imageContainers[1], links));
	    }
	  };

	  var updateOnTweakChange = function updateOnTweakChange() {
	    destroy();
	    bindListeners();
	    links.forEach(_indexUtils.removeActive);
	    imageContainers.forEach(_indexUtils.removeActive);
	    if (shouldShowTitleCard()) {
	      (0, _indexUtils.setActive)(imageContainers[0]);
	    } else {
	      (0, _indexUtils.setActive)(imageContainers[1]);
	      (0, _indexUtils.setActive)((0, _indexUtils.getCurrentLink)(imageContainers[1], links));
	    }
	  };

	  _core.Tweak.watch(tweaksToWatch, updateOnTweakChange);

	  init();

	  return {
	    destroy: destroy
	  };
	}

	exports.default = IndexSetup;

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(169);

	(function () {
	  if (typeof Element.prototype.closest === 'function') {
	    return;
	  }

	  function closest(selector) {
	    var element = this;
	    while (element && element.nodeType === 1) {
	      if (element.matches(selector)) {
	        return element;
	      }
	      element = element.parentNode;
	    }
	    return null;
	  }

	  Element.prototype.closest = closest;
	})(); /**
	       * Polyfill for Element.prototype.closest
	       * https://github.com/jonathantneal/closest/blob/master/closest.js
	       *
	       * Needs Element.prototype.matches
	       */

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _core = __webpack_require__(199);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * Positions the Index Description below the fixed header.
	 */
	function IndexPositioning(element) {
	  var collectionDesc = element.querySelector('.collection-desc');
	  var siteHeader = document.querySelector('.site-header');

	  var setDescPosition = function setDescPosition() {
	    collectionDesc.style.top = siteHeader.offsetHeight + 'px';
	  };

	  var debouncedResize = (0, _debounce2.default)(setDescPosition, 120);

	  var tweakChangeHandler = function tweakChangeHandler(tweak) {
	    collectionDesc.style.top = '';
	    window.removeEventListener('resize', debouncedResize);
	    if (tweak.value.toLowerCase() === 'top') {
	      setDescPosition();
	      window.addEventListener('resize', debouncedResize);
	    }
	  };

	  var destroy = function destroy() {
	    window.removeEventListener('resize', debouncedResize);
	  };

	  var init = function init() {
	    var descPositionTop = _core.Tweak.getValue('tweak-index-desc-position').toLowerCase() === 'top';

	    if (collectionDesc && descPositionTop) {
	      setDescPosition();
	      window.addEventListener('resize', debouncedResize);
	    }
	  };

	  init();

	  _core.Tweak.watch('tweak-index-desc-position', tweakChangeHandler);

	  return {
	    destroy: destroy
	  };
	}

	exports.default = IndexPositioning;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	__webpack_require__(169);

	var _core = __webpack_require__(199);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * Positions the main content below the fixed header.
	 */
	function MainContentPositioning(element) {
	  var mainContent = element.querySelector('.main-content');
	  var siteHeader = element.querySelector('.site-header');

	  var setMainContentTopPadding = function setMainContentTopPadding() {
	    // gallery and index have unique layouts, so no need to position.
	    var isGalleryOrIndex = element.classList.contains('collection-type-gallery') || element.classList.contains('collection-type-index');

	    mainContent.style.paddingTop = '';

	    // is there a banner image and is it visible based on tweaks?
	    // main content sits below it if so, so no need to position.
	    var isBannerVisible = element.matches('.tweak-show-page-banner-image-always.has-main-image:not(.view-item)') || element.matches('.tweak-show-page-banner-image-in-index.has-index-nav.has-main-image:not(.view-item)') || element.matches('.tweak-show-page-banner-image-not-in-index:not(.has-index-nav).has-main-image:not(.view-item)');

	    if (isGalleryOrIndex || isBannerVisible) {
	      return;
	    }

	    var headerHeight = siteHeader.offsetHeight;

	    mainContent.style.paddingTop = headerHeight + 'px';
	  };

	  var debouncedResize = (0, _debounce2.default)(setMainContentTopPadding, 120);

	  var tweaksToWatch = ['tweak-header-outer-padding', 'tweak-display-social-icons', 'tweak-site-title-font', 'tweak-site-tagline-font', 'tweak-logo-height', 'tweak-nav-font', 'tweak-menu-icon-size', 'tweak-nav-style', 'tweak-template-social-icon-size', 'tweak-show-page-banner-image'];

	  var destroy = function destroy() {
	    window.removeEventListener('resize', debouncedResize);
	  };

	  setMainContentTopPadding();
	  window.addEventListener('resize', debouncedResize);

	  _core.Tweak.watch(tweaksToWatch, setMainContentTopPadding);

	  return {
	    sync: setMainContentTopPadding,
	    destroy: destroy
	  };
	}

	exports.default = MainContentPositioning;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(204);

	var _constants2 = _interopRequireDefault(_constants);

	var _controller = __webpack_require__(35);

	var _controller2 = _interopRequireDefault(_controller);

	var _core = __webpack_require__(199);

	var _mercuryLoader = __webpack_require__(226);

	var _mercuryLoader2 = _interopRequireDefault(_mercuryLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MercuryLoader(element) {
	  var isCoverPage = document.querySelector('.sqs-slide-container');
	  var isAjaxLoaderEnabled = _core.Tweak.getValue('tweak-site-ajax-loading-enable') === 'true' ? true : false;

	  if (isAjaxLoaderEnabled && !_constants2.default.isAuthenticated && !isCoverPage) {
	    var mercury = new _mercuryLoader2.default({
	      enableCache: true,
	      updateMatrix: [{
	        selector: 'body',
	        updateHTML: false,
	        updateAttrs: true
	      }, {
	        selector: 'head meta',
	        updateHTML: false,
	        updateAttrs: true
	      }, {
	        selector: 'head title',
	        updateHTML: true,
	        updateAttrs: true
	      }, {
	        selector: '.content-outer-wrapper',
	        updateHTML: false,
	        updateAttrs: true
	      }, {
	        selector: '.index-gallery-wrapper',
	        updateHTML: false,
	        updateAttrs: true
	      }, {
	        selector: '.gallery-wrapper',
	        updateHTML: false,
	        updateAttrs: true
	      }, {
	        selector: '.nav-item.folder',
	        updateHTML: false,
	        updateAttrs: true
	      }, {
	        selector: '.main-content',
	        updateHTML: true,
	        updateAttrs: false
	      }, {
	        selector: '.index-nav',
	        updateHTML: true,
	        updateAttrs: false
	      }, {
	        selector: '.page-banner-wrapper',
	        updateHTML: false,
	        updateAttrs: true
	      }, {
	        selector: '.page-banner-image-wrapper',
	        updateHTML: false,
	        updateAttrs: true
	      }, {
	        selector: '.title-card-wrapper',
	        updateHTML: false,
	        updateAttrs: true
	      }, {
	        selector: '.main-navigation',
	        updateHTML: false,
	        updateAttrs: true
	      }, {
	        selector: '.header-social-icons-with-nav',
	        updateHMTL: false,
	        updateAttrs: true
	      }, {
	        selector: '.header-social-icons-on-right',
	        updateHMTL: false,
	        updateAttrs: true
	      }, {
	        selector: '.header-social-icons--overlay',
	        updateHMTL: false,
	        updateAttrs: true
	      }, {
	        selector: '.overlay-nav-wrapper',
	        updateHMTL: false,
	        updateAttrs: true
	      }, { selector: 'meta[property="og:title"]', updateAttrs: true }, { selector: 'meta[property="og:latitude"]', updateAttrs: true }, { selector: 'meta[property="og:longitude"]', updateAttrs: true }, { selector: 'meta[property="og:url"]', updateAttrs: true }, { selector: 'meta[property="og:type"]', updateAttrs: true }, { selector: 'meta[property="og:description"]', updateAttrs: true }, { selector: 'meta[property="og:image"]', updateAttrs: true }, { selector: 'meta[itemprop="name"]', updateAttrs: true }, { selector: 'meta[itemprop="url"]', updateAttrs: true }, { selector: 'meta[itemprop="description"]', updateAttrs: true }, { selector: 'meta[itemprop="thumbnailUrl"]', updateAttrs: true }, { selector: 'meta[itemprop="image"]', updateAttrs: true }, { selector: 'meta[name="twitter:title"]', updateAttrs: true }, { selector: 'meta[name="twitter:image"]', updateAttrs: true }, { selector: 'meta[name="twitter:url"]', updateAttrs: true }, { selector: 'meta[name="twitter:card"]', updateAttrs: true }, { selector: 'meta[name="twitter:description"]', updateAttrs: true }, { selector: 'meta[name="twitter:url"]', updateAttrs: true }, { selector: 'meta[name="description"]', updateAttrs: true }, { selector: 'link[rel="canonical"]', updateAttrs: true }, { selector: 'link[rel="image_src"]', updateAttrs: true }, { selector: 'link[rel="alternate"]', updateAttrs: true }],
	      onClickExceptions: ['[href^="/commerce"]'],
	      onRequestExceptions: ['sqs-slide-container'],
	      onLoadDelay: 500,
	      onLoad: function onLoad() {
	        document.querySelector('.mercury-transition-wrapper').classList.remove('fade');
	        _core.Lifecycle.init();
	        _controller2.default.refresh();
	      },
	      onUnload: function onUnload(e) {
	        _core.Lifecycle.destroy();
	      },
	      onNavigate: function onNavigate() {
	        document.querySelector('.mercury-transition-wrapper').classList.add('fade');
	      }
	    });
	  }
	}

	exports.default = MercuryLoader;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Mercury = __webpack_require__(227);

	var _Mercury2 = _interopRequireDefault(_Mercury);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Mercury2.default;
	module.exports = exports['default'];
	//# sourceMappingURL=index.js.map

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(113);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(114);

	var _createClass3 = _interopRequireDefault(_createClass2);

	__webpack_require__(228);

	var _utils = __webpack_require__(229);

	var _constants = __webpack_require__(230);

	var _validation = __webpack_require__(231);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A configurable, asynchronous, plug-and-play loader for your website.
	 * Intercepts clicks on <a> elements and performs an XHR to that href, and
	 * updates the DOM according to a config object you pass in.
	 *
	 * @class Mercury
	 */
	var Mercury = function () {

	  /**
	   * @constructor
	   * @param {Object} config  The configuration object
	   */
	  function Mercury(config) {
	    (0, _classCallCheck3.default)(this, Mercury);

	    if (!window.history || !window.history.pushState || !document.querySelector) {
	      console.error('Your browser does not support Mercury.');
	      return;
	    }

	    if (!this.validateAndAssignConfig(config)) {
	      return;
	    }

	    if ('scrollRestoration' in window.history) {
	      window.history.scrollRestoration = 'manual';
	    }

	    if (this.enableCache) {
	      this.cache = {};
	    }

	    this.loadEvent = new CustomEvent('mercury:load');
	    this.unloadEvent = new CustomEvent('mercury:unload');

	    this.boundOnClick = this.onClick.bind(this);
	    this.boundOnPopState = this.onPopState.bind(this);

	    this.bindListeners();
	  }

	  /**
	   * Given a config object fed into the constructor, validate each of the
	   * possible config params, and assign them to the class as properties where
	   * appropriate.
	   *
	   * @param {Array}     config.updateMatrix           Array of selectors to update
	   * @param {Boolean}   [config.enableCache]          Save markup in a cache object
	   * @param {Array}     [config.onClickExceptions]    Array of selectors to exclude from AJAX requests
	   * @param {Array}     [config.onRequestExceptions]  Array of selectors to exclude from AJAX requests
	   * @param {Function}  [config.onLoad]               Function to run after the AJAX request
	   * @param {Function}  [config.onUnload]             Function to run before the AJAX request
	   * @param {Number}    [config.timeout]              Timeout in milliseconds for AJAX request
	   * @param {Number}    [config.onLoadDelay]          Delay time in milliseconds for a setTimeout to config.onLoad
	   * @return {Boolean}                                Whether validation passed
	   */


	  (0, _createClass3.default)(Mercury, [{
	    key: 'validateAndAssignConfig',
	    value: function validateAndAssignConfig(_ref) {
	      var updateMatrix = _ref.updateMatrix;
	      var _ref$onClickException = _ref.onClickExceptions;
	      var onClickExceptions = _ref$onClickException === undefined ? [] : _ref$onClickException;
	      var _ref$onRequestExcepti = _ref.onRequestExceptions;
	      var onRequestExceptions = _ref$onRequestExcepti === undefined ? [] : _ref$onRequestExcepti;
	      var enableCache = _ref.enableCache;
	      var timeout = _ref.timeout;
	      var onLoad = _ref.onLoad;
	      var onUnload = _ref.onUnload;
	      var onNavigate = _ref.onNavigate;
	      var onLoadDelay = _ref.onLoadDelay;

	      if (!(0, _validation.isValidUpdateMatrix)(updateMatrix)) {
	        return false;
	      }
	      this.updateMatrix = updateMatrix;

	      this.timeout = (0, _validation.validateOptionalParam)(timeout, 'number', 5000);
	      this.enableCache = (0, _validation.validateOptionalParam)(enableCache, 'boolean', false);
	      this.onLoad = (0, _validation.validateOptionalParam)(onLoad, 'function', function () {});
	      this.onUnload = (0, _validation.validateOptionalParam)(onUnload, 'function', function () {});
	      this.onNavigate = (0, _validation.validateOptionalParam)(onNavigate, 'function', function () {});
	      this.onLoadDelay = (0, _validation.validateOnLoadDelay)(onLoadDelay);

	      if (Array.isArray(onClickExceptions)) {
	        this.onClickExceptionSelector = _constants.BASE_ON_CLICK_EXCEPTIONS.concat(onClickExceptions).join(',');
	      } else {
	        this.onClickExceptionSelector = _constants.BASE_ON_CLICK_EXCEPTIONS.join(',');
	      }

	      if (Array.isArray(onRequestExceptions) && onRequestExceptions.length) {
	        this.onRequestExceptionRegex = new RegExp(onRequestExceptions.join('|'), 'gi');
	      }

	      return true;
	    }

	    /**
	     * To be run before an ajax request is made. Replaces the current history
	     * state with a new one containing the correct scroll values to restore on
	     * popstate.
	     *
	     * @private
	     */

	  }, {
	    key: 'replaceHistoryStateWithScrollPosition',
	    value: function replaceHistoryStateWithScrollPosition() {
	      var url = window.location.pathname + window.location.search;
	      var stateObject = {
	        url: url,
	        scroll: {
	          x: window.pageXOffset,
	          y: window.pageYOffset
	        }
	      };
	      window.history.replaceState(stateObject, document.title, url);
	    }

	    /**
	     * To be run after the request receives responseText. Takes the responseText,
	     * parses it, loops through updateMatrix and updates the appropriate attrs or
	     * innerHTML. Also checks the cache to see if there is any cached HTML, and
	     * uses that instead if so.
	     *
	     * @private
	     * @param  {String} url           URL that the new DOM is from
	     * @param  {String} responseText  Response text from request (the HTML)
	     */

	  }, {
	    key: 'updateDOM',
	    value: function updateDOM(url, responseText) {
	      var _this = this;

	      var parser = new DOMParser();
	      var newDoc = parser.parseFromString(responseText, 'text/html');

	      this.updateMatrix.forEach(function (updateConfig) {
	        var activeElement = document.querySelector(updateConfig.selector);
	        var referenceElement = newDoc.querySelector(updateConfig.selector);
	        if (activeElement && referenceElement) {
	          if (updateConfig.updateHTML) {
	            var hasCached = _this.enableCache && _this.cache[url] && _this.cache[url][updateConfig.selector];
	            var newHTML = hasCached ? _this.cache[url][updateConfig.selector] : referenceElement.innerHTML;
	            activeElement.innerHTML = newHTML;
	          }
	          if (updateConfig.updateAttrs) {
	            (0, _utils.replaceAttributes)(activeElement, referenceElement);
	          }
	        } else if (activeElement) {
	          activeElement.parentNode.removeChild(activeElement);
	        }
	      });
	      window.scrollTo(0, 0);
	    }

	    /**
	     * Handle all the logic behind making the request, including running
	     * beforeRequest, binding the onreadystatechange handler and making the actual
	     * request, handling 401, 403, matches to the exception Regex, timeout, and
	     * error, running modifyPageAndHistory, etc.
	     *
	     * Note: isPopState indicates whether a new history state should be
	     * created for this particular run of makeRequest (we don't need one when this
	     * is triggered by a popstate).
	     *
	     * @private
	     * @param  {String}    url               URL at which to make the request
	     * @param  {Boolean}   isPopState        Whether or not the event is a popstate
	     * @param  {Function}  callback          Callback to call after request is done
	     */

	  }, {
	    key: 'makeRequest',
	    value: function makeRequest(url, isPopState, callback) {
	      var _this2 = this;

	      if (this.onNavigate) {
	        this.onNavigate();
	      }
	      this.replaceHistoryStateWithScrollPosition();

	      this.XHR = new XMLHttpRequest();
	      this.XHR.onreadystatechange = function (e) {
	        if (e.target.readyState !== XMLHttpRequest.DONE) {
	          return;
	        }
	        if (e.target.status !== 200) {
	          window.location = url;
	          return;
	        }
	        try {
	          var isRegExp = _this2.onRequestExceptionRegex.constructor === RegExp;
	          var doesNotMatchExceptions = e.target.responseText.match(_this2.onRequestExceptionRegex) !== null;
	          if (isRegExp && doesNotMatchExceptions) {
	            window.location = url;
	            return;
	          }
	          window.dispatchEvent(_this2.unloadEvent);
	          if (_this2.onLoadDelay) {
	            _this2.onLoadDelayTimeout = window.setTimeout(function () {
	              _this2.modifyPageAndHistory(url, isPopState, callback, e.target.responseText);
	            }, _this2.onLoadDelay);
	          } else {
	            _this2.modifyPageAndHistory(url, isPopState, callback, e.target.responseText);
	          }
	        } catch (error) {
	          console.error(error);
	        }
	      };

	      // Handle XHR timeout (i.e. the request takes too long to complete)
	      this.XHR.ontimeout = function () {
	        window.location = url;
	      };

	      // Handle error state (i.e. internet disconnected)
	      this.XHR.onerror = function () {
	        window.location = url;
	      };

	      this.XHR.open('GET', url, true);
	      this.XHR.timeout = this.timeout;
	      this.XHR.send();
	    }

	    /**
	     * A helper function to makeRequest that inherits the same parameters in addition
	     * to the XHR event
	     * This function updates the history state, calls the callback passed to makeRequest,
	     * and fires the loadEvent
	     *
	     * Note: isPopState indicates whether a new history state should be
	     * created for this particular run of makeRequest (we don't need one when this
	     * is triggered by a popstate).
	     *
	     * @private
	     * @param  {String}    url               URL at which to make the request
	     * @param  {Boolean}   isPopState        Whether or not the event is a popstate
	     * @param  {Function}  callback          Callback to call after request is done
	     * @param  {Object}    responseText      responseText from the XHR
	     */

	  }, {
	    key: 'modifyPageAndHistory',
	    value: function modifyPageAndHistory(url, isPopState, callback, responseText) {
	      if (!isPopState) {
	        var stateObject = { url: url };
	        window.history.pushState(stateObject, document.title, url);
	      }
	      this.updateDOM(url, responseText);
	      if (callback) {
	        callback();
	      }
	      window.dispatchEvent(this.loadEvent);
	    }

	    /**
	     * Given a click event, checks whether one of the modifier keys is pressed.
	     *
	     * @private
	     * @param  {Object}  e   eventObject from click
	     * @return {Boolean}     Whether one of the modifier keys is pressed
	     */

	  }, {
	    key: 'isKeyModified',
	    value: function isKeyModified(e) {
	      return e.metaKey || e.ctrlKey || e.altKey || e.shiftKey;
	    }

	    /**
	     * Global click handler, to be bound to body. When any click occurs, walk up
	     * the DOM to check if it occurs on an A element or one of its parents is an
	     * A element. If so, make the mercury request rather than executing default
	     * behavior, unless the element also matches the onClickExceptionSelector.
	     *
	     * @private
	     * @param  {Object} e   Event object from click event
	     */

	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.isKeyModified(e)) {
	        return;
	      }
	      var target = e.target;
	      while (target && target !== document.body && target.tagName.toUpperCase() !== 'A') {
	        target = target.parentElement;
	      }
	      if (!target || target === document.body || target.matches(this.onClickExceptionSelector)) {
	        return;
	      }
	      e.preventDefault();
	      if (this.XHR) {
	        this.XHR.abort();
	        window.clearTimeout(this.onLoadDelayTimeout);
	      }
	      this.makeRequest(target.getAttribute('href'), false, null);
	    }

	    /**
	     * Global popstate handler, to handle popstate (typically occuring when the
	     * user clicks the back or forward buttons in the browser). Make the proper
	     * request, but also scroll to position stored in the state.
	     *
	     * @private
	     * @param  {Object} e   Event object from popstate
	     */

	  }, {
	    key: 'onPopState',
	    value: function onPopState(e) {
	      if (!e.state) {
	        return;
	      }
	      var callback = function callback() {
	        if (e.state.scroll) {
	          window.scrollTo(e.state.scroll.x, e.state.scroll.y);
	        } else {
	          window.scrollTo(0, 0);
	        }
	      };
	      if (this.XHR) {
	        this.XHR.abort();
	        window.clearTimeout(this.onLoadDelayTimeout);
	      }
	      this.makeRequest(e.state.url, true, callback);
	    }

	    /**
	     * Public method for the user of this class to pass in some HTML to commit to
	     * the class's cache. When the updateDOM call occurs, the method will check
	     * the cache first to see if there's a match for that URL with that selector,
	     * and use the cached HTML if there is.
	     *
	     * The primary use case for this method is situations where other content is
	     * loaded asynchronously, and the user wishes for Mercury to use that content
	     * rather than whatever is on the server. Consider – infinite scrolling blogs
	     * may call commitCacheEntry each time a new load occurs.
	     *
	     * @public
	     * @param  {String} url       URL of cache entry
	     * @param  {String} selector  Selector of node containing cached HTML
	     */

	  }, {
	    key: 'commitCacheEntry',
	    value: function commitCacheEntry(url, selector) {
	      if (!this.enableCache || !url || !selector) {
	        return;
	      }
	      this.cache[url] = this.cache[url] || {};
	      this.cache[url][selector] = document.querySelector(selector).innerHTML;
	    }

	    /**
	     * Bind all event listeners, including click, popstate, load, and unload.
	     * Not a public method – called in the constructor.
	     *
	     * @private
	     */

	  }, {
	    key: 'bindListeners',
	    value: function bindListeners() {
	      document.body.addEventListener('click', this.boundOnClick);
	      window.addEventListener('popstate', this.boundOnPopState);
	      window.addEventListener(this.loadEvent.type, this.onLoad);
	      window.addEventListener(this.unloadEvent.type, this.onUnload);
	    }

	    /**
	     * Clear timeout and unbind all event listeners, including click, popstate, load, and unload.
	     *
	     * @public
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this.XHR) {
	        this.XHR.abort();
	      }
	      window.clearTimeout(this.onLoadDelayTimeout);
	      document.body.removeEventListener('click', this.boundOnClick);
	      window.removeEventListener('popstate', this.boundOnPopState);
	      window.removeEventListener(this.loadEvent.type, this.onLoad);
	      window.removeEventListener(this.unloadEvent.type, this.onUnload);
	    }
	  }]);
	  return Mercury;
	}();

	exports.default = Mercury;
	module.exports = exports['default'];
	//# sourceMappingURL=Mercury.js.map

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(109);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Polyfill for CustomEvent
	 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
	 */

	(function () {
	  if (typeof window.CustomEvent === 'function') {
	    return;
	  }

	  var CustomEvent = function CustomEvent(event) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    params = (0, _assign2.default)({}, { bubbles: false, cancelable: false, detail: undefined }, params);
	    var evt = document.createEvent('CustomEvent');
	    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	    return evt;
	  };

	  CustomEvent.prototype = window.Event.prototype;

	  window.CustomEvent = CustomEvent;
	})();

/***/ },
/* 229 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var replaceAttributes = exports.replaceAttributes = function replaceAttributes(element, referenceElement) {
	  for (var i = 0; i < element.attributes.length; i++) {
	    element.removeAttribute(element.attributes[i].name);
	  }
	  for (var _i = 0; _i < referenceElement.attributes.length; _i++) {
	    element.setAttribute(referenceElement.attributes[_i].name, referenceElement.attributes[_i].value);
	  }
	};
	//# sourceMappingURL=utils.js.map

/***/ },
/* 230 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BASE_ON_CLICK_EXCEPTIONS = exports.BASE_ON_CLICK_EXCEPTIONS = ['a:not([href])', '[href^="http"]', '[href^="#"]', '[href^="/#"]', '[target="_blank"]', '[href^="tel"]', '[href^="mailto"]', '[href^="javascript"]'];
	//# sourceMappingURL=constants.js.map

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateOnLoadDelay = exports.validateOptionalParam = exports.isValidUpdateMatrix = undefined;

	var _typeof2 = __webpack_require__(39);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Given an update matrix (array of update configs for Mercury constructor),
	 * loop through and figure out whether the matrix is valid or not.
	 *
	 * @param  {Array} matrix   Update matrix
	 * @return {Boolean}        Whether the matrix is valid
	 */
	var isValidUpdateMatrix = exports.isValidUpdateMatrix = function isValidUpdateMatrix(matrix) {
	  if (!Array.isArray(matrix)) {
	    console.error('updateMatrix is not an Array');
	    return false;
	  }
	  return matrix.every(function (updateConfig) {
	    var selector = updateConfig.selector;
	    var updateHTML = updateConfig.updateHTML;
	    var updateAttrs = updateConfig.updateAttrs;

	    if (typeof selector !== 'string') {
	      console.error(selector + ' is not a valid selector.');
	      return false;
	    }
	    var nonBooleanUpdateHTML = typeof updateHTML !== 'undefined' && typeof updateHTML !== 'boolean';
	    var nonBooleanUpdateAttrs = typeof updateAttrs !== 'undefined' && typeof updateAttrs !== 'boolean';
	    if (nonBooleanUpdateHTML || nonBooleanUpdateAttrs) {
	      console.error('Non-boolean updateHTML or updateAttrs provided for selector ' + selector + '.');
	      return false;
	    }
	    return true;
	  });
	};

	/**
	 * Given an optional param, validate it against a type (using typeof), return
	 * the fallback if param is invalid or not provided, and return the param if
	 * it's valid.
	 *
	 * @param  {*}      param     Param to validate
	 * @param  {String} type      Expected type of param
	 * @param  {*}      fallback  Param to fall back to if param is invalid
	 * @return {*}                Param or fallback
	 */
	var validateOptionalParam = exports.validateOptionalParam = function validateOptionalParam(param, type, fallback) {
	  if (param === undefined) {
	    return fallback;
	  }
	  if ((typeof param === 'undefined' ? 'undefined' : (0, _typeof3.default)(param)) !== type) {
	    console.error(param + ' is not a ' + type + '.');
	    return fallback;
	  }
	  return param;
	};

	/**
	 * Given a delayTime, validate it against a number type (using typeof),
	 * return 0 if delayTime is invalid or not provided, and return the delayTime
	 * if it's valid.
	 *
	 * @param  {Number}   delayTime   delayTime to validate
	 * @return {Number}               0 or delayTime
	 */
	var validateOnLoadDelay = exports.validateOnLoadDelay = function validateOnLoadDelay(delayTime) {
	  if (delayTime === undefined) {
	    return 0;
	  }
	  if (typeof delayTime !== 'number') {
	    console.error(delayTime + ' is not a number.');
	    return 0;
	  }
	  if (delayTime < 0) {
	    console.error(delayTime + ' is less than 0.');
	    return 0;
	  }
	  return delayTime;
	};
	//# sourceMappingURL=validation.js.map

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _hasTouch = __webpack_require__(203);

	var _hasTouch2 = _interopRequireDefault(_hasTouch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function NavToggle(element) {
	  var touchDeviceOverlayNav = function touchDeviceOverlayNav() {
	    return (0, _hasTouch2.default)() && document.body.classList.contains('mobile-style-nav');
	  };
	  var overlayNavWrapper = element.querySelector('.overlay-nav-wrapper');

	  /*
	   * If the overlay nav wrapper is not scrollable, prevent scrolling on touch devices.
	   * This makes it so the body doesn't scroll under the overlay.
	   */
	  var handleTouchmove = function handleTouchmove(e) {
	    if (!overlayNavWrapper.classList.contains('too-tall')) {
	      e.preventDefault();
	    }
	  };

	  /*
	   * Open or close the nav.
	   * If on a touch device and the overlay nav is active, prevent scrolling if necessary.
	   */
	  var setOverlayNavState = function setOverlayNavState() {
	    if (document.body.classList.contains('nav-open')) {
	      overlayNavWrapper.removeEventListener('touchmove', handleTouchmove, false);
	      document.body.classList.remove('nav-open');
	    } else {
	      if (touchDeviceOverlayNav()) {
	        overlayNavWrapper.addEventListener('touchmove', handleTouchmove, false);
	      }
	      document.body.classList.add('nav-open');
	    }
	  };

	  element.querySelector('.nav-toggle').addEventListener('click', setOverlayNavState);
	}

	exports.default = NavToggle;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * Handles cases where the overlay nav overflows the viewport.
	 */
	function OverlayNavOverflow(element) {
	  var overlayNavWrapper = element.querySelector('.overlay-nav-wrapper');
	  var overlayNavInnerWrapper = element.querySelector('.overlay-nav-inner-wrapper');
	  var header = element.querySelector('.site-header');
	  var hasFolders = element.querySelector('.overlay-nav-inner-wrapper .folder');

	  var init = function init() {
	    var overlayNavHeight = overlayNavInnerWrapper.offsetHeight;
	    var headerHeight = header.offsetHeight;
	    // Use 2x the header height to save the same amount of space below the nav.
	    var availableHeight = window.innerHeight - 2 * headerHeight;

	    if (overlayNavHeight > availableHeight) {
	      overlayNavWrapper.classList.add('too-tall');
	      overlayNavWrapper.style.paddingTop = headerHeight + 'px';
	    }
	  };

	  var resizeHandler = function resizeHandler() {
	    overlayNavWrapper.classList.remove('too-tall');
	    overlayNavWrapper.style.paddingTop = '';
	    init();
	  };

	  var handleFolderClick = function handleFolderClick(e) {
	    if (e.target.parentNode.classList.contains('folder')) {
	      resizeHandler();
	    }
	  };

	  var debouncedResize = (0, _debounce2.default)(resizeHandler, 120);

	  var destroy = function destroy() {
	    overlayNavWrapper.classList.remove('too-tall');
	    overlayNavWrapper.style.paddingTop = '';
	    overlayNavWrapper.removeEventListener('click', handleFolderClick);
	    window.removeEventListener('resize', debouncedResize);
	  };

	  window.addEventListener('resize', debouncedResize);

	  if (hasFolders) {
	    overlayNavWrapper.addEventListener('click', handleFolderClick);
	  }

	  init();

	  return {
	    destroy: destroy
	  };
	}

	exports.default = OverlayNavOverflow;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _core = __webpack_require__(199);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * Load page banner images if necessary.
	 */
	function PageBanners(element) {
	  var bannerImage = void 0;

	  var resizeHandler = function resizeHandler() {
	    if (bannerImage) {
	      _core.ImageLoader.load(bannerImage, {
	        mode: 'fill',
	        load: true
	      });
	    }
	  };

	  var debouncedResize = (0, _debounce2.default)(resizeHandler, 120);

	  var sync = function sync() {
	    bannerImage = element.querySelector('.page-banner-wrapper img');

	    if (bannerImage) {
	      _core.ImageLoader.load(bannerImage, {
	        mode: 'fill',
	        load: true
	      });
	    }
	  };

	  var destroy = function destroy() {
	    window.removeEventListener('resize', debouncedResize);
	  };

	  sync();
	  window.addEventListener('resize', debouncedResize);

	  _core.Tweak.watch(['tweak-page-banner-image-height', 'tweak-show-page-banner-image'], function (tweak) {
	    if (bannerImage) {
	      _core.ImageLoader.load(bannerImage, {
	        mode: 'fill',
	        load: true
	      });
	    }
	  });

	  return {
	    sync: sync,
	    destroy: destroy
	  };
	}

	exports.default = PageBanners;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _from = __webpack_require__(165);

	var _from2 = _interopRequireDefault(_from);

	var _constants = __webpack_require__(204);

	var _constants2 = _interopRequireDefault(_constants);

	var _core = __webpack_require__(199);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * Set the active class on the main navigation when ajax loading pages.
	 */
	function SetActiveNavLink(element) {
	  var isCoverPage = document.querySelector('.sqs-slide-container');
	  var isAjaxLoaderEnabled = _core.Tweak.getValue('tweak-site-ajax-loading-enable') === 'true' ? true : false;
	  var siteTitleOrImage = element.querySelector('.site-branding .image') ? 'h1.image img' : '.site-title';

	  var getClickedLink = function getClickedLink(e) {
	    return e.target.parentNode.getAttribute('href');
	  };

	  var setActiveLink = function setActiveLink(e) {
	    // click will be on inner span, so check the parent a for the href
	    if (e.target.parentNode.hasAttribute('href')) {
	      var clickedLink = 'a[href="' + getClickedLink(e) + '"]';

	      // close all open folders
	      if (element.querySelector('.folder-open')) {
	        (0, _from2.default)(element.querySelectorAll('.folder-open')).forEach(function (folder) {
	          folder.classList.remove('folder-open');
	        });
	      }

	      if (element.querySelector('.main-navigation .active')) {
	        // if there is already an active link, remove it.
	        element.querySelector('.main-navigation .active').classList.remove('active');
	        element.querySelector('.main-navigation--overlay .active').classList.remove('active');
	      }
	      if (element.querySelector('.main-navigation ' + clickedLink)) {
	        // if there is a link in the nav that matches the clicked link, set it to active
	        element.querySelector('.main-navigation ' + clickedLink).parentNode.classList.add('active');
	      }
	      if (element.querySelector('.main-navigation--overlay ' + clickedLink)) {
	        // if there is a link in the overlay nav that matches the clicked link, set it to active
	        element.querySelector('.main-navigation--overlay ' + clickedLink).parentNode.classList.add('active');
	      }
	    }
	  };

	  if (isAjaxLoaderEnabled && !_constants2.default.isAuthenticated && !isCoverPage) {
	    element.querySelector('.main-navigation').addEventListener('click', setActiveLink);
	    element.querySelector('.main-navigation--overlay').addEventListener('click', setActiveLink);
	    element.querySelector(siteTitleOrImage).addEventListener('click', setActiveLink);
	  }
	}

	exports.default = SetActiveNavLink;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _core = __webpack_require__(199);

	/*
	 * Handles fading the social icons in the header in to match the staggered nav link fade in.
	 */
	function SocialIconFadein(element) {
	  var headerIconsWithNav = element.querySelector('.header-social-icons-with-nav');

	  if (!headerIconsWithNav) {
	    return;
	  }

	  var navToggle = element.querySelector('.nav-toggle');
	  var socialIconsOverlay = element.querySelector('.header-social-icons--overlay');
	  var nextToLastNavItem = element.querySelector('.nav-item:nth-last-child(2)');
	  // get 2nd to last since the cart is always the last, but isn't always visible.
	  var isNavOnRight = _core.Tweak.getValue('tweak-nav-position').toLowerCase() === 'right';

	  /*
	   * Vendor prefix fix for transitionEnd event.
	   */
	  var whichTransitionEvent = function whichTransitionEvent() {
	    var el = document.createElement('transition-tester');

	    var transitions = {
	      'transition': 'transitionend',
	      'OTransition': 'oTransitionEnd',
	      'MozTransition': 'transitionend',
	      'WebkitTransition': 'webkitTransitionEnd'
	    };

	    for (var t in transitions) {
	      if (el.style[t] !== undefined) {
	        return transitions[t];
	      }
	    }
	  };

	  var vendorTransitionEvent = whichTransitionEvent();

	  var fadeIn = function fadeIn(e) {
	    if (e.propertyName === 'opacity') {
	      if (document.body.classList.contains('nav-open')) {
	        headerIconsWithNav.classList.add('show');
	        socialIconsOverlay.classList.add('show');
	      } else {
	        headerIconsWithNav.classList.remove('show');
	        socialIconsOverlay.classList.remove('show');
	      }
	      nextToLastNavItem.removeEventListener(vendorTransitionEvent, fadeIn);
	    }
	  };

	  var transitionListener = function transitionListener() {
	    if (!isNavOnRight || document.body.classList.contains('mobile-style-nav')) {
	      nextToLastNavItem.addEventListener(vendorTransitionEvent, fadeIn);
	    } else if (document.body.classList.contains('nav-open')) {
	      headerIconsWithNav.classList.add('show');
	    } else {
	      headerIconsWithNav.classList.remove('show');
	    }
	  };

	  var destroy = function destroy() {
	    navToggle.removeEventListener('click', transitionListener);
	    nextToLastNavItem.removeEventListener(vendorTransitionEvent, fadeIn);
	  };

	  navToggle.addEventListener('click', transitionListener);

	  return {
	    destroy: destroy
	  };
	}

	exports.default = SocialIconFadein;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _throttle = __webpack_require__(213);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _debounce = __webpack_require__(171);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _core = __webpack_require__(199);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * Handles positioning of title/desc in overlay on collections
	 * as well as the scroll and click listeners that dismiss the overlay.
	 */
	function TitleCardHandler(element) {
	  var tweaksToWatch = ['tweak-show-gallery-title-overlay', 'tweak-show-page-title-overlay', 'tweak-header-outer-padding', 'tweak-display-social-icons', 'tweak-site-title-font', 'tweak-site-tagline-font', 'tweak-logo-height', 'tweak-nav-font', 'tweak-menu-icon-size', 'tweak-nav-style', 'tweak-template-social-icon-size', 'tweak-gallery-title-position', 'tweak-page-title-position'];

	  var titleDescInerWrapper = element.querySelector('.title-desc-inner-wrapper');
	  var titleCard = element.querySelector('.title-card');
	  var isGallery = document.body.classList.contains('collection-type-gallery');

	  var getHeaderHeight = function getHeaderHeight() {
	    return document.querySelector('.site-header').offsetHeight;
	  };

	  var setMarginIfTop = function setMarginIfTop() {
	    // are you in a gallery or other collection?
	    var tweakName = isGallery ? 'tweak-gallery-title-position' : 'tweak-page-title-position';
	    var titleIsTop = _core.Tweak.getValue(tweakName).toLowerCase().indexOf('top') >= 0;

	    // if the title/desc are not positioned on the top, no need to set padding.
	    if (!titleIsTop) {
	      titleDescInerWrapper.style.marginTop = '';
	      return;
	    }

	    titleDescInerWrapper.style.marginTop = getHeaderHeight() + 'px';
	  };

	  /*
	   * Dismiss the overlay once you start scrolling and re-show when you scroll
	   * back to the top of the page.
	   */
	  var hideTitleCardOnScroll = function hideTitleCardOnScroll() {
	    if (window.pageYOffset > 0) {
	      element.classList.add('hide-title-card');
	    } else {
	      element.classList.remove('hide-title-card');
	    }
	  };

	  /*
	   * Dismiss the overlay when you click it.
	   */
	  var handleTitleCardClick = function handleTitleCardClick() {
	    element.classList.add('hide-title-card');
	  };

	  var debouncedResize = (0, _debounce2.default)(setMarginIfTop, 120);
	  var throttledScroll = (0, _throttle2.default)(hideTitleCardOnScroll, 10);

	  var bindEventListeners = function bindEventListeners() {
	    window.addEventListener('scroll', throttledScroll);
	    titleCard.addEventListener('click', handleTitleCardClick);
	    window.addEventListener('resize', debouncedResize);
	  };

	  var determineEventListeners = function determineEventListeners() {
	    var titleOverlaySetting = isGallery ? _core.Tweak.getValue('tweak-show-gallery-title-overlay').toLowerCase() : _core.Tweak.getValue('tweak-show-page-title-overlay').toLowerCase();

	    if (titleOverlaySetting !== 'never') {
	      bindEventListeners();
	    }
	  };

	  var destroy = function destroy() {
	    window.removeEventListener('scroll', throttledScroll);
	    titleCard.removeEventListener('click', handleTitleCardClick);
	    window.removeEventListener('resize', debouncedResize);
	  };

	  var init = function init() {
	    setMarginIfTop();
	  };

	  init();
	  determineEventListeners();

	  _core.Tweak.watch(tweaksToWatch, function (tweak) {
	    if (tweak.name === 'tweak-show-gallery-title-overlay' || tweak.name === 'tweak-show-page-title-overlay') {
	      destroy();

	      if (tweak.value.toLowerCase() !== 'never') {
	        bindEventListeners();
	      }
	    } else {
	      setMarginIfTop();
	    }
	  });

	  return {
	    destroy: destroy
	  };
	}

	exports.default = TitleCardHandler;

/***/ }
/******/ ]);