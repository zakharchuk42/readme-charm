import { IStateForm, WidgetsType } from '../utils/types.ts'

export function resultGenerateReadme(data: IStateForm) {
	return `
<p align="center"># 🏠 ${data.title.default} ${data.title.name}</p>
### ${data.description}

${createMyLinks(data.myLinks)}
${createAboutMe(data.aboutMe)}
${createWorkExp(data.workExperience)}
${createMySkills(data.skills)}

<br><br><br>
${createSocials(data.socials)}
${createGitHubWidgets(data.gitHub.widgets)}
${createSupport(data.support)}
`
}

function createMyLinks(myLinks: IStateForm['myLinks']) {
	let result = ``

	myLinks.forEach((link) => {
		if (link.text && link.link) {
			return (result = `${result}
- ${link.description} [${link.text}](${link.link})`)
		}
	})

	return isResultNotEmpty(result, '## 📲 My Links')
}

function createAboutMe(aboutMe: IStateForm['aboutMe']) {
	let result = ``

	aboutMe.forEach((item) => {
		if (item.text) {
			return (result = `${result}
- ${item.description} ${item.text}`)
		}
	})

	return isResultNotEmpty(result, '## 💡 About Me')
}

function createWorkExp(workExp: IStateForm['workExperience']) {
	let result = ``

	workExp.forEach((work) => {
		if (work.companyName && work.years && work.description && work.stack) {
			return (result = `${result}| ${work.companyName} | ${work.years} | ${work.description} | ${work.stack} |
`)
		}
	})

	if (result) {
		return `
## 💻 Work Experience
| Company | Years | Position | Stack |
| :------------ | :----------- | :----------- | :----------- |
${result}
`
	} else {
		return result
	}
}

function createMySkills(skills: IStateForm['skills']) {
	let result = ``

	skills.forEach((skill) => {
		return (result = `${result} 
<img src="${skill}" alt="Skills" align="left" width="60" height="80"/> `)
	})

	return isResultNotEmpty(result, '## 🔨 Skills')
}

function createSocials(socials: IStateForm['socials']) {
	let result = ``

	socials.forEach((item) => {
		if (item.textLink && item.link) {
			return (result = `${result} - [${item.textLink}](${item.link})
`)
		}
	})

	return isResultNotEmpty(result, '## 📰 Social links')
}

function createGitHubWidgets(widgets: WidgetsType[]) {
	let result = ``

	widgets.forEach((widget) => {
		if (widget.link) {
			return (result = `${result} <img src="${widget.link}" alt="${widget.name}"/>
`)
		}
	})

	return isResultNotEmpty(result, '## 👾 GitHub widgets')
}

function createSupport(support: IStateForm['support']) {
	let result = ``

	support.forEach((item) => {
		if (item.link && item.textLink) {
			return (result = `${result} - [${item.textLink}](${item.link})
`)
		}
	})

	return isResultNotEmpty(result, '## 💸 Support')
}

function isResultNotEmpty(result: string, title: string) {
	if (result) {
		return `
${title}
${result}`
	} else {
		return result
	}
}
