<script lang="ts" setup>
import { FIELDS_ABOUT_ME } from '../../utils/constants.ts'
import { STATE_FORM } from '../../modules/state-form.ts'
import BaseInput from '../BaseInput.vue'
import Card from '../Card.vue'
import EditFieldsButtons from '../EditFieldsButtons.vue'
import { computed } from 'vue'

const aboutMe = computed(() => STATE_FORM.value.aboutMe)
</script>

<template>
	<Card title="About Me" col class="pb-16">
		<transition-group name="list-fields">
			<div
				v-for="(field, index) in aboutMe"
				class="flex gap-10 pb-4"
				:key="index"
			>
				<div class="w-5/12">
					<BaseInput
						v-model="field.description"
						:default-value="field.description"
						emoji
					/>
				</div>
				<div class="w-7/12">
					<BaseInput
						v-model="field.text"
						:default-value="field.text"
						:placeholder="field.placeholder"
						emoji
					/>
				</div>
			</div>
		</transition-group>
		<EditFieldsButtons
			:fields-array="aboutMe"
			:fields-options="FIELDS_ABOUT_ME"
		/>
	</Card>
</template>
