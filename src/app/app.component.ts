import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

  componentes : Componente[] =[
    {
      icon: 'sunny-outline', 
      name: 'formulario', 
      redirecTo: '/formulario'
    },
    {
      icon: 'paw-outline', 
      name: 'catalogo', 
      redirecTo: '/catalogo'
    },
  ]

}
