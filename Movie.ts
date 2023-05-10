import { Professional } from "./Professional";

export class Movie{
    public title : string;
    public releaseYear : number;
    public actors : Professional[];
    public nacionality : string;
    public director : Professional;
    public writer : Professional;
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
        console.log("\nTitle :"+ this.title+"\nRelease Year :" +this.releaseYear+"\nActors :", this.actors,"\nNacionality :" +this.nacionality+"\nDirector :" ,this.director,"\nWriter :" , this.writer,"\nLanguage :" +this.language+"\nPlataforma :" +this.plataforma+"\nIs MCU :" +this.isMCU+"\nMain Character Name :" +this.mainCharacterName+"\nProducer :" +this.producer+"\nDistributor :" +this.distributor+"\nGenre :" +this.genre);
        
    }
    
    
    

}
