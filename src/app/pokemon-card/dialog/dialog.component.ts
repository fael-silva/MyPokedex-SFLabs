import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getPokemonNumber } from 'src/app/_model/Pokemon';
import { leadingZero, PokemonDetail } from 'src/app/_model/PokemonDetail';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})



export class DialogComponent implements OnInit{
  public getPokemonNumber = getPokemonNumber;
  public leadingZero = leadingZero;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data:{pokemonDetail: PokemonDetail}) { }
  ngOnInit(): void {
    console.log(this.data);
  }
  
}
