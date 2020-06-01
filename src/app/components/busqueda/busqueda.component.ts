import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandasService,Banda } from '../../servicios/bandas.service';
import { ArtistasService,Artista } from '../../servicios/artistas.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {

  bandas:any = [];
  artistas:any = [];
  terminoBuscado:string;

  constructor(private _activatedRoute: ActivatedRoute , private _bandasService: BandasService , private _artistasService: ArtistasService , private _location : Location) {

    this._activatedRoute.params.subscribe(params=>{
      this.terminoBuscado = params['termino'];
      this.bandas = _bandasService.getBusqueda(params['termino']);
      this.artistas = _artistasService.getBusqueda(params['termino']);
    })

   }

  ngOnInit(): void {
  }

  volver(){
    this._location.back();
  }

}
