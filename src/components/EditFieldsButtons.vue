<script lang="ts" setup>
import BaseButton from './BaseButton.vue'
import { addFields, deleteFields } from '../modules/state-form.ts'

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
			><span class="text-red-500">Add</span> Fields</BaseButton
		>
		<BaseButton @click="deleteFields(fieldsArray)"
			><span class="text-red-500">Del</span>ete Fields</BaseButton
		>
	</div>
</template>
