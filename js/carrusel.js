document.addEventListener("DOMContentLoaded", () => {
  const listaCarrusel = document.getElementById("listaCarrusel");

  //TODO: Tomar cantidad de imagenes dentro de img/banners/ dinamicamente
  const cantidadImagenes = 4;
  const crearElementosLista = (lista) => {
    for (let i = 1; i <= cantidadImagenes; i++) {
      const nuevaImagen = document.createElement("img");
      nuevaImagen.classList.add("carrusel-img");
      nuevaImagen.src = `/img/banners/banner_sales${i}.jpg`;

      const nuevoLi = document.createElement("li");
      nuevoLi.appendChild(nuevaImagen);
      nuevoLi.id = `carrusel-elemento-${i}`;
      nuevoLi.classList.add("carrusel-elemento");

      lista.appendChild(nuevoLi);
    }
  };

  //Cambiar los elementos activos, teniendo en cuenta caso límite
  let numElementoActivo = 1;
  let numElementoAActivar = 2;
  const cambiarElementoActivo = () => {
    const imagenActiva = document.getElementById(`carrusel-elemento-${numElementoActivo}`);
    const imagenAActivar = document.getElementById(`carrusel-elemento-${numElementoAActivar}`);
    imagenActiva.classList.remove("carrusel-activo");
    imagenAActivar.classList.add("carrusel-activo");

    //Preparar numeros para siguiente ejecución
    numElementoActivo++;
    numElementoAActivar++;
    if (numElementoAActivar > cantidadImagenes) {
      numElementoAActivar = 1;
    } 
    if (numElementoActivo > cantidadImagenes) {
      numElementoActivo = 1;
    }
  };
  
  crearElementosLista(listaCarrusel);
  document.getElementById("carrusel-elemento-1").classList.add("carrusel-activo");
  setInterval(() => {
    cambiarElementoActivo();
  }, 3500);
});