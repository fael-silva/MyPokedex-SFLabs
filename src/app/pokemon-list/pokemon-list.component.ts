import { Component } from '@angular/core';
import { Pokemon } from '../_model/Pokemon';
import { Type } from '../_model/Type';
import { PokemonService } from '../_services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent{

  constructor(
    public pokemonService: PokemonService
  ){
    
  }
  
}

