import { __ } from "@wordpress/i18n";
import { useState, useContext } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";
import { FormsCategoryField } from "./FormsCategoryField";

function FormsCategory({ catIndex, catKey }) {
    const formFormsContext = useContext(FormFormsContext);

    // Close first category
    const [opened, setOpened] = useState(catIndex === 2 ? true : false);
    const toggleOpen = () => {
        setOpened(!opened);
    };

    // Category settings and values
    let categoryValues = formFormsContext.getSettings(catKey);
    let categorySettings = formFormsContext.getSettings(catKey);

    // Element classes
    let elClasses = ["category-container"];
    if (opened) {
        elClasses.push("opened");
    }
    elClasses = elClasses.join(" ");

    if (categoryValues !== undefined && categorySettings !== undefined) {
        console.log(categorySettings.fieldsList);
        return (
            <div key={catKey} className={elClasses}>
                <div className="category-title" onClick={toggleOpen}>
                    {__(categorySettings.title, "btdev_inscriere_text")}
                </div>
                <div className="category-content">
                    {categorySettings.isFieldOnly &&
                        categorySettings.isFieldOnly === true && (
                            <FormsCategoryField path={catKey} />
                        )}
                    {!categorySettings.isFieldOnly &&
                        Object.keys(categorySettings.fieldsList).length > 0 &&
                        Object.entries(categorySettings.fieldsList).map(
                            (element, index) => {
                                console.log(element);
                                return <>1</>;
                            }
                        )}
                </div>
            </div>
        );
    } else {
        return <div>{__("No setting data found", "btdev_inscriere_text")}</div>;
    }
}

export { FormsCategory };
