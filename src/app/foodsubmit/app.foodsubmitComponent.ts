import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FoodSubmit,HozzavaloSubmit } from './foodsubmit'
import { FoodSubmitService } from '../shared/foodSubmitService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodlistallComponent } from '../etelek/foodlistall/foodlistall.component';

@Component({
  selector: 'foodsubmit',
  templateUrl: `./foodsubmit.html`,
})


export class foodsubmitComponent implements OnInit {
  hozzavalokszama: number[] = [];

  public foodForm: FormGroup; //pipa

  constructor(private _fb: FormBuilder, private _foodService: FoodSubmitService) { }//pipa

  //nev: string;
  //osszetevok: string;
  //mennyiseg: number;
  mennyisegselect: string;
  valami: HozzavaloSubmit[]=[];
  myFood: FoodSubmit;
  ngOnInit(): void {

    //this.hozzavalokszama = Array(10).fill(0).map((x, i) => i + 1);

    this.foodForm = this._fb.group({
      name: ['',[Validators.required, Validators.minLength(5)]],
      elkeszitesi_ido: ['',[Validators.required]],
      mennyiseg: ['',[Validators.required]],
      mennyisegfajta: ['',[Validators.required]],
      ingredientsList: this._fb.array([]),

    });//pipa


    this.addHozzavalok(); //pipa


  }
  initHozzavalok() {
    return this._fb.group({
      name: ['',[Validators.required]],
      mennyiseg: ['',[Validators.required]],
      atlagar: ['',[Validators.required]],
      mennyisegfajta: ['',[Validators.required]]
    });

  }

  addHozzavalok():void { //pipa
    const control = <FormArray>this.foodForm.controls['ingredientsList'];
    const hozzvCtrl = this.initHozzavalok();
    control.push(hozzvCtrl);
    console.log("addHozzavalok AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
  }
  deleteHozzavalok(i: number) {

    const control = <FormArray>this.foodForm.controls['ingredientsList'];

    console.log("Deleted: " + i);
    control.removeAt(i);

  }
  save(): void {
    console.log("save BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBb");






    console.log("form: "+this.foodForm.get('name').value);
    console.log(this.foodForm.get('ingredientsList').value);

    this.myFood =new FoodSubmit(
      this.foodForm.get('name').value,
      this.foodForm.get('ingredientsList').value,

      this.foodForm.get('elkeszitesi_ido').value,
      this.foodForm.get('mennyiseg').value,
      this.foodForm.get('mennyisegfajta').value,

    );

   console.log("Name: "+this.myFood.getName());
   console.log("elkeszitesi_ido: "+this.myFood.getElkIdo());
   console.log("mennyiseg: "+this.myFood.getMennyiseg());
   console.log("mennyisegfajta: "+this.myFood.getMennyisegFajta());

    //console.log(this.myFood.getIngredientsList());





    //ez a jó
    this._foodService.saveFoodWithThings(this.myFood).subscribe(
      res=>{
        console.log(res);
        alert("Hozzáadás sikeres!!");
        this.foodForm.reset();

      },
      err=>{
          console.log("Error occured");
          alert("Hiba!!");
          this.foodForm.reset();

      }
    );



























































      /*
      this._foodService.createFood(this.foodsList2)
      .subscribe(   res=>{
        console.log(res);
        },
        err=>{
            console.log("Error occured");
        });
      /*this._foodService.getFood()
      .subscribe(foods => { this.foodsList3 = foods;},
                 error => this.errorMessage=<any>error
      );
      console.log("Result "+this.foodsList3.length);
      */
  }
  getFoods(): void {

   /*
        this._foodService.getFood()
        .subscribe(foods => { this.foodsList = foods;},
                   error => this.errorMessage=<any>error
        );
        console.log("AAA: "+this.foodsList.length);
        //console.log(this.foodsList[0].name);
        //console.log(this.foodsList[0].mennyiseg);
      }
      */
    }
}
