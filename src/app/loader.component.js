"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'pkmn-loader',
            template: "\n    <div class=\"preloader-wrapper big active\">\n      <div class=\"spinner-layer spinner-blue\">\n        <div class=\"circle-clipper left\">\n          <div class=\"circle\"></div>\n        </div><div class=\"gap-patch\">\n          <div class=\"circle\"></div>\n        </div><div class=\"circle-clipper right\">\n          <div class=\"circle\"></div>\n        </div>\n      </div>\n    </div>\n  "
        })
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;
//# sourceMappingURL=loader.component.js.map