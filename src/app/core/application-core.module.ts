import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [CommonModule, AngularMaterialModule, CoreRoutingModule],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    MainComponent,
    HomeComponent
  ]
})
export class ApplicationCoreModule {}
