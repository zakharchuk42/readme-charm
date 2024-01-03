<script lang="ts" setup>
import { EXAMPLE_GITHUB_WIDGETS } from '../utils/constants.ts'
import { computed, ref } from 'vue'
const props = defineProps({
	widget: {
		type: Object,
		required: true,
	},
})

const emit = defineEmits(['chooseWidget'])
const isChoose = ref(false)

function chooseWidget() {
	isChoose.value = !isChoose.value
	emit('chooseWidget', {
		name: props.widget.name,
	})
}

const choose = computed(() => {
	return [
		'border-4 border-white rounded-md cursor-pointer',
		isChoose.value && '!border-emerald-600',
	]
})
</script>

<template>
	<div class="relative">
		<h3 class="text-2xl font-bold text-stone-600 capitalize pb-4">
			{{ widget.name }}
		</h3>
		<img
			:src="EXAMPLE_GITHUB_WIDGETS[widget.index]"
			:alt="widget.name"
			:class="choose"
			@click="chooseWidget"
		/>
		<hr class="absolute -bottom-6 w-full" />
	</div>
</template>
