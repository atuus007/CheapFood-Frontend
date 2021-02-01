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
var router_1 = require("@angular/router");
var foodSubmitService_1 = require("../../shared/foodSubmitService");
var FoodcustomComponent = (function () {
    function FoodcustomComponent(route, router, foodService) {
        this.route = route;
        this.router = router;
        this.foodService = foodService;
        this.display = 'block';
        this.position = 'absolute';
        this.foodResult = [];
        this.ingredientRes = [];
    }
    FoodcustomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fsadfasdfas = this.route.params.subscribe(function (param) {
            _this.fsadfasdfas = param;
            console.log("param");
            // console.log(param[0]['min']);
            console.log(param['min']);
            _this.minar = param['min'];
            console.log(_this.minar);
            console.log(param['max']);
            _this.maxar = param['max'];
            console.log(_this.maxar);
            //console.log(param[0]);
            //console.log(param.get('min'));
        });
        console.log(this.minar);
        console.log(this.maxar);
        if (this.minar < this.maxar) {
            this.foodService.findfoodBymoney(this.minar, this.maxar).subscribe(function (foods) { _this.foodResult = foods; }, function (error) { console.log(error); });
        }
        else {
            alert("minimum ár nagyobb mint a maximum ár");
        }
        //console.log(foodResult.length());
        //this.coustomfoods=this.route.paramMap.((params: ParamMap) =>this.fsadfasdfas=params.get()
        /*
          param=>{
                    this.fsadfasdfas=param;
                    console.log("param");
                   // console.log(param[0]['min']);
                    console.log(param['min']);
                    this.minar
                    console.log(param['max']);
                    //console.log(param[0]);
                    //console.log(param.get('min'));
        
        
            this.route.params
            .zip(this.route.data)
            .subscribe((value) => {
              this.id = value[0]["id"]; // get param
              this.data = value[1]; // get data value
            })
            */
        /*
        this.fsadfasdfas=this.route.params.subscribe(
    
    
          param=>{
          this.fsadfasdfas=param;
          console.log("param");
          console.log(param[0]['min']);
          //console.log(param.get('min'));
        }
        );*/
        //console.log("=======================");
        //console.log(this.fsadfasdfas);
    };
    FoodcustomComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return FoodcustomComponent;
}());
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], FoodcustomComponent.prototype, "display", void 0);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object)
], FoodcustomComponent.prototype, "position", void 0);
FoodcustomComponent = __decorate([
    core_1.Component({
        selector: 'app-foodcustom',
        templateUrl: './foodcustom.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        foodSubmitService_1.FoodSubmitService])
], FoodcustomComponent);
exports.FoodcustomComponent = FoodcustomComponent;
//# sourceMappingURL=foodcustom.component.js.map