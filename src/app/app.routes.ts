import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BandaComponent } from './components/banda/banda.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { ArtistaComponent } from './components/artista/artista.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'bandas', component: BandasComponent },
    { path: 'artistas', component: ArtistasComponent },
    { path: 'banda/:id', component: BandaComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: 'busqueda/:termino', component: BusquedaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES , {useHash:true});