<script lang="ts" setup>
import { computed, provide, Ref, ref } from 'vue'
import { getCaretPosition } from '../utils/functions.ts'
import BaseIcon from './BaseIcon.vue'
import EmojiPicker from './EmojiPicker.vue'

const props = defineProps({
	modelValue: {
		type: String,
	},
	placeholder: {
		type: String,
	},
	icon: {
		type: String,
		required: false,
		default: '',
	},
	emoji: {
		type: Boolean,
		required: false,
		default: false,
	},
})

const emit = defineEmits(['update:modelValue'])

const myInput: Ref<string> = ref('')

const writeableComputed = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit('update:modelValue', value.trim())
	},
})

function emojiClick(emoji) {
	const position = getCaretPosition(myInput)
	const text = props.modelValue
	const value =
		text?.slice(0, position) + emoji + text?.slice(position, text?.length)
	emit('update:modelValue', value)
}

provide('emojiClick', emojiClick)
</script>

<template>
	<div class="relative w-full flex">
		<input
			type="text"
			ref="myInput"
			:placeholder="placeholder"
			v-model="writeableComputed"
			class="w-full text-stone-800 tracking-widest border-b border-b-stone-700 text-xl pl-2 pr-6 py-1 transition focus:outline-none focus:border-b-stone-700"
		/>
		<div v-show="icon" class="absolute right-0 top-2 flex items-center">
			<BaseIcon :icon="icon" />
		</div>
		<div v-show="emoji" class="absolute right-0 top-2 flex items-center">
			<EmojiPicker />
		</div>
	</div>
</template>
