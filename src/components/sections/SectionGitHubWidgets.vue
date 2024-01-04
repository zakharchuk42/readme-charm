<script lang="ts" setup>
import { addGitHubWidget, STATE_FORM } from '../../modules/state-form.ts'
import Card from '../Card.vue'
import { INPUT_ICON_GITHUB } from '../../utils/constants.ts'
import BaseInput from '../BaseInput.vue'
import GitHubWidget from '../GitHubWidget.vue'
import { computed } from 'vue'

function chooseWidget(widgetOptions: string) {
	addGitHubWidget(widgetOptions, STATE_FORM.value.gitHub.username)
}

const isBlocked = computed(() => STATE_FORM.value.gitHub.username.length === 0)
</script>

<template>
	<div class="relative pb-16">
		<div class="absolute w-1/3 right-0">
			<BaseInput
				v-model="STATE_FORM.gitHub.username"
				placeholder="Enter your GitHub username"
				:icon="INPUT_ICON_GITHUB"
			/>
		</div>
		<Card title="GitHub Widgets" col>
			<p v-show="isBlocked" class="text-xl text-red-500">
				Please, enter your GitHub username
			</p>
			<GitHubWidget
				v-for="(widget, index) in STATE_FORM.gitHub.widgets"
				:key="index"
				:widget="{ ...widget, index }"
				@choose-widget="chooseWidget"
				:is-blocked="isBlocked"
			/>
		</Card>
	</div>
</template>
