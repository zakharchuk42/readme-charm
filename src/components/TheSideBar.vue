<script lang="ts" setup="">
import TheNav from './TheNav.vue'

import TheSidebarButtonsGroup from './TheSidebarButtonsGroup.vue'
</script>

<template>
	<aside class="relative w-3/12 border-l p-10">
		<div class="sticky top-10 flex flex-col gap-6">
			<TheNav />
			<hr />
			<TheSidebarButtonsGroup />
			<hr />
		</div>
	</aside>
</template>
