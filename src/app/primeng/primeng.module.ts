import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

const primegnModules = [
  CardModule,
  ButtonModule,
  SidebarModule,
]

@NgModule({
  declarations: [],
  imports: [
    primegnModules,
  ],
  exports:[
    primegnModules,
  ]
})
export class PrimengModule { }
