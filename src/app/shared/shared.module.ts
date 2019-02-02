import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './modules';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    HttpClientModule,
    RouterModule,
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [
    // directive
    // pipe
    // dialog
    // component
  ],
  exports: [
    CommonModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule
    // directive
    // pipe
    // component
  ],
  entryComponents: []
})
export class SharedModule {}
