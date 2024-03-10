import _ from "lodash";
import { createContext, useMemo, useRef, useState } from "react";
import { defaultFormStructure } from "../info/constants";

const defaultValues = {
    textarea: {},
    settings: {},
    setSettings: (val) => {},
    values: {},
    setValues: (val) => {},
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
    const getSettings = (path) => {
        return _.get(settings, path);
    };

    const getValue = (path) => {
        return _.get(values, path);
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
