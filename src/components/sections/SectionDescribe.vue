<script lang="ts" setup>
import { STATE_FORM } from '../../modules/state-form.ts'
import GenerateCard from '../GenerateCard.vue'
import BaseInput from '../BaseInput.vue'
import { INPUT_ICON_EMOJI } from '../../utils/constants.ts'
</script>

<template>
	<GenerateCard title="Long story short">
		<BaseInput
			v-model="STATE_FORM.description"
			:default-value="STATE_FORM.description"
			:icon="INPUT_ICON_EMOJI"
		/>
	</GenerateCard>
</template>
