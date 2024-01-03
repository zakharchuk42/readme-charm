<script setup lang="ts">
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import TheSideBar from './TheSideBar.vue'
import { currentPage, routes } from '../modules/router.ts'
</script>

<template>
	<TheHeader />
	<div class="flex flex-grow">
		<main class="flex flex-col gap-10 px-8 py-6 w-9/12">
			<component :is="routes[currentPage]" />
		</main>
		<TheSideBar />
	</div>
	<TheFooter />
</template>
