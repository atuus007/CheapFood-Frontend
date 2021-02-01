import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'hzavl',
  templateUrl: './hozzavalokComponent.html',

})
export class HozzavalokComponent implements OnInit {
  @Input('group')
  public hval: FormGroup;


  constructor() {
    console.log("export class FoodlistallComponent implements OnInit");
  }

  ngOnInit() {
  }

}