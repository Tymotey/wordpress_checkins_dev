import { useState, useEffect, useRef } from "react";
import { FormFormsContextElement } from "../hooks/formFormsContext";
import { FormsCategory } from "./formFormsCategory";
import { formStructure } from "../info/constants";

export default function FormsForm() {
    const settingsTextarea = useRef(
        document.getElementById("btdev_forms_post_content")
    );

    const [settings, setSettings] = useState(
        JSON.parse(settingsTextarea.current.value)
    );

    useEffect(() => {
        settingsTextarea.current.value = JSON.stringify(settings);
    }, [settings]);

    console.log(settings);

    return (
        <FormFormsContextElement
            value={{ settings, setSettings, textarea: settingsTextarea }}
        >
            {Object.entries(formStructure).map((element, index) => {
                return (
                    <FormsCategory
                        key={element[0]}
                        catIndex={index}
                        catKey={element[0]}
                        catSettings={element[1]}
                    />
                );
            })}
        </FormFormsContextElement>
    );
}
