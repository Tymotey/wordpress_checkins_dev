import _ from "lodash";
import { createContext, useMemo, useRef, useState } from "react";
import * as constantData from "../info/constants";

const defaultValues = {
    textarea: {},
    settings: {},
    setSettings: (val) => {},
    getSettings: (path) => {},
    values: {},
    setValues: (val) => {},
    setValuePath: (path, value) => {},
    getValue: (path) => {},
    getValueRepeater: (path) => {},
    handleDragStart: (e, item) => {},
    handleDragEnd: () => {},
    handleDragOver: (e) => {},
    handleDrop: (e, targetItem) => {},
};

const FormFormsContext = createContext(defaultValues);

const FormFormsContextElement = (props) => {
    const { children, value } = props;

    // Vars
    let textarea = value.textarea;
    const [settings, setSettings] = useState(
        value !== undefined ? value?.settings : false
    );
    const [values, setValues] = useState(
        value !== undefined ? value?.values : false
    );

    // Functions
    const getOptionValues = (functionName) => {
        let returnVal = [];
        if (functionName.search("funct|") !== -1) {
            let tmpName = functionName.split("|");
            let fnctData = tmpName[1].split("-");
            let paramsFunction = fnctData.slice(1);
            switch (fnctData[0]) {
                case "enabledOptions":
                    returnVal = constantData.getEnabledOptions([
                        ...paramsFunction,
                    ]);
                    break;
                case "paymentsOptions":
                    returnVal = constantData.paymentsOptions;
                    break;
                case "currenciesOptions":
                    returnVal = constantData.currenciesOptions;
                    break;
            }
        }

        return returnVal;
    };

    const getSettings = (path) => {
        // console.log(settings, path, "settings, path IN CONTEXT");
        let settingData = _.get(settings, path) || [];
        if (settingData !== undefined) {
            if (
                settingData.options &&
                typeof settingData.options === "string"
            ) {
                settingData.options = getOptionValues(settingData.options);
            }
        }

        return settingData;
    };

    const getValue = (path) => {
        return _.get(values, path ? path.join(".") : "");
    };

    const getValueRepeater = (path) => {
        console.log(
            values,
            path,
            "values, path REPEATER IN CONTEXT",
            path ? path.join(".") : "",
            _.get(values, path ? path.join(".") : "")
        );
        return _.get(values, path ? path.join(".") : "");
    };

    const setValuePath = (path, value) => {
        _.set(values, path, value);
        setTextarea(value);
    };

    const setTextarea = () => {
        textarea.current.value = JSON.stringify(values);
    };

    let changed = useRef();
    if (!_.isEqual(changed.current, value)) {
        changed.current = value;
    }

    let newValue = changed.current;

    // MOVE
    let draggingItem = null;
    const handleDragStart = (e, item) => {
        draggingItem = item;
        e.dataTransfer.setData("text/plain", "");
    };

    const handleDragEnd = () => {
        draggingItem = null;
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, targetItem) => {
        if (!draggingItem) return;

        const currentIndex = values["repeater_fields"].indexOf(draggingItem);
        const targetIndex = values["repeater_fields"].indexOf(targetItem);

        if (currentIndex !== -1 && targetIndex !== -1) {
            values["repeater_fields"].splice(currentIndex, 1);
            values["repeater_fields"].splice(targetIndex, 0, draggingItem);
            this.setState({ items });
        }
    };

    // Return Data
    const data = useMemo(() => {
        return _.merge({}, defaultValues, newValue, {
            textarea,
            settings,
            setSettings,
            getSettings,
            values,
            setValues,
            setValuePath,
            getValue,
            getValueRepeater,
            handleDragStart,
            handleDragEnd,
            handleDragOver,
            handleDrop,
        });
    }, [
        textarea,
        settings,
        setSettings,
        getSettings,
        values,
        setValues,
        setValuePath,
        getValue,
        getValueRepeater,
        handleDragStart,
        handleDragEnd,
        handleDragOver,
        handleDrop,
    ]);

    return (
        <>
            <FormFormsContext.Provider value={data}>
                {children}
            </FormFormsContext.Provider>
        </>
    );
};

export { FormFormsContext, FormFormsContextElement };
