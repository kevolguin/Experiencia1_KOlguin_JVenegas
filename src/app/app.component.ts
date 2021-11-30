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
      icon: 'wallet-outline', 
      name: 'Catalogo', 
      redirecTo: '/catalogo'
    },
    {
      icon: 'wallet-outline', 
      name: 'Feriados', 
      redirecTo: '/noticias'
    },
    {
      icon: 'wallet-outline', 
      name: 'Comentarios', 
      redirecTo: '/datos'
    },
    {
      icon: 'power', 
      name: 'Cerrar Sesión', 
      redirecTo: '/login'
    },

  ]

}
