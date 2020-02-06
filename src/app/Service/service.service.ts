import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Maker } from '../Modelo/Maker';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/backendmakers/makers';

  getMakers() {
    return this.http.get<Maker[]>(this.url);
  }

  crearMaker(maker: Maker) {
    return this.http.post<Maker>(this.url, maker);
  }

  getMakerById(id: number) {
    return this.http.get<Maker>(this.url + "/" +id);
  }

  updateMaker(maker: Maker){
    return this.http.put<Maker>(this.url + "/" + maker.id, maker);
  }

  eliminarMaker(maker: Maker) {
    return this.http.delete<Maker>(this.url + "/" + maker.id);
  }
}
