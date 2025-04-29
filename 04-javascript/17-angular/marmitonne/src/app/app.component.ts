import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recette } from './Recette';
import { RECETTES } from './RecetteList';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { TypeColorPipe } from './type-color.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,BorderCardDirective,TypeColorPipe],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'Marmitonne';
  recetteListe: Recette[] = RECETTES; //["Carbonade", "Okonomiyaki", "Cannelé"];
  recetteSelected: Recette|undefined;
  
  ngOnInit(): void
  {
    console.table(this.recetteListe);
    // this.selectRecette(this.recetteListe[2]);
  }

// selectRecette(recette: Recette)
// selectRecette(event: Event)
selectRecette(recetteId: string)
{
  // const index:number =parseInt((event.target as HTMLInputElement).value);
  const index: number = parseInt(recetteId);
  const recette : Recette | undefined = this.recetteListe.find(rec=>rec.id === index);
  this.recetteSelected = recette;
  if(recette)
  {
    console.log(`Vous avez séléctionné ${recette.name}`);
    // this.recetteSelected = recette
  }
  else
  {
    this.recetteSelected = undefined;
    console.log("Aucune recette correspondante");
    
  }
}

}
