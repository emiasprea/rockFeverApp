import { Component, OnInit } from '@angular/core';
import { BandasService, Banda } from '../../servicios/bandas.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
})
export class BandasComponent implements OnInit {

  bandas:Banda[] = []; 
  

  constructor( private _bandasService: BandasService  //private router : Router 
    ) {

          

   }

  ngOnInit(): void {

    this.bandas = this._bandasService.getBandas();
    console.log(this.bandas);
  }

  // buscarBanda(termino:string){
  //   this.router.navigate(['busqueda',termino]);
  // }

}
