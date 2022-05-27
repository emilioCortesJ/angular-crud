import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './producto/pages/listar-producto/listar-producto.component';
import { AgregarProductoComponent } from './producto/pages/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './producto/pages/editar-producto/editar-producto.component';

const routes: Routes = [
  {
    path: '',
    component: ListarProductoComponent,
    pathMatch: 'full'
  },
  {
    path: 'agregar',
    component: AgregarProductoComponent
  },
  {
    path: 'editar/:id',
    component: EditarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'ignore'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
