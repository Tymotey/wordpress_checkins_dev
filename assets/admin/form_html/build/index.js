/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/elements/FormsCategoryFieldNormal.jsx":
/*!***************************************************!*\
  !*** ./src/elements/FormsCategoryFieldNormal.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormsCategoryFieldNormal: () => (/* binding */ FormsCategoryFieldNormal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/formFormsContext */ "./src/hooks/formFormsContext.jsx");
/* harmony import */ var _formFormsInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formFormsInputs */ "./src/elements/formFormsInputs.jsx");





function FormsCategoryFieldNormal(props) {
  const {
    path,
    pathS,
    showTitle = true,
    showDescription = true
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);

  // Get field data
  // console.log("pathS: ", pathS);
  // console.log("path: ", path);
  let fieldSettings = formFormsContext.getSettings(pathS);
  // console.log(
  //     "fieldSettings",
  //     fieldSettings,
  //     "-------------------SETTINGS-------------"
  // );
  let fieldData = formFormsContext.getValue(path);

  // console.log("-------------FIELD-------------");
  // console.log(path, "--path");
  // console.log(fieldSettings, "--fieldSettings");
  // console.log(fieldData, "--fieldData");
  // console.log("-------------FIELD-------------");

  if (fieldSettings !== undefined) {
    let elType = fieldSettings.type ? fieldSettings.type : "input-text";
    let elementHtml = [];
    switch (elType) {
      case "input-text":
      case "input-email":
        elementHtml.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_formFormsInputs__WEBPACK_IMPORTED_MODULE_3__.FormsInput, {
          fieldSettings: fieldSettings,
          fieldData: fieldData,
          path: path
        }));
        break;
      case "select-fields":
      case "select":
        elementHtml.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_formFormsInputs__WEBPACK_IMPORTED_MODULE_3__.FormsSelect, {
          fieldSettings: fieldSettings,
          fieldData: fieldData,
          path: path
        }));
        break;
      case "wysiwyg":
      case "textarea":
        elementHtml.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_formFormsInputs__WEBPACK_IMPORTED_MODULE_3__.FormsTextarea, {
          fieldSettings: fieldSettings,
          fieldData: fieldData,
          path: path
        }));
        break;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "category-field-container"
    }, showTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      className: "category-field-title"
    }, fieldSettings.title), showDescription && fieldSettings.helpDescription && fieldSettings.helpDescription !== "" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
      className: "category-field-description"
    }, fieldSettings.helpDescription), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "category-field-wrapper"
    }, elementHtml));
  } else {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "No field settings found for \"", JSON.stringify(path), "\"", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null));
  }
}


/***/ }),

/***/ "./src/elements/FormsCategoryFieldRepeater.jsx":
/*!*****************************************************!*\
  !*** ./src/elements/FormsCategoryFieldRepeater.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormsCategoryFieldRepeater: () => (/* binding */ FormsCategoryFieldRepeater)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/formFormsContext */ "./src/hooks/formFormsContext.jsx");
/* harmony import */ var _formFormsInputRepeater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formFormsInputRepeater */ "./src/elements/formFormsInputRepeater.jsx");





function FormsCategoryFieldRepeater(props) {
  const {
    path,
    pathS,
    showTitle = true,
    showDescription = true
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);

  // Get field data
  // console.log("pathS: ", pathS);
  // console.log("path: ", path);
  let fieldSettings = formFormsContext.getSettings(pathS);
  // console.log(
  //     "fieldSettings",
  //     fieldSettings,
  //     "-------------------SETTINGS-------------"
  // );
  let fieldData = formFormsContext.getValue(path);

  // console.log("-------------FIELD-------------");
  // console.log(path, "--path");
  // console.log(fieldSettings, "--fieldSettings");
  // console.log(fieldData, "--fieldData");
  // console.log("-------------FIELD-------------");

  if (fieldSettings !== undefined) {
    let elType = fieldSettings.type ? fieldSettings.type : "input-text";
    let elementHtml = [];
    elementHtml.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_formFormsInputRepeater__WEBPACK_IMPORTED_MODULE_3__.FormsInputRepeater, {
      fieldSettings: fieldSettings,
      fieldData: fieldData,
      path: path
    }));
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "category-field-container"
    }, showTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      className: "category-field-title"
    }, fieldSettings.title), showDescription && fieldSettings.helpDescription && fieldSettings.helpDescription !== "" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
      className: "category-field-description"
    }, fieldSettings.helpDescription), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "category-field-wrapper"
    }, elementHtml));
  } else {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "No field settings found for \"", JSON.stringify(path), "\"", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null));
  }
}


/***/ }),

