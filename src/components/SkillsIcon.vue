<script lang="ts" setup>
import { computed, ref } from 'vue'
import { handleEditSkillIcon } from '../modules/state-form.ts'

const props = defineProps({
	icon: {
		type: Object,
		required: true,
	},
})

const isShowTooltip = ref(false)
const isChoose = ref(false)
const chooseIcon = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.icon.name}/${props.icon.name}-${props.icon.type}.svg`

function handleChoose() {
	isChoose.value = !isChoose.value
	handleEditSkillIcon(chooseIcon, isChoose.value)
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
			ref="chooseIcon"
			:alt="icon.name"
			:src="chooseIcon"
			width="40"
			height="60"
		/>
		<div
			v-show="isShowTooltip"
			class="absolute z-10 left-0 bottom-30 bg-white text-stone-600 border p-2"
		>
			{{ icon.name }}
		</div>
	</div>
</template>
