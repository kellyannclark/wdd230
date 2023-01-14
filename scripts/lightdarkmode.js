const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const mainh1 = document.querySelector("main h1")

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#000";
		mainh1.style.color = "#eee";
		modeButton.textContent = "X";
	} 
    
    else {
		main.style.background = "#eee";
		main.style.color = "#000";
        mainh1.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});