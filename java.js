document
	.getElementById("durationSlider")
	.addEventListener("input", function (event) {
		const sliderValue = event.target.value; // Get slider value
		const animateElements = document.querySelectorAll("#hexy animate"); // Select all <animate> elements
		document.querySelector(".offsetVal>span").innerText = sliderValue;
		animateElements.forEach((animate) => {
			// Update the 'dur' attribute based on slider value
			animate.setAttribute("dur", `${sliderValue}s`);
		});
	});
document
	.getElementById("rowColSlider")
	.addEventListener("input", function (event) {
		const sliderValue = event.target.value; // Get slider value
		const hexagonPattern = document.querySelector("#hexagons");
		hexagonPattern.setAttribute("height", `${100 / sliderValue}%`);
		hexagonPattern.setAttribute("width", `${100 / sliderValue}%`);
		document.querySelector(".rowColVal>span").innerText = sliderValue;
	});

const randInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
function colorWheel() {
	const hexElements = document.querySelectorAll("#hexy>#hexagons>path");
	let h = randInt(0, 360);
	let hOffset = randInt(0, 720) / 36;
	let sOffset = randInt(0, 325) / 100;
	let lOffset = randInt(0, 325) / 100;
	for (let i = 0; i < hexElements.length; i++) {
		hexElements[i].setAttribute(
			"stroke",
			`hsl(${h + i * hOffset}, ${25 + i * sOffset}%, ${35 + i * lOffset}%)`
		);
	}
	// document.querySelector('#hGon').setAttribute('stroke', `hsl(${h + (hexElements.length + 1 * hOffset)}, ${25 + (hexElements.length + 1 * sOffset)}%, ${35 + (hexElements.length + 1 * lOffset)}%)`);
}

document.querySelector("#randCol").addEventListener("click", colorWheel);
