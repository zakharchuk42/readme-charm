<script lang="ts" setup>
import TitlePage from '../components/TitlePage.vue'
import { navigate } from '../modules/router.ts'
import {
	PAGE_GENERATE_README,
	PAGE_GENERATE_README_PROJECT,
} from '../utils/constants.ts'
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
	<TitlePage> How <span class="text-red-500">it</span> works? </TitlePage>
	<div>
		<h2 class="text-3xl font-bold pb-6 text-stone-900">
			What is this site?
		</h2>
		<p class="mb-4">
			This site will help you generate Markdown markup for your README.md
			file. This markup can be used to highlight important aspects about
			you or your project.
		</p>
		<img
			class="w-8/12"
			src="../app/images/github-readme.png"
			alt="example"
		/>
	</div>
	<div>
		<h2 class="text-3xl font-bold pb-6 text-stone-900">How create it?</h2>
		<p class="mb-4">
			1. Create new repository there
			<a
				href="https://github.com/new"
				class="underline text-red-500 hover:text-red-700"
				><strong>create new repo</strong></a
			>, name it same as your GitHub username. <br />1.1 If you succeeded,
			you will see block describing that this repo will be special.
			<br />2. Check the <strong>'Public'</strong> checkbox.<br />3. Check
			<strong>'Add a README file'</strong>
		</p>
		<img
			class="w-8/12"
			src="../app/images/github-steps.png"
			alt="example"
		/>
	</div>
	<div>
		<h2 class="text-3xl font-bold pb-6 text-stone-900">What next?</h2>
		<p>
			1. Go to the
			<a
				href="http://localhost:5173/readme-charm/#generate-readme"
				class="underline text-red-500 hover:text-red-700"
				><strong>Generate README</strong></a
			>
			and fill the fields.<br />2. Click the
			<strong>'Generate ReadMe'</strong> button at the bottom of the page.
			<br />3. Click <strong>'Copy MarkDown'</strong> button.<br />4. Your
			markdown is copied. Go to the GitHub repo which we created at the
			beginning.<br />5. Past in to README.md your copy code. <br />6.
			<strong>DONE!</strong> You did a great job!
		</p>
	</div>
	<div class="flex gap-6 justify-center">
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
