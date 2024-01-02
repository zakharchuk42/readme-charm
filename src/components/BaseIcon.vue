<script lang="ts" setup>
import { ICONS } from '../utils/icons.ts'

defineProps({
	type: {
		type: String,
		required: false,
		default: '',
	},
})
</script>

<template>
	<component :is="ICONS[type]" />
</template>
