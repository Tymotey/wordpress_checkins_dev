import { __ } from "@wordpress/i18n";
import { useContext, useState } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";
import { FormsInputRepeater } from "./formFormsInputRepeater";

function FormsCategoryFieldRepeater(props) {
    const { path, pathS } = props;
    const formFormsContext = useContext(FormFormsContext);

    let fieldSettings = formFormsContext.getSettings(pathS);
    let fieldData = formFormsContext.getValueRepeater(path);

    if (fieldSettings !== undefined) {
        let elType = fieldSettings.type ? fieldSettings.type : "input-text";
        let elementHtml = [];

        elementHtml.push(
            <FormsInputRepeater
                key={path.join("-") + "-inputRepeater"}
                fieldSettings={fieldSettings}
                fieldData={fieldData}
                path={path}
            />
        );

        return (
            <div
                className="category-field-container repeater-field"
                key={path.join("-") + "-fieldRepeaterInner"}
            >
                <h4 className="category-field-title">{fieldSettings.title}</h4>
                <div className="category-field-wrapper">{elementHtml}</div>
            </div>
        );
    } else {
        return (
            <>
                No field settings found for "{JSON.stringify(path)}"<br />
            </>
        );
    }
}

export { FormsCategoryFieldRepeater };
