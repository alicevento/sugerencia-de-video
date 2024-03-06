// Construcción del patrón módulo utilizando una IIFE (Expresión de Función Invocada Inmediatamente)
let iife = (function () {
  // Función privada para insertar el video en el documento HTML
  function privada(url, id) {
    console.log("Url: ", url);
    console.log("Id: ", id);
    id.setAttribute("src", url);
  }
  // Retornando un objeto con una función pública que hace uso de la función privada
  return {
    publica: function(url, id) {
      privada(url, id);
    }
  };
})();

// Definición de la clase Multimedia
class Multimedia {
  constructor(url) {
    // Propiedad privada _url
    let _url = url;
    // Métodos para acceder y modificar la URL
    this.getUrl = function() {
      return _url;
    };
    this.setUrl = () => _url;// Notación de flecha para función de un solo retorno
  }
  // Método de instancia para establecer el inicio del video
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}
// Definición de la clase Reproductor que extiende de Multimedia
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    // Propiedad privada _id
    let _id = id;
       // Métodos para acceder y modificar el ID
    this.getId = function() {
      return _id;
    };
    this.setId = function(Id) {
      _id = Id;
    };
  }
  // Método de instancia para reproducir el multimedia
  playMultimedia() {
     // Llama a la función pública de la IIFE para insertar el multimedia en el documento HTML
     iife.publica(this.getUrl(), this.getId());
    iife.publica(this.getUrl(), this.getId());
  }
  // Método de instancia para establecer el inicio del video con un tiempo específico
  setInicio(tiempo) {
     // Modifica el atributo src del elemento con el tiempo especificado
    this.getId().setAttribute("src", `${this.getUrl()}?start=${tiempo}`);
  }
}
// Instanciación de la clase Reproductor y reproducción de multimedia en distintos elementos del documento HTML
const idMusica = document.getElementById("musica");
let musica = new Reproductor(
"https://www.youtube.com/embed/WM8bTdBs-cw?si=wDAd7_l-I-Zew0nf",
idMusica
);
musica.playMultimedia();
const idPelicula = document.getElementById("peliculas");
let pelicula = new Reproductor(
"https://www.youtube.com/embed/5PSNL1qE6VY",
idPelicula
);
pelicula.playMultimedia();
pelicula.setInicio(20);
const idSeries = document.getElementById("series");
let series = new Reproductor(
"https://www.youtube.com/embed/xa8lhVwQBw4?si=uTmioiMLjAB7vxJD",
idSeries
);
series.playMultimedia();