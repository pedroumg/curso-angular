import { Component } from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre:string='Iron Man';
    edad:number=35;

    get obtenerNombre():string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre='Spiderman';
    }
    
    cambiarEdad():void{
        this.edad = 18;
    }

}