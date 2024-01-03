export function resultGenerateReadme(data) {
	return `
# 🏠 ${data.title.default} ${data.title.name}
## ${data.description}

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

function createMyLinks(myLinks) {
	let result = ``

	myLinks.forEach((link) => {
		if (link.text && link.link) {
			return (result = `${result}
- ${link.description} [${link.text}](${link.link})`)
		}
	})

	return isResultNotEmpty(result, '## 📲 My Links')
}

function createAboutMe(aboutMe) {
	let result = ``

	aboutMe.forEach((item) => {
		if (item.text) {
			return (result = `${result}
- ${item.description} ${item.text}`)
		}
	})

	return isResultNotEmpty(result, '## 💡 About Me')
}

function createWorkExp(workExp) {
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

function createMySkills(skills) {
	let result = ``

	skills.forEach((skill) => {
		return (result = `${result} 
<img src="${skill}" alt="Skills" align="left" width="60" height="80"/> `)
	})

	return isResultNotEmpty(result, '## 🔨 Skills')
}

function createSocials(socials) {
	let result = ``

	socials.forEach((item) => {
		if (item.textLink && item.link) {
			return (result = `${result} - [${item.textLink}](${item.link})
`)
		}
	})

	return isResultNotEmpty(result, '## 📰 Social links')
}

function createGitHubWidgets(widgets) {
	let result = ``

	widgets.forEach((widget) => {
		if (widget.link) {
			return (result = `${result} <img src="${widget.link}" alt="${widget.name}"/>
`)
		}
	})

	return isResultNotEmpty(result, '## 👾 GitHub widgets')
}

function createSupport(support) {
	let result = ``

	support.forEach((item) => {
		if (item.link && item.textLink) {
			return (result = `${result} - [${item.textLink}](${item.link})
`)
		}
	})

	return isResultNotEmpty(result, '## 💸 Support')
}

function isResultNotEmpty(result, title) {
	if (result) {
		return `
${title}
${result}`
	} else {
		return result
	}
}
