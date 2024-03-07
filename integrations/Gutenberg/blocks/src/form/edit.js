import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { getForms, getFormActions } from "../_common/code.js";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	function updateFormName(event) {
		setAttributes({ formName: event.target.value });
	}
	function updateFormAction(event) {
		setAttributes({ formAction: event.target.value });
	}

	const forms = getForms();
	const formActions = getFormActions();

	return (
		<div {...useBlockProps()}>
			<h4>{__("BTDEV Inscriere - Form")}</h4>
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
			<select onChange={updateFormAction}>
				{formActions.map((val, index) => {
					return (
						<option
							key={"option-form-action-" + index}
							value={val[0]}
							selected={val[0] === attributes.formAction ? true : false}
						>
							{val[1]}
						</option>
					);
				})}
			</select>
		</div>
	);
}
