export function getCaretPosition(el: {
	value: { selectionStart: number; length: number }
}): number {
	return el.value.selectionStart
}
