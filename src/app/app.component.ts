import { Component, OnInit} from '@angular/core';


import { Pokemon } from "./pokemons/pokemon";
import { POKEMONS} from './pokemons/mock-pokemons';


@Component({
    selector: 'pokemon-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit{

     private pokemons: Pokemon[] ;
     private title: String = "Pokémons";
  


    ngOnInit(){
        

        this.pokemons = POKEMONS;


    }

    selectPokemon(pokemon:Pokemon){

        console.log("vous avez cliqué sur un pok" + pokemon.name);
    }






}
