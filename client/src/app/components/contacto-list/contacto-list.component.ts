import { Component, OnInit } from '@angular/core';

import { ContactosService } from '../../services/contactos.service';

declare var $: any;

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})
export class ContactoListComponent implements OnInit {

  contactos: any = [];

  constructor(private contactosService: ContactosService) { }

  ngOnInit(): void {
    this.getContactos();
  }

  getContactos() {
    this.contactosService.getContactos().subscribe(
      (res: any) => {
        //console.log(res);
        this.contactos = res;
      },
      (err: any) => console.error(err)
    );
  }

  deleteContacto(id: string) {
    //console.log(id);

    this.contactosService.deleteContacto(id).subscribe(
      (res: any) => {
        //console.log(res);

        $(document).Toasts('create', {
          class: 'bg-success',
          title: 'Contacto eliminado',
          autohide: true,
          delay: 3000,
          body: res['message']
        })

        this.getContactos();
      },
      (err: any) => console.error(err)
    );
  }
  
}
