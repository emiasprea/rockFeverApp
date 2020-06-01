import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//COMPONENTES

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BandaComponent } from './components/banda/banda.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

//RUTAS

import { APP_ROUTING } from './app.routes';

//SERVICIOS

import { BandasService } from './servicios/bandas.service';
import { ArtistasService } from './servicios/artistas.service';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { ArtistaComponent } from './components/artista/artista.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BandasComponent,
    BandaComponent,
    FooterComponent,
    BusquedaComponent,
    ArtistasComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    BandasService,
    ArtistasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