/***/ "./src/elements/FormsCategoryFieldsGroup.jsx":
/*!***************************************************!*\
  !*** ./src/elements/FormsCategoryFieldsGroup.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormsCategoryFieldsGroup: () => (/* binding */ FormsCategoryFieldsGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/formFormsContext */ "./src/hooks/formFormsContext.jsx");
/* harmony import */ var _FormsCategoryFieldNormal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormsCategoryFieldNormal */ "./src/elements/FormsCategoryFieldNormal.jsx");
/* harmony import */ var _FormsCategoryFieldRepeater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormsCategoryFieldRepeater */ "./src/elements/FormsCategoryFieldRepeater.jsx");







function FormsCategoryFieldsGroup(props) {
  let {
    path,
    pathS,
    showDetails,
    isRepeater
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_3__.FormFormsContext);

  // Get field data
  let groupSettings = formFormsContext.getSettings(pathS);
  let groupData = formFormsContext.getValue(path);

  // returnEl.push(
  //     <>
  //         ------------INFOOOOOO--------------
  //         <br />
  //         <b>Path: </b>
  //         {JSON.stringify(path)}
  //         <br />
  //         <b>PathS: </b>
  //         {JSON.stringify(pathS)}
  //         <br />
  //         <b>groupSettings: </b>
  //         {JSON.stringify(groupSettings)}
  //         <br />
  //         <b>groupSettings fieldsList: </b>
  //         {JSON.stringify(groupSettings.fieldsList)}
  //         <br />
  //         ------------INFOOOOOO--------------
  //         <br />
  //         <br />
  //     </>
  // );
  if (groupSettings.fieldsList === undefined) {
    if (!isRepeater) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FormsCategoryFieldNormal__WEBPACK_IMPORTED_MODULE_4__.FormsCategoryFieldNormal, {
        key: path.join("-") + "-field",
        path: [...path],
        pathS: [...pathS]
      });
    } else {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FormsCategoryFieldRepeater__WEBPACK_IMPORTED_MODULE_5__.FormsCategoryFieldRepeater, {
        key: path.join("-") + "-field",
        path: [...path],
        pathS: [...pathS]
      });
    }
  } else if (groupSettings.fieldsList !== undefined) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: path.join("-") + "-container-outter",
      className: "category-field-container-inner level-" + path.length
    }, path.length > 2 && groupSettings.title !== undefined && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      className: "category-field-title-inner"
    }, groupSettings.title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "category-field-content-inner"
    }, Object.entries(groupSettings.fieldsList).map((elementInner, indexInner) => {
      let newPath = [...path, elementInner[0]];
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FormsCategoryFieldsGroup, {
        key: newPath.join("-") + "-container-inner",
        path: newPath,
        pathS: [...pathS, "fieldsList", elementInner[0]],
        isRepeater: isRepeater
      });
    }))));
  }
}


/***/ }),

/***/ "./src/elements/formFormsCategory.jsx":
/*!********************************************!*\
  !*** ./src/elements/formFormsCategory.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormsCategory: () => (/* binding */ FormsCategory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/formFormsContext */ "./src/hooks/formFormsContext.jsx");
/* harmony import */ var _FormsCategoryFieldNormal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormsCategoryFieldNormal */ "./src/elements/FormsCategoryFieldNormal.jsx");
/* harmony import */ var _FormsCategoryFieldRepeater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormsCategoryFieldRepeater */ "./src/elements/FormsCategoryFieldRepeater.jsx");
/* harmony import */ var _FormsCategoryFieldsGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormsCategoryFieldsGroup */ "./src/elements/FormsCategoryFieldsGroup.jsx");







function FormsCategory({
  catIndex,
  catKey
}) {
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);
  let isRepeater = catKey[0] === "repeater_fields" ? true : false;

  // Close first category
  const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(catIndex === 2 ? true : true);
  const toggleOpen = () => {
    setOpened(!opened);
  };

  // Category settings and values
  let categoryValues = formFormsContext.getValue(catKey);
  let categorySettings = formFormsContext.getSettings(catKey);

  // Element classes
  let elClasses = ["category-container"];
  if (opened) {
    elClasses.push("opened");
  }
  elClasses = elClasses.join(" ");
  if (categoryValues !== undefined && categorySettings !== undefined) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: catKey[0],
      className: elClasses
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "category-title",
      onClick: toggleOpen
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(categorySettings.title, "btdev_inscriere_text"), isRepeater == true && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "repeater_add_field"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "dashicons dashicons-insert"
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "category-content"
    }, categorySettings.helpDescription && categorySettings.helpDescription !== "" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
      className: "category-field-description"
    }, categorySettings.helpDescription), categorySettings.fieldsList === undefined && !isRepeater && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FormsCategoryFieldNormal__WEBPACK_IMPORTED_MODULE_3__.FormsCategoryFieldNormal, {
      key: catKey.join("-") + "-field",
      path: [...catKey],
      pathS: [...catKey],
      showTitle: false,
      showDescription: false
    }), categorySettings.fieldsList && Object.keys(categorySettings.fieldsList).length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FormsCategoryFieldsGroup__WEBPACK_IMPORTED_MODULE_5__.FormsCategoryFieldsGroup, {
      key: catKey.join("-") + "-group",
      path: [...catKey],
      pathS: [...catKey],
      isRepeater: isRepeater
    })));
  } else {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No setting data found", "btdev_inscriere_text"));
  }
}


