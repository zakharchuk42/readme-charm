<script lang="ts" setup>
import { ICONS_LINK, PAGE_GENERATE_README } from '../utils/constants.ts'
import BaseIcon from './BaseIcon.vue'
import { currentPage, navigate } from '../modules/router.ts'
import { computed, PropType } from 'vue'

interface INavItem {
	page: string
	name: string
}

const props = defineProps({
	page: {
		type: Object as PropType<INavItem>,
		required: true,
	},
})

function handleClick() {
	navigate(props.page?.page || PAGE_GENERATE_README)
}

const classes = computed(() => [
	'text-xl font-medium ease-in duration-200 hover:text-red-500 hover:ml-2',
	currentPage.value === props.page?.page
		? 'text-red-500 pointer-events-none'
		: '',
])
</script>

<template>
	<li class="flex gap-2" v-show="page.name">
		<BaseIcon :icon="ICONS_LINK" />
		<a :href="`#${page.page}`" :class="classes" @click="handleClick">{{
			page.name
		}}</a>
	</li>
</template>
