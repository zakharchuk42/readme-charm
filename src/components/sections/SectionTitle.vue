<script lang="ts" setup>
import Card from '../Card.vue'
import BaseInput from '../BaseInput.vue'
import { STATE_FORM } from '../../modules/state-form.ts'
</script>

<template>
	<Card title="Title" class="pb-16">
		<div class="w-5/12">
			<BaseInput
				v-model="STATE_FORM.title.default"
				:default-value="STATE_FORM.title.default"
				placeholder="description"
				emoji
			/>
		</div>
		<div class="w-6/12">
			<BaseInput
				v-model="STATE_FORM.title.name"
				placeholder="name"
				emoji
			/>
		</div>
	</Card>
</template>
