import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InformacionPersonalComponent } from './componentes/informacion-personal/informacion-personal.component';
import { PerfilProfesionalComponent } from './componentes/perfil-profesional/perfil-profesional.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InformacionPersonalComponent,
    PerfilProfesionalComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
