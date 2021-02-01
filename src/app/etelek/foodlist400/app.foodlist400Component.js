"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var foodSubmitService_1 = require("../../shared/foodSubmitService");
var foodlist400Component = (function () {
    function foodlist400Component(foodService) {
        this.foodService = foodService;
        this.asdf = [];
        this.adf = [];
    }
    foodlist400Component.prototype.ngOnInit = function () {
        var _this = this;
        this.foodService.findfoodBymoney(400, 600).subscribe(function (foods) { _this.asdf = foods; }, function (error) { console.log(error); });
    };
    foodlist400Component.prototype.findIngById = function (id, index) {
        var _this = this;
        console.log(id + " " + index);
        this.foodService.getIngredientsById(id).subscribe(function (ingrediens) { _this.adf = ingrediens; }, function (error) { console.log(error); });
        this.selectedRow = index;
    };
    return foodlist400Component;
}());
foodlist400Component = __decorate([
    core_1.Component({
        selector: 'f4',
        templateUrl: "./foodlist400.html",
    }),
    __metadata("design:paramtypes", [foodSubmitService_1.FoodSubmitService])
], foodlist400Component);
exports.foodlist400Component = foodlist400Component;
//# sourceMappingURL=app.foodlist400Component.js.map