export const PAGE_GENERATE_README = 'generate-readme'
export const PAGE_GENERATE_README_PROJECT = 'generate-readme-project'
export const PAGE_RESULT = 'result'
export const PAGE_HOW_IT_WORKS = 'how-it-works'
// export const PAGE_BEST_WORK = 'best-work'

export const NAV_ITEMS = [
	{
		page: PAGE_GENERATE_README,
		name: 'Profile ReadMe',
	},
	{
		page: PAGE_GENERATE_README_PROJECT,
		name: 'Project ReadMe',
	},
	{
		page: PAGE_HOW_IT_WORKS,
		name: 'How it works?',
	},
	{
		page: PAGE_RESULT,
		name: '',
	},
]

export const MY_SECTION = [
	{
		page: 'https://www.linkedin.com/in/vit-zakharchuk/',
		name: 'linkedIn',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
	},
	{
		page: 'https://github.com/zakharchuk42',
		name: 'GitHub',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
	},
]

export const ICONS_FRONTEND = 'frontend'
export const ICONS_BACKEND = 'backend'
export const ICONS_TESTING = 'testing'
export const ICONS_PROGRAMMING = 'programming'
export const ICONS_MOBILE = 'mobile'
export const ICONS_SOFTWARE = 'software'
export const ICONS_SYSTEM_CONTROL = 'system control'

export const ICONS_LINK = 'link-ico.svg'
export const INPUT_ICON_EMOJI = 'emoji.svg'
export const INPUT_ICON_SEARCH = 'search.svg'
export const INPUT_ICON_GITHUB = 'github.svg'

export const GITHUB_WIDGET_MOST_USED = 'Most used languages'
export const GITHUB_WIDGET_STATS = 'GitHub stats'
export const GITHUB_WIDGET_STREAK = 'Commit current streak'
export const GITHUB_WIDGET_TROPHY = 'GitHub Trophy'

export const EXAMPLE_GITHUB_WIDGETS = [
	'/readme-charm/src/app/images/most-used.png',
	'/readme-charm/src/app/images/stats.png',
	'/readme-charm/src/app/images/commit-streak.png',
	'/readme-charm/src/app/images/trophy.png',
]

export const FIELDS_SOCIAL = {
	label: '',
	link: '',
	placeholder: 'Something else',
}

export const FIELDS_MY_LINK = {
	description: '',
	text: '',
	link: '',
}
export const FIELDS_ABOUT_ME = {
	description: '',
	text: '',
}
export const FIELDS_WORK_EXPERIENCE = {
	companyName: '',
	years: '',
	description: '',
	stack: '',
}

export const RESET_FORM = {
	title: {
		default: '',
		name: '',
	},
	description: '',
	myLinks: [
		{
			description: '',
			text: '',
			link: '',
		},
	],
	aboutMe: [
		{
			description: '',
			placeholder: '',
			text: '',
		},
	],
	workExperience: [
		{
			companyName: '',
			years: '',
			description: '',
			stack: '',
		},
	],
	skills: [],
	socials: [
		{
			label: '',
			textLink: '',
			link: '',
			placeholder: 'https://www.linkedin.com/in/username/',
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
}
