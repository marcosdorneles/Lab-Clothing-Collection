import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colecoes } from 'src/common/icolecoes';
import { API_PATH } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColecoesServiceService {

  getColecoes():Observable<Colecoes[]>{
    return this.httpClient.get<Colecoes[]>(`${API_PATH}/colecoes`)
  }

  getColecao(id: string):Observable<any>{
    return this.httpClient.get<Colecoes>(`${API_PATH}/colecoes/${id}`)
  }

  createColecao(colecao:Colecoes): Observable<Colecoes>{
    return this.httpClient.post<Colecoes>(`${API_PATH}/colecoes`,colecao)
  }

  atualizarColecao(modelo:Colecoes):Observable<any>{
    return this.httpClient.put<any>(`${API_PATH}/colecoes/${modelo.id}`, modelo)
  }

  deleteColecao(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${API_PATH}/colecoes/${id}`)
  }

  getTotalOrcamento(): Observable<number> {
    return this.httpClient.get<Colecoes[]>(`${API_PATH}/colecoes`)
      .pipe(
        map((colecoes: any[]) => colecoes.reduce((total, colecao) => total + colecao.orcamento, 0))
      );
  }
  constructor(private httpClient: HttpClient) { }
}
