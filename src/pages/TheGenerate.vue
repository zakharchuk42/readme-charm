<script lang="ts" setup>
import BaseButton from '../components/BaseButton.vue'
import SectionTitle from '../components/sections/SectionTitle.vue'
import { formState, generateForm } from '../modules/generateForm.ts'
import SectionDescribe from '../components/sections/SectionDescribe.vue'
import SectionMyLink from '../components/sections/SectionMyLink.vue'
</script>

<template>
	<div class="flex flex-col w-full tracking-widest">
		<SectionTitle />
		<SectionDescribe />
		<SectionMyLink />
		<div>
			{{ `${formState.title.default} ${formState.title.name}` }}
		</div>
		<div>
			{{ `${formState.description}` }}
		</div>

		<!--		<div class="py-8">-->
		<!--			<h2 class="text-3xl font-bold pb-4">Skills</h2>-->
		<!--			<h3 class="text-2xl font-medium text-stone-600">Frontend</h3>-->
		<!--			<hr class="h-px bg-stone-400 border-0 mt-2 mb-6" />-->
		<!--		</div>-->
		<!--		<div class="py-8">-->
		<!--			<h2 class="text-3xl font-bold pb-4">Social</h2>-->
		<!--			<div class="flex gap-10 pb-4">-->
		<!--				<input-->
		<!--					type="text"-->
		<!--					class="w-4/12 border-b border-b-stone-400 text-xl px-2 py-1 transition focus:outline-none focus:border-b-stone-700"-->
		<!--				/>-->
		<!--				<input-->
		<!--					type="text"-->
		<!--					class="w-4/12 border-b border-b-stone-400 text-xl px-2 py-1 transition focus:outline-none focus:border-b-stone-700"-->
		<!--				/>-->

		<!--				<input-->
		<!--					type="text"-->
		<!--					class="w-4/12 border-b border-b-stone-400 text-xl px-2 py-1 transition focus:outline-none focus:border-b-stone-700"-->
		<!--				/>-->
		<!--			</div>-->
		<!--			<div class="flex gap-10 pb-4">-->
		<!--				<input-->
		<!--					type="text"-->
		<!--					class="w-4/12 border-b border-b-stone-400 text-xl px-2 py-1 transition focus:outline-none focus:border-b-stone-700"-->
		<!--				/>-->
		<!--				<input-->
		<!--					type="text"-->
		<!--					class="w-4/12 border-b border-b-stone-400 text-xl px-2 py-1 transition focus:outline-none focus:border-b-stone-700"-->
		<!--				/>-->

		<!--				<input-->
		<!--					type="text"-->
		<!--					class="w-4/12 border-b border-b-stone-400 text-xl px-2 py-1 transition focus:outline-none focus:border-b-stone-700"-->
		<!--				/>-->
		<!--			</div>-->
		<!--		</div>-->
		<!--		<div class="py-8">-->
		<!--			<h2 class="text-3xl font-bold pb-4">GitHub Widgets</h2>-->
		<!--		</div>-->
		<!--		<div class="py-8">-->
		<!--			<h2 class="text-3xl font-bold pb-4">Donations</h2>-->
		<!--		</div>-->
	</div>
	<div class="flex justify-center w-full">
		<BaseButton @click="generateForm">
			Generate Read<span class="text-red-500">Me</span>
		</BaseButton>
	</div>
</template>
