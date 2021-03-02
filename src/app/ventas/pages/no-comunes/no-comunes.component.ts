import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //118nSelect
  nombre: string = 'Fernanda';
  genero: string = 'femenino';

  mapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes = [
    'Fernando',
    'Francisco',
    'Karla',
    'pedro'
  ]

  clientesMapa = {
    '=0' : 'Actualmente no tenemos clientes esperando',
    '=1' : 'Actualmente hay un cliente esperando',
    'other' : 'Actualmente tenemos # clientes esperando' 
  }

  borrarCliente() {
    this.clientes.pop();
    console.log(this.clientes);
    
  }
  cambiarCliente() {
    this.nombre = 'Fernando';
    this.genero = 'masculino';
  }

  //keyValuePipe

  persona = {
    nombre: 'Fernando',
    edad: 24,
    ciudad: 'Villanueva'
  };

  //JSON PIPE

  heroes = [
    {
      nombre: 'Superman',
      vuela : true 
    },
    {
      nombre: 'Batman',
      vuela : false 
    },
    {
      nombre: 'Wonder Woman',
      vuela : true
    }
  ];

  //ASYNC pipe

  miObservable = interval(1000);
}
