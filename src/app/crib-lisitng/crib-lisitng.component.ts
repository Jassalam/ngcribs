import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';


@Component({
  selector: 'app-crib-lisitng',
  templateUrl: './crib-lisitng.component.html',
  styleUrls: ['./crib-lisitng.component.css']
})
export class CribLisitngComponent implements OnInit {

  cribs: Array<any>;
  error: string;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  
  this.http.get('data/cribs.json')
    .subscribe(
    data => this.cribs = data,
    error => this.error =error.statusText
  );
}
  
  
}



