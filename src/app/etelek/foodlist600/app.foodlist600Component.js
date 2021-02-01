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
var foodlist600Component = (function () {
    function foodlist600Component(foodService) {
        this.foodService = foodService;
        this.asdf = [];
        this.adf = [];
    }
    foodlist600Component.prototype.ngOnInit = function () {
        var _this = this;
        this.foodService.findfoodBymoney(600, 800).subscribe(function (foods) { _this.asdf = foods; }, function (error) { console.log(error); });
    };
    foodlist600Component.prototype.findIngById = function (id, index) {
        var _this = this;
        console.log(id + " " + index);
        this.foodService.getIngredientsById(id).subscribe(function (ingrediens) { _this.adf = ingrediens; }, function (error) { console.log(error); });
        this.selectedRow = index;
    };
    return foodlist600Component;
}());
foodlist600Component = __decorate([
    core_1.Component({
        selector: 'f6',
        templateUrl: "./foodlist600.html",
    }),
    __metadata("design:paramtypes", [foodSubmitService_1.FoodSubmitService])
], foodlist600Component);
exports.foodlist600Component = foodlist600Component;
//# sourceMappingURL=app.foodlist600Component.js.map