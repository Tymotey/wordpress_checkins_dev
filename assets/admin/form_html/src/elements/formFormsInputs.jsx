import { __ } from "@wordpress/i18n";
import { useContext, useState } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";

function FormsInput(props) {
    const { fieldSettings, fieldData, path } = props;
    const formFormsContext = useContext(FormFormsContext);

    const changeValue = (event) => {
        formFormsContext.setValuePath(path, event.target.value);
    };

    return (
        <>
            <input onBlur={changeValue} defaultValue={fieldData} />
        </>
    );
}
function FormsSelect(props) {
    const { fieldSettings, fieldData, path } = props;
    const formFormsContext = useContext(FormFormsContext);

    const changeValue = (event) => {
        formFormsContext.setValuePath(path, event.target.value);
    };

    return (
        <>
            <select onChange={changeValue} defaultValue={fieldData}>
                {fieldSettings.options.length > 0 &&
                    fieldSettings.options.map((element, index) => {
                        return (
                            <option
                                key={"element-" + index}
                                value={element.value}
                            >
                                {element.title}
                            </option>
                        );
                    })}
            </select>
        </>
    );
}
function FormsTextarea(props) {
    const { fieldSettings, fieldData, path } = props;
    const formFormsContext = useContext(FormFormsContext);

    const changeValue = (event) => {
        formFormsContext.setValuePath(path, event.target.value);
    };

    return (
        <>
            <textarea onBlur={changeValue} defaultValue={fieldData}></textarea>
        </>
    );
}

export { FormsInput, FormsSelect, FormsTextarea };
