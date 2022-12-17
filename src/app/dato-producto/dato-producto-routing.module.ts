import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatoProductoPage } from './dato-producto.page';

const routes: Routes = [
  {
    path: '',
    component: DatoProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatoProductoPageRoutingModule {}
