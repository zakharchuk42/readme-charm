<script lang="ts" setup>
import { STATE_FORM } from '../modules/state-form.ts'
import { resultGenerateReadme } from '../modules/result-generate-readme.ts'
import TitlePage from '../components/TitlePage.vue'

const markdown = resultGenerateReadme(STATE_FORM.value)
</script>

<template>
	<TitlePage> Your Read<span class="text-red-500">Me</span> </TitlePage>

	<textarea class="resize-none border h-screen" disabled>
		{{ markdown }}
	</textarea
	>
</template>
