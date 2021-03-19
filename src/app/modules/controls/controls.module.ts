import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const components = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...components
  ],
  exports: [...components]
})
export class ControlsModule { }
