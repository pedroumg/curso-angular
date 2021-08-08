import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";

@Injectable()
export class DbzService{

    private _personajes : Personaje[]=[
        {nombre:'Goku', poder:2000},
      ];
      
    constructor(){}
    
    //Retornamos los personajes
    get personajes():Personaje[]{
        //aqui se uso Sintáxis Spread
        return [...this._personajes];
    }

    pushItem(personaje:Personaje){
        this._personajes.push(personaje);
    }
}