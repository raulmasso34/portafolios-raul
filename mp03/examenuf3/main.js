const traducir = {
  r: "./img/bR.png", k: "./img/bK.png",  b: "./img/bB.png",  n: "./img/bN.png",  p: "./img/bP.png",  q: "./img/bQ.png",
  R: "./img/wR.png",  K: "./img/wK.png",  B: "./img/wB.png",  N: "./img/wN.png",  P: "./img/wP.png",  Q: "./img/wQ.png"
};

function leerArchivo(input) {
  if (input.files && input.files[0]) {
      const archivo = input.files[0];
      const lector = new FileReader();

      lector.onload = function (e) {
          const fen = e.target.result;
          ajedrez(fen);
      };

      lector.readAsText(archivo);
  }
}

function ajedrez(fen) {
  const piezas = fen.split(' ')[0]; 

  const contenedorImagenes = document.getElementById("images");
  contenedorImagenes.innerHTML = ""; 

  for (let i = 0; i < piezas.length; i++) {
      const caracter = piezas[i];
      if (caracter in traducir) {
          const rutaImagen = traducir[caracter];

          const image = document.createElement("img");
          image.width = "100";
          image.height = "100";
          image.src = rutaImagen;
          contenedorImagenes.appendChild(image);
      }
  }
}

document.getElementById("fileInput").addEventListener("change", function () {
  leerArchivo(this);
});
