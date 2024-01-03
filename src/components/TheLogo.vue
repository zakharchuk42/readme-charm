<script lang="ts" setup>
import { navigate } from '../modules/router.js'
import { PAGE_GENERATE_README } from '../utils/constants.ts'
</script>

<template>
	<a
		:href="`#${PAGE_GENERATE_README}`"
		class="flex gap-2 items-center cursor-pointer"
		@click="navigate(PAGE_GENERATE_README)"
	>
		<img src="../app/images/logo.svg" alt="Logo" width="40" />
		<p class="text-2xl font-bold">
			Read<span class="text-red-500">Me</span> Charm
		</p>
	</a>
</template>
