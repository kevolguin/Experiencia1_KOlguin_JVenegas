import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(public alerta:AlertController) { }

  ngOnInit() {
  }

  async alertaBoton1(){
    const miAlerta = await this.alerta.create({
      header:'Zapatillas',
      message: 'Zapatillas estilo caballero precio:29.900$',
      buttons:['Cerrar']
    });
    await miAlerta.present();
  }

  async alertaBoton2(){
    const miAlerta = await this.alerta.create({
      header:'Polera',
      message: 'Polera estilo joven precio:15.000$',
      buttons:['Cerrar']
    });
    await miAlerta.present();
  }

  async alertaBoton3(){
    const miAlerta = await this.alerta.create({
      header:'Bolso',
      message: 'Bolso dama precio:30.000$',
      buttons:['Cerrar']
    });
    await miAlerta.present();
  }
}
