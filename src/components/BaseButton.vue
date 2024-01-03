<script lang="ts" setup>
defineProps({
	type: {
		type: String,
		required: false,
	},
})
</script>

<template>
	<component
		:is="type || 'button'"
		class="border-stone-400 tracking-widest border py-2 px-4 font-bold transition-all hover:bg-stone-100"
	>
		<slot></slot>
	</component>
</template>
