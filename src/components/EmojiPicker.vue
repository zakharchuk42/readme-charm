<script setup>
import data from '../app/emojis-data.json'
import { computed, ref } from 'vue'

const emit = defineEmits(['emojiClick'])

const isShow = ref(false)

const categories = computed(() => Object.keys(data))
const category_emojis = computed(
	() => (category) => Object.values(data[category])
)

function handleEmojiClick(emoji) {
	emit('emojiClick', emoji)
	handleShowEmoji()
}

function handleShowEmoji() {
	isShow.value = !isShow.value
}
</script>

<template>
	<div @click="handleShowEmoji" class="emoji_button">
		<img
			src="../app/images/emoji.svg"
			alt="emoji"
			width="20"
			class="opacity-30 hover:opacity-100 transition"
		/>
	</div>
	<transition name="emoji">
		<div class="emoji_picker" v-show="isShow">
			<div class="picker_container">
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
		</div>
	</transition>
</template>

<style scoped>
.emoji_button {
	position: absolute;
	z-index: 4;
	right: 0;
	top: 10px;
	cursor: pointer;
}
.emoji_picker {
	position: absolute;
	z-index: 5;
	right: -4px;
	top: 44px;
	display: flex;
	flex-direction: column;
	width: 20rem;
	height: 20rem;
	max-width: 100%;
	transform: translate(45%, -5px);
}

.emoji_picker {
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
}

.emoji_picker,
.picker_container {
	border-radius: 0.5rem;
	background: white;
}

.picker_container {
	position: relative;
	padding: 1rem;
	overflow: auto;
	z-index: 1;
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
}

.category button {
	margin: 0.5rem 0.5rem 0.5rem 0;
	background: inherit;
	border: none;
	font-size: 1.75rem;
	padding: 0;
}

.emoji-enter-from {
	opacity: 0;
}

.emoji-enter-to {
	opacity: 1;
}

.emoji-enter-active {
	transition: all 0.3s ease;
}

.emoji-leave-from {
	opacity: 1;
}

.emoji-leave-to {
	opacity: 0;
}

.emoji-leave-active {
	transition: all 0.3s ease;
}
</style>
