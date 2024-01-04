<script lang="ts" setup="">
import TheNav from './TheNav.vue'
import { PAGE_GENERATE_README, PAGE_RESULT } from '../utils/constants.ts'
import BaseButton from './BaseButton.vue'
import { currentPage, navigate } from '../modules/router.ts'
import { computed } from 'vue'
import { resetForm } from '../modules/state-form.ts'

const isShowButtons = computed(() => currentPage.value === PAGE_GENERATE_README)
</script>

<template>
	<aside class="relative w-3/12 border-l p-10">
		<div class="flex flex-col gap-6 sticky top-10">
			<h2 class="text-3xl font-bold text-stone-900">
				<span class="text-red-500">Nav</span>igation
			</h2>
			<TheNav />
			<hr />
			<BaseButton
				v-if="isShowButtons"
				@click="navigate(PAGE_RESULT)"
				type="a"
				:href="`#${PAGE_RESULT}`"
			>
				Generate Read<span class="text-red-500">Me</span>
			</BaseButton>
			<BaseButton v-if="isShowButtons" @click="resetForm">
				Reset <span class="text-red-500">Form</span>
			</BaseButton>
		</div>
	</aside>
</template>
