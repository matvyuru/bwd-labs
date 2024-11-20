/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    font-family: Times, serif;\n    background-color: #f2dfd5;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background: #36261f;\n    color: white;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    padding: 10px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nh1 {\n    margin-top: 12%;\n}\n\nheader .logo {\n    display: inline-block;\n    padding: 15px;\n    font-size: 1.5em;\n}\n\n/* Навигация */\nnav {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\nimg{\n    width: 75%;\n}\n\nnav .nav {\n    list-style: none;\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n.nav li {\n    margin: 0 15px;\n}\n\nul.nav {\n    list-style: none;\n    padding: 0;\n    display: flex;\n}\n\nul.nav li {\n    padding: 15px;\n}\n\nul.nav li.active {\n    font-weight: bold;\n    color: #ffcc00;\n}\n\nul.nav li a {\n    color: white;\n    text-decoration: none;\n}\n\n.burger-menu {\n    display: none; /* Скрыто по умолчанию, показано на мобильных */\n    flex-direction: column;\n    cursor: pointer;\n    margin-left: auto; /* Сдвигаем бургер-меню к правому краю */\n    margin-right: 40px;\n}\n\n.burger-menu div {\n    height: 3px;\n    width: 25px;\n    background: white;\n    margin: 2px 0;\n}\n.burger-menu.line{\n    color: red;\n}\n\n/* Основной контент */\nmain {\n    padding: 100px 20px 20px; /* отступ для фиксированного заголовка */\n}\n\ndialog {\n    border: none;\n    padding: 20px;\n    border-radius: 8px;\n}\n\n/* Стили карточек задач */\n.task-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px; /* Отступ между карточками */\n    margin-top: 20px;\n    flex-grow:1;\n}\n\n.task-card {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    padding: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: calc(33.33% - 10px); /* 3 карточки в строке */\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.task-card.completed {\n    background-color: #d4edda;\n}\n\n.task-card.in-progress {\n    background-color: #ffeeba;\n}\n\n.task-card:hover {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 1);\n}\n\n/* Кнопки */\nbutton {\n    padding: 10px 20px;\n    background-color: #4d2c0f;\n    color: white;\n    border: none;\n    border-radius: 5px;\n\n    cursor: pointer;\n    transition: background 0.3s, transform 0.3s;\n}\n\nbutton:hover {\n    background-color: #d4aa85;\n    transform: scale(1.05);\n}\n\nbutton:focus {\n    outline: 2px solid #d4aa85; /* Обводка при фокусе */\n}\n\n.delete-button {\n    background-color: #000000;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 5px 10px;\n    cursor: pointer;\n    transition: background 0.5s;\n}\n\n.delete-button:hover {\n    background-color: #e01616;\n    color: black;\n}\n\n.sidebar {\n    position: fixed;\n    left: -250px; /* Скрываем сайдбар вне экрана */\n    top: 0;\n    width: 250px;\n    height: 100%;\n    background-color: #333;\n    color: white;\n    transition: left 0.3s ease; /* Плавная анимация перемещения */\n    z-index: 1000; /* Поверх основного контента */\n}\n\n/* Когда сайдбар активен, показываем его */\n.sidebar.active {\n    left: 0; /* Показываем сайдбар */\n}\n\n\n/* Анимации */\n@keyframes slideIn {\n    from {\n        transform: translateY(-100%);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n\n/* Заголовки */\nbody {\n    font-family: Times, serif;\n    background-color: #f2dfd5;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background: #36261f;\n    color: white;\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    padding: 10px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader .logo {\n    display: inline-block;\n    padding: 15px;\n    font-size: 1.5em;\n}\n\n/* Заголовки */\nh1 {\n    color: #453229;\n    font-size: 3em;\n    text-align: center;\n}\n\n/* Навигация */\nnav {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\nnav .nav {\n    list-style: none;\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n.nav li {\n    margin: 0 15px;\n}\n\nul.nav {\n    list-style: none;\n    padding: 0;\n    display: flex;\n}\n\nul.nav li {\n    padding: 15px;\n}\n\nul.nav li.active {\n    font-weight: bold;\n    color: #ffcc00;\n}\n\nul.nav li a {\n    color: white;\n    text-decoration: none;\n}\n\n.burger-menu {\n    display: none; /* Скрыто по умолчанию, показано на мобильных */\n    flex-direction: column;\n    cursor: pointer;\n    margin-left: auto; /* Сдвигаем бургер-меню к правому краю */\n    margin-right: 40px;\n}\n\n.burger-menu .line {\n    width: 25px;\n    height: 3px;\n    background: white;\n    margin: 4px 0;\n    transition: 0.3s;\n}\n\n.burger-menu.active .line:nth-child(1) {\n    transform: translateY(7px) rotate(45deg);\n}\n\n.burger-menu.active .line:nth-child(2) {\n    opacity: 0;\n}\n\n.burger-menu.active .line:nth-child(3) {\n    transform: translateY(-7px) rotate(-45deg);\n}\n\n/* Основной контент */\nmain {\n    padding: 100px 20px 20px; /* Отступ для фиксированного заголовка */\n}\n\n.dialog {\n    border: none;\n    padding: 20px;\n    border-radius: 8px;\n}\n\n/* Стили карточек задач */\n.task-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px; /* Отступ между карточками */\n    margin-top: 20px;\n}\n\n.task-card {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    padding: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: calc(30% - 10px); /* 3 карточки в строке */\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    margin-bottom: 10px; /* Отступ между карточками */\n    transition: background-color 0.3s; /* Плавный переход цвета */\n}\n\n.task-card.in-progress {\n    background-color: #fff3cd; /* Желтый цвет для задач в работе */\n}\n\n.task-card.completed {\n    background-color: #d4edda; /* Зеленый цвет для выполненной задачи */\n}\n\n.task-card:hover {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 1);\n}\n\n/* Кнопки */\nbutton {\n    padding: 10px 20px;\n    background-color: #4d2c0f;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background 0.3s, transform 0.3s;\n}\n\nbutton:hover {\n    background-color: #d4aa85;\n    transform: scale(1.05);\n}\n\nbutton:focus {\n    outline: 2px solid #d4aa85; /* Обводка при фокусе */\n}\n\n.delete-button {\n    background-color: #000000;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 5px 10px;\n    cursor: pointer;\n    transition: background 0.5s;\n    margin-left: 10px;\n}\n\n.delete-button:hover {\n    background-color: #e01616;\n    color: black;\n}\n\n/* Сайдбар */\n.sidebar {\n    position: fixed;\n    left: -250px; /* Скрываем сайдбар вне экрана */\n    top: 0;\n    width: 250px;\n    height: 100%;\n    background-color: #333;\n    color: white;\n    transition: left 0.3s ease; /* Плавная анимация перемещения */\n    z-index: 1000; /* Поверх основного контента */\n}\n\n.sidebar {\n    width: 200px;  \n    background-color: #36261f;  \n    padding: 20px;  \n    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);  \n}\n\n.sidebar ul {\n    list-style-type: none;  /* Убираем маркеры списка */\n    padding: 0;  /* Убираем отступы */\n}\n\n.sidebar li {\n    margin: 10px 0;  /* Отступы между элементами списка */\n}\n\n.sidebar li a {\n    text-decoration: none;  /* Убираем подчеркивание у ссылок */\n    color: white;  /* Цвет текста ссылок */\n    display: block;  /* Делаем ссылки блочными, чтобы заполнить всю ширину li */\n    padding: 10px;  /* Внутренние отступы для ссылок */\n    border-radius: 4px;  /* Закругленные углы */\n    transition: background-color 0.3s;  /* Плавный переход фона при наведении */\n}\n\n.sidebar li a:hover {\n    background-color: #ddd;  \n}\n\n.sidebar li.active {\n    font-weight: bold;  \n    color: #ffcc00; \n}\n\n\n.sidebar.active {\n    left: 0; \n}\n\n/* Анимации */\n@keyframes slideIn {\n    from {\n        transform: translateY(-100%);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n\n/* Медиа-запросы */\n@media (max-width: 768px) {\n    ul.nav li{\n        display: none; /* Скрываем навигационное меню по умолчанию */\n    }\n\n    .burger-menu {\n        display: flex; /* Показываем бургер-меню на мобильных устройствах */\n        flex-direction: column;\n    }\n\n    main {\n        padding: 10px; \n    }\n\n    .task-card {\n        width: calc(40%); /* 2 карточки на планшетах */\n    }\n}\n\n@media (min-width: 769px) {\n    .burger-menu {\n        display: none; \n    }\n}\n\n.sidebar li {\n    color: white;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bwd-labs-lesson/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://bwd-labs-lesson/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://bwd-labs-lesson/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://bwd-labs-lesson/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bwd-labs-lesson/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bwd-labs-lesson/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bwd-labs-lesson/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bwd-labs-lesson/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bwd-labs-lesson/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bwd-labs-lesson/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://bwd-labs-lesson/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("const dialog = document.getElementById('taskDialog');\n\nfunction closeDialog() {\n    if (dialog) {\n        dialog.close();\n    }\n}\n\nif (document.getElementById('closeDialog')) {\n    document.getElementById('closeDialog').addEventListener('click', closeDialog);\n}\n\ndocument.addEventListener('click', (event) => {\n    if (event.target === dialog) {\n        closeDialog();\n    }\n});\n\n// Добавление закрытия диалога по нажатию Escape\ndocument.addEventListener('keydown', (event) => {\n    if (event.key === \"Escape\") {\n        closeDialog();\n    }\n});\n\n// Обработка флажка \"В работе\"\ndocument.querySelectorAll('.inProgress-checkbox').forEach(checkbox => {\n    checkbox.addEventListener('change', function() {\n        const taskCard = checkbox.closest('.task-card');\n\n        if (checkbox.checked) {\n            taskCard.classList.add('inProgress'); // Добавляем класс для желтого цвета\n        } else {\n            taskCard.classList.remove('inProgress'); // Убираем желтый цвет\n        }\n    });\n});\n\n// Обработка флажка \"Выполнено\"\ndocument.querySelectorAll('.completed-checkbox').forEach(checkbox => {\n    checkbox.addEventListener('change', function() {\n        const taskCard = checkbox.closest('.task-card');\n        const inProgressCheckbox = taskCard.querySelector('.inProgress-checkbox');\n\n        if (checkbox.checked) {\n            taskCard.classList.add('completed'); // Добавляем класс для цвета\n            inProgressCheckbox.disabled = true;  // Блокируем флажок \"В работе\"\n            inProgressCheckbox.checked = false;   // Снимаем отметку\n        } else {\n            taskCard.classList.remove('completed'); // Убираем класс для цвета\n            inProgressCheckbox.disabled = false; // Разблокируем флажок \"В работе\"\n        }\n    });\n});\n\nfunction toggleMenu() {\n    document.querySelector('.nav').classList.toggle('active');\n    const sidebar = document.getElementById('sidebar'); // Получаем элементы сайдбара\n    const burger = document.getElementById('burger'); // Получаем бургер-меню\n\n    // Переключаем классы для сайдбара и бургер-меню\n    sidebar.classList.toggle('active');\n    burger.classList.toggle('active');\n\n    // Предотвращаем прокрутку страницы, когда сайдбар открыт\n    document.body.classList.toggle('no-scroll');\n}\n\n\n\n//# sourceURL=webpack://bwd-labs-lesson/./src/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;