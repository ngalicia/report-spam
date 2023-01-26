import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  API_URI: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getContactos() {
    return this.http.get(`${this.API_URI}/contactos`);
  }

  getContacto(id: string) {
    return this.http.get(`${this.API_URI}/contactos/${id}`);
  }

  saveContacto(contacto: Contacto) {
    return this.http.post(`${this.API_URI}/contactos`, contacto);
  }

  updateContacto(id: string, contacto: Contacto) {
    return this.http.put(`${this.API_URI}/contactos/${id}`, contacto);
  }

  deleteContacto(id: string) {
    return this.http.delete(`${this.API_URI}/contactos/${id}`);
  }
  
}
