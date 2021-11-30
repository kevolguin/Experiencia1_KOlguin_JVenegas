import { Injectable } from '@angular/core';
import { Storage }  from '@ionic/storage';

export interface Datos{
  id : number;
  nom: string; 
  tipo: string; 
  cantidad: number;
  modified: number;
}

const ITEMS_KEY = 'my-datos';

@Injectable({
  providedIn: 'root'
})
export class ServicedatosService {

  private _storage : Storage;

  constructor(private storage: Storage) { 
    this.init();
   }

   //definimos en un método la creación del almacenamiento
  async init(){
    const storage = await this.storage.create();
    this._storage= storage;
  }

  
  addDatos(dato: Datos):Promise<any>{
   return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
      if (datos) {
        datos.push(dato);
        return this.storage.set(ITEMS_KEY, datos);
      }else {
        return this.storage.set(ITEMS_KEY, [dato]);
      }

    })
  }

   //Nos permmite obtener la información almacenada en el storage 
   //por medio de sus keys 

   getDatos(): Promise<Datos[]>{
    return this.storage.get(ITEMS_KEY);
  }

}
