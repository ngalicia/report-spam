import { Component, OnInit } from '@angular/core';

import { DenunciasService } from '../../services/denuncias.service';

declare var $: any;

@Component({
  selector: 'app-denuncia-list',
  templateUrl: './denuncia-list.component.html',
  styleUrls: ['./denuncia-list.component.css']
})
export class DenunciaListComponent implements OnInit {

  denuncias: any = [];

  constructor(private denunciasService: DenunciasService) { }

  ngOnInit(): void {
    this.getDenuncias();
  }

  getDenuncias() {
    this.denunciasService.getDenuncias().subscribe(
      (res: any) => {
        //console.log(res);
        this.denuncias = res;
      },
      (err: any) => console.error(err)
    );
  }

  deleteDenuncia(id: string) {
    //console.log(id);

    this.denunciasService.deleteDenuncia(id).subscribe(
      (res: any) => {
        //console.log(res);

        $(document).Toasts('create', {
          class: 'bg-success',
          title: 'Denuncia eliminada',
          autohide: true,
          delay: 3000,
          body: res['message']
        })

        this.getDenuncias();
      },
      (err: any) => console.error(err)
    );
  }
  
}