/***/ }),

/***/ "./src/elements/formFormsInputRepeater.jsx":
/*!*************************************************!*\
  !*** ./src/elements/formFormsInputRepeater.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormsInputRepeater: () => (/* binding */ FormsInputRepeater)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/formFormsContext */ "./src/hooks/formFormsContext.jsx");




function FormsInputRepeater(props) {
  const {
    fieldSettings,
    fieldData,
    path,
    pathS
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);
  const changeValue = event => {
    formFormsContext.setValuePath(path, event.target.value);
  };
  const removeField = path => {
    console.log(path);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ["repeater_control", fieldSettings.notDeletable ? "not_deletetable" : undefined].join(" "),
    onClick: fieldSettings.notDeletable && fieldSettings.notDeletable === true ? () => {} : removeField(path)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-remove"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    onBlur: changeValue,
    defaultValue: fieldData,
    ...fieldSettings.htmlAttr,
    style: {
      ...fieldSettings.htmlCss
    }
  }));
}


/***/ }),

/***/ "./src/elements/formFormsInputs.jsx":
/*!******************************************!*\
  !*** ./src/elements/formFormsInputs.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormsHtml: () => (/* binding */ FormsHtml),
/* harmony export */   FormsInput: () => (/* binding */ FormsInput),
/* harmony export */   FormsSelect: () => (/* binding */ FormsSelect),
/* harmony export */   FormsTextarea: () => (/* binding */ FormsTextarea)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/formFormsContext */ "./src/hooks/formFormsContext.jsx");




function FormsInput(props) {
  const {
    fieldSettings,
    fieldData,
    path,
    pathS
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);
  const changeValue = event => {
    formFormsContext.setValuePath(path, event.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    onBlur: changeValue,
    defaultValue: fieldData,
    ...fieldSettings.htmlAttr,
    style: {
      ...fieldSettings.htmlCss
    }
  }));
}
function FormsSelect(props) {
  const {
    fieldSettings,
    fieldData,
    path,
    pathS
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);
  const changeValue = event => {
    formFormsContext.setValuePath(path, event.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    onChange: changeValue,
    defaultValue: fieldData,
    multiple: fieldSettings.multiple || false,
    ...fieldSettings.htmlAttr,
    style: {
      ...fieldSettings.htmlCss
    }
  }, fieldSettings.options.length > 0 && fieldSettings.options.map((element, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: "element-" + index,
      value: element.value
    }, element.title);
  })));
}
function FormsTextarea(props) {
  const {
    fieldSettings,
    fieldData,
    path,
    pathS
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);
  const changeValue = event => {
    formFormsContext.setValuePath(path, event.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    onBlur: changeValue,
    defaultValue: fieldData,
    ...fieldSettings.htmlAttr,
    style: {
      ...fieldSettings.htmlCss
    }
  }));
}
function FormsHtml(props) {
  const {
    fieldSettings,
    fieldData,
    path,
    pathS
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...fieldSettings.htmlAttr,
    style: {
      ...fieldSettings.htmlCss
    }
  }, fieldData);
}


/***/ }),

/***/ "./src/elements/formsForm.jsx":
/*!************************************!*\
  !*** ./src/elements/formsForm.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormsForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/formFormsContext */ "./src/hooks/formFormsContext.jsx");
/* harmony import */ var _formFormsCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formFormsCategory */ "./src/elements/formFormsCategory.jsx");




function FormsForm() {
  const settingsTextarea = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(document.getElementById("btdev_forms_post_content"));
  const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.parse(window.btdev_inscriere_ajax.form_structure));
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.parse(settingsTextarea.current.value));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    settingsTextarea.current.value = JSON.stringify(values);
  }, [values]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_1__.FormFormsContextElement, {
    value: {
      textarea: settingsTextarea,
      settings,
      setSettings,
      values,
      setValues
    }
  }, Object.entries(settings).map((element, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_formFormsCategory__WEBPACK_IMPORTED_MODULE_2__.FormsCategory, {
      key: element[0],
      catIndex: index,
      catKey: [element[0]]
    });
  }));
}

