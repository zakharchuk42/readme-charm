<script lang="ts" setup>
import { currentPage, navigate } from '../modules/router.ts'
import {
	PAGE_GENERATE_README,
	PAGE_GENERATE_README_PROJECT,
	PAGE_HOW_IT_WORKS,
	PAGE_RESULT,
} from '../utils/constants.ts'
import { copyMarkdown, resetForm } from '../modules/state-form.ts'
import BaseButton from './BaseButton.vue'
import { computed, ref } from 'vue'

const isCopied = ref(false)

const isGeneratePage = computed(
	() =>
		currentPage.value === PAGE_GENERATE_README ||
		currentPage.value === PAGE_GENERATE_README_PROJECT
)
const isResultPage = computed(() => currentPage.value === PAGE_RESULT)
const isHowOtWorksPage = computed(() => currentPage.value === PAGE_HOW_IT_WORKS)

function handlerClick() {
	copyMarkdown()
	isCopied.value = true

	setTimeout(() => (isCopied.value = false), 3000)
}
</script>

<template>
	<div v-if="isGeneratePage" class="flex flex-col gap-6">
		<BaseButton
			@click="navigate(PAGE_RESULT)"
			type="a"
			:href="`#${PAGE_RESULT}`"
		>
			Generate Read<span class="text-red-500">Me</span>
		</BaseButton>
		<BaseButton @click="resetForm">
			Reset <span class="text-red-500">Form</span>
		</BaseButton>
	</div>
	<div v-else-if="isResultPage" class="flex flex-col gap-6">
		<BaseButton @click="handlerClick">
			Copy <span class="text-red-500">Mark</span>Down
		</BaseButton>
		<transition name="fade">
			<div
				v-if="isCopied"
				class="text-center font-medium text-emerald-600"
			>
				Markdown is copied!
			</div>
		</transition>
	</div>
	<div v-else-if="isHowOtWorksPage" class="flex flex-col gap-6">
		<BaseButton
			@click="navigate(PAGE_GENERATE_README)"
			type="a"
			:href="`#${PAGE_GENERATE_README}`"
		>
			Generate <span class="text-red-500">profile</span> ReadMe
		</BaseButton>
		<BaseButton
			@click="navigate(PAGE_GENERATE_README_PROJECT)"
			type="a"
			:href="`#${PAGE_GENERATE_README_PROJECT}`"
		>
			Generate <span class="text-red-500">project</span> ReadMe
		</BaseButton>
	</div>
</template>
