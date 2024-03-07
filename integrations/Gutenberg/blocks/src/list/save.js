import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	let shortcode = "";
	if (
		attributes.formName &&
		attributes.formName !== "" &&
		attributes.tableType &&
		attributes.tableType !== ""
	) {
		shortcode =
			'[bbdev_inscrieri_list_entries form="' +
			attributes.formName +
			'" type="' +
			attributes.tableType +
			'"]';
	}

	return <div {...useBlockProps.save()}>{{ shortcode }}</div>;
}
