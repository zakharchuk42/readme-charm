<script lang="ts" setup>
import GenerateCard from '../GenerateCard.vue'
import BaseInput from '../BaseInput.vue'
import { formState } from '../../modules/generateForm.ts'
import { INPUT_ICON_EMOJI } from '../../utils/constants.ts'
</script>

<template>
	<GenerateCard title="Title">
		<div class="w-5/12">
			<BaseInput
				v-model="formState.title.default"
				:default-value="formState.title.default"
				:icon="INPUT_ICON_EMOJI"
			/>
		</div>
		<div class="w-7/12">
			<BaseInput
				v-model="formState.title.name"
				placeholder="name"
				:icon="INPUT_ICON_EMOJI"
			/>
		</div>
	</GenerateCard>
</template>
