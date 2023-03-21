import { Injectable } from '@angular/core';import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/common/iuser';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`${API_PATH}`)
}
}
