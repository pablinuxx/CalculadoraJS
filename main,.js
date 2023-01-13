const botones = document.querySelectorAll("button");
const pantalla = document.querySelector(".pantalla");
let resultado = [];
let acumulador;
function calcular(boton) {
  const value = boton.textContent;
  if (value === "LIMPIAR") {
    resultado = [];
    pantalla.textContent = ".";
  } else if (value === "=") {
    pantalla.textContent = eval(acumulador);
  } else {
    resultado.push(value);
    acumulador = resultado.join("");
    pantalla.textContent = acumulador;
  }
}
botones.forEach((boton) =>
  boton.addEventListener("click", () => calcular(boton))
);
