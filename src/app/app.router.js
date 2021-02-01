"use strict";
var router_1 = require("@angular/router");
var app_contentAreaComponent_1 = require("./contentArea/app.contentAreaComponent");
var app_keszitokComponent_1 = require("./keszitok/app.keszitokComponent");
var app_etelekComponent_1 = require("./etelek/app.etelekComponent");
var app_foodlist200Component_1 = require("./etelek/foodlist200/app.foodlist200Component");
var app_foodlist400Component_1 = require("./etelek/foodlist400/app.foodlist400Component");
var app_foodlist600Component_1 = require("./etelek/foodlist600/app.foodlist600Component");
var app_foodlist800Component_1 = require("./etelek/foodlist800/app.foodlist800Component");
var app_foodsubmitComponent_1 = require("./foodsubmit/app.foodsubmitComponent");
var foodlistall_component_1 = require("./etelek/foodlistall/foodlistall.component");
var foodsearch_component_1 = require("./foodsearch/foodsearch.component");
var foodcustom_component_1 = require("./etelek/foodcustom/foodcustom.component");
var router = [
    { path: 'etelek',
        component: app_etelekComponent_1.etelekComponent,
        children: [{ path: 'f2', component: app_foodlist200Component_1.foodlist200Component },
            { path: 'f4', component: app_foodlist400Component_1.foodlist400Component },
            { path: 'f6', component: app_foodlist600Component_1.foodlist600Component },
            { path: 'f8', component: app_foodlist800Component_1.foodlist800Component },
            { path: 'fall', component: foodlistall_component_1.FoodlistallComponent },
            { path: 'foodcustom/:min/:max', component: foodcustom_component_1.FoodcustomComponent }
        ]
    },
    { path: 'keszitok', component: app_keszitokComponent_1.keszitokComponent },
    { path: '', component: app_contentAreaComponent_1.contentAreaComponent },
    { path: 'foodsubmit', component: app_foodsubmitComponent_1.foodsubmitComponent },
    { path: 'foodsearch', component: foodsearch_component_1.FoodsearchComponent }
];
exports.routes = router_1.RouterModule.forRoot(router);
exports.routesChild = router_1.RouterModule.forChild(router);
//# sourceMappingURL=app.router.js.map