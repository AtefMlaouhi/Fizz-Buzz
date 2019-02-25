import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './modules';
import { AnalyseNumberComponent } from './components/analyse-number/analyse-number.component';
import { FizzBuzzService } from './services';
import { NumbersComponent } from './components/numbers/numbers.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
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
    AnalyseNumberComponent,
    NumbersComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    // directive
    // pipe
    // component
    AnalyseNumberComponent,
    NumbersComponent
  ],
  entryComponents: [],
  providers: [FizzBuzzService]
})
export class SharedModule {}
