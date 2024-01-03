<script lang="ts" setup>
import { STATE_FORM } from '../../modules/state-form.ts'
import GenerateCard from '../GenerateCard.vue'
import BaseInput from '../BaseInput.vue'

const support = STATE_FORM.value.support
</script>

<template>
	<GenerateCard title="Support" col>
		<div v-for="item in support" :key="item.link">
			<div class="flex gap-10">
				<div class="flex gap-4 w-5/12">
					<img :src="item.src" alt="Support links" width="60" />
					<BaseInput
						v-model="item.textLink"
						placeholder="Link name"
					/>
				</div>
				<div class="flex w-7/12">
					<BaseInput
						v-model="item.link"
						:placeholder="item.placeholder"
					/>
				</div>
			</div>
		</div>
	</GenerateCard>
</template>
