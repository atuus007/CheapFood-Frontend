"use strict";
var testing_1 = require("@angular/core/testing");
var foodsearch_component_1 = require("./foodsearch.component");
describe('FoodsearchComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [foodsearch_component_1.FoodsearchComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(foodsearch_component_1.FoodsearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=foodsearch.component.spec.js.map