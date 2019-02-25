import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FizzBuzzService } from 'src/app/shared';
import { ApplicationCoreModule } from './core/application-core.module';
import { PageModule } from './pages/page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, ApplicationCoreModule, PageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
