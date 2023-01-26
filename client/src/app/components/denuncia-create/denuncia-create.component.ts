import { Component, OnInit } from '@angular/core';

import { Denuncia } from '../../models/Denuncia';
import { DenunciasService } from '../../services/denuncias.service';
import { TiposService } from '../../services/tipos.service';
import { ContactosService } from '../../services/contactos.service';

declare var $: any;

@Component({
  selector: 'app-denuncia-create',
  templateUrl: './denuncia-create.component.html',
  styleUrls: ['./denuncia-create.component.css']
})
export class DenunciaCreateComponent implements OnInit {

  denuncia: Denuncia = {
    denuncia: 0,
    nombre: '',
    comentario: '',
    valoracion: 0,
    tipo: 0,
    contacto: 0,
    created_at: new Date()
  }

  tipos: any = [];

  contactos: any = [];

  constructor(private tranlationsService: DenunciasService, private tiposService: TiposService, private contactosService: ContactosService) { }

  ngOnInit(): void {
    this.tiposService.getTipos().subscribe(
      (res: any) => {
        //console.log(res);
        this.tipos = res;
      },
      (err: any) => console.error(err)
    );
    
    this.contactosService.getContactos().subscribe(
      (res: any) => {
        //console.log(res);
        this.contactos = res;
      },
      (err: any) => console.error(err)
    );
  }

  addDenuncia() {
    //console.log(this.denuncia);

    this.denuncia.nombre = this.denuncia.nombre ? this.denuncia.nombre.trim() : this.denuncia.nombre;
    this.denuncia.comentario = this.denuncia.comentario.trim();

    let r: boolean = this.denuncia.tipo == 0 || this.denuncia.contacto == 0 || this.denuncia.comentario == '';
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
    delete this.denuncia.denuncia;
    delete this.denuncia.created_at;

    this.tranlationsService.saveDenuncia(this.denuncia).subscribe(
      (res: any) => {
        //console.log(res);

        $(document).Toasts('create', {
          class: 'bg-success',
          title: 'Denuncia creada',
          autohide: true,
          delay: 3000,
          body: res['message']
        })

      },
      (err: any) => console.error(err)
    );
  }

}
