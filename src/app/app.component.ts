import { Component } from '@angular/core';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { keszitokComponent } from './keszitok/app.keszitokComponent';
import { etelekComponent } from './etelek/app.etelekComponent';
import { foodlist200Component } from './etelek/foodlist200/app.foodlist200Component';
import { foodlist400Component } from './etelek/foodlist400/app.foodlist400Component';
import { foodlist600Component } from './etelek/foodlist600/app.foodlist600Component';
import { foodlist800Component } from './etelek/foodlist800/app.foodlist800Component';
import { foodsubmitComponent } from './foodsubmit/app.foodsubmitComponent';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';
import { FoodSubmitService } from './shared/foodSubmitService';
import { QuantityPipe } from './shared/food.pipe';
@Component({
  selector: 'my-app',
  templateUrl: `./main.html`,
  providers: [FoodSubmitService]
})
export class AppComponent  {

 }
