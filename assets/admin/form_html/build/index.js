/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/elements/FormsCategoryField.jsx":
/*!*********************************************!*\
  !*** ./src/elements/FormsCategoryField.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormsCategoryField: () => (/* binding */ FormsCategoryField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/formFormsContext */ "./src/hooks/formFormsContext.jsx");
/* harmony import */ var _formFormsInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formFormsInputs */ "./src/elements/formFormsInputs.jsx");





function FormsCategoryField(props) {
  const {
    path
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);

  // Get field data
  let fieldSettings = formFormsContext.getSettings(path);
  let fieldData = formFormsContext.getValue(path);
  // console.log("-------------FIELD-------------");
  // console.log(path, "--path");
  // console.log(fieldSettings, "--fieldSettings");
  // console.log(fieldData, "--fieldData");
  // console.log("-------------FIELD-------------");

  if (fieldSettings !== undefined && fieldData !== undefined) {
    let elType = fieldSettings.type ? fieldSettings.type : "input-text";
    let elementHtml = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    switch (elType) {
      case "input-text":
      case "input-email":
        elementHtml = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_formFormsInputs__WEBPACK_IMPORTED_MODULE_3__.FormsInput, {
          fieldSettings: fieldSettings,
          fieldData: fieldData,
          path: path
        });
        break;
      case "select":
        elementHtml = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_formFormsInputs__WEBPACK_IMPORTED_MODULE_3__.FormsSelect, {
          fieldSettings: fieldSettings,
          fieldData: fieldData,
          path: path
        });
        break;
      case "textarea":
        elementHtml = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_formFormsInputs__WEBPACK_IMPORTED_MODULE_3__.FormsTextarea, {
          fieldSettings: fieldSettings,
          fieldData: fieldData,
          path: path
        });
        break;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "category-field-container"
    }, !fieldSettings.isFieldOnly && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      className: "category-field-title"
    }, fieldSettings.title), fieldSettings.helpDescription && fieldSettings.helpDescription !== "" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
      className: "category-field-description"
    }, fieldSettings.helpDescription), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "category-field-wrapper"
    }, elementHtml));
  } else {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "No field settings found for \"", path, "\"", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null));
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
/* harmony import */ var _hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/formFormsContext */ "./src/hooks/formFormsContext.jsx");
/* harmony import */ var _FormsCategoryField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormsCategoryField */ "./src/elements/FormsCategoryField.jsx");





function FormsCategoryFieldsGroup(props) {
  const {
    path
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);

  // Get field data
  let groupSettings = formFormsContext.getSettings(path);
  let groupData = formFormsContext.getValue(path);
  // console.log("-------------FIELD-------------");
  // console.log(path, "--path");
  // console.log(fieldSettings, "--fieldSettings");
  // console.log(fieldData, "--fieldData");
  // console.log("-------------FIELD-------------");

  let groups = Object.entries(groupSettings.fieldsList) || [];
  console.log(groups, "----");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "category-fields-container"
  }, groups.length > 0 && groups.map((element, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FormsCategoryField__WEBPACK_IMPORTED_MODULE_3__.FormsCategoryField, {
      path: element[0]
    });
  }));
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
/* harmony import */ var _FormsCategoryField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormsCategoryField */ "./src/elements/FormsCategoryField.jsx");
/* harmony import */ var _FormsCategoryFieldsGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormsCategoryFieldsGroup */ "./src/elements/FormsCategoryFieldsGroup.jsx");






