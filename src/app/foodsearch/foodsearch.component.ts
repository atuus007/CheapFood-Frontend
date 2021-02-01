import { Component, OnInit } from '@angular/core';
import { FoodSubmitService } from '../shared/foodSubmitService';
import { FoodSubmit } from '../foodsubmit/foodsubmit';

@Component({
  selector: 'app-foodsearch',
  templateUrl: './foodsearch.component.html',
//  styleUrls: ['./foodsearch.component.css']
})
export class FoodsearchComponent implements OnInit {

  constructor(private _foodService: FoodSubmitService) { }
  search:string;
  foodresult: FoodSubmit[]=[];
  ngOnInit() {

  }
  keres(){
    console.log("kereset: "+this.search);
  }

}
