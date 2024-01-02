import { INPUT_ICON_EMOJI, INPUT_ICON_SEARCH } from './constants.ts'
import EmojiPicker from '../components/EmojiPicker.vue'
import SearchIcon from '../components/SearchIcon.vue'

export const ICONS = {
	[INPUT_ICON_EMOJI]: EmojiPicker,
	[INPUT_ICON_SEARCH]: SearchIcon,
}
