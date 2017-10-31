require(`rootpath`)();
const Template = require(`src/js/modules/texter/template.js`);
const Path = require(`path`);
const fs = require(`fs`);

class Texter {
	constructor() {
		this.setLang(`en`);
	}

	setLang(lang) {
		return new Promise((resolve, reject) => {
			let text = require(`src/resources/lang/${lang}/lang-${lang}.json`);
			if (text === undefined) return reject(`languageNotSupported`);
			this.text = text;
			resolve(`success`);
		});
	}

	get(specificator, path, properties) {
		if (properties == undefined && typeof path == `object`) {
			properties = path;
			path = specificator;
			specificator = null;
		} else if (path == undefined) {
			path = specificator;
			specificator = null;
		}

		return new Promise((resolve, reject) => {
			let text = this.text[path];
			if (text) return resolve(text);
			
			let keys = Object.keys(this.text);
			for (let index in keys) {
				let fullPath = keys[index];
				
				if (specificator) {
					var regex = new RegExp(`(?:^|\\.)${specificator.replace(`.`, `\\.`)}(?:\\..+\\.|\\.)${path.replace(`.`, `\\.`)}$`);
				} else {
					regex = new RegExp(`(?:^|\\.)${path.replace(`.`, `\\.`)}$`);		
					
					var genericRegex = new RegExp(`^generic(?:\\..+\\.|\\.)${path.replace(`.`, `\\.`)}$`); 
					if (genericRegex.test(fullPath)) return resolve(this.text[fullPath]);		
				}
	
				if (regex.test(fullPath)) return resolve(this.text[fullPath]);
			}
			
			reject(path);
		})
			.then(text => {
				if (properties) Object.keys(properties).forEach(key => text = text.replace(new RegExp(`\\\${${key}}`, `g`), properties[key]));
				return text;
			});
	}

	getText(path, properties) {
		let text = this.text[path];
		if (text == null) return undefined;
		if (properties) Object.keys(properties).forEach(key => text = text.replace(new RegExp(`\\\${${key}}`, `g`), properties[key]));		
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
