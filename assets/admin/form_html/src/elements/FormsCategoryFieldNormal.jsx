import { __ } from "@wordpress/i18n";
import { useContext, useState } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";
import { FormsInput, FormsSelect, FormsTextarea } from "./formFormsInputs";

function FormsCategoryFieldNormal(props) {
    const { path, pathS, showTitle = true, showDescription = true } = props;
    const formFormsContext = useContext(FormFormsContext);

    let fieldSettings = formFormsContext.getSettings(pathS);
    let fieldData = formFormsContext.getValue(path);

    if (fieldSettings !== undefined) {
        let elType = fieldSettings.type ? fieldSettings.type : "input-text";
        let elementHtml = [];

        switch (elType) {
            case "input-text":
            case "input-email":
                elementHtml.push(
                    <FormsInput
                        fieldSettings={fieldSettings}
                        fieldData={fieldData}
                        path={path}
                        key={path.join("-") + "-input"}
                    />
                );
                break;
            case "select-fields":
            case "select":
                elementHtml.push(
                    <FormsSelect
                        fieldSettings={fieldSettings}
                        fieldData={fieldData}
                        path={path}
                        key={path.join("-") + "-input"}
                    />
                );
                break;
            case "wysiwyg":
            case "textarea":
                elementHtml.push(
                    <FormsTextarea
                        fieldSettings={fieldSettings}
                        fieldData={fieldData}
                        path={path}
                        key={path.join("-") + "-input"}
                    />
                );
                break;
        }

        return (
            <div className="category-field-container">
                {showTitle && (
                    <h4 className="category-field-title">
                        {fieldSettings.title}
                    </h4>
                )}
                {showDescription &&
                    fieldSettings.helpDescription &&
                    fieldSettings.helpDescription !== "" && (
                        <h5 className="category-field-description">
                            {fieldSettings.helpDescription}
                        </h5>
                    )}
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

export { FormsCategoryFieldNormal };
