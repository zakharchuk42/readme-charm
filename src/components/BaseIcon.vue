<script lang="ts" setup>
defineProps({
	icon: {
		type: String,
		required: true,
	},
	width: {
		type: String,
		required: false,
		default: '20',
	},
})
</script>

<template>
	<img
		:src="`/readme-charm/src/app/images/${icon}`"
		alt="search"
		:width="width"
	/>
</template>
