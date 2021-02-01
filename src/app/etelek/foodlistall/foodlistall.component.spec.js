"use strict";
var testing_1 = require("@angular/core/testing");
var foodlistall_component_1 = require("./foodlistall.component");
describe('FoodlistallComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [foodlistall_component_1.FoodlistallComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(foodlistall_component_1.FoodlistallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=foodlistall.component.spec.js.map