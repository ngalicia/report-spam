import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Denuncia } from '../models/Denuncia'

@Injectable({
  providedIn: 'root'
})
export class DenunciasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getDenuncias() {
    return this.http.get(`${this.API_URI}/denuncias`);
  }

  getDenuncia(id: string) {
    return this.http.get(`${this.API_URI}/denuncias/${id}`);
  }

  saveDenuncia(denuncia: Denuncia) {
    return this.http.post(`${this.API_URI}/denuncias`, denuncia);
  }

  updateDenuncia(id: string, denuncia: Denuncia) {
    return this.http.put(`${this.API_URI}/denuncias/${id}`, denuncia);
  }

  deleteDenuncia(id: string) {
    return this.http.delete(`${this.API_URI}/denuncias/${id}`);
  }
  
}
