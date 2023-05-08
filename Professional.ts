export class Proffesional{
        public name : string;
        public age : number ;
        public weigth : number;
        public heigth : number;
        public isRetired : Boolean;
        public nationality : string;
        public oscarNumber : number;
        public profession : string;

        constructor(name : string, age : number , weigth : number , heigth : number, isRetired : Boolean , 
            nationality : string, oscarNumber : number , profession : string){
                this.name = name; 
                this.age = age;
                this.weigth = weigth;
                this.heigth = heigth;
                this.isRetired = isRetired;
                this.nationality = nationality;
                this.oscarNumber = oscarNumber;
                this.profession = profession;
        }
        public printAll(){
            console.log(this.name, "\n", this.age,"\n",this.weigth,"\n",this.heigth,"\n",this.isRetired,
            "\n",this.nationality,"\n",this.oscarNumber,"\n",this.profession)
        }
}