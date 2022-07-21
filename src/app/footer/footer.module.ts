import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@NgModule({
  imports: [
    CommonModule,
    MdbRippleModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
