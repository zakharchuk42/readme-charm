<script lang="ts" setup>
import GenerateCard from '../GenerateCard.vue'
import { devIcons } from '../../utils/icons.ts'
import BaseIcon from '../BaseIcon.vue'
</script>

<template>
	<GenerateCard title="Skills" col>
		<div v-for="(item, title) in devIcons">
			<h3 class="text-2xl font-bold text-stone-600 capitalize">
				{{ title }}
			</h3>
			<hr class="my-2" />
			<div class="flex flex-wrap overflow-auto pb-8">
				<BaseIcon
					v-for="{ icon, text } in item"
					:key="text"
					:icon="icon"
					:text="text"
				/>
			</div>
		</div>
	</GenerateCard>
</template>
