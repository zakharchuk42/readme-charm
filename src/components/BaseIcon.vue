<script lang="ts" setup>
import { computed, ref } from 'vue'

defineProps({
	icon: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: false,
	},
})

const isShowTooltip = ref(false)
const isChoose = ref(false)

function handleChoose() {
	isChoose.value = !isChoose.value
}

const classes = computed(() => {
	return [
		'relative p-4 cursor-pointer transition hover:bg-stone-100',
		isChoose.value && 'bg-stone-100',
	]
})
</script>

<template>
	<div
		:class="classes"
		@click="handleChoose"
		@mouseenter="isShowTooltip = !isShowTooltip"
		@mouseleave="isShowTooltip = !isShowTooltip"
	>
		<i :class="`${icon} text-5xl`"></i>
		<div
			v-show="isShowTooltip"
			class="absolute z-10 left-0 bottom-30 bg-white text-stone-600 border p-2"
		>
			{{ text }}
		</div>
	</div>
</template>
