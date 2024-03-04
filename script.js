//Un nuevo cliente necesita un sitio web que muestre sugerencias de vídeos, por el momento, requiere que se muestre una sola sugerencia por categoría, siendo las categorías: Música, Película y Serie. Estas categorías estarán ubicadas en un menú colapsable, permitiendo mostrar una categoría a la vez con un solo clic o también ocultar todas las categorías. Por ende, lo que debe aparecer en cada categoría es un vídeo, puede ser desde cualquier repositorio en la nube o incrustado de forma local. Pero cada vídeo debe hacer referencia a la categoría a la cual se hace un click. Es importante destacar que el propósito de este desafío es trabajar directamente en un archivo JavaScript, por lo tanto, en el archivo denominado Apoyo Desafío - Sugerencia de Vídeos, encontrarás todos los archivos necesarios, como: imagen, maqueta HTML y hoja de estilos. Igualmente, el menú colapsable ya está funcionando con Bootstrap, y tienen disponibles las etiquetas iframe sin el url respectivo, por lo que solo hace falta que muestren los vídeos automáticamente al cargar la página web, quedando disponibles para cuando el usuario haga un click sobre cada título del menú. La url para estos videos será insertada dinámicamente desde JavaScript implementando clases, polimorfismo, closures y patrón módulo. Partiendo del siguiente diagrama de clases:

//Multimedia (-url) (get url, setInicio()) - Reproductor (-id) (playMultimedia(), setinicio())

//Implementar el Patrón Módulo mediante IIFE, en donde: 1.-Se cree una función privada que reciba la url del video y el id de la etiqueta iframe, para así poder mostrar los videos en el documento HTML. Dato: puedes utilizar la instrucción “setAttribute” para manipular el DOM. 2.- Se retorne una función pública que reciba los parámetros (url, id), y realice el llamado a la función interna (privada) para insertar los elementos recibidos.

//Clase Multimedia:

class Multimedia {
    constructor(url) {
        this._url = url;
    }
    get url() { 
        return this.url;
    }
    
    setInicio () {
        return ("Este método es para realizar un cambio en la URL del video")
    }
}

//Clase Reproductor:

class Reproductor extends Multimedia {
    constructor(url, id) {
        super (url);
        this._id = id;
    }
    playMultimedia() {
        let multimedia = new Multimedia(url);
        let iframe = document.getElementById(id);
        iframe.src = multimedia.url;
    }
}

const musica = new Reproductor (url, "musica");
const peliculas = new Reproductor ("https://www.youtube.com/watch?v=YF1eYbfbH5k", "peliculas");
const series = new Reproductor (url, "series");








const videoURLs = (() => {
    let urls = {
        pelicula: "https://www.youtube.com/embed/5PSNL1qE6VY",
    }
}





ejemplo

const moduloPrueba = (() => {
    let contador = 0;
    return {
    incrementaContador: () => {},
    };
    reseteoContador: () => {}
    })();