// Construccion patron modulo
let iife = (function () {
  function privada(url, id) {
    console.log("Url: ", url);
    console.log("Id: ", id);
    id.setAttribute("src", url);
  }
  return {
    publica: function(url, id) {
      privada(url, id);
    }
  };
})();
class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = function() {
      return _url;
    };
    this.setUrl = () => _url;
  }
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;
    this.getId = function() {
      return _id;
    };
    this.setId = function(Id) {
      _id = Id;
    };
  }
  playMultimedia() {
    iife.publica(this.getUrl(), this.getId());
  }
  setInicio(tiempo) {
    this.getId().setAttribute("src", `${this.getUrl()}?start=${tiempo}`);
  }
}
//Vamos a instanciar una clase
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