import { useState, useEffect, useRef } from "react";
import { FormFormsContextElement } from "../hooks/formFormsContext";
import { FormsCategory } from "./formFormsCategory";
import { formStructure } from "../info/constants";

export default function FormsForm() {
    const settingsTextarea = useRef(
        document.getElementById("btdev_forms_post_content")
    );

    const [settings, setSettings] = useState(formStructure);
    const [values, setValues] = useState(
        JSON.parse(settingsTextarea.current.value)
    );

    useEffect(() => {
        settingsTextarea.current.value = JSON.stringify(values);
    }, [values]);

    return (
        <FormFormsContextElement
            value={{
                textarea: settingsTextarea,
                settings,
                setSettings,
                values,
                setValues,
            }}
        >
            {Object.entries(formStructure).map((element, index) => {
                return (
                    <FormsCategory
                        key={element[0]}
                        catIndex={index}
                        catKey={element[0]}
                    />
                );
            })}
        </FormFormsContextElement>
    );
}
