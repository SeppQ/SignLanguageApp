import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegConfirmPageRoutingModule } from './reg-confirm-routing.module';

import { RegConfirmPage } from './reg-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegConfirmPageRoutingModule
  ],
  declarations: [RegConfirmPage]
})
export class RegConfirmPageModule {}
