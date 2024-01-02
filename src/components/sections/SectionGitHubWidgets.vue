<script lang="ts" setup>
import { addGitHubWidget, formState } from '../../modules/generateForm.ts'
import GenerateCard from '../GenerateCard.vue'
import { INPUT_ICON_GITHUB } from '../../utils/constants.ts'
import BaseInput from '../BaseInput.vue'
import GitHubWidget from '../GitHubWidget.vue'

const { widgets } = formState.value.gitHub

function chooseWidget(widgetOptions) {
	addGitHubWidget(widgetOptions)
}
</script>

<template>
	{{ formState.gitHub.name }}
	<div class="relative">
		<div class="absolute w-1/3 right-0">
			<BaseInput
				v-model="formState.gitHub.name"
				placeholder="Enter your GitHub username"
				:icon="INPUT_ICON_GITHUB"
			/>
		</div>
		<GenerateCard title="GitHub Widgets" col>
			<GitHubWidget
				v-for="(widget, index) in widgets"
				:key="index"
				:widget="{ ...widget, index }"
				@choose-widget="chooseWidget"
			/>
		</GenerateCard>
	</div>
</template>
