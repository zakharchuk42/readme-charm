<script lang="ts" setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../utils/constants.ts'
</script>

<template>
	<div class="flex flex-col gap-6">
		<h2 class="text-3xl font-bold text-stone-900">
			<span class="text-red-500">Nav</span>igation
		</h2>
		<nav>
			<ul class="flex flex-col gap-2">
				<NavItem
					v-for="page in NAV_ITEMS"
					:key="page.page"
					:page="page"
				/>
			</ul>
		</nav>
	</div>
</template>
