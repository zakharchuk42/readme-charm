<script lang="ts" setup>
import { formState } from '../../modules/generateForm.ts'
import GenerateCard from '../GenerateCard.vue'
import BaseInput from '../BaseInput.vue'
import EditFieldsButtons from '../EditFieldsButtons.vue'
import { FIELDS_SOCIAL } from '../../utils/constants.ts'

const socials = formState.value.socials
</script>

<template>
	<GenerateCard title="Social">
		<transition-group name="list-fields">
			<div v-for="(social, index) in socials" :key="index" class="w-5/12">
				<BaseInput
					v-model="social.link"
					:placeholder="social.placeholder"
				/>
			</div>
		</transition-group>
		<EditFieldsButtons
			:fields-array="socials"
			:fields-options="FIELDS_SOCIAL"
		/>
	</GenerateCard>
</template>
