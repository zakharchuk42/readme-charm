<script lang="ts" setup>
import { formState } from '../../modules/generateForm.ts'
import GenerateCard from '../GenerateCard.vue'
import BaseInput from '../BaseInput.vue'
import { INPUT_ICON_EMOJI } from '../../utils/constants.ts'
</script>

<template>
	<GenerateCard title="Long story short">
		<BaseInput
			v-model="formState.description"
			:default-value="formState.description"
			:icon="INPUT_ICON_EMOJI"
		/>
	</GenerateCard>
</template>
