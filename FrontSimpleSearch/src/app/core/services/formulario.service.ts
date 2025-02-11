import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormularioPaginadoDTO } from '../models/DTOs/FormularioPaginadoDTO';
import { enviroment } from '../../../environments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {

  constructor(private _http: HttpClient) {}

  obterFormulariosMaisRespondidos() {
    const numeroPagina = 1;
    const tamanhoPagina = 10;

    const params = new HttpParams()
      .set('NumeroPagina', numeroPagina.toString())
      .set('TamanhoPagina', tamanhoPagina.toString());

    return this._http.get<Array<FormularioPaginadoDTO>>(
      enviroment.api_get_all_forms,
      { params }
    );
  }
}
