"use strict";
var testing_1 = require("@angular/core/testing");
var foodcustom_component_1 = require("./foodcustom.component");
describe('FoodcustomComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [foodcustom_component_1.FoodcustomComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(foodcustom_component_1.FoodcustomComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=foodcustom.component.spec.js.map