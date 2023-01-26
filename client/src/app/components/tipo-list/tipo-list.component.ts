import { Component, OnInit } from '@angular/core';

import { TiposService } from '../../services/tipos.service';

declare var $: any;

@Component({
  selector: 'app-tipo-list',
  templateUrl: './tipo-list.component.html',
  styleUrls: ['./tipo-list.component.css']
})
export class TipoListComponent implements OnInit {

  tipos: any = [];

  constructor(private tiposService: TiposService) { }

  ngOnInit(): void {
    this.getTipos();
  }

  getTipos(){
    this.tiposService.getTipos().subscribe(
      (res: any) => {
        //console.log(res);
        this.tipos = res;
      },
      (err: any) => console.error(err)
    );
  }

  deleteTipo(id: string){
    //console.log(id);

    this.tiposService.deleteTipo(id).subscribe(
      (res: any) => {
        //console.log(res);

        $(document).Toasts('create', {
          class: 'bg-success',
          title: 'Tipo eliminado',
          autohide: true,
          delay: 3000,
          body: res['message']
        })

        this.getTipos();
      },
      (err: any) => console.log(err)
    );
  }

}
