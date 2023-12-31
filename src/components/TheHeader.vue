<script lang="ts" setup>
import TheLogo from './TheLogo.vue'
</script>

<template>
	<header
		class="w-full flex justify-between items-center p-8 border-b shadow"
	>
		<TheLogo />
		<div class="flex gap-2">
			<img
				alt="gitHub"
				width="40"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
			/>
			<img
				alt="LinkedIn"
				width="40"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
			/>
		</div>
	</header>
</template>