/***/ }),

/***/ "./src/hooks/formFormsContext.jsx":
/*!****************************************!*\
  !*** ./src/hooks/formFormsContext.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormFormsContext: () => (/* binding */ FormFormsContext),
/* harmony export */   FormFormsContextElement: () => (/* binding */ FormFormsContextElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _info_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info/constants */ "./src/info/constants.js");




const defaultValues = {
  textarea: {},
  settings: {},
  setSettings: val => {},
  getSettings: path => {},
  values: {},
  setValues: val => {},
  setValuePath: (path, value) => {},
  getValue: path => {}
};
const FormFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValues);
const FormFormsContextElement = props => {
  const {
    children,
    value
  } = props;

  // Vars
  let textarea = value.textarea;
  const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value !== undefined ? value?.settings : false);
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value !== undefined ? value?.values : false);

  // Functions
  const getOptionValues = functionName => {
    let returnVal = [];
    if (functionName.search("funct|") !== -1) {
      let tmpName = functionName.split("|");
      let fnctData = tmpName[1].split("-");
      let paramsFunction = fnctData.slice(1);
      switch (fnctData[0]) {
        case "enabledOptions":
          returnVal = _info_constants__WEBPACK_IMPORTED_MODULE_2__.getEnabledOptions([...paramsFunction]);
          break;
        case "paymentsOptions":
          returnVal = _info_constants__WEBPACK_IMPORTED_MODULE_2__.paymentsOptions;
          break;
        case "currenciesOptions":
          returnVal = _info_constants__WEBPACK_IMPORTED_MODULE_2__.currenciesOptions;
          break;
      }
    }
    return returnVal;
  };
  const getSettings = path => {
    // console.log(settings, path, "settings, path IN CONTEXT");
    let settingData = lodash__WEBPACK_IMPORTED_MODULE_1___default().get(settings, path) || [];
    if (settingData !== undefined) {
      if (settingData.options && typeof settingData.options === "string") {
        settingData.options = getOptionValues(settingData.options);
      }
    }
    return settingData;
  };
  const getValue = path => {
    console.log(values, path, "values, path IN CONTEXT", path ? path.join(".") : "", lodash__WEBPACK_IMPORTED_MODULE_1___default().get(values, path ? path.join(".") : ""));
    return lodash__WEBPACK_IMPORTED_MODULE_1___default().get(values, path ? path.join(".") : "");
  };
  const setValuePath = (path, value) => {
    lodash__WEBPACK_IMPORTED_MODULE_1___default().set(values, path, value);
    setTextarea(value);
  };
  const setTextarea = () => {
    textarea.current.value = JSON.stringify(values);
  };
  let changed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(changed.current, value)) {
    changed.current = value;
  }
  let newValue = changed.current;

  // Return Data
  const data = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default().merge({}, defaultValues, newValue, {
      textarea,
      settings,
      setSettings,
      getSettings,
      values,
      setValues,
      setValuePath,
      getValue
    });
  }, [textarea, settings, setSettings, getSettings, values, setValues, setValuePath, getValue]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FormFormsContext.Provider, {
    value: data
  }, children));
};


/***/ }),

/***/ "./src/info/constants.js":
/*!*******************************!*\
  !*** ./src/info/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currenciesOptions: () => (/* binding */ currenciesOptions),
/* harmony export */   enabledOptions: () => (/* binding */ enabledOptions),
/* harmony export */   getEnabledOptions: () => (/* binding */ getEnabledOptions),
/* harmony export */   paymentsOptions: () => (/* binding */ paymentsOptions)
/* harmony export */ });
const enabledOptions = [{
  value: "true",
  title: "Enabled"
}, {
  value: "false",
  title: "Disabled"
}];
const getEnabledOptions = function (defaultValue = true) {
  return enabledOptions;
};
const paymentsOptions = [{
  value: "stripe",
  title: "Stripe",
  default: true
}, {
  value: "ordinPlata",
  title: "Ordin de Plata"
}];
const currenciesOptions = [{
  value: "EUR",
  title: "EUR",
  default: true
}, {
  value: "RON",
  title: "RON"
}, {
  value: "USD",
  title: "USD"
}];


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_formsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/formsForm */ "./src/elements/formsForm.jsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");





const domNode = document.getElementById("btdev-inscriere-edit-form");
if (domNode) {
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(domNode);
  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_formsForm__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map