import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FizzBuzzComponent } from '../pages/fizz-buzz/fizz-buzz.component';
import { PresentationComponent } from '../pages/presentation/presentation.component';
import { DiscoverComponent } from '../pages/discover/discover.component';
import { PlayComponent } from '../pages/play/play.component';

const routes: Routes = [
  { path: '', component: FizzBuzzComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'play', component: PlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
