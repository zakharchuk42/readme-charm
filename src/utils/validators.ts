import { NAV_ITEMS } from './constants.ts'

export function isPageValid(page) {
	return NAV_ITEMS.some((navItem) => navItem === page)
}
