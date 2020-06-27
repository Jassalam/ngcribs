import { Component, OnInit } from '@angular/core';
import { cribs } from '../data/cribs';

@Component({
  selector: 'app-crib-lisitng',
  templateUrl: './crib-lisitng.component.html',
  styleUrls: ['./crib-lisitng.component.css']
})
export class CribLisitngComponent implements OnInit {

  cribs: Array<any> = cribs;
  
  constructor() { }

  ngOnInit(): void {
  //make an http request
  }


}
