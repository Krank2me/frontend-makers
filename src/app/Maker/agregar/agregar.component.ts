import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Maker } from '../../Modelo/Maker';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  guardar(maker: Maker) {
    this.service.crearMaker(maker)
    .subscribe(data => {
      alert('Maker agregado con exito! ');
      this.router.navigate(['listar']);
    });
  }
}
