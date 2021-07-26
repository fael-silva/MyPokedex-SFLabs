import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../_model/Pokemon';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  public pokemons: Pokemon[] = [];
  private allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=300';
  private pokemonDetailsUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private httpClient: HttpClient,
  ) {
    
    this.httpClient.get<any>(this.allPokemonsUrl).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url))
        );
      }),
      mergeMap(value => value),
    ).subscribe((result: any) => this.pokemons[result.id] = {
      image: result.sprites.front_default,
      number: result.id,
      name: result.name,
      types: result.types.map((t: { type: { name: any; }; }) => t.type.name),

    }
    );
  }
  
  public getPokemonDetail(pokemon: string){
      return this.httpClient.get<any>(this.pokemonDetailsUrl+pokemon).pipe(
        value => value
      );
      
  }
}
