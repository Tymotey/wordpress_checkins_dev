import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	let shortcode = "";
	if (attributes.formName && attributes.formName !== "") {
		shortcode =
			'[bbdev_inscrieri_entry_summary form="' + attributes.formName + '"]';
	}

	return <div {...useBlockProps.save()}>{{ shortcode }}</div>;
}
