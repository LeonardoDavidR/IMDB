import { Proffesional } from "./Professional";
import { Movie } from "./Movie";

let actor1= new Proffesional("Carlos", 25, 70, 1.72, false, "Colmbian", 1, "Actor");
let actor2= new Proffesional("Ana", 40, 70, 1.80, false, "Spanish", 3,"Actress");
let director = new Proffesional("Brandon" , 36, 90, 1.70, false, "American", 0, "director");
let writer = new Proffesional("Juan", 52, 90, 1.92, true,"Portuguesse",2,"Writer");
let movie =  new Movie("Hannibal", 2002, "Mexican", "Thriller");
let reparto = [actor1,actor2];
let idioma = "Japanesse";
movie.producer = "Paramount";
movie.actors = reparto;
movie.director = director;
movie.writer = writer;
movie.language = idioma;
movie.isMCU = false;
movie.distributor = "Peliculas Manuel";
movie.mainCharacterName = "Hannibal";
movie.plataforma = "Amazon Prime"



movie.printAllMov()
