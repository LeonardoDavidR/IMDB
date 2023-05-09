"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors;
        this.nacionality = nacionality;
        this.director;
        this.writer;
        this.language;
        this.plataforma;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genre;
    }
    Movie.prototype.printAllMov = function () {
        console.log("El titulo es : ", this.title);
        console.log("El año de emision es : ", this.releaseYear);
        console.log("El reparto es", this.actors);
        console.log("La pelicula es de : ", this.nacionality);
        console.log("El director es : ", this.director);
        console.log("El guionista es : ", this.writer);
        console.log("El idioma de la pelicula es : ", this.language);
        console.log("La plataforma de emision es : ", this.plataforma);
        console.log("La peli es del UMC : ", this.isMCU);
        console.log("El nombre del protagonista es : ", this.mainCharacterName);
        console.log("La productora es : ", this.producer);
        console.log("El distribuidor es : ", this.distributor);
        console.log("El genero es : ", this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
