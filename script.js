/* MENU HAMBURGUESA */
function toggleMenu(){
  document.getElementById("nav").classList.toggle("active");
}

/* CERRAR MENÚ AL HACER CLIC */
document.addEventListener("click", function(e){
  const nav = document.getElementById("nav");
  const toggle = document.querySelector(".menu-toggle");

  if(nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)){
    nav.classList.remove("active");
  }
});

/* MODAL */
function abrirModal(src){
  const modal = document.getElementById("modal");
  const imgModal = document.getElementById("imgModal");

  if(modal && imgModal){
    modal.style.display = "flex";
    imgModal.src = src;
  }
}

function cerrarModal(){
  const modal = document.getElementById("modal");
  if(modal){
    modal.style.display = "none";
  }
}

/* CERRAR MODAL AL HACER CLIC FUERA */
document.addEventListener("click", function(e){
  const modal = document.getElementById("modal");
  if(e.target === modal){
    cerrarModal();
  }
});

/* CERRAR MODAL CON ESC */
document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    cerrarModal();
  }
});

/* FORMATO DE MONEDA */
function formatearPrecio(precio){
  return precio.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0
  });
}

/* PRODUCTOS */
const secciones = [
  {
    nombre:"Melcochas Tradicionales",
    productos:[
      {nombre:"Melcocha x4", precio:4000, img:"melcocha1.png"},
      {nombre:"Melcocha x5", precio:5000, img:"melcocha2.png"},
      {nombre:"Melcocha x8", precio:8000, img:"melcocha3.png"},
      {nombre:"Melcocha x13", precio:7000, img:"melcocha9.png"},
      {nombre:"Melcocha x27", precio:15000, img:"melcocha10.png"},
      {nombre:"Melcocha Tarrina x11", precio:6000, img:"melcocha4.png"},
      {nombre:"Melcocha envuelta pequeña", precio:2000, img:"melcocha5.png"},
      {nombre:"Melcocha envuelta mediana", precio:3000, img:"melcocha6.jpg"},
      {nombre:"Melcocha envuelta grande", precio:5000, img:"melcocha7.png"},
      {nombre:"Melcocha envuelta gigante", precio:10000, img:"melcocha8.jpg"}
    ]
  },
  {
    nombre:"Maní",
    productos:[
      {nombre:"Bolitas de mani Pequeñas x3", precio:1000, img:"mani_bolitas1.jpeg"},
      {nombre:"Bolitas de mani grandes x10", precio:4000, img:"mani_bolitas2.png"},
      {nombre:"Bolitas de mani tarrina x23", precio:8000, img:"mani_bolitas3.jpeg"},
      {nombre:"Mani salado personal", precio:5000, img:"mani_bolitas4.png"},
      {nombre:"Mani salado mini", precio:2000, img:"mani_bolitas5.png"},
      {nombre:"Mani dulce personal", precio:5000, img:"mani_bolitas6.png"},
      {nombre:"Mani dulce mini", precio:2000, img:"mani_bolitas7.png"},
      {nombre:"Mani salado con pasas personal", precio:5000, img:"mani_bolitas8.png"},
      {nombre:"Mani salado con pasas mini", precio:2000, img:"mani_bolitas9.png"},
      {nombre:"Mani solo mini", precio:1000, img:"mani_bolitas10.png"},
      {nombre:"Mani tostado media libra", precio:6000, img:"mani_bolitas11.png"},
      {nombre:"Mani tostado libra", precio:12000, img:"mani_bolitas12.png"},
      {nombre:"Mani tostado kilo", precio:24000, img:"mani_bolitas13.png"},
      {nombre:"Mani en vaina bolsa grande", precio:6000, img:"mani_bolitas15.png"},
      {nombre:"Bolita de mani molido", precio:1000, img:"mani_bolitas16.png"},
      {nombre:"mani molido media libra", precio:6000, img:"mani_bolitas17.png"},
      {nombre:"mani molido libra", precio:12000, img:"mani_bolitas18.png"}
    ]
  },
  {
    nombre:"Paspitas",
    productos:[
      {nombre:"Paspitas mini", precio:1000, img:"paspitas1.png"},
      {nombre:"Paspitas personal", precio:1000, img:"paspitas2.png"},
      {nombre:"Paspitas grande", precio:4000, img:"paspitas3.png"},
      {nombre:"Paspitas familiar", precio:9000, img:"paspitas4.png"},
      {nombre:"Paspitas tarrina pequeña", precio:6000, img:"paspitas5.png"},
      {nombre:"Paspitas tarrina grande", precio:10000, img:"paspitas6.png"}
    ]
  },
  {
    nombre:"DULCES",
    productos:[
      {nombre:"caja bolitas de tamarindo", precio:8000, img:"dulce1.jpeg"},
      {nombre:"vasito de manjar blanco", precio:4000, img:"dulce2.jpeg"},
      {nombre:"caja de gomas de colores", precio:8000, img:"dulce3.jpeg"},
      {nombre:"caja de panelitas de coco", precio:8000, img:"dulce4.jpeg"},
      {nombre:"caja de masmelos con chispitas", precio:8000, img:"dulce5.jpeg"},
      {nombre:"caja de panelitas", precio:8000, img:"dulce6.jpeg"},
      {nombre:"caja de masmelos ", precio:8000, img:"dulce7.png"},
      {nombre:"caja de cocadas en bolitas", precio:8000, img:"dulce8.png"},
      {nombre:"caja de cocadas", precio:8000, img:"dulce9.png"},
      {nombre:"caja de cocadas", precio:8000, img:"dulce10.png"}
    ]
  },
  {
    nombre:"Otros productos",
    productos:[
      {nombre:"cafe artesanal molido", precio:30000, img:"otro1.jpeg"},
      {nombre:"panela molida", precio:10000, img:"otro2.jpeg"},
      {nombre:"achiras", precio:3000, img:"otro3.jpeg"},
      {nombre:"platanitos", precio:3000, img:"otro4.jpeg"},
      {nombre:"paquete de roscon ", precio:6000, img:"otro5.png"},
      {nombre:"paquete de roscon duro", precio:5000, img:"otro6.jpeg"},
      {nombre:"paquete de empanadillas x3 ", precio:2500, img:"otros7.png"},
      {nombre:"paquete de empanadillas x6 ", precio:5000, img:"otros8.png"},
    ]
  }
];

/* GENERAR CARTA */
function generarCarta(){
  const contenedor = document.getElementById("contenedor-secciones");
  if(!contenedor) return;

  let html = "";

  secciones.forEach(sec => {
    html += `
      <div class="tarjeta-seccion">
        <h2>${sec.nombre}</h2>
        <div class="productos">
    `;

    sec.productos.forEach(prod => {
      const mensaje = encodeURIComponent(
        `Hola, quiero pedir ${prod.nombre} por ${formatearPrecio(prod.precio)}`
      );

      html += `
        <div class="producto">
          <img src="img/${prod.img}" alt="${prod.nombre}" onclick="abrirModal(this.src)">
          <p>${prod.nombre}</p>
          <p>${formatearPrecio(prod.precio)}</p>
          <a href="https://wa.me/573018381880?text=${mensaje}" target="_blank">
            Pedir por WhatsApp
          </a>
        </div>
      `;
    });

    html += `</div></div>`;
  });

  contenedor.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", generarCarta);
