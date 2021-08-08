import { Component} from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{


  //@Input('nuevopersonaje') 
  nuevo:Personaje={
    nombre:'',
    poder:0
  }
 // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzService:DbzService){}
  agregar(){
    if(this.nuevo.nombre.trim().length===0){return}
    //Emitimos el nuevo personaje
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.pushItem(this.nuevo)
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
