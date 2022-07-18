import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MdbCollapseModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
