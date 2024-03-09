import { __ } from "@wordpress/i18n";
import { useContext, useState } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";

function FormsCategory(props) {
    console.log(props);
    const formFormsContext = useContext(FormFormsContext);
    const [opened, setOpened] = useState(props.catIndex === 0 ? true : false);

    const toggleOpen = () => {
        setOpened(!opened);
    };

    let elClasses = ["category-container"];
    if (opened) {
        elClasses.push("opened");
    }
    elClasses = elClasses.join(" ");

    return (
        <div key={props.catKey} className={elClasses}>
            <div className="category-title" onClick={toggleOpen}>
                {__(props.catSettings.title, "btdev_inscriere_text")}
            </div>
            <div className="category-content">aaaaaaa</div>
        </div>
    );
}

export { FormsCategory };
