<script lang="ts" setup>
import { formState } from '../../modules/generateForm.ts'
import GenerateCard from '../GenerateCard.vue'

const social = formState.value.social
</script>

<template>
	<GenerateCard title="Social" col>{{ social }} </GenerateCard>
</template>
