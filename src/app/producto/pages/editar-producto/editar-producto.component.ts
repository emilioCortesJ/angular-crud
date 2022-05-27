import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styles: [],
})
export class EditarProductoComponent implements OnInit {
  private _id_producto: string = '';
  producto: Producto = {
    id_producto: 0,
    producto: '',
    descripcion: '',
    foto: '',
    estatus: true,
  };

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this._id_producto = params.get('id')!;
        this.obtenerProducto()
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'No se encontró un producto',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
        this._location.back()
      }
    });
  }

  obtenerProducto = () => {
    this.productoService
      .obtenerProducto(parseInt(this._id_producto))
      .subscribe((res) => {
        if (res.ok && res.resultado.length > 0) {
          this.producto = res.resultado[0];
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'No se encontró un producto',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
          this._location.back()
        }
      });
  };

  editarProducto = () => {
    this.productoService.editarProducto(this.producto).subscribe((res) => {
      if (res.ok) {
        Swal.fire({
          title: 'Producto editado!',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });
    this._location.back()
  };
}
