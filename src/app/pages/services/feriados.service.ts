import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>
      ('https://apis.digital.gob.cl/fl/feriados/2021?callback={string}');
  }
}


