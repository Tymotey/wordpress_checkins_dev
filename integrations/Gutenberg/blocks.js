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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType("btdev-inscriere/form", {
    title: __("Entry Form Add"),
    icon: "smiley",
    category: "btdev-inscrieri",
    attributes: {
        formName: { type: "string" }
    },

    edit: function edit(props) {
        var _React;

        function updateFormName(event) {
            props.setAttributes({ formName: event.target.value });
        }

        var forms = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.entries(btdev_inscriere_ajax.forms)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _ref = _step.value;

                var _ref2 = _slicedToArray(_ref, 2);

                var key = _ref2[0];
                var value = _ref2[1];

                forms.push([key, value.title]);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return React.createElement("div", null, React.createElement("h4", null, "BTDEV Inscrieri - Form"), React.createElement("span", null, "Select a form: "), (_React = React).createElement.apply(_React, ["select", {
            value: props.attributes.formName,
            onChange: updateFormName
        }].concat(_toConsumableArray(forms.map(function (val) {
            return React.createElement("option", { value: val[0] }, val[1]);
        })))));
    },
    save: function save(props) {
        var shortcode = "";
        if (props.attributes.formName && props.attributes.formName !== "") {
            shortcode = '[bbdev_inscrieri_form form="' + props.attributes.formName + '"]';
        }

        return wp.element.createElement("div", {
            className: props.attributes.className && props.attributes.className !== "" ? props.attributes.className : ""
        }, shortcode);
    }
});

registerBlockType("btdev-inscriere/list", {
    title: __("Lists"),
    icon: "smiley",
    category: "btdev-inscrieri",
    attributes: {
        formName: { type: "string" }
    },

    edit: function edit(props) {
        var _React2, _React3;

        function updateFormName(event) {
            props.setAttributes({ formName: event.target.value });
        }
        function updateTableType(event) {
            props.setAttributes({ tableType: event.target.value });
        }

        var forms = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = Object.entries(btdev_inscriere_ajax.forms)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _ref3 = _step2.value;

                var _ref4 = _slicedToArray(_ref3, 2);

                var key = _ref4[0];
                var value = _ref4[1];

                forms.push([key, value.title]);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        var tableTypes = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = Object.entries(btdev_inscriere_ajax.tables)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _ref5 = _step3.value;

                var _ref6 = _slicedToArray(_ref5, 2);

                var _key = _ref6[0];
                var _value = _ref6[1];

                tableTypes.push([_key, _value]);
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        return React.createElement("div", null, React.createElement("h4", null, "BTDEV Inscrieri - Liste"), (_React2 = React).createElement.apply(_React2, ["select", {
            value: props.attributes.formName,
            onChange: updateFormName
        }].concat(_toConsumableArray(forms.map(function (val) {
            return React.createElement("option", { value: val[0] }, val[1]);
        })))), (_React3 = React).createElement.apply(_React3, ["select", {
            value: props.attributes.tableType,
            onChange: updateTableType
        }].concat(_toConsumableArray(tableTypes.map(function (val) {
            return React.createElement("option", { value: val[0] }, val[1]);
        })))));
    },
    save: function save(props) {
        var shortcode = "";
        if (props.attributes.formName && props.attributes.formName !== "") {
            shortcode = '[bbdev_inscrieri_list_entries form="' + props.attributes.formName + '" type="' + props.attributes.tableType + '"]';
        }

        return wp.element.createElement("div", {
            className: props.attributes.className && props.attributes.className !== "" ? props.attributes.className : ""
        }, shortcode);
    }
});

registerBlockType("btdev-inscriere/summary", {
    title: __("Summary"),
    icon: "smiley",
    category: "btdev-inscrieri",
    attributes: {
        formName: { type: "string", default: "" }
    },

    edit: function edit(props) {
        function updateFormName(event) {
            props.setAttributes({ formName: event.target.value });
        }

        var forms = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = Object.entries(btdev_inscriere_ajax.forms)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _ref7 = _step4.value;

                var _ref8 = _slicedToArray(_ref7, 2);

                var key = _ref8[0];
                var value = _ref8[1];

                forms.push([key, value.title]);
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement(
                "h4",
                null,
                __("BTDEV Summary")
            ),
            wp.element.createElement(
                "select",
                { onChange: updateFormName },
                forms.map(function (val) {
                    return wp.element.createElement(
                        "option",
                        {
                            value: val[0],
                            selected: val[0] === props.attributes.formName ? true : false
                        },
                        val[1]
                    );
                })
            )
        );
    },
    save: function save(props) {
        var shortcode = "";
        if (props.attributes.formName && props.attributes.formName !== "") {
            shortcode = '[bbdev_inscrieri_entry_summary form="' + props.attributes.formName + '"]';
        }

        return wp.element.createElement("div", {
            className: props.attributes.className && props.attributes.className !== "" ? props.attributes.className : ""
        }, shortcode);
    }
});

/***/ })
/******/ ]);