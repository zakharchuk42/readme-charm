<script lang="ts" setup>
import BaseButton from '../components/BaseButton.vue'
import SectionTitle from '../components/sections/SectionTitle.vue'
import SectionDescribe from '../components/sections/SectionDescribe.vue'
import SectionMyLink from '../components/sections/SectionMyLink.vue'
import SectionAboutMe from '../components/sections/SectionAboutMe.vue'
import SectionWorkExperience from '../components/sections/SectionWorkExperience.vue'
import SectionSkills from '../components/sections/SectionSkills.vue'
import SectionSocial from '../components/sections/SectionSocial.vue'
import SectionGitHubWidgets from '../components/sections/SectionGitHubWidgets.vue'
import SectionSupport from '../components/sections/SectionSupport.vue'
import { PAGE_RESULT } from '../utils/constants.ts'
import { stateForm } from '../modules/state-form.ts'
</script>

<template>
	<div class="flex flex-col w-full tracking-widest">
		<SectionTitle />
		<SectionDescribe />
		<SectionMyLink />
		<SectionAboutMe />
		<SectionWorkExperience />
		<SectionSkills />
		<SectionSocial />
		<SectionGitHubWidgets />
		<SectionSupport />
	</div>
	<div class="flex justify-center w-full">
		<BaseButton @click="stateForm" type="a" :href="`#${PAGE_RESULT}`">
			Generate Read<span class="text-red-500">Me</span>
		</BaseButton>
	</div>
</template>
