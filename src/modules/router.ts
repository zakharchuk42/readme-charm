import { ref } from 'vue'
import {
	PAGE_GENERATE_README,
	PAGE_GENERATE_README_PROJECT,
	PAGE_HOW_IT_WORK,
	PAGE_RESULT,
} from '../utils/constants.ts'
import { isPageValid } from '../utils/validators.ts'
// @ts-ignore
import TheGenerate from '../pages/TheGenerate.vue'
// @ts-ignore
import TheResult from '../pages/TheResult.vue'
// @ts-ignore
import TheGenerateProject from '../pages/TheGenerateProject.vue'
// @ts-ignore
import TheHowWorks from '../pages/TheHowWorks.vue'

export const currentPage = ref(normalizePathHash())

export const routes = {
	[PAGE_GENERATE_README]: TheGenerate,
	[PAGE_GENERATE_README_PROJECT]: TheGenerateProject,
	[PAGE_HOW_IT_WORK]: TheHowWorks,
	[PAGE_RESULT]: TheResult,
}

export function navigate(page: string) {
	document.body.scrollIntoView()
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
