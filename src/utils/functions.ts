import { Ref } from 'vue'

export function getCaretPosition(el: Ref): number {
	return el.value.selectionStart
}
