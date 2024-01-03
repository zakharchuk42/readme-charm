<script lang="ts" setup>
import { computed, PropType, ref } from 'vue'
import { handleEditSkillIcon } from '../modules/state-form.ts'

interface ISkillsIcon {
	name: string
	src: string
}

const props = defineProps({
	icon: {
		type: Object as PropType<ISkillsIcon>,
		required: true,
	},
	isChoose: {
		type: Boolean,
		required: true,
	},
})

const isShowTooltip = ref(false)
const isChoose = ref(props.isChoose)

function handleChoose() {
	isChoose.value = !isChoose.value
	handleEditSkillIcon(props.icon?.src || '', isChoose?.value || false)
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
			:src="icon.src"
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
