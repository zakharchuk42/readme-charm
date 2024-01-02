<script lang="ts" setup>
import { formState } from '../../modules/generateForm.ts'
import GenerateCard from '../GenerateCard.vue'
import BaseInput from '../BaseInput.vue'
</script>

<template>
	<GenerateCard title="Long story short">
		<BaseInput
			v-model="formState.description"
			:default-value="formState.description"
			is-show-emoji
		/>
	</GenerateCard>
</template>
