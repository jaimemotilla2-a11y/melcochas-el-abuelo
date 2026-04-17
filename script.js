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
      {nombre:"Melcocha x4", precio:2000, img:"melcocha1.png"},
      {nombre:"Melcocha x5", precio:2000, img:"melcocha2.png"},
      {nombre:"Melcocha x8", precio:2500, img:"melcocha3.png"},
      {nombre:"Melcocha envuelta grande", precio:2500, img:"melcocha9.png"},
      {nombre:"Melcocha envuelta gigante", precio:2500, img:"melcocha10.png"},
      {nombre:"Melcocha Caja", precio:2500, img:"melcocha4.png"},
      {nombre:"Melcocha envuelta pequeña", precio:3000, img:"melcocha5.png"},
      {nombre:"Melcocha envuelta mediana", precio:2000, img:"melcocha6.jpg"},
      {nombre:"Melcocha envuelta grande", precio:2500, img:"melcocha7.png"},
      {nombre:"Melcocha envuelta gigante", precio:2500, img:"melcocha8.jpg"}
    ]
  },
  {
    nombre:"Maní",
    productos:[
      {nombre:"Bolitas de mani Pequeñas", precio:2000, img:"mani_bolitas1.jpeg"},
      {nombre:"Bolitas de mani grandes", precio:3000, img:"mani_bolitas2.png"},
      {nombre:"Bolitas de mani caja", precio:4000, img:"mani_bolitas3.jpeg"},
      {nombre:"Mani salado personal", precio:5000, img:"mani_bolitas4.png"},
      {nombre:"Mani salado mini", precio:2000, img:"mani_bolitas5.png"},
      {nombre:"Mani dulce personal", precio:3000, img:"mani_bolitas6.png"},
      {nombre:"Mani dulce mini", precio:4000, img:"mani_bolitas7.png"},
      {nombre:"Mani con pasas personal", precio:5000, img:"mani_bolitas8.png"},
      {nombre:"Mani con pasas mini", precio:2000, img:"mani_bolitas9.png"},
      {nombre:"Mani solo mini", precio:3000, img:"mani_bolitas10.png"},
      {nombre:"Mani solo cuarto de libra", precio:4000, img:"mani_bolitas11.png"},
      {nombre:"Mani solo media libra", precio:5000, img:"mani_bolitas12.png"},
      {nombre:"Mani solo libra", precio:2000, img:"mani_bolitas13.png"},
      {nombre:"Mani en vaina bolsa pequeña", precio:3000, img:"mani_bolitas14.png"},
      {nombre:"Mani en vaina bolsa grande", precio:4000, img:"mani_bolitas15.png"},
      {nombre:"Bolitas de mani molido", precio:5000, img:"mani_bolitas16.png"},
      {nombre:"Bolitas de mani molido mediana", precio:4000, img:"mani_bolitas17.png"},
      {nombre:"Bolitas de mani molido grande", precio:5000, img:"mani_bolitas18.png"}
    ]
  },
  {
    nombre:"Paspitas",
    productos:[
      {nombre:"Paspitas mini", precio:2000, img:"paspitas1.png"},
      {nombre:"Paspitas personal", precio:2000, img:"paspitas2.png"},
      {nombre:"Paspitas grande", precio:2500, img:"paspitas3.png"},
      {nombre:"Paspitas familiar", precio:3000, img:"paspitas4.png"},
      {nombre:"Paspitas caja pequeña", precio:3500, img:"paspitas5.png"},
      {nombre:"Paspitas caja grande", precio:3500, img:"paspitas6.png"}
    ]
  },
  {
    nombre:"DULCES",
    productos:[
      {nombre:"caja bolitas de tamarindo", precio:2000, img:"dulce1.jpeg"},
      {nombre:"vasito de dulce de leche", precio:2000, img:"dulce2.jpeg"},
      {nombre:"caja de gomas de colores", precio:2500, img:"dulce3.jpeg"},
      {nombre:"caja de panelitas de coco", precio:3000, img:"dulce4.jpeg"},
      {nombre:"caja de masmelos", precio:3500, img:"dulce5.jpeg"},
      {nombre:"caja de panelitas", precio:3500, img:"dulce6.jpeg"},
      {nombre:"caja de gomas de colores", precio:2500, img:"dulce7.png"},
      {nombre:"caja de panelitas de coco", precio:3000, img:"dulce8.png"},
      {nombre:"caja de masmelos", precio:3500, img:"dulce9.png"},
      {nombre:"caja de panelitas", precio:3500, img:"dulce10.png"}
    ]
  },
  {
    nombre:"Otros productos",
    productos:[
      {nombre:"cafe artesanal molido", precio:2000, img:"otro1.jpeg"},
      {nombre:"panela molida", precio:2000, img:"otro2.jpeg"},
      {nombre:"achiras", precio:2500, img:"otro3.jpeg"},
      {nombre:"platanitos", precio:3000, img:"otro4.jpeg"},
      {nombre:"paquete de roscon ", precio:3500, img:"otro5.png"},
      {nombre:"paquete de roscon duro", precio:3500, img:"otro6.jpeg"},
      {nombre:"paquete de roscon ", precio:3500, img:"otro7.png"},
      {nombre:"paquete de roscon ", precio:3500, img:"otro8.png"},
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
