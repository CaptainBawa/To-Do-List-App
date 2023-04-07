/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  background-color: rgba(218, 218, 218, 0.242);\\n}\\n\\nheader {\\n  text-align: center;\\n  margin: 2%;\\n}\\n\\n.todo-container {\\n  height: auto;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.sub-container {\\n  max-width: 768px;\\n  width: 80%;\\n  background-color: #fff;\\n  border: 1px solid rgba(139, 134, 134, 0.242);\\n  box-shadow: 0 2px 5px rgba(255, 0, 0, 0.8);\\n}\\n\\n.icon {\\n  color: #acadaf;\\n}\\n\\n.dots-icon {\\n  height: 40px;\\n  width: 40px;\\n}\\n\\n.hidden-icon {\\n  display: none;\\n  height: 40px;\\n  width: 40px;\\n}\\n\\n.content-container {\\n  height: 4rem;\\n  border-bottom: 1px solid rgba(139, 134, 134, 0.242);\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding-inline: 1rem;\\n}\\n\\n.userInput {\\n  height: auto;\\n  width: 98%;\\n  border: none;\\n  font-size: 1.5rem;\\n  font-style: italic;\\n  color: rgba(139, 134, 134, 0.8);\\n}\\n\\n.userInput:focus {\\n  outline: none;\\n}\\n\\n.add-icon {\\n  width: 2%;\\n}\\n\\n.content-sub-container {\\n  display: flex;\\n  align-items: center;\\n  gap: 1rem;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.delete {\\n  border: none;\\n  background-color: transparent;\\n  margin-right: -2%;\\n}\\n\\n.userTask {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.5rem;\\n  height: auto;\\n  width: 90%;\\n  border: none;\\n}\\n\\n.userTask:focus {\\n  outline: none;\\n}\\n\\n.textarea {\\n  display: none;\\n  align-items: center;\\n  font-size: 1.5rem;\\n  height: 100%;\\n  width: 90%;\\n  border: none;\\n  resize: none;\\n}\\n\\n.clear-btn {\\n  width: 100%;\\n  border: none;\\n  text-align: center;\\n  font-size: 1.5rem;\\n  justify-content: center;\\n  color: rgba(139, 134, 134, 0.8);\\n}\\n\\nspan,\\ni,\\n.clear-btn,\\n.check {\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n\n\nconst clearCompleted = () => {\n  const filteredTasks = _modules_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter((task) => !task.completed);\n  filteredTasks.forEach((task, index) => {\n    task.index = index + 1;\n  });\n  _modules_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length = filteredTasks.length;\n  _modules_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(0, _modules_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length, ...filteredTasks);\n  localStorage.setItem('array', JSON.stringify(_modules_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompleted);\n\n\n//# sourceURL=webpack://webpack/./src/clear.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\nconst tasks = JSON.parse(localStorage.getItem('array')) || [];\n\nconst addTask = () => {\n  const userInput = document.querySelector('.userInput');\n  const val = userInput.value.trim();\n  if ((val.length !== 0)) {\n    const taskObj = {\n      description: `${userInput.value}`,\n      completed: false,\n      index: tasks.length + 1,\n    };\n    tasks.push(taskObj);\n    localStorage.setItem('array', JSON.stringify(tasks));\n    userInput.value = '';\n  }\n};\n\n//# sourceURL=webpack://webpack/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/delete.js":
/*!*******************************!*\
  !*** ./src/modules/delete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remove)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n\n\nfunction remove() {\n  const hidden = document.querySelectorAll('.hidden-icon');\n  const taskContainer = document.querySelector('.task-container');\n  const index = Array.from(hidden).indexOf(this);\n  if ((_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].completed) === true) {\n    const del = this.parentNode;\n    taskContainer.removeChild(del);\n    _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(index, 1);\n    for (let i = 0; i < _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i += 1) {\n      _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].index = i + 1;\n    }\n    localStorage.setItem('array', JSON.stringify(_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n  }\n}\n\n//# sourceURL=webpack://webpack/./src/modules/delete.js?");

/***/ }),

/***/ "./src/modules/edit.js":
/*!*****************************!*\
  !*** ./src/modules/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n\n\nfunction edit(event) {\n  const userTask = document.querySelectorAll('.userTask');\n  const index = Array.from(userTask).indexOf(event.target);\n  const container = document.querySelectorAll('#container');\n  const dotsIcon = document.querySelectorAll('.dots-icon');\n  const hidden = document.querySelectorAll('.hidden-icon');\n\n  if (event.key === 'Enter' || event.key === 'Escape') {\n    userTask[index].value = this.value;\n    userTask[index].blur();\n    container[index].style.backgroundColor = '#fff';\n    this.style.backgroundColor = '#fff';\n    dotsIcon[index].style.display = 'block';\n    hidden[index].style.display = 'none';\n    _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].description = userTask[index].value;\n    localStorage.setItem('array', JSON.stringify(_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);\n\n\n//# sourceURL=webpack://webpack/./src/modules/edit.js?");

/***/ }),

