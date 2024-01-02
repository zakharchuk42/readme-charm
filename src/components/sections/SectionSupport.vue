<script lang="ts" setup>
import { formState } from '../../modules/generateForm.ts'
import GenerateCard from '../GenerateCard.vue'

const support = formState.value.support
</script>

<template>
	<GenerateCard title="Support" col>{{ support }}</GenerateCard>
</template>
