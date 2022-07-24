
const button = document.querySelector(".canvas button");
const textInput = document.querySelector(".canvas input");
const nickname = window.localStorage.getItem("nickname");
textInput.value = nickname;

textInput.addEventListener("input", (e) => {
	window.localStorage.setItem("nickname", e.target.value);
})

button.addEventListener("click", () => {
	window.location = "http://localhost:5000/create-room"
})
