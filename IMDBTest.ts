
import { IMDB } from "./IMDB";
import { Movie } from "./Movie";
import { Professional } from "./Professional";
import * as fs from "fs"


let actor = new Professional("Gabriel", 22,100,1.92,false,"Spanish", 0,"Actor");
let actor1 = new Professional("German", 27,85,1.82, false, "Italian", 1,"Actor");
let director = new Professional("Jose", 56, 70,1.72,false,"Spanish",2,"Director");
let writer = new Professional("Alex", 58,62,1.75,false,"French",0,"Writer")
let movie = new Movie("Shameless", 2018,"American","Scify");
let actores : Professional[] = [actor , actor1];
let idioma = "English";

movie.producer = "Disney";
movie.actors = actores;
movie.director = director;
movie.writer = writer;
movie.language = idioma;
movie.isMCU = false;
movie.distributor = "Peliculas gabriel";
movie.mainCharacterName = "Zery";
movie.plataforma = "Neflix";

let actor3  = new Professional("Carlos", 25, 70, 1.72, false, "Colmbian", 1, "Actor");
let actor4  = new Professional("Ana", 40, 70, 1.80, false, "Spanish", 3,"Actress");
let director1 = new Professional("Brandon" , 36, 90, 1.70, false, "American", 0, "director");
let writer1  = new Professional("Juan", 52, 90, 1.92, true,"Portuguesse",2,"Writer");
let movie1 =  new Movie("Hannibal", 2002, "Mexican", "Thriller");
let reparto1 : Professional[] = [actor3 , actor4];
let idioma1 = "Japanesse";

movie1.producer = "Paramount";
movie1.actors = reparto1;
movie1.director = director1;
movie1.writer = writer1;
movie1.language = idioma1;
movie1.isMCU = false;
movie1.distributor = "Peliculas Manuel";
movie1.mainCharacterName = "Hannibal";
movie1.plataforma = "Amazon Prime"


let peliculas : Movie[]= [movie,movie1]

let iMDB = new IMDB(peliculas)

console.log(iMDB.peliculas)

let stringIMDB = JSON.stringify(iMDB)


fs.writeFileSync ("imdbBBDD.json", stringIMDB)
