import { Component, OnInit } from '@angular/core';

import { Tipo } from '../../models/tipo';
import { TiposService } from '../../services/tipos.service'

declare var $: any;

@Component({
  selector: 'app-tipo-create',
  templateUrl: './tipo-create.component.html',
  styleUrls: ['./tipo-create.component.css']
})
export class TipoCreateComponent implements OnInit {

  tipo: Tipo = {
    tipo: 0,
    nombre: '',
    created_at: new Date()
  }

  constructor(private tiposService: TiposService) { }

  ngOnInit(): void {
  }

  addTipo() {
    //console.log(this.tipo);

    this.tipo.nombre = this.tipo.nombre.trim();

    let r: boolean = this.tipo.nombre == '';
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
    delete this.tipo.tipo;
    delete this.tipo.created_at;
    
    this.tiposService.saveTipo(this.tipo).subscribe(
      (res: any) => {
        //console.log(res);

        $(document).Toasts('create', {
          class: 'bg-success',
          title: 'Tipo creado',
          autohide: true,
          delay: 3000,
          body: res['message']
        })

      },
      (err: any) => console.error(err)
    );
  }

}
