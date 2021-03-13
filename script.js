var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

class Player {
	constructor(name, type) {
		console.log(this)
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		console.log(this)
		super(name, type);
	}
	play() {
		console.log(`WEEEE I'am a ${this.type}`)
	}
}

const Wizard1 = new Wizard("Shelly", "Healer"); // instantiation
Wizard1.play()