/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Application.ts":
/*!****************************!*\
  !*** ./src/Application.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Application = /** @class */ (function () {\n    function Application(info, bird) {\n        this.gravity = 1.5;\n        this.gravitySpeed = 0;\n        this.canApplyGravity = true;\n        this.y = 10;\n        this.win = info;\n        this.bird = bird;\n    }\n    Application.prototype.initialise = function (canvas) {\n        this.canvas = canvas;\n        this.ctx = this.canvas.getContext('2d');\n    };\n    Application.prototype.setWindowInfo = function (info) {\n        this.win = info;\n        if (this.canvas === undefined)\n            throw new Error('Canvas cannot be undefined');\n        this.canvas.width = info.w;\n        this.canvas.height = info.h;\n    };\n    Application.prototype.draw = function () {\n        if (this.ctx === undefined)\n            throw new Error('Canvas cannot be undefined');\n        this.ctx.fillStyle = 'black';\n        //this.ctx.clearRect(0,0,  this.win.w , this.win.h)\n        this.ctx.fillRect(0, 0, this.win.w, this.win.h);\n        console.log('drawing');\n        var birdsAlt = this.win.h - (this.bird.y);\n        //this.ctx.fillStyle = 'blue'\n        //this.ctx.fillRect(10, this.y, 20, 20)\n        //this.y += 15        \n        this.bird.draw(this.ctx);\n    };\n    return Application;\n}());\nexports.Application = Application;\n\n\n//# sourceURL=webpack:///./src/Application.ts?");

/***/ }),

/***/ "./src/Bird.ts":
/*!*********************!*\
  !*** ./src/Bird.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Bird = /** @class */ (function () {\n    function Bird(currentAltitude) {\n        var _this = this;\n        this.x = 100;\n        this.y = 0;\n        this.width = 50;\n        this.height = 50;\n        this.velocity = 0;\n        this.gravity = 1;\n        this.lift = -15;\n        this.altitude = currentAltitude;\n        this.y = this.altitude / 2;\n        document.addEventListener('keydown', function () {\n            _this.up();\n        });\n    }\n    Bird.prototype.up = function () {\n        this.velocity += this.lift;\n    };\n    Bird.prototype.draw = function (context) {\n        this.velocity += this.gravity;\n        this.velocity *= 0.99;\n        this.y += this.velocity;\n        if (this.y > this.altitude - this.width / 2) {\n            this.y = this.altitude - this.width / 2;\n            this.velocity = 0;\n        }\n        context.beginPath();\n        context.fillStyle = 'red';\n        context.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI);\n        context.fill();\n        context.closePath();\n    };\n    return Bird;\n}());\nexports.Bird = Bird;\n\n\n//# sourceURL=webpack:///./src/Bird.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Application_1 = __webpack_require__(/*! ./Application */ \"./src/Application.ts\");\nvar Bird_1 = __webpack_require__(/*! ./Bird */ \"./src/Bird.ts\");\nvar animate = function (application) {\n    requestAnimationFrame(function () {\n        application.draw();\n        animate(application);\n    });\n};\nvar runApp = function () {\n    var winHeight = 800;\n    var winWidth = winHeight;\n    var bird = new Bird_1.Bird(winHeight);\n    var application = new Application_1.Application({\n        w: winWidth,\n        h: winHeight\n    }, bird);\n    window.addEventListener('load', function () {\n        application.initialise(document.createElement('canvas'));\n        animate(application);\n        document.addEventListener('dblclick', function () {\n        });\n    });\n    return function () {\n        if (application.canvas === undefined)\n            return;\n        if (application.ctx === undefined)\n            return;\n        var canvas = application.canvas;\n        // application.setWindowInfo({\n        //     w: window.innerWidth,\n        //     h: window.innerHeight\n        // })\n        application.setWindowInfo({\n            w: winWidth,\n            h: winHeight\n        });\n        document.body.appendChild(canvas);\n    };\n};\nvar app = runApp();\nwindow.addEventListener('load', app);\nwindow.addEventListener('resize', app);\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });