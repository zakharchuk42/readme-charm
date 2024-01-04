<script lang="ts" setup>
import BaseButton from '../components/BaseButton.vue'
import SectionTitle from '../components/sections/SectionTitle.vue'
import SectionDescribe from '../components/sections/SectionDescribe.vue'
import SectionMyLinks from '../components/sections/SectionMyLinks.vue'
import SectionAboutMe from '../components/sections/SectionAboutMe.vue'
import SectionWorkExperience from '../components/sections/SectionWorkExperience.vue'
import SectionSkills from '../components/sections/SectionSkills.vue'
import SectionSocial from '../components/sections/SectionSocial.vue'
import SectionGitHubWidgets from '../components/sections/SectionGitHubWidgets.vue'
import SectionSupport from '../components/sections/SectionSupport.vue'
import { PAGE_RESULT } from '../utils/constants.ts'
import TitlePage from '../components/TitlePage.vue'
import { navigate } from '../modules/router.ts'
import { resetForm } from '../modules/state-form.ts'
</script>

<template>
	<TitlePage>
		Generate <span class="text-red-500">profile</span> ReadMe
	</TitlePage>
	<div class="flex flex-col w-full tracking-widest">
		<SectionTitle />
		<SectionDescribe />
		<SectionMyLinks />
		<SectionAboutMe />
		<SectionWorkExperience />
		<SectionSkills />
		<SectionSocial />
		<SectionGitHubWidgets />
		<SectionSupport />
	</div>
	<div class="flex gap-10 justify-center w-full">
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
</template>
