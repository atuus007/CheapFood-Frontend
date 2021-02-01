"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_router_1 = require("./app.router");
var app_component_1 = require("./app.component");
var app_headerComponent_1 = require("./header/app.headerComponent");
var app_navComponent_1 = require("./nav/app.navComponent");
var app_contentAreaComponent_1 = require("./contentArea/app.contentAreaComponent");
var app_footerComponent_1 = require("./footer/app.footerComponent");
var app_keszitokComponent_1 = require("./keszitok/app.keszitokComponent");
var app_etelekComponent_1 = require("./etelek/app.etelekComponent");
var app_foodlist200Component_1 = require("./etelek/foodlist200/app.foodlist200Component");
var app_foodlist400Component_1 = require("./etelek/foodlist400/app.foodlist400Component");
var app_foodlist600Component_1 = require("./etelek/foodlist600/app.foodlist600Component");
var app_foodlist800Component_1 = require("./etelek/foodlist800/app.foodlist800Component");
var app_foodsubmitComponent_1 = require("./foodsubmit/app.foodsubmitComponent");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var foodlistall_component_1 = require("./etelek/foodlistall/foodlistall.component");
var hozzavalokComponent_1 = require("./foodsubmit/hozzavalokComponent");
var foodsearch_component_1 = require("./foodsearch/foodsearch.component");
var food_pipe_1 = require("./shared/food.pipe");
var foodcustom_component_1 = require("./etelek/foodcustom/foodcustom.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_router_1.routes, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpClientModule],
        declarations: [app_component_1.AppComponent,
            app_headerComponent_1.headerComponent,
            app_navComponent_1.navComponent,
            app_contentAreaComponent_1.contentAreaComponent,
            app_footerComponent_1.footerComponent,
            app_keszitokComponent_1.keszitokComponent,
            app_etelekComponent_1.etelekComponent,
            app_foodlist200Component_1.foodlist200Component,
            app_foodlist400Component_1.foodlist400Component,
            app_foodlist600Component_1.foodlist600Component,
            app_foodlist800Component_1.foodlist800Component,
            app_foodsubmitComponent_1.foodsubmitComponent,
            foodlistall_component_1.FoodlistallComponent,
            hozzavalokComponent_1.HozzavalokComponent,
            foodsearch_component_1.FoodsearchComponent,
            food_pipe_1.QuantityPipe,
            foodcustom_component_1.FoodcustomComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map