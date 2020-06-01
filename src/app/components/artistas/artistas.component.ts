import { Component, OnInit } from '@angular/core';
import { ArtistasService, Artista } from '../../servicios/artistas.service';
import { BandasService, Banda } from '../../servicios/bandas.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
})
export class ArtistasComponent implements OnInit {

  artistas:Artista [] = [];
  banda:Banda [] = [];

  constructor( private _artistasService : ArtistasService , private _bandasService : BandasService , private _location : Location) { 
      
  }

  ngOnInit(): void {
    this.artistas = this._artistasService.getArtistas();
  }

  getBandaArtista (idbanda:string){
    return this._bandasService.getBanda(idbanda);
  }

  
  volver(){
    this._location.back();
  }

}
