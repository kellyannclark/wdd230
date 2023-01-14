
const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");

// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const mainh1 = document.querySelector("main h1")

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		mainh1.style.color = "#eee";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		mainh1.style.color = "#fff"
		modeButton.textContent = "☑️";
	}
});
