<script lang="ts" setup>
import { computed, provide, ref } from 'vue'
import { getCaretPosition } from '../utils/functions.ts'
import BaseIcon from './BaseIcon.vue'

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
})

const emit = defineEmits(['update:modelValue'])

const myInput = ref('')

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
		<div class="absolute right-0 top-2 flex items-center">
			<BaseIcon :type="icon" />
		</div>
	</div>
</template>
