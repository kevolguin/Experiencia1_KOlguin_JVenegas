import { Component, OnInit } from '@angular/core';
import { FeriadosService } from 'src/app/pages/services/feriados.service';
import {Article} from '../interfaces/interfaces';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriados: Article[] = []

  constructor(private feriadosService:FeriadosService) { }

  ngOnInit() {
    this.feriadosService.getTopHeadLines().subscribe(resp => {
      console.log('feriados', resp);
      this.feriados.push(...resp.feriado);
    });
  }
}
