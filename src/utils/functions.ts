export function getCaretPosition(el) {
	if (el.value) {
		return el.value.selectionStart
	}

	return el.value.length
}
