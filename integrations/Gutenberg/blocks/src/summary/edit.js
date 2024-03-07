import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { getForms } from "../_common/code.js";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	function updateFormName(event) {
		setAttributes({ formName: event.target.value });
	}

	const forms = getForms();

	return (
		<div {...useBlockProps()}>
			<h4>{__("BTDEV Inscriere - Summary")}</h4>
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
		</div>
	);
}
