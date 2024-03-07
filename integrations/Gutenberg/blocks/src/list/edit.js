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

	return (
		<div {...useBlockProps()}>
			<h4>{__("BTDEV Inscriere - List")}</h4>
			<select onChange={updateFormName}>
				{forms.map((val, index) => {
					return (
						<option
							key={"option-form-" + index}
							value={val[0]}
							selected={val[0] === attributes.formName ? true : false}
						>
							{val[1]}
						</option>
					);
				})}
			</select>
			<select onChange={updateTableType}>
				{tableTypes.map((val, index) => {
					return (
						<option
							key={"option-form-table-" + index}
							value={val[0]}
							selected={val[0] === attributes.tableType ? true : false}
						>
							{val[1]}
						</option>
					);
				})}
			</select>
		</div>
	);
}
