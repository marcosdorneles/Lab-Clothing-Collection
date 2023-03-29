import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelos } from 'src/common/imodelos';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelosServiceService {

  constructor(private httpClient: HttpClient) { }

  getModelos():Observable<Modelos[]>{
    return this.httpClient.get<Modelos[]>(`${API_PATH}/modelos`)
  }

  getModelo(id: string):Observable<any>{
    return this.httpClient.get<Modelos>(`${API_PATH}/modelos/${id}`)
  }

  createModelo(modelo:Modelos): Observable<Modelos>{
    return this.httpClient.post<Modelos>(`${API_PATH}/modelos`,modelo)
  }

  atualizarModelo(modelo:Modelos):Observable<any>{
    return this.httpClient.put<any>(`${API_PATH}/modelos/${modelo.id}`, modelo)
  }

  deleteModelo(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${API_PATH}/modelos/${id}`)
  }
}
