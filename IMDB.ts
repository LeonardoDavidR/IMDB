import { Professional } from "./Professional"
import { Movie } from "./Movie"
import * as fs from 'fs';

export class IMDB{
    public peliculas : Movie[]

    constructor(peliculas : Movie[]){
        this.peliculas = peliculas
    }

    public escribirEnFicheroJSON(newFile : string){
        
        let prueba1 = JSON.stringify(this)
        fs.writeFileSync(newFile, prueba1)
        
    }
    public obtenerInstanciaIMDB(newFile :string) : IMDB{
        let lectura = fs.readFileSync(newFile,"utf8")
        let objeto = JSON.parse(lectura)
        return objeto
    }
}
