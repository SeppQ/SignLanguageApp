import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegConfirmPage } from './reg-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: RegConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegConfirmPageRoutingModule {}
