"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var QuantityPipe = (function () {
    function QuantityPipe() {
    }
    QuantityPipe.prototype.transform = function (value, exponent) {
        switch (value) {
            case 1: {
                this.retr = "kg";
                break;
            }
            case 2: {
                this.retr = "evőkanál";
                break;
            }
            case 3: {
                this.retr = "teáskanál";
                break;
            }
            case 4: {
                this.retr = "dkg";
                break;
            }
            case 5: {
                this.retr = "gramm";
                break;
            }
            case 6: {
                this.retr = "db";
                break;
            }
            case 7: {
                this.retr = "liter";
                break;
            }
            default: {
                this.retr = "NaN";
                break;
            }
        }
        return this.retr;
    };
    return QuantityPipe;
}());
QuantityPipe = __decorate([
    core_1.Pipe({ name: 'quantity' })
], QuantityPipe);
exports.QuantityPipe = QuantityPipe;
//# sourceMappingURL=food.pipe.js.map