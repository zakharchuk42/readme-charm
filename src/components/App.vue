<script setup lang="ts">
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import { currentPage, routes } from '../modules/router.ts'
</script>

<template>
	<TheHeader />
	<main class="flex flex-1 flex-col w-10/12 px-8 py-6">
		<component :is="routes[currentPage]" />
	</main>
	<TheFooter />
</template>
