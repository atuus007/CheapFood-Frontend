import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'quantity'})
export class QuantityPipe implements PipeTransform {
    retr:string;
  transform(value: number, exponent: string): string {
   
    switch(value) { 
        case 1: { 
           this.retr="kg";
           break; 
        } 
        case 2: { 
            this.retr="evőkanál";
           break; 
        } 
        case 3: { 
            this.retr="teáskanál";
            break; 
         } 
         case 4: { 
            this.retr="dkg";
            break; 
         } 
         case 5: { 
            this.retr="gramm";
            break; 
         } 
         case 6: { 
            this.retr="db";
            break; 
         } 
         case 7: { 
            this.retr="liter";
            break; 
         } 
        default: { 
            this.retr="NaN";
           break; 
        } 
     } 
    return this.retr;
  }
}