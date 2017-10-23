class Template {
	constructor(templateData) {
		this.templateData = templateData;
	}

	setProperty(property, value) {
		let regexp = new RegExp(`\\\${` + property + `}`, `g`);
		this.templateData = this.templateData.replace(regexp, () => { return value; });
	}

	toMessageOptions() {
		return JSON.parse(this.templateData);
	}
}

module.exports = Template;
