<script lang="ts" setup>
import { STATE_FORM } from '../../modules/state-form.ts'
import BaseInput from '../BaseInput.vue'
import GenerateCard from '../GenerateCard.vue'
import { FIELDS_MY_LINK, INPUT_ICON_EMOJI } from '../../utils/constants.ts'
import EditFieldsButtons from '../EditFieldsButtons.vue'

const myLinks = STATE_FORM.value.myLinks
</script>

<template>
	<GenerateCard title="My links" col>
		<transition-group name="list-fields">
			<div
				v-for="(myLink, index) in myLinks"
				class="flex gap-10 pb-4"
				:key="index"
			>
				<div class="w-6/12">
					<BaseInput
						v-model="myLink.description"
						:default-value="myLink.description"
						:icon="INPUT_ICON_EMOJI"
					/>
				</div>
				<div class="w-3/12">
					<BaseInput
						v-model="myLink.text"
						:default-value="myLink.text"
						placeholder="name"
					/>
				</div>
				<div class="w-3/12">
					<BaseInput
						v-model="myLink.link"
						:default-value="myLink.link"
						placeholder="link"
					/>
				</div>
			</div>
		</transition-group>
		<EditFieldsButtons
			:fields-array="myLinks"
			:fields-options="FIELDS_MY_LINK"
		/>
	</GenerateCard>
</template>
