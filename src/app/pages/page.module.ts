import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { AngularMaterialModule } from '../shared';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { DiscoverComponent } from './discover/discover.component';
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [
    FizzBuzzComponent,
    PresentationComponent,
    DiscoverComponent,
    PlayComponent
  ],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [
    FizzBuzzComponent,
    PresentationComponent,
    DiscoverComponent,
    PlayComponent
  ]
})
export class PageModule {}
