import { Proffesional } from "./Professional";

export class Movie{
    public title : string;
    public releaseYear : number;
    public actors : Proffesional[];
    public nacionality : string;
    public director : Proffesional;
    public writer : Proffesional;
    public language : string; 
    public plataforma : string ; 
    public isMCU : boolean;
    public mainCharacterName : string;
    public producer : string ;
    public distributor : string;
    public genre : string;

    constructor(title : string , releaseYear: number, nacionality : string, genre : string){
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
    public printAllMov(){
        console.log("El titulo es : " + this.title);
        console.log("El año de emision es : " + this.releaseYear);
        console.log("El reparto es" + this.actors);
        console.log("La pelicula es de : " + this.nacionality);
        console.log("El director es : " + this.director);
        console.log("El guionista es : " + this.writer);
        console.log("El idioma de la pelicula es : " + this.language);
        console.log("La plataforma de emision es : " + this.plataforma);
        console.log("La peli es del UMC : " + this.isMCU );
        console.log("El nombre del protagonista es : " + this.mainCharacterName);
        console.log("La productora es : " + this.producer);
        console.log("El distribuidor es : " + this.distributor);
        console.log("El genero es : " + this.genre);
        
        
    }
    
    
    

}
