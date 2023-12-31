import { ref } from 'vue'

export const formState = ref({
	title: {
		default: 'Hello, my name is',
		name: '',
	},
	description:
		'I have been working with frontend since 2019, and I love cats 😸',
	myLinks: [
		{
			description: 'My latest project is',
			text: '',
			link: '',
		},
		{
			description: 'Check my own site',
			text: '',
			link: '',
		},
		{
			description: 'It`s can be interesting',
			text: '',
			link: '',
		},
	],
})

export function generateForm() {
	// mylog
	console.log(formState.value)
}

export function addMyLinksFields() {
	const descriptionArray = [
		'Oh, something else?',
		'Great! You have a lot of websites',
		'Yeah! Write more',
		'Good, your RedMe gonna be great!',
		'Nice, some more sites',
	]

	formState.value.myLinks.push({
		description: descriptionArray[Math.floor(Math.random() * 5)],
		text: '',
		link: '',
	})
}

export function deleteMyLinksFields() {
	formState.value.myLinks.pop()
}
