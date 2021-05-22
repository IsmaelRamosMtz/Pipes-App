import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'Ismael';
  nombreUpper: string = 'ISMAEL';
  nombreCompleto: string = 'IsMael rAmOs';

  fecha: Date = new Date(); // El dia de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
