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
var FoodlistallComponent = (function () {
    function FoodlistallComponent(foodService) {
        this.foodService = foodService;
        this.asdf = [];
        this.adf = [];
        console.log("export class FoodlistallComponent implements OnInit");
    }
    FoodlistallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodService.getAllFoods().subscribe(function (foods) { _this.asdf = foods; }, function (error) { console.log(error); });
        // console.log(this.asdf[0].getId());
    };
    FoodlistallComponent.prototype.findIngById = function (id, index) {
        var _this = this;
        console.log("id: " + id + " index: " + index);
        this.foodService.getIngredientsById(id).subscribe(function (ingrediens) { _this.adf = ingrediens; }, function (error) { console.log(error); });
        this.selectedRow = index;
    };
    FoodlistallComponent.prototype.getFoods = function () {
        /*
             this._foodService.getFood()
             .subscribe(foods => { this.foodsList = foods;},
                        error => this.errorMessage=<any>error
             );
             console.log("AAA: "+this.foodsList.length);
             //console.log(this.foodsList[0].name);
             //console.log(this.foodsList[0].mennyiseg);
           }
           */
    };
    return FoodlistallComponent;
}());
FoodlistallComponent = __decorate([
    core_1.Component({
        selector: 'fall',
        templateUrl: './foodlistall.component.html',
    }),
    __metadata("design:paramtypes", [foodSubmitService_1.FoodSubmitService])
], FoodlistallComponent);
exports.FoodlistallComponent = FoodlistallComponent;
//# sourceMappingURL=foodlistall.component.js.map