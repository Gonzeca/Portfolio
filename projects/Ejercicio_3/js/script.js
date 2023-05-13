<<<<<<< HEAD
const lista = document.getElementsByName("resto");
for (let restoValue = 0; restoValue < lista.length; restoValue++) {
    lista[restoValue].addEventListener("click", () => {
        sessionStorage.setItem("restoValue", restoValue);
        window.location.href = "restaurantes/info.html";
    });
}
=======
lista = document.querySelectorAll(".lista");
lista[0].addEventListener("click", () => { window.location.href = "restaurantes/detalles1.html" });
>>>>>>> 50991cf781704e9bf14587d16d8c3a1bf58a30c1
