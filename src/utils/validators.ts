import { NAV_ITEMS } from './constants.ts'

export function isPageValid(page: string): boolean {
	return NAV_ITEMS.some((navItem) => navItem.page === page)
}
