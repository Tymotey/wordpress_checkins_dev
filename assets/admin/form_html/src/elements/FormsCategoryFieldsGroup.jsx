import { __ } from "@wordpress/i18n";
import { useContext, useState } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";
import { FormsCategoryField } from "./FormsCategoryField";
import { FormsCategory } from "./formFormsCategory";

function FormsCategoryFieldsGroup(props) {
    let { path, pathS, showDetails } = props;
    const formFormsContext = useContext(FormFormsContext);

    // Get field data
    let groupSettings = formFormsContext.getSettings(pathS);
    let groupData = formFormsContext.getValue(path);

    // returnEl.push(
    //     <>
    //         ------------INFOOOOOO--------------
    //         <br />
    //         <b>Path: </b>
    //         {JSON.stringify(path)}
    //         <br />
    //         <b>PathS: </b>
    //         {JSON.stringify(pathS)}
    //         <br />
    //         <b>groupSettings: </b>
    //         {JSON.stringify(groupSettings)}
    //         <br />
    //         <b>groupSettings fieldsList: </b>
    //         {JSON.stringify(groupSettings.fieldsList)}
    //         <br />
    //         ------------INFOOOOOO--------------
    //         <br />
    //         <br />
    //     </>
    // );
    if (groupSettings.fieldsList === undefined) {
        return (
            <FormsCategoryField
                key={path.join("-") + "-field"}
                path={[...path]}
                pathS={[...pathS]}
            />
        );
    } else if (groupSettings.fieldsList !== undefined) {
        return (
            <>
                <div
                    key={path.join("-") + "container-inner-"}
                    class={
                        "category-field-container-inner level-" + path.length
                    }
                >
                    {path.length > 2 && groupSettings.title !== undefined && (
                        <h4 className="category-field-title-inner">
                            {groupSettings.title}
                        </h4>
                    )}
                    <div class="category-field-content-inner">
                        {Object.entries(groupSettings.fieldsList).map(
                            (elementInner, indexInner) => {
                                return (
                                    <FormsCategoryFieldsGroup
                                        path={[...path, elementInner[0]]}
                                        pathS={[
                                            ...pathS,
                                            "fieldsList",
                                            elementInner[0],
                                        ]}
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export { FormsCategoryFieldsGroup };
