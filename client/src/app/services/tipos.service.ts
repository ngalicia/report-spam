import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Tipo } from '../models/tipo'

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTipos() {
    return this.http.get(`${this.API_URI}/tipos`);
  }

  getTipo(id: string) {
    return this.http.get(`${this.API_URI}/tipos/${id}`);
  }

  saveTipo(tipo: Tipo) {
    return this.http.post(`${this.API_URI}/tipos`, tipo);
  }

  updateTipo(id: string, tipo: Tipo) {
    return this.http.put(`${this.API_URI}/tipos/${id}`, tipo);
  }

  deleteTipo(id: string) {
    return this.http.delete(`${this.API_URI}/tipos/${id}`);
  }
  
}
