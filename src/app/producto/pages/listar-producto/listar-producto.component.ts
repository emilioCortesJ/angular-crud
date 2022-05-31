import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styles: [
    `
      img.resize {
        width: 150px; /* you can use % */
        height: auto;
      }
    `,
  ],
})
export class ListarProductoComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router) {
  }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos = () => {
    this.productoService.obtenerProductos().subscribe((res) => {
      this.productos = res.resultado;
    });
  };

  eliminarProducto = (id_producto:number) => {
    Swal.fire({
      title: 'Estás seguro de eliminar el producto?',
      showDenyButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.eliminarProducto(id_producto, false).subscribe(res => {
          if(res.ok){
            Swal.fire('Borrado!', '', 'success');    
          } else {
            Swal.fire('Error al Borrar!', '', 'error');
          }
          this.obtenerProductos();
        });
      } else if (result.isDenied) {
        Swal.fire('Cancelado', '', 'info')
      }
    });
  }
}
