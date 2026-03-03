// Colores de fondo
const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
let colorIndex = 0;

document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

// Datos de integrantes
const members = [
  {
    photo: "alumno1.jpg",
    description: "Jesús - Estudiante de Ingeniería en Software."
  },
  {
    photo: "alumno2.jpg",
    description: "Cesar - Desarrollador en formación."
  }
];

let memberIndex = 0;

document.getElementById("switchBtn").addEventListener("click", () => {
  memberIndex = (memberIndex + 1) % members.length;

  document.getElementById("photo").src = members[memberIndex].photo;
  document.getElementById("description").textContent =
    members[memberIndex].description;
});