<script lang="ts" setup>
import Card from '../Card.vue'
import { DEV_ICONS, IDevIcons } from '../../utils/dev-icons.ts'
import BaseInput from '../BaseInput.vue'
import SkillsIcon from '../SkillsIcon.vue'
import { computed, Ref, ref } from 'vue'
import { INPUT_ICON_SEARCH } from '../../utils/constants.ts'
import { STATE_FORM } from '../../modules/state-form.ts'

const searchIconsInput = ref('')

const filteringSkills: Ref<IDevIcons> = computed(() => {
	return Object.keys(DEV_ICONS).reduce((total, key) => {
		const filtered = DEV_ICONS[key].filter(
			(icon: { name: string; src: string }) =>
				icon.name.includes(searchIconsInput.value.toLowerCase())
		)
		return {
			...total,
			[key]: filtered,
		}
	}, {})
})

function isChoose(iconName: string) {
	return STATE_FORM.value.skills.includes(iconName)
}
</script>

<template>
	<div class="relative">
		<div class="absolute w-1/3 right-0">
			<BaseInput
				v-model="searchIconsInput"
				placeholder="Search..."
				:icon="INPUT_ICON_SEARCH"
			/>
		</div>
		<Card title="Skills" col class="pb-16">
			<div
				v-for="(icons, title) in filteringSkills"
				v-show="icons.length"
				:key="title"
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
						:is-choose="isChoose(icon.src)"
					/>
				</div>
			</div>
		</Card>
	</div>
</template>
