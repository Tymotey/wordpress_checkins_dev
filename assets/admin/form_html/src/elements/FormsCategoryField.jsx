import { __ } from "@wordpress/i18n";
import { useContext, useState } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";
import { FormsInput, FormsSelect, FormsTextarea } from "./formFormsInputs";

function FormsCategoryField(props) {
    const { path } = props;
    const formFormsContext = useContext(FormFormsContext);

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
        let elementHtml = <></>;
        switch (elType) {
            case "input-text":
            case "input-email":
                elementHtml = (
                    <FormsInput
                        fieldSettings={fieldSettings}
                        fieldData={fieldData}
                        path={path}
                    />
                );
                break;
            case "select":
                elementHtml = (
                    <FormsSelect
                        fieldSettings={fieldSettings}
                        fieldData={fieldData}
                        path={path}
                    />
                );
                break;
            case "textarea":
                elementHtml = (
                    <FormsTextarea
                        fieldSettings={fieldSettings}
                        fieldData={fieldData}
                        path={path}
                    />
                );
                break;
        }

        return (
            <div className="category-field-container">
                {!fieldSettings.isFieldOnly && (
                    <h4 className="category-field-title">
                        {fieldSettings.title}
                    </h4>
                )}
                {fieldSettings.helpDescription &&
                    fieldSettings.helpDescription !== "" && (
                        <h5 className="category-field-description">
                            {fieldSettings.helpDescription}
                        </h5>
                    )}
                <div className="category-field-wrapper">{elementHtml}</div>
            </div>
        );
    } else {
        return <>No field settings found</>;
    }
}

export { FormsCategoryField };
