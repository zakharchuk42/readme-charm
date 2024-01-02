<script lang="ts" setup>
import { computed, ref } from 'vue'

defineProps({
	icon: {
		type: Object,
		required: true,
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
		<img
			:alt="icon.name"
			:src="`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-${icon.type}.svg`"
			width="60"
			height="80"
		/>
		<div
			v-show="isShowTooltip"
			class="absolute z-10 left-0 bottom-30 bg-white text-stone-600 border p-2"
		>
			{{ icon.name }}
		</div>
	</div>
</template>
