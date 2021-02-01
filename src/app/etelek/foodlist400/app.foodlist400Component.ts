import { Component,OnInit } from '@angular/core';
import { FoodResoponse } from '../../shared/food.response';
import { FoodSubmitService } from '../../shared/foodSubmitService';
import { IngrediensRespons } from '../../shared/ingredients.response';

@Component({
  selector: 'f4',
  templateUrl: `./foodlist400.html`,
})
export class foodlist400Component implements OnInit{
  asdf: FoodResoponse[]=[];
  adf: IngrediensRespons[]=[];
  selectedRow:number;
  constructor(private foodService: FoodSubmitService) {}
  ngOnInit(): void {
    this.foodService.findfoodBymoney(400,600).subscribe(
      foods => { this.asdf = foods;},
      error => {console.log(<any>error);}
    );
  }
  findIngById(id: number, index:number): void{
    console.log(id+" "+index);
    this.foodService.getIngredientsById(id).subscribe(
      ingrediens => { this.adf = ingrediens;},
      error => {console.log(<any>error);}
    );
    this.selectedRow=index;
  }
 }
