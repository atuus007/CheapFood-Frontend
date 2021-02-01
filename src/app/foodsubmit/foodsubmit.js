"use strict";
var FoodSubmit = (function () {
    function FoodSubmit(n, ingList, elk_i, mennyis, mennyisegfajta) {
        this.name = n;
        this.elkeszitesi_ido = elk_i;
        this.mennyiseg = mennyis;
        this.mennyisegfajta = mennyisegfajta;
        this.ingredientsList = ingList;
    }
    FoodSubmit.prototype.setName = function (n) {
        this.name = n;
    };
    FoodSubmit.prototype.setIngredients = function (ing) {
        this.ingredientsList = ing;
    };
    FoodSubmit.prototype.setElkId = function (elkid) {
        this.elkeszitesi_ido = elkid;
    };
    FoodSubmit.prototype.setMennyiseg = function (menny) {
        this.mennyiseg = menny;
    };
    FoodSubmit.prototype.setMennyFaj = function (mennyfaj) {
        this.mennyisegfajta = mennyfaj;
    };
    FoodSubmit.prototype.getName = function () {
        return this.name;
    };
    FoodSubmit.prototype.getElkIdo = function () {
        return this.elkeszitesi_ido;
    };
    FoodSubmit.prototype.getMennyiseg = function () {
        return this.mennyiseg;
    };
    FoodSubmit.prototype.getMennyisegFajta = function () {
        return this.mennyisegfajta;
    };
    FoodSubmit.prototype.getIngredientsList = function () {
        return this.ingredientsList;
    };
    return FoodSubmit;
}());
exports.FoodSubmit = FoodSubmit;
var HozzavaloSubmit = (function () {
    function HozzavaloSubmit() {
    }
    return HozzavaloSubmit;
}());
exports.HozzavaloSubmit = HozzavaloSubmit;
//# sourceMappingURL=foodsubmit.js.map