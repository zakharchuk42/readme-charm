<script lang="ts" setup>
import TheLogo from './TheLogo.vue'
import { ICONS_LINK, MY_SECTION, NAV_ITEMS } from '../utils/constants.ts'
import { navigate } from '../modules/router.ts'
import BaseIcon from './BaseIcon.vue'
import FooterCard from './FooterCard.vue'

function handleClick(page: string) {
	navigate(page)
}
</script>

<template>
	<footer class="w-full border-t p-8">
		<div class="w-8/12 flex justify-between">
			<TheLogo />
			<FooterCard title="Navigation">
				<ul>
					<li
						v-for="page in NAV_ITEMS"
						:key="page.page"
						v-show="page.name"
						class="mb-2 hover:text-red-500 ease-in duration-200 flex gap-2"
					>
						<BaseIcon :icon="ICONS_LINK" width="15" />
						<a
							:href="`#${page.page}`"
							@click="handleClick(page.page)"
						>
							{{ page.name }}
						</a>
					</li>
				</ul>
			</FooterCard>
			<FooterCard title="My socials">
				<ul>
					<li
						v-for="page in MY_SECTION"
						:key="page.page"
						v-show="page.name"
						class="mb-2 hover:text-red-500 ease-in duration-200 flex gap-2"
					>
						<img alt="social icon" width="20" :src="page.icon" />
						<a :href="page.page" target="_blank">{{ page.name }}</a>
					</li>
				</ul>
			</FooterCard>
		</div>
	</footer>
</template>
