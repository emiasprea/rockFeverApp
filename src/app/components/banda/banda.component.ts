import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandasService,Banda } from '../../servicios/bandas.service';
import { ArtistasService, Artista } from '../../servicios/artistas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
})
export class BandaComponent implements OnInit {

  banda:any = {};
  artistas:Artista[] = []; 

  constructor( private _activatedRoute: ActivatedRoute , private _bandasService: BandasService, private _artistasService: ArtistasService , private _location : Location) {

      this._activatedRoute.params.subscribe( params =>{
        this.banda = _bandasService.getBanda(params['id']);
        this.artistas = _artistasService.getArtistasDeBanda(this.banda['id']);
      } )

   }

  volver(){
    this._location.back();
  }

  ngOnInit(): void {
  }

}
