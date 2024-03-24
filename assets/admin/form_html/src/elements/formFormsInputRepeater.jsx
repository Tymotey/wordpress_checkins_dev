import { __ } from "@wordpress/i18n";
import { useContext, useState } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";

function FormsInputRepeater(props) {
    const { fieldSettings, fieldData, path, pathS } = props;
    const formFormsContext = useContext(FormFormsContext);

    const changeValue = (event) => {
        formFormsContext.setValuePath(path, event.target.value);
    };

    const removeField = (path) => {
        console.log(path);
    };

    return (
        <>
            <div
                className={[
                    "repeater_control",
                    fieldSettings.notDeletable ? "not_deletetable" : undefined,
                ].join(" ")}
                onClick={
                    fieldSettings.notDeletable &&
                    fieldSettings.notDeletable === true
                        ? () => {}
                        : removeField(path)
                }
            >
                <span class="dashicons dashicons-remove"></span>
            </div>
            <input
                onBlur={changeValue}
                defaultValue={fieldData}
                {...fieldSettings.htmlAttr}
                style={{ ...fieldSettings.htmlCss }}
            />
        </>
    );
}
export { FormsInputRepeater };
