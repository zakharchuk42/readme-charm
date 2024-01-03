<script lang="ts" setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../utils/constants.ts'
</script>

<template>
	<nav>
		<ul class="flex flex-col gap-2">
			<NavItem v-for="page in NAV_ITEMS" :key="page.link" :page="page" />
		</ul>
	</nav>
</template>
