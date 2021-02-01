import{ ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { FoodlistallComponent } from './etelek/foodlistall/foodlistall.component';
import { FoodsearchComponent } from './foodsearch/foodsearch.component';
import { FoodcustomComponent } from './etelek/foodcustom/foodcustom.component';

 const router: Routes = [
    { path: 'etelek' , 
      component: etelekComponent,
      children:[ { path: 'f2' , component: foodlist200Component},
                 { path: 'f4' , component: foodlist400Component},
                 { path: 'f6' , component: foodlist600Component},
                 { path: 'f8' , component: foodlist800Component},
                 { path: 'fall' , component: FoodlistallComponent},
                 { path: 'foodcustom/:min/:max' , component: FoodcustomComponent}
            ]
        },
    { path: 'keszitok' , component: keszitokComponent},
    { path: '' , component: contentAreaComponent},
   
    { path: 'foodsubmit' , component: foodsubmitComponent},
    { path: 'foodsearch' , component: FoodsearchComponent}
    
    


];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
export const routesChild: ModuleWithProviders = RouterModule.forChild(router);