import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from '../Recette';
import { RECETTES } from '../RecetteList';

@Component({
  selector: 'app-detail-recette',
  imports: [],
  standalone: true,
  templateUrl: './detail-recette.component.html',
  styleUrl: './detail-recette.component.css'
})
export class DetailRecetteComponent implements OnInit 
{
  recetteListe: Recette[] = RECETTES;
  recette: Recette|undefined;
  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void 
  {
    const recetteId: number = parseInt(this.route.snapshot.paramMap.get("id")??"");
    // console.log(recetteId);
    this.recette = this.recetteListe.find(recette=>recette.id === recetteId);
    
  }

  goToRecetteList()
  {
    this.router.navigate(["/recettes"]);
  }
}
