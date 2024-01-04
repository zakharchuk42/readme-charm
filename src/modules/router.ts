import { Ref, ref } from 'vue'
import {
	PAGE_GENERATE_README,
	PAGE_GENERATE_README_PROJECT,
	PAGE_HOW_IT_WORKS,
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

interface ICurrentPage {
	[key: string]: any
}

export const currentPage: Ref<string> = ref(normalizePathHash())

export const routes: ICurrentPage = {
	[PAGE_GENERATE_README]: TheGenerate,
	[PAGE_GENERATE_README_PROJECT]: TheGenerateProject,
	[PAGE_HOW_IT_WORKS]: TheHowWorks,
	[PAGE_RESULT]: TheResult,
}

export function navigate(page: string): void {
	document.body.scrollIntoView()
	currentPage.value = page
}

export function normalizePathHash(): string {
	const page = window.location.hash.slice(1)

	if (isPageValid(page)) {
		return page
	}

	window.location.hash = PAGE_GENERATE_README

	return PAGE_GENERATE_README
}
