import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from '../Recette';
import { RECETTES } from '../RecetteList';

import { PageNotFoundComponent} from'../page-not-found/page-not-found.component';
import { TypeColorPipe } from '../type-color.pipe';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-detail-recette',
  imports: [TypeColorPipe, CommonModule, PageNotFoundComponent],
  templateUrl: './detail-recette.component.html',
  styleUrl: './detail-recette.component.css'
})
export class DetailRecetteComponent implements OnInit 
{
  recetteList: Recette[] = RECETTES;
  recette: Recette | undefined;
  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void
  {
    const recetteId: number = parseInt(this.route.snapshot.paramMap.get("id")??""); 
    // console.log(rectteId);
    this.recette = this.recetteList.find(recette =>recette.id === recetteId);
  }
  goToRecetteListe()
  {
    this.router.navigate(["/recettes"]);
  }
}
