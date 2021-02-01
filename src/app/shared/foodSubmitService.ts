import { Injectable } from "@angular/core";

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Response } from "_debugger";
import { FoodSubmit } from "../foodsubmit/foodsubmit";
import { FoodResoponse } from "./food.response";
import { IngrediensRespons } from "./ingredients.response";
//import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class FoodSubmitService {
    private _foodBaseUrl = 'http://localhost:8080/api/food';
    private _ingredientUrl = 'http://localhost:8080/api/ingredients/ingredients';
    private _saveFoodThings = 'http://localhost:8080/api/food/savefoodwithings';
    constructor(private httpClient: HttpClient) { }
	/*
    getFood(): Observable<IFoodSubmit[]>{
        const url=`${this._foodBaseUrl}/foodslist`;
        //ird át a Ifoodot hogy jól mappolja össze
        console.log("getFood AAAAAAAAAAAAAAAAAAAAAAAA");
        return this.httpClient.get<IFoodSubmit[]>(url)
        .do(data=>console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError);

    }
	*/
    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);

    }
    saveFoodWithThings(foodThings: FoodSubmit): Observable<FoodSubmit[]> {
        const url = 'http://localhost:8080/api/food/savefoodwithings';

        console.log("AAAAAAAAAAAAAAAAAAAAAAA");
        const body = {

            name: foodThings.getName(),
           
            elkeszitesi_ido: foodThings.getElkIdo(),
            mennyiseg: foodThings.getMennyiseg(),
            mennyisegfajta: foodThings.getMennyisegFajta(),
            ingredientsList: foodThings.getIngredientsList()
        };

        console.log(body);
        console.log(JSON.stringify(foodThings));
        return this.httpClient.post(url, body)
                              .do(data=>console.log("All: "+JSON.stringify(data)))
                              .catch(this.handleError);
        /*
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
     */
    }
    getIngredientsById(id:number):Observable<IngrediensRespons[]>{
        const url = 'http://localhost:8080/query/'+id;
        return this.httpClient.get<FoodResoponse[]>(url)
        .do(data=>console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError);
    }
    getAllFoods():Observable<FoodResoponse[]>{
        const url=`${this._foodBaseUrl}/foodslist`;
        //ird át a Ifoodot hogy jól mappolja össze
       
        return this.httpClient.get<FoodResoponse[]>(url)
        .do(data=>console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError);
    }
    findfoodBymoney(money1: number, money2:number):Observable<FoodResoponse[]>{
        const url = 'http://localhost:8080/api/food/foodslist/'+money1+'/'+money2;
        console.log(url);
       // {money1}/{money2}
       return this.httpClient.get<FoodResoponse[]>(url)
       .do(data=>console.log("All: "+JSON.stringify(data)))
       .catch(this.handleError);

    }
    createFood(food: FoodSubmit):void {
        //let headers=new Headers({'Content-Type':'applocation/json'});
        //let options = new RequestOptions({ headers: headers });
        const url = 'http://localhost:8080/api/food/savefood';
        /*
         console.log("createFood AAAAAA: "+food.name+" "+food.mennyiseg);
         
         const body={
             
             name:food.name,
             mennyiseg:food.mennyiseg,
             mennyisegfajta:food.mennyisegfajta
           };
         */
        //let options=new RequestOptions({headers: headers});
        /*
        return this.httpClient.post(url, JSON.stringify(food))
        .do(data=>console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError);*/
        //const p=this.httpClient.post<FoodSubmit>(url, food, httpOptions)
        //.map((res: Response)=>res.json())
        /*.do(data=>console.log("Create Food response: "+JSON.stringify(data)))*/
        //.catch(this.handleError); this.httpClient.post(url, body)
        //console.log("createFood AAAAAA: "+p);ű
        /*
        const req=this.httpClient.post(url, body).subscribe(
        res=>{
            console.log(res);
        },
        err=>{
            console.log("Error occured");
        }
        );*/
        /*
        return this.httpClient.post(url, body)
        .do(data=>console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError);
        */
        /*
        .do(map((hero: FoodSubmit) => console.log(`added hero w/ id=${hero.id}`)),
            catchError(this.handleError)
          );
          */
    }

}