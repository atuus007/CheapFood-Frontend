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
var forms_1 = require("@angular/forms");
var foodsubmit_1 = require("./foodsubmit");
var foodSubmitService_1 = require("../shared/foodSubmitService");
var foodsubmitComponent = (function () {
    function foodsubmitComponent(_fb, _foodService) {
        this._fb = _fb;
        this._foodService = _foodService;
        this.hozzavalokszama = [];
        this.valami = [];
    } //pipa
    foodsubmitComponent.prototype.ngOnInit = function () {
        //this.hozzavalokszama = Array(10).fill(0).map((x, i) => i + 1);
        this.foodForm = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            elkeszitesi_ido: ['', [forms_1.Validators.required]],
            mennyiseg: ['', [forms_1.Validators.required]],
            mennyisegfajta: ['', [forms_1.Validators.required]],
            ingredientsList: this._fb.array([]),
        }); //pipa
        this.addHozzavalok(); //pipa
    };
    foodsubmitComponent.prototype.initHozzavalok = function () {
        return this._fb.group({
            name: ['', [forms_1.Validators.required]],
            mennyiseg: ['', [forms_1.Validators.required]],
            atlagar: ['', [forms_1.Validators.required]],
            mennyisegfajta: ['', [forms_1.Validators.required]]
        });
    };
    foodsubmitComponent.prototype.addHozzavalok = function () {
        var control = this.foodForm.controls['ingredientsList'];
        var hozzvCtrl = this.initHozzavalok();
        control.push(hozzvCtrl);
        console.log("addHozzavalok AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
    };
    foodsubmitComponent.prototype.deleteHozzavalok = function (i) {
        var control = this.foodForm.controls['ingredientsList'];
        console.log("Deleted: " + i);
        control.removeAt(i);
    };
    foodsubmitComponent.prototype.save = function () {
        var _this = this;
        console.log("save BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBb");
        console.log("form: " + this.foodForm.get('name').value);
        console.log(this.foodForm.get('ingredientsList').value);
        this.myFood = new foodsubmit_1.FoodSubmit(this.foodForm.get('name').value, this.foodForm.get('ingredientsList').value, this.foodForm.get('elkeszitesi_ido').value, this.foodForm.get('mennyiseg').value, this.foodForm.get('mennyisegfajta').value);
        console.log("Name: " + this.myFood.getName());
        console.log("elkeszitesi_ido: " + this.myFood.getElkIdo());
        console.log("mennyiseg: " + this.myFood.getMennyiseg());
        console.log("mennyisegfajta: " + this.myFood.getMennyisegFajta());
        //console.log(this.myFood.getIngredientsList());
        //ez a jó
        this._foodService.saveFoodWithThings(this.myFood).subscribe(function (res) {
            console.log(res);
            alert("Hozzáadás sikeres!!");
            _this.foodForm.reset();
        }, function (err) {
            console.log("Error occured");
            alert("Hiba!!");
            _this.foodForm.reset();
        });
        /*
        this._foodService.createFood(this.foodsList2)
        .subscribe(   res=>{
          console.log(res);
          },
          err=>{
              console.log("Error occured");
          });
        /*this._foodService.getFood()
        .subscribe(foods => { this.foodsList3 = foods;},
                   error => this.errorMessage=<any>error
        );
        console.log("Result "+this.foodsList3.length);
        */
    };
    foodsubmitComponent.prototype.getFoods = function () {
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
    return foodsubmitComponent;
}());
foodsubmitComponent = __decorate([
    core_1.Component({
        selector: 'foodsubmit',
        templateUrl: "./foodsubmit.html",
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, foodSubmitService_1.FoodSubmitService])
], foodsubmitComponent);
exports.foodsubmitComponent = foodsubmitComponent;
//# sourceMappingURL=app.foodsubmitComponent.js.map