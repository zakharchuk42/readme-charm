<script lang="ts" setup>
import { STATE_FORM } from '../../modules/state-form.ts'
import Card from '../Card.vue'
import BaseInput from '../BaseInput.vue'
import { computed } from 'vue'

const support = computed(() => STATE_FORM.value.support)
</script>

<template>
	<Card title="Support" col>
		<div
			v-for="item in support"
			:key="item.placeholder"
			class="flex gap-10"
		>
			<div class="flex gap-4 w-5/12">
				<img :src="item.src" alt="Support links" width="60" />
				<BaseInput v-model="item.textLink" placeholder="Link name" />
			</div>
			<div class="flex w-7/12">
				<BaseInput
					v-model="item.link"
					:placeholder="item.placeholder"
				/>
			</div>
		</div>
	</Card>
</template>
