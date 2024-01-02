import { ref } from 'vue'

export const formState = ref({
	title: {
		default: 'Hello👋, my name is',
		name: '',
	},
	description:
		'📃 I have been working with frontend since 2019, and I love cats 😸',
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
	social: [],
	gitHub: [],
	support: [],
})

export function generateForm() {
	// mylog
	console.log(formState.value)
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
