<script lang="ts" setup>
import { formState } from '../../modules/generateForm.ts'
import GenerateCard from '../GenerateCard.vue'

const gitHub = formState.value.gitHub
</script>

<template>
	<GenerateCard title="GitHub Widgets" col>{{ gitHub }}</GenerateCard>
</template>