function FormsCategory({
  catIndex,
  catKey
}) {
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);

  // Close first category
  const [opened, setOpened] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(catIndex === 2 ? true : false);
  const toggleOpen = () => {
    setOpened(!opened);
  };

  // Category settings and values
  let categoryValues = formFormsContext.getSettings(catKey);
  let categorySettings = formFormsContext.getSettings(catKey);

  // Element classes
  let elClasses = ["category-container"];
  if (opened) {
    elClasses.push("opened");
  }
  elClasses = elClasses.join(" ");
  if (categoryValues !== undefined && categorySettings !== undefined) {
    console.log(categorySettings.fieldsList);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: catKey,
      className: elClasses
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "category-title",
      onClick: toggleOpen
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(categorySettings.title, "btdev_inscriere_text")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "category-content"
    }, categorySettings.isFieldOnly && categorySettings.isFieldOnly === true && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FormsCategoryField__WEBPACK_IMPORTED_MODULE_3__.FormsCategoryField, {
      path: catKey
    }), !categorySettings.isFieldOnly && Object.keys(categorySettings.fieldsList).length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FormsCategoryFieldsGroup__WEBPACK_IMPORTED_MODULE_4__.FormsCategoryFieldsGroup, {
      path: catKey
    })));
  } else {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No setting data found", "btdev_inscriere_text"));
  }
}


/***/ }),

/***/ "./src/elements/formFormsInputs.jsx":
/*!******************************************!*\
  !*** ./src/elements/formFormsInputs.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    path
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);
  const changeValue = event => {
    formFormsContext.setValuePath(path, event.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    onBlur: changeValue,
    defaultValue: fieldData
  }));
}
function FormsSelect(props) {
  const {
    fieldSettings,
    fieldData,
    path
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);
  const changeValue = event => {
    formFormsContext.setValuePath(path, event.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    onChange: changeValue,
    defaultValue: fieldData
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
    path
  } = props;
  const formFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_formFormsContext__WEBPACK_IMPORTED_MODULE_2__.FormFormsContext);
  const changeValue = event => {
    formFormsContext.setValuePath(path, event.target.value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    onBlur: changeValue,
    defaultValue: fieldData
  }));
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
/* harmony import */ var _info_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info/constants */ "./src/info/constants.js");





