<script lang="ts" setup>
import Card from '../Card.vue'
import EditFieldsButtons from '../EditFieldsButtons.vue'
import BaseInput from '../BaseInput.vue'
import { FIELDS_WORK_EXPERIENCE } from '../../utils/constants.ts'
import { STATE_FORM } from '../../modules/state-form.ts'
import { computed } from 'vue'

const workExperience = computed(() => STATE_FORM.value.workExperience)
</script>

<template>
	<Card title="Work Experience" col class="pb-16">
		<transition-group name="list-fields">
			<div
				v-for="(field, index) in workExperience"
				class="flex gap-10 pb-4"
				:key="index"
			>
				<div class="w-4/12 flex flex-col gap-4">
					<BaseInput
						v-model="field.companyName"
						:default-value="field.companyName"
						placeholder="Company Name"
					/>
					<BaseInput
						v-model="field.years"
						:default-value="field.years"
						:placeholder="`202${index}-202${index + 1}`"
					/>
				</div>
				<div class="w-8/12 flex flex-col gap-4">
					<BaseInput
						v-model="field.description"
						:default-value="field.description"
						placeholder="FrontEnd developer"
					/>
					<BaseInput
						v-model="field.stack"
						:default-value="field.stack"
						placeholder="React, Redux, Axios, TypeScript ..."
					/>
				</div>
			</div>
		</transition-group>
		<EditFieldsButtons
			:fields-array="workExperience"
			:fields-options="FIELDS_WORK_EXPERIENCE"
		/>
	</Card>
</template>
