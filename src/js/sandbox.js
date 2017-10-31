const YouTubeDL = require(`youtube-dl`);

const query = `ytsearch10:desu desu`;
const options = [];
YouTubeDL.getInfo(query, options, { maxBuffer: 10000*1024 }, (err, info) => {
	if (err) return console.error(err);

	info.forEach(i => console.log(i.title));
	console.log(info.title);
});

class A {
	constructor() {
		this.b = `b`;
	}
}

let a = new A();
a.a = a;

console.log(a);
