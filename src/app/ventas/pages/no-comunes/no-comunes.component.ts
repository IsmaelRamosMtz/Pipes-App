import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Susana'
  genero: string = 'femenino';

  invitacionObj = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  // i18nPlural
  cliente: string[] =['Maria','Ismael','Fernado','Eduardo'];

  clientesObj = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente() {
    // Elimina el ultimo elemento del arreglo
    this.cliente.pop();
    }
    
    // KeyValue Pipe
    persona = {
      nombre   : 'Ismael',
      edad     : '20',
      direccion: 'Nuevo Leon, Mexico'
    }

    // JSON pipe
    heroes =  [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre: 'Robin',
        vuela: false
      },
      {
        nombre: 'Aquaman',
        vuela: false
      }
    ]

    // Async Pipe
  miObservable = interval(1000); //0,1,2,3,4,5,6

  valorPromesa = new Promise( (resolve, reject) =>{
    setTimeout(() =>{
      resolve('Tenemos data de promesa')
    }, 3500 )  
  });
}
