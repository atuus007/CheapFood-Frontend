import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Params } from '@angular/router/src/shared';
import { FoodSubmitService } from '../../shared/foodSubmitService';
import { FoodResoponse } from '../../shared/food.response';
import { IngrediensRespons } from '../../shared/ingredients.response';
@Component({
  selector: 'app-foodcustom',
  templateUrl: './foodcustom.component.html',
  //styleUrls: ['./foodcustom.component.css']
})
export class FoodcustomComponent implements OnInit, OnDestroy {


  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  private sub: Subscription;
  coustomfoods: Observable<any>;

  foodResult: FoodResoponse[] = [];
  ingredientRes: IngrediensRespons[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodService: FoodSubmitService
  ) { }
  fsadfasdfas: any;
  minar: number;
  maxar: number;
  ngOnInit() {

    this.fsadfasdfas = this.route.params.subscribe(


      param => {
        this.fsadfasdfas = param;
        console.log("param");
        // console.log(param[0]['min']);
        console.log(param['min']);
        this.minar = param['min'];
        console.log(this.minar);

        console.log(param['max']);
        this.maxar = param['max'];
        console.log(this.maxar);
        //console.log(param[0]);
        //console.log(param.get('min'));
      });
    console.log(this.minar);
    console.log(this.maxar);
    if (this.minar < this.maxar) {
      this.foodService.findfoodBymoney(this.minar, this.maxar).subscribe(
        foods => { this.foodResult = foods; },
        error => { console.log(<any>error); }
      );
    }else{
      alert("minimum ár nagyobb mint a maximum ár");
    }
    //console.log(foodResult.length());

    //this.coustomfoods=this.route.paramMap.((params: ParamMap) =>this.fsadfasdfas=params.get()
    /*
      param=>{
                this.fsadfasdfas=param;
                console.log("param");
               // console.log(param[0]['min']);
                console.log(param['min']);
                this.minar
                console.log(param['max']);
                //console.log(param[0]);
                //console.log(param.get('min'));
    
    
        this.route.params
        .zip(this.route.data)
        .subscribe((value) => {
          this.id = value[0]["id"]; // get param
          this.data = value[1]; // get data value
        })
        */
    /*
    this.fsadfasdfas=this.route.params.subscribe(


      param=>{
      this.fsadfasdfas=param;
      console.log("param");
      console.log(param[0]['min']);
      //console.log(param.get('min'));
    }
    );*/
    //console.log("=======================");
    //console.log(this.fsadfasdfas);

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
