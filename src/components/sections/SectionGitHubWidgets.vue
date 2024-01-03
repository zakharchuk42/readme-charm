<script lang="ts" setup>
import { addGitHubWidget, STATE_FORM } from '../../modules/state-form.ts'
import GenerateCard from '../GenerateCard.vue'
import { INPUT_ICON_GITHUB } from '../../utils/constants.ts'
import BaseInput from '../BaseInput.vue'
import GitHubWidget from '../GitHubWidget.vue'

const { widgets } = STATE_FORM.value.gitHub

function chooseWidget(widgetOptions) {
	addGitHubWidget(widgetOptions, STATE_FORM.value.gitHub.username)
}
</script>

<template>
	<div class="relative">
		<div class="absolute w-1/3 right-0">
			<BaseInput
				v-model="STATE_FORM.gitHub.username"
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
