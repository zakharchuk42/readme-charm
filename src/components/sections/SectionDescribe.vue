<script lang="ts" setup>
import { formState } from '../../modules/generateForm.ts'
import GenerateCard from '../GenerateCard.vue'
import BaseInput from '../BaseInput.vue'
</script>

<template>
	<GenerateCard title="Long story short">
		<BaseInput
			v-model="formState.description"
			:defaultValue="formState.description"
		/>
	</GenerateCard>
</template>
