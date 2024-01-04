<script lang="ts" setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="flex flex-col gap-4">
		<div class="text-2xl font-medium">
			{{ title }}
		</div>
		<slot></slot>
	</div>
</template>
