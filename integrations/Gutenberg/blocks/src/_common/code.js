function getForms() {
	const forms = [];
	for (const [key, value] of Object.entries(
		// eslint-disable-next-line
		btdev_inscriere_ajax.forms,
	)) {
		forms.push([key, value.title]);
	}

	return forms;
}

function getTableTypes() {
	const tableTypes = [["", "Choose a table type"]];
	for (const [key, value] of Object.entries(btdev_inscriere_ajax.tables)) {
		tableTypes.push([key, value]);
	}

	return tableTypes;
}

function getFormActions() {
	const formActions = [
		["", "Choose a form action"],
		["add", "Add submission"],
		["edit", "Edit submission"],
	];

	return formActions;
}

export { getForms, getTableTypes, getFormActions };
