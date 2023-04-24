let inputs = document.querySelectorAll("input[type='checkbox']");
let afooters = document.getElementsByName("afooter");
if (inputs[0].checked === true) {
    afooters[0].classList.add("active");
} else if(inputs[1].checked === true) {
    afooters[1].classList.add("active");
} else {
    afooters[2].classList.add("active");
}
let comidas = document.querySelectorAll("article");
comidas[0].addEventListener("click", () => { window.location.href = "comidas/comida1.html" });