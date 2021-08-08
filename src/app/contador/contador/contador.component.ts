import { Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template:`
        <H1>{{title}}</H1>
        <h3>Contador de Numeros</h3>

        <h2>La base es <strong>{{base}}</strong> </h2>
        <button (click)="acumulador(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumulador(-base)">-{{base}}</button>
    `
})
export class ContadorComponent{
    
    title  : string = 'Componente Principal';
    numero : number=10;
    base   : number=5;
    acumulador(valor:number){
      this.numero +=valor;
    }
}