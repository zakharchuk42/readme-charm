<script lang="ts" setup>
import GenerateCard from '../GenerateCard.vue'
import { devIcons } from '../../utils/icons.ts'
import BaseInput from '../BaseInput.vue'
import SkillsIcon from '../SkillsIcon.vue'
import { computed, ref } from 'vue'
import { formState } from '../../modules/generateForm.ts'

const searchIconsInput = ref('')

const filteringSkills = computed(() => {
	return Object.keys(devIcons).reduce((total, key) => {
		const filtered = devIcons[key].filter((icon) =>
			icon.name.includes(searchIconsInput.value.toLowerCase())
		)
		return {
			...total,
			[key]: filtered,
		}
	}, {})
})
</script>

<template>
	<div v-for="img in formState.skills">
		{{ img }}
	</div>
	<div class="relative">
		<div class="absolute w-1/3 right-0">
			<BaseInput v-model="searchIconsInput" placeholder="Search..." />
		</div>
		<GenerateCard title="Skills" col>
			<div
				v-for="(icons, title) in filteringSkills"
				v-show="icons.length"
			>
				<h3 class="text-2xl font-bold text-stone-600 capitalize">
					{{ title }}
				</h3>
				<hr class="my-2" />
				<div class="flex flex-wrap overflow-auto pb-8">
					<SkillsIcon
						v-for="icon in icons"
						:key="icon.name"
						:icon="icon"
					/>
				</div>
			</div>
		</GenerateCard>
	</div>
</template>
