const btn1 = document.querySelector(".btn1");
const img = document.querySelector("img");

const URL = "https://dog.ceo/api/breeds/image/random";

fetch(URL)
	.then((res) => res.json())
	.then((data) => img.setAttribute("src", data.message))
	.catch((error) => console.log("Błąd, API NIE DZIAŁA"));

const image = () => {
	fetch(URL)
		.then((res) => res.json())
		.then((data) => img.setAttribute("src", data.message))
		.catch((error) => console.log("Błąd, API NIE DZIAŁA"));
};

btn1.addEventListener("click", image);
