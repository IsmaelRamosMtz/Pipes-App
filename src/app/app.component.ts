import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre: string = 'isMael rAmOs';
  valor: number = 1000;
  objeto = {
    nombre: 'Ismael'
  }

  mostrarNombre() {
    console.log( this.nombre );
    console.log( this.objeto )
    console.log( this.valor );
  }

  constructor(
    private _primeNgConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this._primeNgConfig.ripple = true; 
  }
}
