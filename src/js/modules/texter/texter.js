require(`rootpath`)();
const Template = require(`src/js/modules/texter/template.js`);
const Path = require(`path`);
const fs = require(`fs`);


class Texter {
	constructor() {
		this.setLang(`en`);
	}

	reloadTemplates() {
		this.templates = [];
	}

	setLang(lang) {
		let text = require(`src/resources/lang/${lang}/lang-${lang}.json`);
		if (text === undefined) throw new Error(`${lang} language is not supported.`);
		this.text = text;
	}

	getText(path, ...properties) {
		let text = this.text[path];
		if (properties == undefined) return text;
		
		properties.forEach(({key, value}) => { 
			let regexp = new RegExp(`\\\${` + key + `}`, `g`);
			text = text.replace(regexp, () => { return value; });
		});
		return text;
	}

	getTemplate(name) {
		try {
			let templateData = fs.readFileSync(Path.resolve(`src/resources/templates/`, name + `.json`), `utf8`);
			templateData = templateData.replace(/%{([\w.]*)}/g, (match, property) => { return this.getText(property); });
			return new Template(templateData);
		} catch (error) {
			console.log(error);
			return undefined;
		}
	}
}


module.exports = Texter;
