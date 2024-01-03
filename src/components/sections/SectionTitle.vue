<script lang="ts" setup>
import GenerateCard from '../GenerateCard.vue'
import BaseInput from '../BaseInput.vue'
import { STATE_FORM } from '../../modules/state-form.ts'
import { INPUT_ICON_EMOJI } from '../../utils/constants.ts'
</script>

<template>
	<GenerateCard title="Title">
		<div class="w-5/12">
			<BaseInput
				v-model="STATE_FORM.title.default"
				:default-value="STATE_FORM.title.default"
				:icon="INPUT_ICON_EMOJI"
			/>
		</div>
		<div class="w-6/12">
			<BaseInput
				v-model="STATE_FORM.title.name"
				placeholder="name"
				:icon="INPUT_ICON_EMOJI"
			/>
		</div>
	</GenerateCard>
</template>
