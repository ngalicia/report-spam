import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TipoListComponent } from './components/tipo-list/tipo-list.component';
import { TipoCreateComponent } from './components/tipo-create/tipo-create.component';
import { TipoDetailsComponent } from './components/tipo-details/tipo-details.component';
import { ContactoListComponent } from './components/contacto-list/contacto-list.component';
import { ContactoCreateComponent } from './components/contacto-create/contacto-create.component';
import { ContactoDetailsComponent } from './components/contacto-details/contacto-details.component';
import { DenunciaListComponent } from './components/denuncia-list/denuncia-list.component';
import { DenunciaCreateComponent } from './components/denuncia-create/denuncia-create.component';
import { DenunciaDetailsComponent } from './components/denuncia-details/denuncia-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tipos',
    component: TipoListComponent
  },
  {
    path: 'tipo/add',
    component: TipoCreateComponent
  },
  {
    path: 'tipo/edit/:id',
    component: TipoDetailsComponent
  },
  {
    path: 'contactos',
    component: ContactoListComponent
  },
  {
    path: 'contacto/add',
    component: ContactoCreateComponent
  },
  {
    path: 'contacto/edit/:id',
    component: ContactoDetailsComponent
  },
  {
    path: 'denuncias',
    component: DenunciaListComponent
  },
  {
    path: 'denuncia/add',
    component: DenunciaCreateComponent
  },
  {
    path: 'denuncia/edit/:id',
    component: DenunciaDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
