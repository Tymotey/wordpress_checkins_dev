import { __ } from "@wordpress/i18n";
import { useContext, useState } from "react";
import { FormFormsContext } from "../hooks/formFormsContext";

function FormsInputRepeater(props) {
    let { fieldSettings, fieldData, path, pathS } = props;
    if (fieldData === undefined) {
        fieldData = {
            title: __("Default title", "btdev_inscriere_text"),
            type: "input",
            width: "full",
        };
    }
    const formFormsContext = useContext(FormFormsContext);

    const changeValue = (event) => {
        formFormsContext.setValuePath(path, event.target.value);
    };

    const removeField = () => {
        if (fieldSettings.notDeletable !== true) {
            console.log(path, "----clicked delete");
        }
    };

    return (
        <>
            <div
                className={[
                    "repeater_control",
                    fieldSettings.notDeletable ? "not_deletetable" : undefined,
                ].join(" ")}
                onClick={removeField}
            >
                <span className="dashicons dashicons-remove"></span>
            </div>
            <div
                className={["repeater_move"].join(" ")}
                draggable="true"
                onDragStart={(e) =>
                    formFormsContext.handleDragStart(e, fieldSettings)
                }
                onDragEnd={formFormsContext.handleDragEnd}
                onDragOver={formFormsContext.handleDragOver}
                onDrop={(e) => formFormsContext.handleDrop(e, fieldSettings)}
            >
                <span className="dashicons dashicons-move"></span>
            </div>
            <div className="repeater_inner_wrapper">
                <div className="">
                    <div className="">
                        {__("Title", "btdev_inscriere_text")}
                    </div>
                    <div className="">
                        <input
                            type="text"
                            defaultValue={fieldData.title}
                            onChange={(event) => changeValue(event, "title")}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="">{__("Type", "btdev_inscriere_text")}</div>
                    <div className="">
                        <select
                            onChange={(event) => changeValue(event, "type")}
                            defaultValue={fieldData.type}
                        >
                            <option value="input">
                                {__("Input", "btdev_inscriere_text")}
                            </option>
                            <option value="textarea">
                                {__("Textarea", "btdev_inscriere_text")}
                            </option>
                            <option value="total_row">
                                {__("Row total", "btdev_inscriere_text")}
                            </option>
                            <option value="total_count_row">
                                {__("Row count total", "btdev_inscriere_text")}
                            </option>
                        </select>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        {__("CSS Width", "btdev_inscriere_text")}
                    </div>
                    <div className="">
                        <select
                            onChange={(event) => changeValue(event, "width")}
                            defaultValue={fieldData.width}
                        >
                            <option value="full">
                                {__("Full", "btdev_inscriere_text")}
                            </option>
                            <option value="half">
                                {__("Half", "btdev_inscriere_text")}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}
export { FormsInputRepeater };
