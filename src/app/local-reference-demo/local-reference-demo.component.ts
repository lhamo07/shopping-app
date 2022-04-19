import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local-reference-demo',
  templateUrl: './local-reference-demo.component.html',
  styleUrls: ['./local-reference-demo.component.css']
})
export class LocalReferenceDemoComponent implements OnInit {
@ViewChild('name')name: any;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(name: any){
console.log(name.value);
  }
}
