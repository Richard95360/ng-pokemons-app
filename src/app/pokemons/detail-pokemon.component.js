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
var DetailPokemonComponent = /** @class */ (function () {
    function DetailPokemonComponent(route, router, pokemonsService) {
        this.route = route;
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.pokemon = null;
    }
    DetailPokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.pokemonsService.getPokemon(id)
            .subscribe(function (pokemon) { return _this.pokemon = pokemon; });
    };
    DetailPokemonComponent.prototype.delete = function (pokemon) {
        var _this = this;
        this.pokemonsService.deletePokemon(pokemon)
            .subscribe(function (_) { return _this.goBack(); });
    };
    DetailPokemonComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemon/all']);
    };
    DetailPokemonComponent.prototype.goEdit = function (pokemon) {
        var link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    };
    DetailPokemonComponent = __decorate([
        core_1.Component({
            selector: 'detail-pokemon',
            templateUrl: './app/pokemons/detail-pokemon.component.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            pokemons_service_1.PokemonsService])
    ], DetailPokemonComponent);
    return DetailPokemonComponent;
}());
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map