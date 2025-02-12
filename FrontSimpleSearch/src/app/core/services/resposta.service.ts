import { enviroment } from './../../../environments/enviroments';
import { RespostaFormularioDTO } from './../models/DTOs/RespostaFormularioDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RespostaService {
  constructor(private _http: HttpClient) {}

  salvarRespostas(data: RespostaFormularioDTO) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this._http.post(enviroment.api_resposta, data, { headers });
  }
}
