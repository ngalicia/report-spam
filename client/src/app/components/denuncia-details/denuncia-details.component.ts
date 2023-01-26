import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DenunciasService } from '../../services/denuncias.service';
import { TiposService } from '../../services/tipos.service';
import { ContactosService } from '../../services/contactos.service';

declare var $: any;

@Component({
  selector: 'app-denuncia-details',
  templateUrl: './denuncia-details.component.html',
  styleUrls: ['./denuncia-details.component.css']
})
export class DenunciaDetailsComponent implements OnInit {

  id: string = '';
  
  denuncia: any = {
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

  constructor(private denunciasService: DenunciasService, private tiposService: TiposService, private contactosService: ContactosService, private activatedRoute: ActivatedRoute) { }

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

    const params = this.activatedRoute.snapshot.params;
    //console.log(params);

    this.id = params['id'];

    this.denunciasService.getDenuncia(this.id).subscribe(
      (res: any) => {
        //console.log(res);
        this.denuncia = res;
      },
      (err: any) => console.log(err)
    );
  }

  editDenuncia() {
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
    delete this.denuncia.id;
    delete this.denuncia.created_at;

    this.denunciasService.updateDenuncia(this.id, this.denuncia).subscribe(
      (res: any) => {
        //console.log(res);

        $(document).Toasts('create', {
          class: 'bg-success',
          title: 'Denuncia modificada',
          autohide: true,
          delay: 3000,
          body: res['message']
        })

      },
      (err: any) => console.error(err)
    );
  }

}
