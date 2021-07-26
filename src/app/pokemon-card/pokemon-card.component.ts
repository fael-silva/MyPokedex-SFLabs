import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getPokemonImage, getPokemonNumber, Pokemon } from '../_model/Pokemon';
import { PokemonDetail, Stat } from '../_model/PokemonDetail';
import { PokemonService } from '../_services/pokemon.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})

export class PokemonCardComponent{
  @Input()
  public pokemon!: Pokemon;
  @Input()
  public pokemonService!: PokemonService;

  public getPokemonImage = getPokemonImage;
  public getPokemonNumber = getPokemonNumber;
  
  public getDetailsPokemon() {
    this.pokemonService.getPokemonDetail(this.pokemon.number.toString()).subscribe(value => {
      
      let pokemonAbilities: Array<string> = [];
      value.abilities.forEach((element: { ability: {name:string} }) => {
        pokemonAbilities.push(element.ability.name)
      });

      let pokemonStats: Array<Stat> = [];
      value.stats.forEach((element: { base_stat: number, stat:{name:string}}) => {
        pokemonStats.push({
          base_stat: element.base_stat,
          name: element.stat.name
        })
      });

      let pokemonTypes: Array<string> = [];
      value.types.forEach((element: { type: {name:string}}) => {
        pokemonTypes.push(element.type.name)
      });

      const pokemonDetail: PokemonDetail = {
        name: value.name,
        number: value.id,
        urlImg: getPokemonImage(this.pokemon),
        abilities: pokemonAbilities,
        base_experience: value.base_experience,
        height: value.height,
        weight: value.weight,
        stats: pokemonStats,
        types: pokemonTypes
      };

      this.dialog.open(DialogComponent, {
        data: {pokemonDetail: pokemonDetail}
      })
    });
  }

  constructor(public dialog:MatDialog){
    
  }
}