/***/ "./src/modules/modify.js":
/*!*******************************!*\
  !*** ./src/modules/modify.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.js */ \"./src/modules/delete.js\");\n\n\n\nfunction modify() {\n  const userTask = document.querySelectorAll('.userTask');\n  const dotsIcon = document.querySelectorAll('.dots-icon');\n  const hidden = document.querySelectorAll('.hidden-icon');\n  const container = document.querySelectorAll('#container');\n  const body = document.querySelector('body');\n\n  const modi = (event) => {\n    const index = Array.from(userTask).indexOf(this);\n    hidden[index].removeEventListener('click', _delete_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n    if (event.target !== this) {\n      const userValue = this.value;\n      userTask[index].value = userValue;\n      _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].description = userTask[index].value;\n      localStorage.setItem('array', JSON.stringify(_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n      container[index].style.backgroundColor = '#fff';\n      this.style.backgroundColor = '#fff';\n      dotsIcon[index].style.display = 'block';\n      hidden[index].style.display = 'none';\n      body.removeEventListener('click', modi);\n      hidden[index].addEventListener('click', _delete_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    } else if (event.target === this) {\n      container[index].style.backgroundColor = '#FFD700';\n      this.style.backgroundColor = '#FFD700';\n      dotsIcon[index].style.display = 'none';\n      hidden[index].style.display = 'block';\n    }\n  };\n\n  body.addEventListener('click', modi);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modify);\n\n\n//# sourceURL=webpack://webpack/./src/modules/modify.js?");

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n\n\nconst taskStatus = (checkbox) => {\n  const index = Array.from(document.querySelectorAll('.check')).indexOf(checkbox);\n  const userTask = document.querySelectorAll('.userTask')[index];\n  const hidden = document.querySelectorAll('.hidden-icon')[index];\n  const dotsIcon = document.querySelectorAll('.dots-icon')[index];\n  const completed = checkbox.checked;\n\n  userTask.style.textDecoration = completed ? 'line-through' : 'none';\n  userTask.style.color = completed ? 'rgba(139, 134, 134, 0.8)' : 'inherit';\n  userTask.disabled = completed;\n  dotsIcon.style.display = completed ? 'none' : 'block';\n  hidden.style.display = completed ? 'block' : 'none';\n  _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].completed = completed;\n  localStorage.setItem('array', JSON.stringify(_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskStatus);\n\n\n//# sourceURL=webpack://webpack/./src/modules/status.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_delete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/delete.js */ \"./src/modules/delete.js\");\n/* harmony import */ var _modules_status_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/status.js */ \"./src/modules/status.js\");\n/* harmony import */ var _modules_edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/edit.js */ \"./src/modules/edit.js\");\n/* harmony import */ var _modules_modify_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modify.js */ \"./src/modules/modify.js\");\n/* harmony import */ var _clear_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clear.js */ \"./src/clear.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst display = () => {\n  const taskContainer = document.querySelector('.task-container');\n  let elements = '';\n  for (let i = 0; i < _modules_add_js__WEBPACK_IMPORTED_MODULE_1__.tasks.length; i += 1) {\n    elements += `<div id=\"container\" class=\"content-container\"><div class=\"content-sub-container\">\n    <input class=\"check\" type=\"checkbox\">\n    <input class=\"userTask style\" value=\"${_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.tasks[i].description}\">\n    </div><button class=\"dots-icon delete\"><i class=\"fa-solid fa-ellipsis-vertical\" style=\"color: #acadaf\"></i>\n    </button><button class=\"hidden-icon delete\"><i class=\"fa-solid fa-trash-can\"></i></button></div>`;\n  }\n  taskContainer.innerHTML = elements;\n  for (let i = 0; i < _modules_add_js__WEBPACK_IMPORTED_MODULE_1__.tasks.length; i += 1) {\n    const dotsIcon = document.querySelectorAll('.dots-icon');\n    const hidden = document.querySelectorAll('.hidden-icon');\n    hidden[i].addEventListener('click', _modules_delete_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const userTask = document.querySelectorAll('.userTask');\n    userTask[i].addEventListener('keyup', _modules_edit_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    userTask[i].addEventListener('click', _modules_modify_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const checkbox = document.querySelectorAll('.check');\n    for (let i = 0; i < checkbox.length; i += 1) {\n      checkbox[i].addEventListener('click', () => {\n        (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(checkbox[i]);\n      });\n    }\n\n    if (_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.tasks[i].completed === true) {\n      userTask[i].style.textDecoration = 'line-through';\n      userTask[i].style.color = 'rgba(139, 134, 134, 0.8)';\n      userTask[i].disabled = true;\n      dotsIcon[i].style.display = 'none';\n      hidden[i].style.display = 'block';\n      checkbox[i].checked = true;\n    } else {\n      userTask[i].style.textDecoration = 'none';\n      userTask[i].style.color = 'inherit';\n      userTask[i].disabled = false;\n      dotsIcon[i].style.display = 'block';\n      hidden[i].style.display = 'none';\n      checkbox[i].checked = false;\n    }\n  }\n  const clearBtn = document.querySelector('.clear-btn');\n  clearBtn.addEventListener('click', _clear_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  clearBtn.addEventListener('click', display);\n};\n\nconst addIcon = document.querySelector('.add-icon');\nconst form = document.querySelector('.form');\naddIcon.addEventListener('click', _modules_add_js__WEBPACK_IMPORTED_MODULE_1__.addTask);\naddIcon.addEventListener('click', display);\nform.addEventListener('submit', (event) => {\n  event.preventDefault();\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.addTask)();\n  display();\n});\n\ndisplay();\n\n//# sourceURL=webpack://webpack/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;