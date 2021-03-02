import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  textoLower    : string = 'fernando';
  textoUpper     : string = 'FERNANDO';
  nombreCompleto: string = 'FerNando rOsaLes';

  fecha: Date = new Date();
  
}
