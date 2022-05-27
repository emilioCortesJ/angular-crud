import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styles: [],
})
export class AgregarProductoComponent implements OnInit {
  producto: Producto = {
    id_producto: 0,
    producto: '',
    descripcion: '',
    foto: '',
    estatus: true,
  };

  constructor(private productoService: ProductoService, private _location: Location) {}

  ngOnInit(): void {}

  agregarProducto = () => {
    this.productoService.agregarProducto(this.producto).subscribe(res => {
      if(res.ok) {
        Swal.fire({
          title: 'Producto agregado!',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this._location.back();
      } else {
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });
  };
}
