const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const nota4 = document.getElementById("nota4");
const examen = document.getElementById("examen");
const div = document.querySelector(".resultado")

const inputs = document.querySelectorAll("input")

const boton = document.querySelector(".boton")

boton.addEventListener("click", e => {

  const notaUno = parseInt(nota1.value);
  const notaDos = parseInt(nota2.value);
  const notaTres = parseInt(nota3.value);
  const notaCuatro = parseInt(nota4.value);
  const notaExamen = parseInt(examen.value);

  promedioNotas(notaUno, notaDos, notaTres, notaCuatro, notaExamen);

  inputs.forEach(element => {
    element.value = ""
  });
})

const promedioNotas = (n1, n2, n3, n4, ex) => {
  const promedio = Math.round(Math.trunc((n1 + n2 + n3 + n4 + ex) / 5))

  if (n1 > 7 || n2 > 7 || n3 > 7 || n4 > 7 || ex > 7) {
    alert("La nota es diferente")
  }

  else if (promedio <= 7 && promedio >= 4) {
    div.innerHTML += `<p><span class="span">Promedio: &nbsp</span>${promedio}  &nbsp  Aprobaste </p>`
  }
  else if (promedio <= 3 && promedio >= 1) {
    div.innerHTML += `<p><span class="span">Promedio: &nbsp</span>${promedio} &nbsp Reprobaste</p> `
  }

}

const limpiar = document.querySelector(".botonLimpiar")
limpiar.addEventListener("click", e => {

  const div = document.querySelector(".resultado")
  div.innerHTML = ""
})