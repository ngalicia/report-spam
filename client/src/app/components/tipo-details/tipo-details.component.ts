import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TiposService } from '../../services/tipos.service';

declare var $: any;

@Component({
  selector: 'app-tipo-details',
  templateUrl: './tipo-details.component.html',
  styleUrls: ['./tipo-details.component.css']
})
export class TipoDetailsComponent implements OnInit {

  id: string = '';
  
  tipo: any = {
    tipo: 0,
    nombre: '',
    created_at: new Date()
  }

  constructor(private tiposService: TiposService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    //console.log(params);
    
    this.id = params['id'];

    this.tiposService.getTipo(this.id).subscribe(
      (res: any) => {
        //console.log(res);
        this.tipo = res;
      },
      (err: any) => console.log(err)
    );
  }

  editTipo() {
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

    this.tiposService.updateTipo(this.id, this.tipo).subscribe(
      (res: any) => {
        //console.log(res);

        $(document).Toasts('create', {
          class: 'bg-success',
          title: 'Tipo modificado',
          autohide: true,
          delay: 3000,
          body: res['message']
        })
        
      },
      (err: any) => console.log(err)
    );
  }
}
