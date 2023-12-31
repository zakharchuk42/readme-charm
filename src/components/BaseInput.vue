<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
	modelValue: {
		type: String,
	},
	placeholder: {
		type: String,
	},
})

const emit = defineEmits(['update:modelValue'])

const writeableComputed = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit('update:modelValue', value)
	},
})
</script>

<template>
	<input
		type="text"
		:placeholder="placeholder"
		v-model="writeableComputed"
		class="w-full text-stone-800 tracking-widest border-b border-b-stone-700 text-xl px-2 py-1 transition focus:outline-none focus:border-b-stone-700"
	/>
</template>

<!--		@input="$emit('update:modelValue', $event.target.value)"-->
