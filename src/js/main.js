// require("./part1.js");
// require("./part2.js");

export const hello = (hello) => {
	return hello;
};

class Hello {
	prop = "hello";

	constructor(props) {
        this.name = "Hello";
        
        this.getProp();
	}

	getName() {
		return this.name;
	}

	getProp() {
		console.log(this.hello);

		this.getName();
	}
}
