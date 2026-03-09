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
    nombre: "Jesús - Estudiante de Ingeniería en Sistemas.",
    description: "Me gusta salir de ruta en bicicleta, me gusta ir al gimnasio y soy de Juventino. "
  },
  {
    photo: "alumno2.jpg",
    nombre: "Cesar - Estudiante de Ingeniería en Sistemas.",
    description: "Soy de Cortazár y me gusta jugar futból, le voy al America y me gusta ir al gimnasio."
  },
  {
    photo: "alumno3.jpg",
    nombre: "Martín - Estudiante de Ingeniería en Sistemas.",
    description: "Soy entusiasta y no son tanto de micheladas, me gustan más las cubanas."
  },
  {
    photo: "alumno4.jpg",
    nombre: "Eduardo - Estudiante de Ingeniería en Sistemas.",
    description: "Me gusta la ciberseguridad y las micheladas."
  },
  {
    photo: "alumno5.jpg",
    nombre: "Esteban - Estudiante de Ingeniería en Sistemas.",
    description: "Me gusta la música, me gusta programar."
  },
  {
    photo: "alumno6.jpg",
    nombre: "Bere - Estudiante de Ingeniería en Sistemas.",
    description: "Me gustan los perros y mi banda favorita es Zoe, tengo 20 años, con ganas de aprender mucho."
  }

];

let memberIndex = 0;

document.getElementById("switchBtn").addEventListener("click", () => {
  memberIndex = (memberIndex + 1) % members.length;

  document.getElementById("photo").src = members[memberIndex].photo;
  document.getElementById("nombre").textContent = members[memberIndex].nombre;
  document.getElementById("description").textContent = members[memberIndex].description;
  
});