<script lang="ts" setup>
import { computed, ref } from 'vue'
import EmojiPicker from './EmojiPicker.vue'
import { getCaretPosition } from '../utils/functions.ts'

const props = defineProps({
	modelValue: {
		type: String,
	},
	placeholder: {
		type: String,
	},
	isShowEmoji: {
		type: Boolean,
		required: false,
		default: false,
	},
})

const emit = defineEmits(['update:modelValue'])

const myInput = ref(null)

const writeableComputed = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit('update:modelValue', value)
	},
})

function emojiClick(emoji) {
	const position = getCaretPosition(myInput)
	const text = props.modelValue
	const value =
		text?.slice(0, position) + emoji + text?.slice(position, text?.length)

	emit('update:modelValue', value)
}
</script>

<template>
	<div class="relative w-full">
		<input
			type="text"
			ref="myInput"
			:placeholder="placeholder"
			v-model="writeableComputed"
			class="w-full text-stone-800 tracking-widest border-b border-b-stone-700 text-xl pl-2 pr-6 py-1 transition focus:outline-none focus:border-b-stone-700"
		/>
		<div v-show="isShowEmoji">
			<EmojiPicker @emoji-click="emojiClick" />
		</div>
	</div>
</template>
