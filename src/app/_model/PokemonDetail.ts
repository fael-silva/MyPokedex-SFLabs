export interface PokemonDetail{
    name: string;
    urlImg: string;
    number: number;
    abilities: Array<string>;
    base_experience: number;
    height: number;
    weight: number;
    stats: Array<Stat>;
    types: Array<string>
}

export interface Stat{
    base_stat: number;
    name:string;
}

export function leadingZero(str: string | number, size = 3): string {
    let s = String(str);
  
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
  
    return s;
  }
  