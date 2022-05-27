import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './pages/listar-producto/listar-producto.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AgregarProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    ListarProductoComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
  ],
})
export class ProductoModule {}
