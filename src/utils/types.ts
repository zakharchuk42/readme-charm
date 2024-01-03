export interface IStateForm {
	title: {
		default: string
		name: string
	}
	description: string
	myLinks: MyLinksType[]
	aboutMe: AboutMeType[]
	workExperience: WorkExperienceType[]
	skills: string[]
	socials: SocialsType[]
	gitHub: {
		username: string
		widgets: WidgetsType[]
	}
	support: SupportType[]
}

export type WidgetsType = {
	name: string
	link: string
}

type MyLinksType = {
	description: string
	text: string
	link: string
}

type AboutMeType = {
	description: string
	text: string
	placeholder: string
}

type WorkExperienceType = {
	companyName: string
	years: string
	description: string
	stack: string
}

type SocialsType = {
	label: string
	textLink: string
	link: string
	placeholder: string
}

type SupportType = {
	src: string
	link: string
	textLink: string
	placeholder: string
}
