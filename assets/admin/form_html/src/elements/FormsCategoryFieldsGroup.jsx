import { __ } from "@wordpress/i18n";
import { useContext, useState } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";
import { FormsCategoryField } from "./FormsCategoryField";
import { FormsCategory } from "./formFormsCategory";

function FormsCategoryFieldsGroup(props) {
    let { path, pathS, showDescription } = props;
    console.log(props, "-------------props-------------");
    const formFormsContext = useContext(FormFormsContext);

    // Get field data
    let groupSettings = formFormsContext.getSettings(path);
    let groupData = formFormsContext.getValue(path);
    console.log("-------------FIELD-------------");
    console.log(path, "--path");
    console.log(pathS, "--pathS");
    console.log(showDescription, "--showDescription");
    // console.log(fieldSettings, "--fieldSettings");
    // console.log(fieldData, "--fieldData");
    console.log("-------------FIELD-------------");
    let groups = Object.entries(groupSettings.fieldsList || {});

    return (
        <div className="category-fields-container">
            {groups.length > 0 &&
                groups.map((element, index) => {
                    let newPath = [...path, element[0]];
                    let newPathS = [...pathS, element[0]];

                    let returnEl = [];
                    // console.log(
                    //     newPath,
                    //     newPathS,
                    //     "-------------newPaths-------------"
                    // );
                    // console.log(
                    //     element,
                    //     "-------------elementelementelement-------------"
                    // );
                    if (element[1].fieldsList === undefined) {
                        returnEl.push(element[0], "=======+++++++======");
                        returnEl.push(
                            <FormsCategoryField
                                key={element[0] + "-" + index}
                                path={[...newPath]}
                                pathS={[...newPathS]}
                            />
                        );
                    }
                    returnEl.push("-------------START---------");
                    returnEl.push(JSON.stringify(element[1].fieldsList));
                    returnEl.push("-------------END---------");
                    if (element[1].fieldsList !== undefined) {
                        Object.entries(element[1].fieldsList).map(
                            (elementInner, indexInner) => {
                                returnEl.push(indexInner);
                                returnEl.push(<br />);
                                returnEl.push(elementInner[0]);
                                returnEl.push(<br />);
                                returnEl.push(
                                    JSON.stringify([
                                        ...newPath,
                                        elementInner[0],
                                    ])
                                );
                                returnEl.push(<br />);
                                returnEl.push(
                                    JSON.stringify([
                                        ...newPathS,
                                        "fieldsList",
                                        elementInner[0],
                                    ])
                                );
                                returnEl.push(<br />);
                                returnEl.push(
                                    <FormsCategoryFieldsGroup
                                        key={elementInner[0] + "-" + indexInner}
                                        showDescription={false}
                                        path={[...newPath, elementInner[0]]}
                                        pathS={[
                                            ...newPathS,
                                            "fieldsList",
                                            elementInner[0],
                                        ]}
                                    />
                                );
                            }
                        );
                    }

                    return returnEl;
                })}
        </div>
    );
}

export { FormsCategoryFieldsGroup };
