import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl: string = "https://crud-productos-prueba.herokuapp.com/producto";

  constructor(private http: HttpClient) { }

  obtenerProductos = (): Observable<any> => {
    return this.http.get(`${this.apiUrl}/get`);
  }

  obtenerProducto = (id_producto:number): Observable<any> => {
    return this.http.get(`${this.apiUrl}/get?id_producto=${id_producto}`);
  }

  agregarProducto = (producto: Producto): Observable<any> => {
    return this.http.post(`${this.apiUrl}/add`, producto);
  }

  editarProducto = (producto: Producto): Observable<any> => {
    return this.http.post(`${this.apiUrl}/edit`, producto);
  }

  eliminarProducto = (id_producto: number, estatus: boolean): Observable<any> => {
    return this.http.post(`${this.apiUrl}/status`, {id_producto, estatus});
  }
}
