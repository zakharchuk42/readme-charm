<script lang="ts" setup>
import { ICONS_LINK } from '../utils/constants.ts'
import BaseIcon from './BaseIcon.vue'
import { currentPage, navigate } from '../modules/router.ts'
import { computed } from 'vue'

const props = defineProps({
	page: {
		type: Object,
		required: true,
	},
})

function handleClick() {
	navigate(props.page.page)
}

const classes = computed(() => [
	'text-xl font-medium ease-in duration-200 hover:text-red-500 hover:ml-2',
	currentPage.value === props.page.page
		? 'text-red-500 pointer-events-none'
		: '',
])
</script>

<template>
	<li class="flex gap-2">
		<BaseIcon :icon="ICONS_LINK" />
		<a :href="`#${page.page}`" :class="classes" @click="handleClick">{{
			page.name
		}}</a>
	</li>
</template>
