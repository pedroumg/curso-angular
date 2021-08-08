import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() { }
  heroes:string[]=["SpiderMan","Iron Man","Hulk","Capitan America","Dr Strangeh"]

  heroeborrado:string='';
  ngOnInit(): void {
  }
  borrarHeroe(){
    this.heroeborrado  = this.heroes.shift() || '';
  }

}
