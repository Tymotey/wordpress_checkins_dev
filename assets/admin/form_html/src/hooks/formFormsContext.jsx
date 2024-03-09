import _ from "lodash";
import { createContext, useMemo, useRef, useState } from "react";
import { defaultFormStructure } from "../info/constants";

const defaultValues = {
    textarea: {},
    settings: {},
    setSettings: (val) => {},
};

const FormFormsContext = createContext(defaultValues);

const FormFormsContextElement = (props) => {
    const { children, value } = props;

    // Vars
    const [settings, setSettings] = useState(
        value !== undefined ? value?.settings : false
    );

    let changed = useRef();
    if (!_.isEqual(changed.current, value)) {
        changed.current = value;
    }

    let newValue = changed.current;

    // Functions

    // Return Data
    const data = useMemo(() => {
        return _.merge({}, defaultValues, newValue, {
            settings,
            setSettings,
        });
    }, [settings, setSettings]);

    return (
        <>
            <FormFormsContext.Provider value={data}>
                {children}
            </FormFormsContext.Provider>
        </>
    );
};

export { FormFormsContext, FormFormsContextElement };
