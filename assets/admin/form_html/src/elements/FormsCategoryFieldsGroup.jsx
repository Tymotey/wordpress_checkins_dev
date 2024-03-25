import { __ } from "@wordpress/i18n";
import {} from "lodash";
import { useContext, useState } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";
import { FormsCategoryFieldNormal } from "./FormsCategoryFieldNormal";
import { FormsCategoryFieldRepeater } from "./FormsCategoryFieldRepeater";

function FormsCategoryFieldsGroup(props) {
    let { path, pathS, showDetails, isRepeater } = props;
    const formFormsContext = useContext(FormFormsContext);

    // Get field data
    let groupSettings = formFormsContext.getSettings(pathS);
    let groupData = formFormsContext.getValue(path);

    if (groupSettings.fieldsList === undefined) {
        if (!isRepeater) {
            return (
                <FormsCategoryFieldNormal
                    key={path.join("-") + "-field"}
                    path={[...path]}
                    pathS={[...pathS]}
                />
            );
        } else {
            return (
                <FormsCategoryFieldRepeater
                    key={path.join("-") + "-fieldRepeater"}
                    path={[...path]}
                    pathS={[...pathS]}
                />
            );
        }
    } else if (groupSettings.fieldsList !== undefined) {
        return (
            <>
                <div
                    key={path.join("-") + "-container-outter"}
                    className={
                        "category-field-container-inner level-" + path.length
                    }
                >
                    {path.length > 2 && groupSettings.title !== undefined && (
                        <h4 className="category-field-title-inner">
                            {groupSettings.title}
                        </h4>
                    )}
                    <div className="category-field-content-inner">
                        {Object.entries(groupSettings.fieldsList).map(
                            (elementInner, indexInner) => {
                                let newPath = [...path, elementInner[0]];

                                return (
                                    <FormsCategoryFieldsGroup
                                        key={
                                            newPath.join("-") +
                                            "-container-inner"
                                        }
                                        path={newPath}
                                        pathS={[
                                            ...pathS,
                                            "fieldsList",
                                            elementInner[0],
                                        ]}
                                        isRepeater={isRepeater}
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
