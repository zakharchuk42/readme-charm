<script lang="ts" setup>
import { STATE_FORM } from '../../modules/state-form.ts'
import Card from '../Card.vue'
import BaseInput from '../BaseInput.vue'
import EditFieldsButtons from '../EditFieldsButtons.vue'
import { FIELDS_SOCIAL } from '../../utils/constants.ts'
import { computed } from 'vue'

const socials = computed(() => STATE_FORM.value.socials)
</script>

<template>
	<Card title="Social" col class="pb-16">
		<transition-group name="list-fields">
			<div
				v-for="(social, index) in socials"
				:key="index"
				class="flex gap-10"
			>
				<div class="w-5/12">
					<BaseInput
						v-model="social.textLink"
						placeholder="Text link"
					/>
				</div>
				<div class="w-7/12">
					<BaseInput
						v-model="social.link"
						:placeholder="social.placeholder"
					/>
				</div>
			</div>
		</transition-group>
		<EditFieldsButtons
			:fields-array="socials"
			:fields-options="FIELDS_SOCIAL"
		/>
	</Card>
</template>
