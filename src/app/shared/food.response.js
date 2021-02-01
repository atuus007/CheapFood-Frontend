"use strict";
var FoodResoponse = (function () {
    function FoodResoponse(id, name, mennyisegfajta, mennyiseg, elkeszitesi_ido, osszar) {
        this.id = id;
        this.name = name;
        this.mennyisegfajta = mennyisegfajta;
        this.mennyiseg = mennyiseg;
        this.elkeszitesi_ido = elkeszitesi_ido;
        this.osszar = osszar;
    }
    FoodResoponse.prototype.getName = function () {
        return this.name;
    };
    FoodResoponse.prototype.getId = function () {
        return this.id;
    };
    FoodResoponse.prototype.getmennyisegfajta = function () {
        return this.mennyisegfajta;
    };
    FoodResoponse.prototype.getmennyiseg = function () {
        return this.mennyiseg;
    };
    FoodResoponse.prototype.getosszar = function () {
        return this.osszar;
    };
    return FoodResoponse;
}());
exports.FoodResoponse = FoodResoponse;
//# sourceMappingURL=food.response.js.map