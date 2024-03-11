import { __ } from "@wordpress/i18n";
import { useContext, useState } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";
import { FormsCategoryField } from "./FormsCategoryField";

function FormsCategoryFieldsGroup(props) {
    const { path } = props;
    const formFormsContext = useContext(FormFormsContext);

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

    return (
        <div className="category-fields-container">
            {groups.length > 0 &&
                groups.map((element, index) => {
                    return <FormsCategoryField path={element[0]} />;
                })}
        </div>
    );
}

export { FormsCategoryFieldsGroup };
