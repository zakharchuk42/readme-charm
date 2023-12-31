<script lang="ts" setup>
const props = defineProps({
	title: {
		type: String,
	},
	col: {
		type: Boolean,
		default: false,
	},
})

const classes = ['flex gap-10 pb-4', props.col && 'flex-col']
</script>

<template>
	<div class="pb-16">
		<h2 class="text-3xl font-bold pb-6 text-stone-900">{{ title }}</h2>
		<div :class="classes">
			<slot></slot>
		</div>
	</div>
</template>
