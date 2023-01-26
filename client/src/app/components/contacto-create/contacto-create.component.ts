import { Component, OnInit } from '@angular/core';

import { Contacto } from '../../models/contacto';
import { ContactosService } from '../../services/contactos.service';

declare var $: any;

@Component({
  selector: 'app-contacto-create',
  templateUrl: './contacto-create.component.html',
  styleUrls: ['./contacto-create.component.css']
})
export class ContactoCreateComponent implements OnInit {

  contacto: Contacto = {
    contacto: 0,
    codigo: '',
    numero: '',
    created_at: new Date()
  }

  tipos: any = [];

  constructor(private contactosService: ContactosService) { }

  ngOnInit(): void {
  }

  addContacto() {
    //console.log(this.contacto);

    this.contacto.codigo = this.contacto.codigo.trim();
    this.contacto.numero = this.contacto.numero.trim();
    
    let r: boolean = this.contacto.codigo == '' || this.contacto.numero == '';
    if (r) {
      
      $(document).Toasts('create', {
        class: 'bg-warning',
        title: 'Campos requeridos',
        autohide: true,
        delay: 3000,
        body: `Llenar todos los campos requeridos`
      })

      return;
    }

    // Eliminar los atributos porque los inserta la DB automaticamente
    delete this.contacto.contacto;
    delete this.contacto.created_at;

    this.contactosService.saveContacto(this.contacto).subscribe(
      (res: any) => {
        //console.log(res);

        $(document).Toasts('create', {
          class: 'bg-success',
          title: 'Contacto creado',
          autohide: true,
          delay: 3000,
          body: res['message']
        })

      },
      (err: any) => console.error(err)
    );
  }
  
}
