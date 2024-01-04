<script lang="ts" setup>
import { STATE_FORM } from '../../modules/state-form.ts'
import Card from '../Card.vue'
import BaseInput from '../BaseInput.vue'
</script>

<template>
	<Card title="Long story short" class="pb-16">
		<BaseInput
			v-model="STATE_FORM.description"
			:default-value="STATE_FORM.description"
			emoji
		/>
	</Card>
</template>
