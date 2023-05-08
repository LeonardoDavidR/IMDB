"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proffesional = void 0;
var Proffesional = /** @class */ (function () {
    function Proffesional(name, age, weigth, heigth, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.weigth = weigth;
        this.heigth = heigth;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }
    Proffesional.prototype.printAll = function () {
        console.log(this.name, "\n", this.age, "\n", this.weigth, "\n", this.heigth, "\n", this.isRetired, "\n", this.nationality, "\n", this.oscarNumber, "\n", this.profession);
    };
    return Proffesional;
}());
exports.Proffesional = Proffesional;
