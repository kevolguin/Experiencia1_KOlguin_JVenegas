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
      icon: 'information-circle-outline', 
      name: 'formulario', 
      redirecTo: '/formulario'
    },
    {
      icon: 'wallet-outline', 
      name: 'catalogo', 
      redirecTo: '/catalogo'
    },
    {
      icon: 'wallet-outline', 
      name: 'API', 
      redirecTo: '/noticias'
    },
    {
      icon: 'wallet-outline', 
      name: 'canasta', 
      redirecTo: '/datos'
    },
    {
      icon: 'wallet-outline', 
      name: 'login', 
      redirecTo: '/login'
    },
  ]

}
