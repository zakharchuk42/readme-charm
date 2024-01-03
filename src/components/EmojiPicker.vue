<script setup>
import data from '../app/emojis-data.json'
import { computed, inject, ref } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { INPUT_ICON_EMOJI } from '../utils/constants.ts'

const emojiClick = inject('emojiClick')

const isShow = ref(false)

const categories = computed(() => Object.keys(data))
const category_emojis = computed(
	() => (category) => Object.values(data[category])
)

function handleEmojiClick(emoji) {
	handleShowEmoji()
	emojiClick(emoji)
}

function handleShowEmoji() {
	isShow.value = !isShow.value
}
</script>

<template>
	<BaseIcon
		:icon="INPUT_ICON_EMOJI"
		@click="handleShowEmoji"
		class="cursor-pointer"
	/>
	<transition name="emoji">
		<div class="emoji_picker" v-show="isShow">
			<div
				class="category"
				v-for="category in categories"
				:key="`category_${category}`"
			>
				<span>{{ category }}</span>
				<div class="emojis_container">
					<button
						@click.prevent="handleEmojiClick(emoji)"
						v-for="(emoji, index) in category_emojis(category)"
						:key="`emoji_${index}`"
					>
						{{ emoji }}
					</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<style scoped>
.emoji_picker {
	position: absolute;
	z-index: 10;
	width: 280px;
	top: 0;
	left: 0;
	transform: translate(-105%, 0);
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 20rem;
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
	overflow: auto;
	background: white;
	padding: 10px;
}

.category {
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
	color: rgb(169, 169, 169);
}

.emojis_container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.category button {
	margin: 0.5rem 0.5rem 0.5rem 0;
	background: inherit;
	border: none;
	font-size: 1.75rem;
	padding: 0;
}
</style>
