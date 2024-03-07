import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	let shortcode = "";
	if (
		attributes.formName &&
		attributes.formName !== "" &&
		attributes.formAction &&
		attributes.formAction !== ""
	) {
		shortcode =
			'[bbdev_inscrieri_form form="' +
			attributes.formName +
			'" action="' +
			attributes.formAction +
			'"]';
	}

	return <div {...useBlockProps.save()}>{{ shortcode }}</div>;
}