function FormsForm() {
  const settingsTextarea = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(document.getElementById("btdev_forms_post_content"));
  const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_info_constants__WEBPACK_IMPORTED_MODULE_3__.formStructure);
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
  }, Object.entries(_info_constants__WEBPACK_IMPORTED_MODULE_3__.formStructure).map((element, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_formFormsCategory__WEBPACK_IMPORTED_MODULE_2__.FormsCategory, {
      key: element[0],
      catIndex: index,
      catKey: element[0]
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
  values: {},
  setValues: val => {}
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
  const getSettings = path => {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default().get(settings, path);
  };
  const getValue = path => {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default().get(values, path);
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
/* harmony export */   formStructure: () => (/* binding */ formStructure),
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
const formStructure = {
  mode: {
    isFieldOnly: true,
    id: "mode",
    title: "Mode",
    type: "select",
    options: [{
      value: "test",
      title: "Test",
      default: true
    }, {
      value: "live",
      title: "Live"
    }]
  },
  table: {
    isFieldOnly: true,
    id: "table",
    title: "SQL Table",
    helpDescription: "Name of SQL Table",
    required: true
  },
  tandc: {
    id: "tandc",
    title: "Terms and Conditions",
    fieldsList: {
      enabled: {
        id: "enabled",
        title: "Enabled",
        type: "select",
        options: getEnabledOptions()
      },
      text: {
        id: "text",
        title: "Text",
        default: "I agree that my data will be used to better organize this and future events."
      }
    }
  },
  captcha: {
    id: "captcha",
    title: "CAPTCHA",
    fieldsList: {
      enabled: {
        id: "captcha",
        title: "Enabled",
        type: "select",
        options: getEnabledOptions()
      }
    }
  },
  payment: {
    id: "payment",
    title: "Payments",
    fieldsList: {
      enabled: {
        id: "enabled",
        title: "Enabled",
        type: "select",
        options: getEnabledOptions()
      },
      with: {
        id: "with",
        title: "Provider",
        type: "select",
        options: paymentsOptions
      },
      currency: {
        id: "currency",
        title: "Currency",
        type: "select",
        options: currenciesOptions
      },
      base_price: {
        id: "base_price",
        title: "Base Price",
        default: "0",
        helpText: "Add 2 at the end of value.<br />Eg: 10EUR should write 1000"
      },
      payment_for: {
        id: "payment_for",
        title: "Payment description",
        default: "BTDEV Inscrieri"
      },
      description: {
        id: "description",
        title: "Description",
        default: "BTDEV Inscrieri - Event register"
      }
    }
  },
  links: {
    id: "links",
    title: "Links",
    fieldsList: {
      success: {
        id: "success",
        title: "Form URL",
        type: "select",
        options: "pagesPublished"
      },
      cancel: {
        id: "cancel",
        title: "Form URL",
        type: "select",
        options: "pagesPublished"
      }
    }
  },
  emails: {
    id: "emails",
    title: "Emails",
    fieldsList: {
      description: {
        id: "description",
        title: "Subject post text"
      },
      list: {
        id: "list",
        title: "Emails list",
        fieldsList: {
          saved: {
            id: "saved",
            title: "Submission saved",
            fieldsList: {
              enabled: {
                id: "enabled",
                title: "Enabled",
                type: "select",
                options: getEnabledOptions()
              },
              subject: {
                id: "subject",
                title: "Subject",
                default: "Submission saved"
              },
              content: {
                id: "content",
                title: "Content",
                type: "wysiwyg"
              }
            }
          },
          done: {
            id: "done",
            title: "Submission added",
            fieldsList: {
              enabled: {
                id: "enabled",
                title: "Enabled",
                type: "select",
                options: getEnabledOptions()
              },
              subject: {
                id: "subject",
                title: "Subject",
                default: "Submission succesfully added!"
              },
              content: {
                id: "content",
                title: "Content",
                type: "wysiwyg"
              }
            }
          },
          not_done: {
            id: "not_done",
            title: "Submission canceled",
            fieldsList: {
              enabled: {
                id: "enabled",
                title: "Enabled",
                type: "select",
                options: getEnabledOptions()
              },
              subject: {
                id: "subject",
                title: "Subject",
                default: "Submission canceled!"
              },
              content: {
                id: "content",
                title: "Content",
                type: "wysiwyg"
              }
            }
          },
          edit: {
            id: "edit",
            title: "Submission edited",
            fieldsList: {
              enabled: {
                id: "enabled",
                title: "Enabled",
                type: "select",
                options: getEnabledOptions()
              },
              subject: {
                id: "subject",
                title: "Subject",
                default: "Submission edited!"
              },
              content: {
                id: "content",
                title: "Content",
                type: "wysiwyg"
              }
            }
          }
        }
      }
    }
  },
  repeater_fields: {
    id: "repeater_fields",
    title: "Repeater Fields",
    fieldsList: {
      firstname: {
        id: "firstname",
        title: "Firstname",
        width: "half",
        notDeletable: true,
        order: 0
      },
      lastname: {
        id: "lastname",
        title: "Lastname",
        width: "half",
        notDeletable: true,
        order: 1
      },
      total_row: {
        id: "total_row",
        title: "Row total",
        type: "total_row",
        width: "full",
        notDeletable: true,
        order: 1000
      }
    }
  },
  tables: {
    id: "tables",
    title: "Tables settings",
    fieldsList: {
      entries_public: {
        id: "entries_public",
        fieldsList: {
          fields: {
            id: "fields",
            title: "Fields",
            type: "select-fields"
          }
        }
      },
      entries_admin: {
        id: "entries_admin",
        fieldsList: {
          fields: {
            id: "fields",
            title: "Fields",
            type: "select-fields"
          }
        }
      },
      submissions: {
        id: "submissions",
        fieldsList: {
          fields: {
            id: "fields",
            title: "Fields",
            type: "select-fields"
          }
        }
      },
      checkins: {
        id: "checkins",
        fieldsList: {
          fields: {
            id: "fields",
            title: "Fields",
            type: "select-fields"
          }
        }
      },
      presents: {
        id: "presents",
        fieldsList: {
          fields: {
            id: "fields",
            title: "Fields",
            type: "select-fields"
          }
        }
      }
    }
  }
};


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