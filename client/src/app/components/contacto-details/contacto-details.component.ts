import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactosService } from '../../services/contactos.service';

declare var $: any;

@Component({
  selector: 'app-contacto-details',
  templateUrl: './contacto-details.component.html',
  styleUrls: ['./contacto-details.component.css']
})
export class ContactoDetailsComponent implements OnInit {

  id: string = '';
  
  contacto: any = {
    contacto: 0,
    codigo: '',
    numero: '',
    created_at: new Date()
  }

  tipos: any = [];

  constructor(private contactosService: ContactosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    //console.log(params);

    this.id = params['id'];

    this.contactosService.getContacto(this.id).subscribe(
      (res: any) => {
        //console.log(res);
        this.contacto = res;
      },
      (err: any) => console.log(err)
    );
  }

  editContacto() {
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

    this.contactosService.updateContacto(this.id, this.contacto).subscribe(
      (res: any) => {
        //console.log(res);

        $(document).Toasts('create', {
          class: 'bg-success',
          title: 'Contacto modificado',
          autohide: true,
          delay: 3000,
          body: res['message']
        })
        
      },
      (err: any) => console.error(err)
    );
  }

}
