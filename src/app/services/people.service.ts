import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { People } from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  addPeople(name: string, amount: number) {

    const values = {
      pe_name: name,
      pe_qtd_convidados: amount
    }

    return this.http.post(`${this.API}/insere-pessoa`, values);
  }

  getPeoples() {
    return this.http.get<People[]>(`${this.API}/lista-pessoas`);
  }
}
