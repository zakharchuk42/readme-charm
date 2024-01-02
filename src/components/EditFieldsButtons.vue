<script lang="ts" setup>
import BaseButton from './BaseButton.vue'
import { addFields, deleteFields } from '../modules/generateForm.ts'

defineProps({
	fieldsArray: {
		type: Array,
		required: true,
	},
	fieldsOptions: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<div class="flex gap-4 justify-end">
		<BaseButton @click="addFields(fieldsArray, fieldsOptions)"
			>Add Fields</BaseButton
		>
		<BaseButton @click="deleteFields(fieldsArray)"
			>Delete Fields</BaseButton
		>
	</div>
</template>
