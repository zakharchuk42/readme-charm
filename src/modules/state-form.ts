import { Ref, ref } from 'vue'
import {
	GITHUB_WIDGET_MOST_USED,
	GITHUB_WIDGET_STATS,
	GITHUB_WIDGET_STREAK,
	GITHUB_WIDGET_TROPHY,
	PAGE_RESULT,
} from '../utils/constants.ts'
import { navigate } from './router.ts'
import { IStateForm } from '../utils/types.ts'

export const STATE_FORM: Ref<IStateForm> = ref({
	title: {
		default: 'Hello👋, my name is',
		name: '',
	},
	description:
		'I have been working with frontend since 2019, and I love cats 😸',
	myLinks: [
		{
			description: '🎨 My latest project is',
			text: '',
			link: '',
		},
		{
			description: '💻 Check my own site',
			text: '',
			link: '',
		},
		{
			description: '🗿 It`s can be interesting',
			text: '',
			link: '',
		},
		{
			description: '📝 Check my articles on',
			text: '',
			link: '',
		},
	],
	aboutMe: [
		{
			description: '📖 I`m learning',
			placeholder: 'React, Vue, Node.js ...',
			text: '',
		},
		{
			description: '🎮 My hobbies are',
			placeholder: 'football, horse, video games ...',
			text: '',
		},
		{
			description: '💌 You can write to me at',
			placeholder: 'my-email@gmail.com',
			text: '',
		},
		{
			description: '🌈 My dream is that',
			placeholder: 'know everything about JS',
			text: '',
		},
		{
			description: '😃 Fun fact about me',
			placeholder: 'my favorite team is Manchester United',
			text: '',
		},
		{
			description: '😽 I have pet',
			placeholder: 'a cat named Loki',
			text: '',
		},
	],
	workExperience: [
		{
			companyName: 'Company ETC',
			years: '',
			description: '',
			stack: '',
		},
		{
			companyName: 'Global IT',
			years: '',
			description: '',
			stack: '',
		},
	],
	skills: [],
	socials: [
		{
			label: 'linkedin',
			textLink: '',
			link: '',
			placeholder: 'https://www.linkedin.com/in/username/',
		},
		{
			label: 'facebook',
			textLink: '',
			link: '',
			placeholder: 'https://www.facebook.com/username',
		},
		{
			label: 'telegram',
			textLink: '',
			link: '',
			placeholder: 'https://t.me/username',
		},
		{
			label: 'youtube',
			textLink: '',
			link: '',
			placeholder: 'https://www.youtube.com/@username',
		},
		{
			label: 'twitter',
			textLink: '',
			link: '',
			placeholder: 'https://twitter.com/username',
		},
		{
			label: 'instagram',
			textLink: '',
			link: '',
			placeholder: 'https://www.instagram.com/username/',
		},

		{
			label: 'leetcode',
			textLink: '',
			link: '',
			placeholder: 'https://leetcode.com/username/',
		},
	],
	gitHub: {
		username: '',
		widgets: [
			{
				name: GITHUB_WIDGET_MOST_USED,
				link: '',
			},
			{
				name: GITHUB_WIDGET_STATS,
				link: '',
			},
			{
				name: GITHUB_WIDGET_STREAK,
				link: '',
			},
			{
				name: GITHUB_WIDGET_TROPHY,
				link: '',
			},
		],
	},
	support: [
		{
			src: '/readme-charm/src/app/images/buy_me_coffee.svg',
			link: '',
			textLink: '',
			placeholder: 'https://www.buymeacoffee.com/username',
		},
		{
			src: '/readme-charm/src/app/images/donatello.png',
			link: '',
			textLink: '',
			placeholder: 'https://donatello.to/username',
		},
	],
})

export function stateForm() {
	navigate(PAGE_RESULT)
}

export function addFields(array, options) {
	array.push({
		...options,
		description: getRandomDescription(),
	})
}

export function deleteFields(array) {
	array.pop()
}

export function handleEditSkillIcon(icon: string, isAdd: boolean) {
	if (isAdd) {
		STATE_FORM.value.skills.push(icon)
	} else {
		STATE_FORM.value.skills = STATE_FORM.value.skills.filter(
			(item) => item !== icon
		)
	}
}

export function addGitHubWidget(widgetName: string, username: string) {
	STATE_FORM.value.gitHub.widgets.forEach((item) => {
		if (item.name === widgetName) {
			item.link = addLinkGitHubWidget(item.name, username)
		} else {
			item.link = ''
		}
	})
}

function addLinkGitHubWidget(name: string, username: string) {
	switch (name) {
		case GITHUB_WIDGET_MOST_USED:
			return `https://github-readme-stats.vercel.app/api/top-langs?username=${username}&show_icons=true&locale=en&layout=compact`
		case GITHUB_WIDGET_STATS:
			return `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&locale=en`
		case GITHUB_WIDGET_STREAK:
			return `https://github-readme-streak-stats.herokuapp.com/?user=${username}&`
		case GITHUB_WIDGET_TROPHY:
			return `https://github-profile-trophy.vercel.app/?username=${username}`
		default:
			return ''
	}
}

function getRandomDescription() {
	const descriptionArray = [
		'Oh, something else?',
		'Great! You have a lot interested information',
		'Yeah! Write more',
		'Good, your RedMe gonna be great!',
		'Nice, some more details',
	]

	return descriptionArray[Math.floor(Math.random() * 5)]
}
