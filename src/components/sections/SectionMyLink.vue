<script lang="ts" setup>
import {
	addMyLinksFields,
	deleteMyLinksFields,
	formState,
} from '../../modules/generateForm.ts'
import GenerateCard from '../GenerateCard.vue'
import BaseInput from '../BaseInput.vue'
import BaseButton from '../BaseButton.vue'

const inputs = formState.value.myLinks
</script>

<template>
	<GenerateCard title="My links" col>
		<transition-group name="list">
			<div
				v-for="input in inputs"
				class="flex gap-10 pb-4"
				:key="input.description"
			>
				<div class="w-6/12">
					<BaseInput
						v-model="input.description"
						:defaultValue="input.description"
					/>
				</div>
				<div class="w-3/12">
					<BaseInput
						v-model="input.text"
						:defaultValue="input.text"
						placeholder="name"
					/>
				</div>
				<div class="w-3/12">
					<BaseInput
						v-model="input.link"
						:defaultValue="input.link"
						placeholder="link"
					/>
				</div>
			</div>
		</transition-group>
		<div class="flex gap-4 justify-end">
			<BaseButton @click="addMyLinksFields">Add Fields</BaseButton>
			<BaseButton @click="deleteMyLinksFields">Delete Fields</BaseButton>
		</div>
	</GenerateCard>
</template>

<style scoped>
.list-enter-from {
	opacity: 0;
	transform: scale(0.6);
}
.list-enter-to {
	opacity: 1;
	transform: scale(1);
}
.list-enter-active {
	transition: all 0.4s ease;
}

.list-leave-from {
	opacity: 1;
	transform: scale(1);
}
.list-leave-to {
	opacity: 0;
	transform: scale(0.6);
}
.list-leave-active {
	transition: all 0.4s ease;
}
</style>
