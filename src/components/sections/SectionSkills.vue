<script lang="ts" setup>
import GenerateCard from '../GenerateCard.vue'
import { devIcons } from '../../utils/icons.ts'
import BaseIcon from '../BaseIcon.vue'
import { computed, ref } from 'vue'
import BaseInput from '../BaseInput.vue'

const searchIcons = ref('')

const iconsObj = computed(() => {
	return Object.keys(devIcons).reduce((total, key) => {
		const filtered = devIcons[key].filter((icon) =>
			icon.name.includes(searchIcons.value.toLowerCase())
		)
		return {
			...total,
			[key]: filtered,
		}
	}, {})
})
</script>

<template>
	<BaseInput v-model="searchIcons" />
	<GenerateCard title="Skills" col>
		<div v-for="(icons, title) in iconsObj" v-show="icons.length !== 0">
			<h3 class="text-2xl font-bold text-stone-600 capitalize">
				{{ title }}
			</h3>
			<hr class="my-2" />
			<div class="flex flex-wrap overflow-auto pb-8">
				<BaseIcon v-for="icon in icons" :key="icon.name" :icon="icon" />
			</div>
		</div>
	</GenerateCard>
</template>
