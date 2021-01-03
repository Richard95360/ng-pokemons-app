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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemons_service_1 = require("./pokemons.service");
var EditPokemonComponent = /** @class */ (function () {
    function EditPokemonComponent(route, pokemonsService) {
        this.route = route;
        this.pokemonsService = pokemonsService;
        this.pokemon = null;
    }
    EditPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.pokemonsService.getPokemon(id)
            .subscribe(function (pokemon) { return _this.pokemon = pokemon; });
    };
    EditPokemonComponent = __decorate([
        core_1.Component({
            selector: 'edit-pokemon',
            template: "\n    <h2 class=\"header center\">Editer {{ pokemon?.name }}</h2>\n        <p class=\"center\">\n            <img [src]=\"pokemon.picture\"/>\n        </p>\n    <pokemon-form [pokemon]=\"pokemon\"></pokemon-form>\n  ",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            pokemons_service_1.PokemonsService])
    ], EditPokemonComponent);
    return EditPokemonComponent;
}());
exports.EditPokemonComponent = EditPokemonComponent;
//# sourceMappingURL=edit-pokemon.component.js.map