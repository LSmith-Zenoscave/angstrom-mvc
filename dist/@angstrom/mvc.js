(function webpackUniversalModuleDefinition (root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') { module.exports = factory() } else if (typeof define === 'function' && define.amd) { define('@angstrom/mvc', [], factory) } else if (typeof exports === 'object') { exports['@angstrom/mvc'] = factory() } else { root['@angstrom/mvc'] = factory() }
})(typeof self !== 'undefined' ? self : this, function () {
  return /******/ (function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {}
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__ (moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/ 		if (installedModules[moduleId]) {
        /******/ 			return installedModules[moduleId].exports
        /******/ 		}
      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		var module = installedModules[moduleId] = {
        /******/ 			i: moduleId,
        /******/ 			l: false,
        /******/ 			exports: {}
        /******/ 		}
      /******/
      /******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
      /******/
      /******/ 		// Flag the module as loaded
      /******/ 		module.l = true
      /******/
      /******/ 		// Return the exports of the module
      /******/ 		return module.exports
      /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function (exports, name, getter) {
      /******/ 		if (!__webpack_require__.o(exports, name)) {
        /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter })
        /******/ 		}
      /******/ 	}
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function (exports) {
      /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/ 		}
      /******/ 		Object.defineProperty(exports, '__esModule', { value: true })
      /******/ 	}
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function (value, mode) {
      /******/ 		if (mode & 1) value = __webpack_require__(value)
      /******/ 		if (mode & 8) return value
      /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value
      /******/ 		var ns = Object.create(null)
      /******/ 		__webpack_require__.r(ns)
      /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value })
      /******/ 		if (mode & 2 && typeof value !== 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key] }.bind(null, key))
      /******/ 		return ns
      /******/ 	}
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function (module) {
      /******/ 		var getter = module && module.__esModule
      /******/ 			? function getDefault () { return module['default'] }
      /******/ 			: function getModuleExports () { return module }
      /******/ 		__webpack_require__.d(getter, 'a', getter)
      /******/ 		return getter
      /******/ 	}
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property) }
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = ''
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = './src/index.js')
    /******/ })
  /************************************************************************/
  /******/ ({

    /***/ './src/index.js':
    /*! **********************!*\
  !*** ./src/index.js ***!
  \**********************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict'
      eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nObject.defineProperty(exports, "Model", {\n  enumerable: true,\n  get: function get() {\n    return _model.default;\n  }\n});\nObject.defineProperty(exports, "View", {\n  enumerable: true,\n  get: function get() {\n    return _view.default;\n  }\n});\n\nvar _model = _interopRequireDefault(__webpack_require__(/*! ./model */ "./src/model.js"));\n\nvar _view = _interopRequireDefault(__webpack_require__(/*! ./view */ "./src/View.js"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://@angstrom/mvc/./src/index.js?')
      /***/ },

    /***/ './src/model.js':
    /*! **********************!*\
  !*** ./src/model.js ***!
  \**********************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict'
      eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Model =\n/*#__PURE__*/\nfunction () {\n  function Model(state) {\n    _classCallCheck(this, Model);\n\n    this.$state = state;\n    this.observers = {};\n  }\n\n  _createClass(Model, [{\n    key: "notifyAll",\n    value: function notifyAll(bindValue) {\n      var _this = this;\n\n      this.observers[bindValue].forEach(function (observer) {\n        return observer.update(_this.$state);\n      });\n    }\n  }, {\n    key: "registerObserver",\n    value: function registerObserver(bindValue, observer) {\n      (this.observers[bindValue] = this.observers[bindValue] || []).push(observer);\n    }\n  }]);\n\n  return Model;\n}();\n\nexports.default = Model;\nmodule.exports = exports["default"];\n\n//# sourceURL=webpack://@angstrom/mvc/./src/model.js?')
      /***/ },

    /***/ './src/view.js':
    /*! *********************!*\
  !*** ./src/View.js ***!
  \*********************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict'
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction valuate(template, state) {\n  return template.replace(/{{\\s*([a-z][a-z_0-9]*)\\s*}}/ig, function (orig, key) {\n    var ret = state[key];\n    return !ret ? orig : ret;\n  });\n}\n\nfunction htmlToNodes(html) {\n  var template = document.createElement('template');\n  template.innerHTML = html.trim();\n  return template.content.childNodes;\n}\n\nvar View =\n/*#__PURE__*/\nfunction () {\n  function View(element, template, update) {\n    _classCallCheck(this, View);\n\n    this.element = element;\n    this.template = template;\n    this._update = update;\n  }\n\n  _createClass(View, [{\n    key: \"update\",\n    value: function update(state) {\n      var self = this;\n\n      while (this.element.hasChildNodes()) {\n        this.element.removeChild(this.element.firstChild);\n      }\n\n      htmlToNodes(valuate(this.template, state)).forEach(function (node) {\n        self.element.appendChild(node);\n      });\n\n      this._update.apply(this, arguments);\n    }\n  }]);\n\n  return View;\n}();\n\nexports.default = View;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack://@angstrom/mvc/./src/View.js?")
      /***/ }

    /******/ })
})
