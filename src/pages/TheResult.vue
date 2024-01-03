<script lang="ts" setup>
import { STATE_FORM } from '../modules/state-form.ts'
import { resultGenerateReadme } from '../modules/result-generate-readme.ts'

const markdown = resultGenerateReadme(STATE_FORM.value)
</script>

<template>
	<textarea class="resize-none border h-screen" disabled>
		{{ markdown }}
	</textarea
	>
</template>
