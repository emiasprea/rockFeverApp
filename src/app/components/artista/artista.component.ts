import { Component, OnInit } from '@angular/core';
import { ArtistasService , Artista } from 'src/app/servicios/artistas.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent implements OnInit {

  artista : any = {};

  fotos : any = [];

  constructor( private _artistasService : ArtistasService , private _activatedRoute : ActivatedRoute ,  private _location : Location ) { 

      this._activatedRoute.params.subscribe( params =>{
      this.artista = _artistasService.getArtista(params['id']);
      this.fotos = _artistasService.getFotos(params['id']);
      console.log(this.artista);
      console.log(this.fotos);
    } )


  }

  ngOnInit(): void {
  }

  volver(){
    this._location.back();
  }

}
