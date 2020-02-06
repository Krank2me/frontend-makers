import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Maker } from '../../Modelo/Maker';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  maker: Maker = new Maker();
  constructor(private route: Router, private service: ServiceService) { }

  ngOnInit() {
    this.editar();
  }

  editar() {
    let id = localStorage.getItem('id');
    this.service.getMakerById(+id)
    .subscribe(data => {
      this.maker = data;
    });
  }

  actualizar(maker: Maker){
    this.service.updateMaker(maker)
    .subscribe(data => {
      this.maker = data;
      alert('Maker actualizado con exito');
      this.route.navigate(['listar']);
    });
  }

}
