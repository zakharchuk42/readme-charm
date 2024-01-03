<script lang="ts" setup>
import { computed, ref } from 'vue'
import { EXAMPLE_GITHUB_WIDGETS } from '../utils/constants.ts'

const props = defineProps({
	widget: {
		type: Object,
		required: true,
	},
	isBlocked: {
		type: Boolean,
		required: true,
	},
})

const emit = defineEmits(['chooseWidget'])
const isChoose = ref(false)

function chooseWidget() {
	if (props.isBlocked) return
	isChoose.value = !isChoose.value

	if (isChoose.value) {
		emit('chooseWidget', props.widget.name)
	} else {
		emit('chooseWidget', null)
	}
}

const choose = computed(() => {
	return [
		'border-4 border-white rounded-md cursor-pointer',
		isChoose.value && '!border-emerald-600',
		props.isBlocked && 'pointer-events-none !border-red-600',
	]
})
</script>

<template>
	<div class="relative">
		<h3 class="text-2xl font-bold text-stone-600 capitalize pb-4">
			{{ widget.name }}
		</h3>
		<div class="flex items-center gap-10">
			<img
				:src="EXAMPLE_GITHUB_WIDGETS[widget.index]"
				:alt="widget.name"
				:class="choose"
				@click="chooseWidget"
			/>
		</div>
		<hr class="absolute -bottom-6 w-full" />
	</div>
</template>
