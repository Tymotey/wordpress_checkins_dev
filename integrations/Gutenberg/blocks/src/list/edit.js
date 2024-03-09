import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { getForms, getTableTypes } from "../_common/code.js";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
    function updateFormName(event) {
        setAttributes({ formName: event.target.value });
    }
    function updateTableType(event) {
        setAttributes({ tableType: event.target.value });
    }

    const forms = getForms();
    const tableTypes = getTableTypes();
    const blockProps = useBlockProps({
        className: ["btdev-inscriere-block"],
    });

    return (
        <div {...blockProps}>
            <h4>{__("BTDEV Inscriere - List")}</h4>
            <select
                onChange={updateFormName}
                defaultValue={attributes.formName}
            >
                {forms.map((val, index) => {
                    return (
                        <option key={"option-form-" + index} value={val[0]}>
                            {val[1]}
                        </option>
                    );
                })}
            </select>
            <select
                onChange={updateTableType}
                defaultValue={attributes.tableType}
            >
                {tableTypes.map((val, index) => {
                    return (
                        <option
                            key={"option-form-table-" + index}
                            value={val[0]}
                        >
                            {val[1]}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
