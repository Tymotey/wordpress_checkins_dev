import { __ } from "@wordpress/i18n";
import { useState, useContext } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";
import { FormsCategoryFieldNormal } from "./FormsCategoryFieldNormal";
import { FormsCategoryFieldRepeater } from "./FormsCategoryFieldRepeater";
import { FormsCategoryFieldsGroup } from "./FormsCategoryFieldsGroup";

function FormsCategory({ catIndex, catKey }) {
    const formFormsContext = useContext(FormFormsContext);
    let isRepeater = catKey[0] === "repeater_fields" ? true : false;

    // Close first category
    const [opened, setOpened] = useState(catIndex === 2 ? true : true);
    const toggleOpen = () => {
        setOpened(!opened);
    };

    // Category settings and values
    let categoryValues = formFormsContext.getValue(catKey);
    let categorySettings = formFormsContext.getSettings(catKey);

    // Element classes
    let elClasses = ["category-container"];
    if (opened) {
        elClasses.push("opened");
    }
    elClasses = elClasses.join(" ");

    if (categoryValues !== undefined && categorySettings !== undefined) {
        return (
            <div key={catKey[0]} className={elClasses}>
                <div className="category-title" onClick={toggleOpen}>
                    {__(categorySettings.title, "btdev_inscriere_text")}
                    {isRepeater == true && (
                        <div className="repeater_add_field">
                            <span className="dashicons dashicons-insert"></span>
                        </div>
                    )}
                </div>
                <div className="category-content">
                    {categorySettings.helpDescription &&
                        categorySettings.helpDescription !== "" && (
                            <h5 className="category-field-description">
                                {categorySettings.helpDescription}
                            </h5>
                        )}
                    {categorySettings.fieldsList === undefined &&
                        !isRepeater && (
                            <FormsCategoryFieldNormal
                                key={catKey.join("-") + "-field"}
                                path={[...catKey]}
                                pathS={[...catKey]}
                                showTitle={false}
                                showDescription={false}
                            />
                        )}
                    {categorySettings.fieldsList &&
                        Object.keys(categorySettings.fieldsList).length > 0 && (
                            <FormsCategoryFieldsGroup
                                key={catKey.join("-") + "-group"}
                                path={[...catKey]}
                                pathS={[...catKey]}
                                isRepeater={isRepeater}
                            />
                        )}
                </div>
            </div>
        );
    } else {
        return <div>{__("No setting data found", "btdev_inscriere_text")}</div>;
    }
}

export { FormsCategory };
