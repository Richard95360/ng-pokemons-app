"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// RxJS 6
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isLoggedIn = false; // L'utilisateur est-il connecté ?
    }
    // Une méthode de connexion
    AuthService.prototype.login = function (name, password) {
        var _this = this;
        // Faites votre appel à un service d'authentification...
        var isLoggedIn = (name === 'admin' && password === 'admin');
        return rxjs_1.of(true).pipe(operators_1.delay(1000), operators_1.tap(function (val) { return _this.isLoggedIn = isLoggedIn; }));
    };
    // Une méthode de déconnexion
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map