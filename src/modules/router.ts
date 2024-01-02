import { ref } from 'vue'
import { PAGE_GENERATE_README } from '../utils/constants.ts'
import TheGenerate from '../pages/TheGenerate.vue'
import { isPageValid } from '../utils/validators.ts'

export const currentPage = ref(normalizePathHash())

export const routes = {
	[PAGE_GENERATE_README]: TheGenerate,
}

export function navigate(page: string) {
	currentPage.value = page
}

export function normalizePathHash() {
	const page = window.location.hash.slice(1)

	if (isPageValid(page)) {
		return page
	}

	window.location.hash = PAGE_GENERATE_README

	return PAGE_GENERATE_README
}
