<script lang="ts" setup>
import { ICONS_LINK } from '../utils/constants.ts'
import BaseIcon from './BaseIcon.vue'
import { navigate } from '../modules/router.ts'

const props = defineProps({
	page: {
		type: Object,
		required: true,
	},
})

function handleClick() {
	navigate(props.page.page)
}
</script>

<template>
	<li class="flex gap-2">
		<BaseIcon :icon="ICONS_LINK" />
		<a
			:href="`#${page.page}`"
			class="text-xl font-medium ease-in duration-200 hover:text-red-500 hover:ml-2"
			@click="handleClick"
			>{{ page.name }}</a
		>
	</li>
</template>
