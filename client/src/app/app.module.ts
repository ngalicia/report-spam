import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TipoListComponent,
    TipoCreateComponent,
    TipoDetailsComponent,
    ContactoListComponent,
    ContactoCreateComponent,
    ContactoDetailsComponent,
    DenunciaListComponent,
    DenunciaCreateComponent,
    DenunciaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
