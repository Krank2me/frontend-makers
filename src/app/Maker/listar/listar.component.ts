import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Maker } from '../../Modelo/Maker';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  makers: Maker[];
  constructor(private service: ServiceService, private route: Router) { }

  ngOnInit() {

    this.service.getMakers()
    .subscribe(data => {
      this.makers = data;
    });
  }

  editar(maker: Maker){
    localStorage.setItem('id', maker.id.toString());
    this.route.navigate(['editar']);
  }

  eliminar(maker: Maker) {
    this.service.eliminarMaker(maker)
    .subscribe(data => {
      this.makers = this.makers.filter(mk => mk !== maker);
      alert('Maker eliminado');
    });
  }

}
